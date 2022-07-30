const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyqq8Ntn5atCjPzP" }).base(
  "appAASadxF8rghEQx"
);

export default async (req, res) => {
  if (req.method === "GET") {
    const records = await base("Table 1").select({}).all();
    res.status(200).json(records);
  }
};
