import bcryptjs from 'bcryptjs';
import mongoose, { Mongoose } from 'mongoose';


const users = [
  {
    name : 'Admin User',
    email : 'adminUser@test.com',
    password: bcryptjs.hashSync('12134', 10),
    isAdmin: true
  },
  {
    name : 'John Doe',
    email : 'john.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
      zres44: false
  },
  {
    name : 'Jane Doe',
    email : 'jane.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
    isAdmin: false
  },
  {
    name : 'Jake Doe',
    email : 'jake.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
    isAdmin: false
  }
];

export default users;