const express = require("express");
var cors = require('cors')
const app = express();
var path = require("path");
const indexRoutes = require("./routes");
const weatherRoutes = require("./routes/weather");
const profileRoutes = require("./routes/profileRoutes");
app.use(cors())
app.set("port", 8080);
app.set("ip", "0.0.0.0");

/* app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world from node",
  });
}); */
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
app.use("/weather", weatherRoutes);
app.use("/profile", profileRoutes);

app.get("*", (req, res) => {
  return res.send("error 404, page not found");
});

app.listen(process.env.PORT || app.get("port"), app.get("ip"), (err) => {
  if (err) {
    throw Error;
  } else {
    console.log("hello world server is running on port 8080");
  }
});
