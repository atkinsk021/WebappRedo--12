import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';

//CONNECT TO THE DATABASE
dotenv.config();

if (process.env.NODE_ENV === 'test') {

  //USE MOCKGOOSE FOR THE TESTS
    const mockgoose=new Mockgoose(mongoose);
    mockgoose.prepareStorage().then(()=>{
      mongoose.connect(process.env.mongoDB);
    });
  } else {
    //USE ACTUAL MONGOOSE FOR THE REST
    mongoose.connect(process.env.mongoDB);
  }
  
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`database connection error: ${err}`);
});
db.on('disconnected', () => {
    console.log('database disconnected');
});
db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
})