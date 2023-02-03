import mongoose from "mongoose";

const orderschema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        program: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'programs',
        },
      },
    ],
    billingInfo: {
      name: { type: String},
      address: { type: String },
      address: { type: String },
      city: { type: String},
      state: { type: String},
      zipCode: { type: String},
      country: { type: String},
      
    },
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    confirmedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
})

const Order = mongoose.model('Order', orderschema);
export default Order;