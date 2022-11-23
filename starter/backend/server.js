const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { readdirSync } = require("fs"); //thats y dont need fs to write

const app = express();
/*const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};

let allowed = ["http://localhost:3000", "some othe rlink"];
function options(req, res) {
  let temp;
  let origin = req.header("Origin");
  if (allowed.indexOf(origin) > -1) {
    temp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    temp = {
      origin: "stupid",
    };
  }
  res(null, temp);
}

app.use(cors(options));
app.get("/", (req, res) => {
  res.send("welcome from home");
});*/
app.use(express.json());

app.use(cors());

/*const useRoutes = require("./routes/user");

app.use("/", useRoutes);*/

//route
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r))); //iterate route directory

//database
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to the mongodb", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
