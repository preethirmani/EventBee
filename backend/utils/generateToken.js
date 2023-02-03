import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

const generateWebToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET_KEY, {
    expiresIn : '10d' }
  )
}

export default generateWebToken;