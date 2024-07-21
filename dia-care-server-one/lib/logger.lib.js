const winston = require('winston');
const { combine, timestamp, label, prettyPrint, colorize } = winston.format;
require('dotenv').config();

const logger = winston.createLogger({
    format: combine(
        label({ label: 'development' }),
        timestamp(),
        prettyPrint(),
        colorize()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        //new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.Console(),
        //new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
    ],
    //transports: [new LogtailTransport(logtail)],
});

module.exports = logger;

