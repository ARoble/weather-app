const request = require("request");

const forecast = (lon, lat, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=6f30d5230edb9901e48deb90f2857056&units=metric";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.weather[0].main + " It is currently " + body.main.temp
      );
    }
  });
};

module.exports = forecast;
