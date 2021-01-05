import { Schema, model } from 'mongoose';

// const {
//   Types: { ObjectId },
// } = Schema;

const CarSchema = new Schema(
  {
    objectId: {
      type: String,
    },
    brand: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    model: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
    },
    seat: {
      type: Number,
    },
    age: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    ac: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Car = model('Cars', CarSchema);

export default Car;
