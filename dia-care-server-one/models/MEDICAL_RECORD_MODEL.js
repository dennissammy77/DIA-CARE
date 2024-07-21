const mongoose = require('mongoose');
const { Schema } = mongoose;

const RECORD_MODEL_SCHEMA = new mongoose.Schema({
	date:					{ type: Date },
	glucose:				{ value: Number, diagnosis: String},
	diastolic:				{ value: Number, diagnosis: String},
	systolic:				{ value: Number, diagnosis: String},
	user_model_ref:			{ type: mongoose.Schema.Types.ObjectId, ref: 'USER'}
},{timestamps:true});

const RECORD_MODEL = mongoose.model('RECORD', RECORD_MODEL_SCHEMA);

module.exports = { 
	RECORD_MODEL
};
