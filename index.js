import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log("server running at ", port);
});
