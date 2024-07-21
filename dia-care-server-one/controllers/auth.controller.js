const logger = require('../lib/logger.lib');
const { CLIENT, ACCOUNT_STATUS } = require('../models/ACCOUNT_MODELS.js');
const HASH_PASSWORD_FUNC = require('../middlewares/hash.handler.middleware.js');
const { AUTH_TOKEN_GENERATOR } = require('../token.handler.middleware.js');
const bcrypt = require('bcryptjs');

const NEW_ACCOUNT = (async(req, res)=>{
	let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];
	const payload = req.body;

	{/**Create and save user to the db */}
	try{
		// Check if user already exists
		const _QUERY = { email: payload?.email }
        const EXISTING_ACCOUNT = await CLIENT.findOne(_QUERY);
		if (EXISTING_ACCOUNT){
            logger.log('info',`${ip} - ${EXISTING_ACCOUNT?.first_name} Account already exists`);
            return res.status(404).send({error:null,message:'Error: Account already exists'});
        };

		const HASHED_PASSWORD = HASH_PASSWORD_FUNC(payload?.password);

		const NEW_CLIENT = await CLIENT.create({
			name:				payload?.name,
			email:				payload?.email,
			age:				payload?.age,
			mobile:				payload?.mobile,
			password:			HASHED_PASSWORD,
			account_type:		'patient'
		});
		await CREATE_ACCOUNT_STATUS(NEW_CLIENT);
		logger.log('info',`${ip} - ${payload?.name} Created an Account.`);

		const AUTH_TOKEN = AUTH_TOKEN_GENERATOR(NEW_CLIENT); // Generated token is sent to the user.
		return res.status(200).json({
			token:	AUTH_TOKEN,
			error:null,
			message:'sign up successful'
		});
	}catch(err){
        logger.log('error',`${ip} - System Error: Creating a new account for ${payload?.first_name}, Tel:${payload?.mobile}, Email:${payload?.email}`,err)
        return res.sendStatus(500);
	}
});

const CREATE_ACCOUNT_STATUS=async(USER)=>{
	try{
		const NEW_ITEM = await ACCOUNT_STATUS.create({
			client_ref:					USER?._id,
			suspension:					{ 
											status: false,
											reason: '',
										},
			approval:					{	status: true},
			deletion:					{ 
											status: false,
											reason: '',
										},
			email:						{	status: false, notification: true},
			sms:						{	status: false, notification: true},
			push:						{	status: false, notification: true},
		});

		const id = USER?._id;
		const query = {_id:id};
		const updateClient = {
			account_status_ref: NEW_ITEM?._id
		}
		await CLIENT.updateOne(query,updateClient)
	}catch(err){
		logger.log('error',`Failed to create user account status schema and update user details`,err)
		return err;
	}
}

const SIGNED_IN_USER=(async(req,res)=>{
    let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];
    try{
        console.log(req.body)
		const _QUERY = {email: req.body.email};
        const EXISTING_ACCOUNT = await CLIENT.findOne(_QUERY);
        
		if (!EXISTING_ACCOUNT){
            return res.status(200).send({error:true,message:'This Email does not have an existing account, try signing up'});
		};

        if (EXISTING_ACCOUNT?.account_status_ref?.suspension?.status){
            return res.status(200).send({error:true,message:'Your account has been suspended! You did not follow our company guidelines.'});
        };

        
        if(bcrypt.compareSync(req.body?.password, EXISTING_ACCOUNT?.password)){
            // Check if user's account has been verified, suspended or deleted
		    const AUTH_TOKEN = AUTH_TOKEN_GENERATOR(EXISTING_ACCOUNT); // Generated token is sent to the user.
            logger.log('info',`${ip} - ${EXISTING_ACCOUNT?.name} signed in`);
            
			return res.status(200).json({
                token:AUTH_TOKEN,
                error:null,
                message:'sign in successful',
            });
        };
        return res.status(200).send({error:null,message:'Wrong credentials, Email or password was wrong'});
    }catch(err){
        logger.log('error',`${ip} - System Error[on sign in]`,err);
        return res.status(500).send('Error: system error');
    }
});



module.exports = {
	NEW_ACCOUNT,
	SIGNED_IN_USER
}
