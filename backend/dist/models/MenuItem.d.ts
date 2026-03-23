import mongoose, { Document } from "mongoose";
export interface IMenuItem extends Document {
    name: string;
    price: number;
    menuId: mongoose.Types.ObjectId;
}
declare const _default: mongoose.Model<IMenuItem, {}, {}, {}, mongoose.Document<unknown, {}, IMenuItem, {}, mongoose.DefaultSchemaOptions> & IMenuItem & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IMenuItem>;
export default _default;
//# sourceMappingURL=MenuItem.d.ts.map