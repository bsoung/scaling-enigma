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
            state.results = response.data.children.map(function(child) {
                var package = {};
                package.title = child.data.title;
                package.url = child.data.url;
                return package;
            })
            activateRandomBubbles();
        }
    })
}

function dropDown() {

    $(".dropdown-menu li a").click(function() {

        $(".btn-option:first-child").text($(this).text());
        $(".btn-option:first-child").val($(this).text());
        selectMode();
    });
};

function selectMode() {
    var chosen;
    if ($(".btn-option:first-child").text() === "All Time") {
        chosen = "all";
    } else if ($(".btn-option:first-child").text() === "Last Year") {
        chosen = "year";
    } else if ($(".btn-option:first-child").text() === "Last Month") {
        chosen = "month";
    } else {
        chosen = "hour";
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
        return dynamicDuo;
    }
}

//temporary fix to go back to first page
$('.navbar-brand').on('click', function() {
    $('.initial_page').show();
    $('.results_page').hide();
    $('.bubble-text').hide();
    state.results = [];
})







//activate our random bubbles
function activateRandomBubbles() {

    // makeDivOne("thought-bubble-one");
    // makeDivTwo("thought-bubble-two");
    // makeDivThree("thought-bubble-three");
    // makeDivFour("thought-bubble-four");
    // makeDivFive("thought-bubble-five");
    // makeDivSix("thought-bubble-six");

    (function makeDivOne() {
        var randomResult = randomChoice();
        var randomSentence = randomResult.title;
        var sentenceURL = randomResult.url;

        //randomize size and color of our bubbles
        var divsize = ((Math.random() * 200) + 150).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);

        //create new div ready to be used later
        $newdiv = $('<div class="thought-bubble-one bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        $newdiv.mouseenter(function() {
            $(this).addClass('circle-style');
            $(this).addClass('hvr-bounce-in');
            
        })

        $newdiv.mouseleave(function() {
          $(this).removeClass('circle-style');
          $(this).removeClass('hvr-bounce-in')
        })   

        //randomize x and y coordinates of our bubble minus divsize from total
        //document size so we don't go out of bounds
        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        //randomize the fade in and fade out times for our bubble
        var fadeInTime = Math.floor((Math.random() * 1000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 5000);

        //Check to see if results is showing otherwise stop function
        if ($('.results_page').is(':visible')) {

            //assign our css the randomized attributes
            $newdiv.css({
               
                'border-radius': '100%',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'none'
                    //then append to some part of our body
            }).appendTo('body').fadeIn(fadeInTime).delay(1).fadeOut(fadeOutTime, function() {

                //remove any old created divs
                $(this).remove();

                $(this).mouseenter(function() {
                    // console.log($(this));
                    console.log(9999);

                })


            });

        };
        // $(".thought-bubble-one").html("'<p>Hello!</p>'");

        $(".thought-bubble-one").html('<a href="' + sentenceURL + '" target="_blank"><p class="hover-style">' + randomSentence + "</p></a>");





    })();

    (function makeDivTwo() {
        var randomResult = randomChoice();
        var randomSentence = randomResult.title;
        var sentenceURL = randomResult.url;

        var divsize = ((Math.random() * 200) + 150).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-two bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 1000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 5000);


        $newdiv.mouseenter(function() {
            $(this).addClass('circle-style');
            $(this).addClass('hvr-bounce-in');
            
        })

        $newdiv.mouseleave(function() {
          $(this).removeClass('circle-style');
          $(this).removeClass('hvr-bounce-in')
        })  

        if ($('.results_page').is(':visible')) {

            $newdiv.css({
               
                'border-radius': '100%',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'none'
            }).appendTo('body').fadeIn(fadeInTime).delay(1).fadeOut(fadeOutTime, function() {

                $(this).remove();

                makeDivTwo();


            });

            $(".thought-bubble-two").html('<a href="' + sentenceURL + '" target="_blank"><p class="hover-style">' + randomSentence + "</p></a>");

        };

    })();

    (function makeDivThree() {
        var randomResult = randomChoice();
        var randomSentence = randomResult.title;
        var sentenceURL = randomResult.url;

        var divsize = ((Math.random() * 200) + 150).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-three bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        $newdiv.mouseenter(function() {
            $(this).addClass('circle-style');
            $(this).addClass('hvr-bounce-in');
            
        })

        $newdiv.mouseleave(function() {
          $(this).removeClass('circle-style');
          $(this).removeClass('hvr-bounce-in')
        })  


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 1000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 5000);

        if ($('.results_page').is(':visible')) {

            $newdiv.css({
              
                'border-radius': '100%',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'none'
            }).appendTo('body').fadeIn(fadeInTime).delay(1).fadeOut(fadeOutTime, function() {

                $(this).remove();

                makeDivThree();

            });

            $(".thought-bubble-three").html('<a href="' + sentenceURL + '" target="_blank"><p class="hover-style">' + randomSentence + "</p></a>");

            $(".thought-bubble-three").mouseenter(function() {
                // console.log($(this));
                $(".thought-bubble-three hover-style").css('z-index', 9999);

            });
        };

    })();

    (function makeDivFour() {
        var randomResult = randomChoice();
        var randomSentence = randomResult.title;
        var sentenceURL = randomResult.url;

        var divsize = ((Math.random() * 200) + 150).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-four bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        $newdiv.mouseenter(function() {
            $(this).addClass('circle-style');
            $(this).addClass('hvr-bounce-in');
            
        })

        $newdiv.mouseleave(function() {
          $(this).removeClass('circle-style');
          $(this).removeClass('hvr-bounce-in')
        }) 


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 1000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 5000);

        if ($('.results_page').is(':visible')) {

            $newdiv.css({
              
                'border-radius': '100%',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'none'
            }).appendTo('body').fadeIn(fadeInTime).delay(1).fadeOut(fadeOutTime, function() {

                $(this).remove();

                makeDivFour();

            });

            $(".thought-bubble-four").html('<a href="' + sentenceURL + '" target="_blank"><p class="hover-style">' + randomSentence + "</p></a>");

            
        };

    })();

    (function makeDivFive() {
        var randomResult = randomChoice();
        var randomSentence = randomResult.title;
        var sentenceURL = randomResult.url;

        var divsize = ((Math.random() * 200) + 150).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div class="thought-bubble-five bubble-text"/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        $newdiv.mouseenter(function() {
            $(this).addClass('circle-style');
            $(this).addClass('hvr-bounce-in');
            
        })

        $newdiv.mouseleave(function() {
          $(this).removeClass('circle-style');
          $(this).removeClass('hvr-bounce-in')
        }) 


        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        var fadeInTime = Math.floor((Math.random() * 1000) + 500);
        var fadeOutTime = Math.floor((Math.random() * 8000) + 5000);

        if ($('.results_page').is(':visible')) {

            $newdiv.css({
    
                'border-radius': '100%',
                'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'none'
            }).appendTo('body').fadeIn(fadeInTime).delay(1).fadeOut(fadeOutTime, function() {

                $(this).remove();

                makeDivFive();

            });

            $(".thought-bubble-five").html('<a href="' + sentenceURL + '" target="_blank"><p class="hover-style">' + randomSentence + "</p></a>");

            
        };

    })();


}


/** create our bubbles **/