import { Schema, model } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const CarSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
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
    category: {
      type: ObjectId,
      ref: 'Category',
      maxlength: true,
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
    photo: {
      data: Buffer,
      contentType: String,
    },
    ac: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Car = model('Cars', CarSchema);

export default Car;
