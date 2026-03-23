import mongoose, { Document } from "mongoose";

export interface IMenu extends Document {
  name: string;
  description?: string;
  parentId?: mongoose.Types.ObjectId | null;
}

const menuSchema = new mongoose.Schema<IMenu>({
  name: { type: String, required: true },
  description: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", default: null },
}, { timestamps: true });

export default mongoose.model<IMenu>("Menu", menuSchema);