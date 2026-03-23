import mongoose, { Document } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  price: number;
  menuId: mongoose.Types.ObjectId;
}

const menuItemSchema = new mongoose.Schema<IMenuItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
}, { timestamps: true });

export default mongoose.model<IMenuItem>("MenuItem", menuItemSchema);