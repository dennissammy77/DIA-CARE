const { CLIENT } = require('../models/ACCOUNT_MODELS');
const logger = require('../lib/logger.lib');

const FETCH_USER_DATA=(async(req,res)=>{
    const USER_ID = req.query.user_id;
    let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];
    try{
		const EXISTING_ACCOUNT = await CLIENT.findOne(_QUERY).populate({path:'sessions',populate:''}).populate('records').exec();

		if (!EXISTING_ACCOUNT){
            logger.log('info','Account does not exist');
            return res.status(404).send({error:null,message:'Error: Account does not exist'});
        };

        return res.status(200).send({
            error:null,
            data:EXISTING_ACCOUNT
        });
    }catch(error){
        logger.log('error',`${ip} - System Error-[Fetching user details, id:${id}]`)
        return res.sendStatus(500);
    }
});

module.exports={
	FETCH_USER_DATA
}
