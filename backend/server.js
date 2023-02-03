import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import programRoutes from './routes/programRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'

const app = express();
dotenv.config();
connectDB();

//routes
app.use(express.json());
app.use('/api/programs', programRoutes);
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})
  


const PORT = 8800 | process.env.PORT;
app.listen(PORT, console.log(`Server is running on port: ${PORT}`));