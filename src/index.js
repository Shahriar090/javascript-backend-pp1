import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});
app.get("/", (req, res) => {
  res.send("App is running ");
});
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Back-End Server Is Running on port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed", error);
  });
