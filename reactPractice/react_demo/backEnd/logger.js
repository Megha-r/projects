import winston from 'winston';
import debug  from 'util';

const level = process.env.LOG_LEVEL || 'debug';

export const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: level,
            colorize: true,
            timestamp: function () {
                return (new Date()).toDateString();
            }
        })
    ]
});


 