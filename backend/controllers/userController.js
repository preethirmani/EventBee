import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateWebToken from '../utils/generateToken.js';
import transporter from '../utils/generateEmail.js';


const authenticateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({'email': req.body.email});

  if(user && (await user.matchPassword(req.body.password))) {
    res.json ({
      _id : user._id,
      name: user.name,
      email : user.email, 
      isAdmin : user.isAdmin,
      token : generateWebToken(user._id)

    })
  } else {
    res.status(401)
    throw new error('Invalid email or Password!');
  }

})

const registerUser = asyncHandler(async (req, res) => {
  console.log('Register User called')
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    console.log('user.email::'+user.email);
    let email = {
      from: 'info.eventbee@gmail.com',
      to: user.email,
      subject:'Registered Suuccessfully!',
      html:'<h1>Welcome to Photoshare!!!</h1>'

    };
    transporter.sendMail(email, function(err, info){
      if(err) {
        console.log(err);
      }
    })
  
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateWebToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const getUserProfile = (req, res) => {
  res.json({message: 'Success'});
}

export {authenticateUser, getUserProfile, registerUser}