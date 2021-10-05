import express from "express";
import { dummyNow } from "./dummyNow";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/now", (req, res) => {
  res.json({
    data: dummyNow,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
