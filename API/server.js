import app from "./app.js";
import mongodbConnection from "./config/mongodb.js";
import dotenv from "dotenv";

dotenv.config(); 

const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  await mongodbConnection();
  console.log(`Server is running at http://localhost:${PORT}`);
});
