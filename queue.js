// queue.js
const { Queue } = require('bullmq');
const { Redis } = require('ioredis');

// Redis connection
const connection = new Redis({host: "redis-13929.c56.east-us.azure.redns.redis-cloud.com",
  port: 13929,password:'qT5yPW1Y78aHSDLurwRVhQPfhaOwh71X',username: 'default'  });

const myQueue = new Queue('emailQueue', {
  connection
});

module.exports = myQueue;
