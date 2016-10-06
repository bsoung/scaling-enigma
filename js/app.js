$(document).ready(function() {
  searchItem();
})
var GLOBAL = "Hi";


//receive our JSON data
function getJson(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function(response) {
          response.data.children.forEach(function(child) {
            state.results.push(child.data.title);
          })
          activateRandomBubbles();
        }
    })
}

function searchItem() {
  $('form').submit(function(e) {
    e.preventDefault();
    var searchTerm;
    searchTerm = $("input").val();
    getJson("https://www.reddit.com/r/all/search.json?q=" + searchTerm + "&sort=relevance&t=all");
    $('.initial_page').hide();
    $('.results_page').show();

    console.log(searchTerm);
  })
}

var LAST_NUMBER = 0;
function randomChoice() {
  var sentence;
  var randomIndex = Math.floor(Math.random() * state.results.length);
  if (randomIndex != LAST_NUMBER) {
    sentence = state.results[randomIndex];
    LAST_NUMBER = randomIndex;
  }
  return sentence;
}

//temporary fix to go back to first page
$('.navbar-brand').on('click', function() {
  $('.initial_page').show();
  $('.results_page').hide();

})

//activate our random bubbles
function activateRandomBubbles() {
    (function makeDiv() {
      var randomSentence = randomChoice();

      //randomize size and color of our bubbles
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);

        //create new div ready to be used later
        $newdiv = $('<div class="thought-bubble-one bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        //randomize x and y coordinates of our bubble minus divsize from total
        //document size so we don't go out of bounds
        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        //randomize the fade in and fade out times for our bubble
        var fadeInTime = Math.floor((Math.random() * 3000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 6000) + 3000);

        //Check to see if results is showing otherwise stop function
        if($('.results_page').is(':visible')) {

          //assign our css the randomized attributes
          $newdiv.css({
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
              //then append to some part of our body
          }).appendTo('body').fadeIn(fadeInTime).delay(10).fadeOut(fadeOutTime, function() {

              //remove any old created divs
              $(this).remove();

              //recursively call our function again to continue making bubbles
              makeDiv();


          });

        };

        $(".thought-bubble-one").html('<p>' + randomSentence + '</p>');
    })();

    (function makeDiv() {
        var randomSentence = randomChoice();
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-two bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 3000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 6000) + 3000);

        if($('.results_page').is(':visible')) {

          $newdiv.css({
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
          }).appendTo('body').fadeIn(fadeInTime).delay(10).fadeOut(fadeOutTime, function() {

              $(this).remove();

              makeDiv();


          });

          $(".thought-bubble-two").html("<p>" + randomSentence + "</p>");

        };

    })();

    (function makeDiv() {
      var randomSentence = randomChoice();
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-three bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });




        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 3000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 6000) + 3000);

        if($('.results_page').is(':visible')) {
          console.log("visible")

          $newdiv.css({
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
          }).appendTo('body').fadeIn(fadeInTime).delay(10).fadeOut(fadeOutTime, function() {

              $(this).remove();

              makeDiv();

          });

          $(".thought-bubble-three").html("<p>" + randomSentence + "</p>");

        };

    })();

    (function makeDiv() {
      var randomSentence = randomChoice();
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-four bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });




        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 3000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 6000) + 3000);

        if($('.results_page').is(':visible')) {
          console.log("visible")

          $newdiv.css({
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
          }).appendTo('body').fadeIn(fadeInTime).delay(10).fadeOut(fadeOutTime, function() {

              $(this).remove();

              makeDiv();

          });

          $(".thought-bubble-four").html("<p>" + randomSentence + "</p>");

        };

    })();



}


