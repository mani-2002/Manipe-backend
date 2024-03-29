const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/routes");

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://manipe.vercel.app/"],
//     methods: ["POST", "PUT", "GET", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
