var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }
  var dataArr = data.split(",");

  var dwis_song = dataArr[1];

var user_input = process.argv.slice(3).join(" ");

if (process.argv[2] === "concert-this") {
    init_search.bands_in_town(user_input);
}

else if (process.argv[2] === "spotify-this-song") {
    if (user_input === "") {
        user_input = "The Sign";
    }
    init_search.spotify(user_input);
}

else if (process.argv[2] === "movie-this") {
    if (user_input === "") {
        user_input = "Mr. Nobody";
    }
    init_search.omdb(user_input);
}

else if (process.argv[2] === "do-what-it-says") {
    init_search.spotify(dwis_song);
}