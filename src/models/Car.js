import { Schema, model } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const CarSchema = new Schema(
  {
    objectId: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    model: {
      type: String,
    },
    isRent: {
      type: Boolean,
    },
    seat: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Car = model('Cars', CarSchema);

export default Car;
