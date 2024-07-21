const express = require('express');
const db = require('./config/database.js');
const cors = require('cors');

const app = express()
db.connect();
app.use(express.json());

let origins = ['*']

app.use(cors({
	credentials:true,
	origins: origins
}));

const auth_routes = require('./routes/auth.route.js');
const user_routes = require('./routes/user.route.js');
const meal_routes = require('./routes/meal.route.js');
const record_routes = require('./routes/record.route.js');

const {AUTHENTICATE_TOKEN} = require('./token.verifier.middleware.js');
app.set('trust proxy', true);

app.use('/api/auth',auth_routes);
app.use('/api/user',user_routes);
app.use('/api/meal',meal_routes);
app.use('/api/record',record_routes);

app.get('/',(req,res)=>{
	res.send('Hello This is DIACARE server page!! Good Luck!!:)');
})

module.exports = app;
