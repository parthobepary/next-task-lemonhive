require("../../../database/init");
import DataModel from "../../../database/dataModel";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      const datas = await DataModel.find({});
      res.json(datas);
      break;
    case "POST":
      const body = req.body;
      const result = await DataModel.create(body);
      res.json(result);
      break;
    default:
      res.json({ error: "Method not allowed" });
      break;
  }
};
export default handler;
