const { CLIENT } = require("../models/ACCOUNT_MODELS");
const { MEAL_SESSION_MODEL, MEAL_MODEL } = require("../models/MEALS_MODELS");

const SAVE_RECORD = async(req, res)=>{
    let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];

    const payload = req.body;
    const USER_ID = req.query.user_id;
	const _QUERY = { _id: USER_ID }

	const EXISTING_ACCOUNT = await CLIENT.findOne(_QUERY);

	if (!EXISTING_ACCOUNT){
		logger.log('info','Account does not exist');
        return res.status(404).send({error:null,message:'Error: Account does not exist'});
    };

	try {
		const RECORD_ITEM = await RECORD_MODEL.create({
			date:		new Date(Date.now()),
			glucose:	{ value: payload?.glucose?.value, diagnosis: payload?.glucose?.diagnosis },
			diastolic:	{ value: payload?.diastolic?.value, diagnosis: payload?.diastolic?.diagnosis },
			systolic:	{ value: payload?.systolic?.value, diagnosis: payload?.systolic?.diagnosis },
			user_model_ref: USER_ID	
		})
		EXISTING_ACCOUNT?.records.push(RECORD_ITEM?._id);
		EXISTING_ACCOUNT?.save();

		return res.status(200).json({error:null,message:'created successfully'});
        
    } catch (error) {
        logger.log('error',`${ip} - System Error-[creating new meal session`);
        return res.sendStatus(500);   
    }
}

const FETCH_RECORDS = async(req, res)=>{
	const USER_ID = req.query.user_id;
	const RECORDS = await RECORD_MODEL?.find({user_model_ref: USER_ID});
	return res.status(200).json({error:null,data:RECORDS,message:'fetched successfully'});
}

module.exports = {
	SAVE_RECORD,
	FETCH_RECORDS
}
