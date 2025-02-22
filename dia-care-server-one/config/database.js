const mongoose = require('mongoose');
const logger = require('../lib/logger.lib');
require('dotenv').config();

const user_name = process.env.MONGODB_USER
const user_pswd = process.env.MONGODB_PSWD
const user_cluster = process.env.MONGODB_CLUSTER
let URI = `mongodb+srv://${user_name}:${user_pswd}@${user_cluster}.gachklg.mongodb.net/test?retryWrites=true&w=majority` || 'mongodb://localhost:27017/dia_care';

exports.connect=()=>{
	mongoose.connect(
		URI
	).then(()=>{
		logger.log('info',`db connected succssfully`);
		console.log('db connected succssfully')
	}).catch((err)=>{
		logger.log('error',`error while connecting the database`);
		console.log(err);
		return err;
	})
}
