exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var fs = require("fs");
var axios = require("axios");

var init_search = function() {
  this.bands_in_town = function(band) {
    console.log("Searching for concert");
    var URL = ("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp");
    axios.get(URL).then(
      function(response) {
        var band_info = [
          "Venue name: " + response.data.VenueData.name,
          "Venue location: " + response.data.VenueData.city
        ].join("\n\n");

        console.log(band_info);

        fs.appendFile("log.txt", band_info, function(error) {
          if (error) {
              return console.log(error);
            }
          console.log('saved data');
        });
      }
    )
  }
  
  this.spotify = function(song) {
    console.log("Searching for song");
    var URL = ("");
    axios.get(URL).then(
      function(response) {
        var song_info = [
          "Artist: " + response.data.artist,
          "Song: " + response.data.song,
          "Preview Link: " + response.data.previewLink,
          "Album: " + response.data.album
        ].join("\n\n");

        console.log(song_info);

        fs.appendFile("log.txt", song_info, function(error) {
          if (error) {
              return console.log(error);
            }
          console.log('saved data');
        });
      }
    )
  }

  this.omdb = function(movie) {
    console.log("Searching for movie");
    var URL = ("");
    axios.get(URL).then(
      function(response) {
        var movie_info = [
          "Title: " + response.data.title,
          "Year: " + response.data.year,
          "Rotten Tomatoes: " + response.data.rt,
          "Country: " + response.data.country,
          "Language: " + response.data.language,
          "Plot: " + response.data.plot,
          "Actors: " + response.data.actors,
        ].join("\n\n");

        console.log(movie_info);

        fs.appendFile("log.txt", movie_info, function(error) {
          if (error) {
              return console.log(error);
            }
          console.log('saved data');
        });
      }
    )
  }
}

module.exports = init_search;