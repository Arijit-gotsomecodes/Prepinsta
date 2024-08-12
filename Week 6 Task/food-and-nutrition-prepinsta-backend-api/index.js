const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const port = 3200;

env.config();

app.use(express.json());
app.use(cors());
require("./db/conn");

const food = require("./model/foodinfo");

app.get("/", async (req, res) => {
  try {
    const getfood = await food.find({});
    res.status(201).send(getfood);
  } catch (error) {
    res.status(400).json({ error: "Internal server Error " });
  }
});

app.post("/postfood", async (req, res) => {
  try {
    const insertData = await food.create(req.body);
    console.log("Created Menranking instance:", insertData);
    res.status(201).send(insertData);
  } catch (error) {
    res.status(400).json({ error: "Internal server Error " });
  }
});

app.delete("/foods/:food_item_name", async (req, res) => {
  const food_item_name = req.params.food_item_name;
  try {
    const deleteRecord = await food.findOneAndDelete({ food_item_name });
    if (!deleteRecord) {
      return res.status(400).send({ error: "food not found" });
    }
    res.status(200).json(deleteRecord);
  } catch (error) {
    console.log(error);
  }
});

app.put("/foods/:food_item_name", async (req, res) => {
  const food_item_name = req.params.food_item_name;
  try {
    const updateRecord = await food.findOneAndUpdate(
      { food_item_name: food_item_name },
      req.body,
      { new: true }
    );
    if (!updateRecord) {
      return res.status(400).send({ error: "Food not found" });
    }
    res.status(200).json(updateRecord);
  } catch (error) {
    console.log(error);
    res.status.json({ error: "internal server Error" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
