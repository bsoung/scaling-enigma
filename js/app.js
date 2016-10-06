$(document).ready(function() {
    searchItem();
    dropDown();
})

//receive our JSON data
function getJson(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function(response) {
          response.data.children.forEach(function(child) {
            var package = {};
            package.title = child.data.title;
            package.url = child.data.url;
            state.results.push(package);
          })
          activateRandomBubbles();
        }
    })
}

function dropDown() {

    $(".dropdown-menu li a").click(function(){

      $(".btn-option:first-child").text($(this).text());
      $(".btn-option:first-child").val($(this).text());
       selectMode();
   });
  };

function selectMode() {
  var chosen;
      if ($(".btn-option:first-child").text() === "Fresh") {
        chosen = "hour";
      } else if ($(".btn-option:first-child").text() === "Recent") {
        chosen = "month";
      } else if ($(".btn-option:first-child").text() === "Old") {
        chosen = "year";
      } else {
        chosen = "all";
      }
    return chosen;
}

function searchItem() {
    $('form').submit(function(e) {
    e.preventDefault();
    var searchTerm;
    var chosenMode = selectMode();
    console.log(chosenMode);
    searchTerm = $("input").val();
    getJson("https://www.reddit.com/r/all/search.json?q=" + searchTerm + "&sort=relevance&t=" + chosenMode);
    $('.initial_page').hide();
    $('.results_page').show();
    })
  }

function randomChoice() {

  var randomIndex = Math.floor(Math.random() * state.results.length);
  if (state.results.length > 0) {
    var dynamicDuo = state.results[randomIndex];
    LAST_NUMBER = randomIndex;
    return dynamicDuo;
  }
}

//temporary fix to go back to first page
$('.navbar-brand').on('click', function() {
  $('.initial_page').show();
  $('.results_page').hide();
  state.results = [];
})

//activate our random bubbles
function activateRandomBubbles() {
    (function makeDiv() {
      var randomSentence = randomChoice().title;
      var sentenceURL = randomChoice().url;

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

        $(".thought-bubble-one").html("<a href=" + sentenceURL + 'target="_top"><p>' + randomSentence + "</p></a>");
    })();

    (function makeDiv() {
        var randomSentence = randomChoice().title;
        var sentenceURL = randomChoice().url;
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

          $(".thought-bubble-two").html("<a href=" + sentenceURL + 'target="_top"><p>' + randomSentence + "</p></a>");

        };

    })();

    (function makeDiv() {
      var randomSentence = randomChoice().title;
      var sentenceURL = randomChoice().url;
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

          $(".thought-bubble-three").html("<a href=" + sentenceURL + 'target="_top"><p>'  + randomSentence + "</p></a>");

        };

    })();

    (function makeDiv() {
      var randomSentence = randomChoice().title;
      var sentenceURL = randomChoice().url;
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

          $(".thought-bubble-four").html("<a href=" + sentenceURL + 'target="_top"><p>'  + randomSentence + "</p></a>");

        };

    })();



}


