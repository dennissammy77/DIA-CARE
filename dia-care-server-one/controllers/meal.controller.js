const { CLIENT } = require("../models/ACCOUNT_MODELS");
const { MEAL_SESSION_MODEL, MEAL_MODEL } = require("../models/MEALS_MODELS");

const SAVE_MEAL = async(req, res)=>{
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
		
		const NEW_MEAL_SESSION = await MEAL_SESSION_MODEL.create({
			date:  new Date(Date.now()),
		})	

		let MEAL_ITEM_ARRAY= [];
		
		for(let i = 0; i <= payload?.data?.length; i++){
			MEAL_ITEM_ARRAY.push({
					title: payload?.data[i]?.title,
					description: payload?.data[i]?.description,
					type:	payload?.data[i]?.type,
					carbs:	payload?.data[i]?.carbs,
					vitamins:	payload?.data[i]?.vitamins,
					proteins:	payload?.data[i]?.proteins,
					session_id:	NEW_MEAL_SESSION?._id
				})
		}

		let CREATED_MEAL_ITEM_ARRAY=[];

		for(let i = 0; i <= MEAL_ITEM_ARRAY?.length; i++){
			const CREATED_MEAL_ITEM = await MEAL_MODEL.create(MEAL_ITEM_ARRAY[i]);
			CREATED_MEAL_ITEM_ARRAY.push(CREATED_MEAL_ITEM?._id);
		}

		NEW_MEAL_SESSION?.meals.push(CREATED_MEAL_ITEM_ARRAY);
		NEW_MEAL_SESSION.save();

		EXISTING_ACCOUNT?.sessions?.push(NEW_MEAL_SESSION);
		EXISTING_ACCOUNT?.save();

		return res.status(200).json({error:null,message:'created successfully'});
        
    } catch (error) {
        logger.log('error',`${ip} - System Error-[creating new meal session`);
        return res.sendStatus(500);   
    }
}

const FETCH_MEAL_SESSION=async(req,res)=>{
	const USER_ID = req.query.user_id;
	const MEAL_SESSIONS = await MEAL_SESSION_MODEL.find({user_model_ref: USER_ID});
	return res.status(200).json({error:null,data: MEAL_SESSIONS,message:'fetched successfully'});
}

module.exports = {
	SAVE_MEAL,
	FETCH_MEAL_SESSION
}
