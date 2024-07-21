const mongoose = require('mongoose');
const { Schema } = mongoose;

const CLIENT_SCHEMA = new mongoose.Schema({
	name:						{ type: String },
	email:						{ type: String , unique:true },
	age:						{ type: Number },
	mobile:						{ type: String , unique:true },
	password:					{ type: String},
	account_type:				{ type: String }, // physician or patient
	account_status_ref:			{ type: mongoose.Schema.Types.ObjectId, ref: "ACCOUNT_STATUS"}, // handles the status of the account i.e suspension, approval, verification, deletion
	sessions:					[{type: mongoose.Schema.Types.ObjectId, ref:'MEAL_SESSION'}],
	records:					[{type: mongoose.Schema.Types.ObjectId, ref:'RECORD'}],
	notifications:				[{ type: mongoose.Schema.Types.ObjectId, ref: "NOTIFICATION" }],
},{timestamps:true});

const ACCOUNT_STATUS_SCHEMA = new Schema({
	client_ref:					{ type: mongoose.Schema.Types.ObjectId, ref: "CLIENT"}, // gets the ref to the client schema
	suspension:					{ status: Boolean, reason: String, date: Date},
	approval:					{ status: Boolean },
	deletion:					{ status: Boolean, reason: String, date: Date},
	// notification status
	email:						{ status: Boolean, notification: Boolean },
	sms:		                { status: Boolean, notification: Boolean},
	push:		                { status: Boolean, notification: Boolean },
}, {timestamps: true});


const CLIENT = mongoose.model('CLIENT',CLIENT_SCHEMA);
const ACCOUNT_STATUS = mongoose.model('ACCOUNT_STATUS', ACCOUNT_STATUS_SCHEMA);

module.exports = {
	CLIENT,
	ACCOUNT_STATUS
}
