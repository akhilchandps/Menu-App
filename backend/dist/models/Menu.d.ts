import mongoose, { Document } from "mongoose";
export interface IMenu extends Document {
    name: string;
    description?: string;
    parentId?: mongoose.Types.ObjectId | null;
}
declare const _default: mongoose.Model<IMenu, {}, {}, {}, mongoose.Document<unknown, {}, IMenu, {}, mongoose.DefaultSchemaOptions> & IMenu & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IMenu>;
export default _default;
//# sourceMappingURL=Menu.d.ts.map