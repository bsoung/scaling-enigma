$(document).ready(function() {
    getJson("https://www.reddit.com/r/all/search.json?q=funny&sort=relevance&t=all");

})

//receive our JSON data
function getJson(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function(response) {
            console.log(response.data.children);
        }
    })
}

//submit the search form
$('form').submit(function(e) {
    e.preventDefault();
    $('.initial_page').hide();
    $('.results_page').show();
    activateRandomBubbles();
    console.log("submitted");
})

//temporary fix to go back to first page
$('.navbar-brand').on('click', function() {
  $('.initial_page').show();
  $('.results_page').hide();
  
}) 



//activate our random bubbles
function activateRandomBubbles() {
    
    (function makeDiv() {

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
        var fadeInTime = Math.floor((Math.random() * 2000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 4000) + 500);
        
        //Check to see if results is showing otherwise stop function
        if($('.results_page').is(':visible')) {

          //assign our css the randomized attributes
          $newdiv.css({
              'opacity':'0.5',
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
              //then append to some part of our body
          }).appendTo('body').fadeIn(fadeInTime).delay(50).fadeOut(fadeOutTime, function() {
              
              //remove any old created divs
              $(this).remove();

              //recursively call our function again to continue making bubbles
              makeDiv();
              

          });

        };

        $(".thought-bubble-one").html("<p>Here's an idea!</p><p>Connect with other ideas!</p>");
    })();

    (function makeDiv() {
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-two bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 4000) + 2000);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 3000);
        
        if($('.results_page').is(':visible')) {

          $newdiv.css({
              'opacity':'0.5',
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
          }).appendTo('body').fadeIn(fadeInTime).delay(1000).fadeOut(fadeOutTime, function() {
              
              $(this).remove();
             
              makeDiv();
              

          });
          
          $(".thought-bubble-two").html("<p>Here's another idea!</p><p>Connect with other ideas!</p>");

        };

    })();

    (function makeDiv() {
        var divsize = ((Math.random() * 100) + 200).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-three bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

       


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor(Math.random() * 2000);
        var fadeOutTime = Math.floor(Math.random() * 4000);
        
        if($('.results_page').is(':visible')) {
          console.log("visible")

          $newdiv.css({
              'opacity':'0.5',
              'border': '1px solid white',
              'border-radius': '100%',
              'position': 'absolute',
              'left': posx + 'px',
              'top': posy + 'px',
              'display': 'none'
          }).appendTo('body').fadeIn(fadeInTime).delay(50).fadeOut(fadeOutTime, function() {
              
              $(this).remove();
              
              makeDiv();
              
          });

          $(".thought-bubble-three").html("<p>Random idea!</p><p>Connect with other ideas!</p>");

        };

    })();

    

}


