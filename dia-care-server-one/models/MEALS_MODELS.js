const mongoose = require('mongoose');
const { Schema } = mongoose;

const MEAL_MODEL_Schema = new mongoose.Schema({
    tile:                   { type: String},
    description :           { type: String},
    type:					{ type: String},
    carbs:		            { type: Number},
	vitamins:		        { type: Number},
	proteins:	            { type: Number},
	session_id:				{ type: mongoose.Schema.Types.ObjectId, ref: "Store"},
},{timestamps:true});

const MEAL_SESSION_MODEL_Schema = new Schema({
	date:				{ type: Date},
	user_model_ref:		{ type: mongoose.Schema.Types.ObjectId, ref: 'CLIENT' },
	meals:				[{type: mongoose.Schema.Types.ObjectId, ref: 'MEAL'}]
});

const MEAL_MODEL = mongoose.model('MEAL', MEAL_MODEL_Schema);
const MEAL_SESSION_MODEL = mongoose.model('MEAL_SESSION', MEAL_SESSION_MODEL_Schema);

module.exports = { 
	MEAL_MODEL,
	MEAL_SESSION_MODEL
};
