import * as mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number
});

export default mongoose.model("product", productSchema);
