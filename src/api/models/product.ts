import * as mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true }
});

export default mongoose.model("product", productSchema);
