import { model, Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: { type: String, trim: true, unique: true, maxlength: 32 },
  },
  { timestamps: true },
);

const Category = model('category', categorySchema);

export default Category;
