// worker.js
const { Worker } = require('bullmq');
console.log('worker started')
const Redis = require('ioredis');
const { SMTPClient } = require('emailjs');
const client = new SMTPClient({
  user: 'moizzakir87@gmail.com',
  password: 'gxjr axsz ipen kzfn', // or real password (not safe in prod)
  host: 'smtp.gmail.com',
  ssl: true,
});
const connection = new Redis({host: "redis-13929.c56.east-us.azure.redns.redis-cloud.com",
  port: 13929,password:'qT5yPW1Y78aHSDLurwRVhQPfhaOwh71X',maxRetriesPerRequest:null});




const worker = new Worker(
  'emailQueue',
  async (job) => {
    // const { to, subject, text } = job.data;
    console.log('hello world')

    await client.sendAsync({
      text:'hello world 3',
      from: 'moizzakir87@gmail.com  ',
      to:'moizaptech128@gmail.com',
      subject:"for testing bullmq and redis",
    });

    console.log(`✅ Email sent to `);
  },
  {
   connection,
  }
);  



worker.on('completed', job => {
  console.log(`Job ${job.id} completed!`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error ${err}`);
});



// const worker = new Worker('myQueueName', async job => {
//   console.log(`Processing job ${job.id} with data:`, job.data);
//   // Simulate a task
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   console.log(`Finished job ${job.id}`);
// }, {
//   connection
// });

// worker.on('completed', job => {
//   console.log(`Job ${job.id} completed!`);
// });

// worker.on('failed', (job, err) => {
//   console.error(`Job ${job.id} failed with error ${err.message}`);
// });
