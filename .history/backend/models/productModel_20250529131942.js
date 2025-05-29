import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  brand: String,
  category: String,
  description: String,
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
