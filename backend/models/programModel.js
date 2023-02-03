import mongoose, { mongo, Mongoose } from "mongoose";


const programSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
   date: {
    type: String,
    required: true
  },
   time: {
    type: String,
   
  },
   location: {
    type: String,
    required: true
  },
   price: {
    type: Number,
    required: true,
    default : 0
  },
   rating: {
    type: Number,
    required : true,
    default : 0
  },
   numReviews : {
    type: Number,
    required: true,
    default: 0
  },
   seatsAvailable: {
    type: Number
  },
   category: {
    type: String
  },
   about: {
    type: String
  },
  duration: {
    type: String
  }
}, {
  timeStamps : true
});

const Program = mongoose.model('programs',programSchema );
export default Program;