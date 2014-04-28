var crypto = require('crypto');
var util = require('util');

var URLBOX = function(url, options) {

  var apiKey = process.env.urlbox_key || "your-api-key";
  var apiSecret = process.env.urlbox_secret || "your-api-secret";

  var encodedUrl = encodeURIComponent(url);
  var queryString = "url=" + encodedUrl;

  if(options.width){

    queryString += "&width=" + options.width;
  }
  if( options.height){

    queryString += "&height=" + options.height;
  }
  if(options.full_page){
    queryString += "&full_page=" + options.full_page;
  }

  if (options.force) {

    queryString += "&force=" + options.force;
  }

  var token = crypto.createHmac("sha1", apiSecret).update(queryString).digest("hex")


  var constructedUrl = util.format('https://api.urlbox.io/v1/%s/%s/png?%s', apiKey, token, queryString);

  console.log(constructedUrl);

  return constructedUrl;

}

module.exports = URLBOX;
