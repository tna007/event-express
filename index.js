const express = require("express");
const app = express();
var path = require('path');
const indexRoutes = require("./routes");
const profileRoutes = require("./routes/profileRoutes");

app.set("port", 8080);
app.set("ip", "0.0.0.0");

/* app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world from node",
  });
}); */
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRoutes);
app.use("/profile", profileRoutes);

app.get("*", (req, res) => {
  return res.send("error 404, page not found");
});

app.listen(app.get("port"), app.get("ip"), (err) => {
  if (err) {
    throw Error;
  } else {
    console.log("hello world server is running on port 8080");
  }
});
