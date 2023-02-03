import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateWebToken from '../utils/generateToken.js';


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

const getUserProfile = (req, res) => {
  res.json({message: 'Success'});
}

export {authenticateUser, getUserProfile}