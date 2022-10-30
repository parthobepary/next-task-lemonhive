import { model, models, Schema } from "mongoose";

const DataSchema = Schema({
    content: {type: String, required: true}
});

const DataModel = models.Data || model("Data", DataSchema);
export default DataModel;