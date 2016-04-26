(function ($) {
// ALL YOUR CODE GOES AFTER THIS LINE!  Don't delete the very final line, though!


  // First step - listen for when the Search Button (indicated by the class 'search-button') is clicked
  $('.search-button').click(function(){

    // remove any already-existing results from results-area
    $('.results-area .movie-result').remove();


    // if the search button was clicked, store the text from the search box
    // in a variable.
    var searchtext = '';
    searchtext = $('.search-box').val();

    // now, run the function runSearch using the value from the search box
    runSearch(searchtext);

  });

// don't get rid of this line!
}(jQuery));


// Our search function
function runSearch(userText){
  var encodedText;
  encodedText = encodeURIComponent(userText);
  $.getJSON("http://www.omdbapi.com/?s=" + encodedText + "&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      console.log(movie);
      //document.write(movie.Title);

      var theAppend = "";
      // first, wrap the result in a div.  we can use this div to style each result
      theAppend = theAppend + '<div class="movie-result">';
      // set the movie title to have an H3, and include the year the movie was released
      // you can style the title by using .movie-result h3; you can style the year by using .movie-result .year
      theAppend = theAppend + '  <h3> ' + movie.Title + ' <span class="year">(' + movie.Year + ')</span></h3>';
      // now add the image
      theAppend = theAppend + '  <div class="image"><img src="'+ movie.Poster +'" class="movie-logo"></div>';
      // now add the IMDB link
      theAppend = theAppend + '  <p class=""><a href="http://www.imdb.com/title/'+ movie.imdbDB + '">Get more information on IMDB</a></p>';
      // and close the .movie-result div
      theAppend = theAppend + '</div>';

      // now that we've built our output, we can append it!
      $('.results-area').append(theAppend);
    });
  });
}
