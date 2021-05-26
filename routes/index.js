var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

/* GET Events page. */
router.get("/events", async function (req, res, next) {
  let jsonResponse = await getDataFromOpenAPI("events");
  res.json(jsonResponse);
});

/* GET Activities page. */
router.get("/activities", async function (req, res, next) {
  let jsonResponse = await getDataFromOpenAPI("activities");
  res.json(jsonResponse);
});

function getDataFromOpenAPI(type) {
  let URL = "";
  switch (type) {
    case "events":
      URL =
        "http://open-api.myhelsinki.fi/v1/events/?language_filter=en&limit=20";
      break;
    case "activities":
      URL =
        "http://open-api.myhelsinki.fi/v1/activities/?language_filter=en&limit=5";
      break;

    default:
      break;
  }
  return fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
}

module.exports = router;
