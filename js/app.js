$(document).ready(function(){
  getJson("https://www.reddit.com/r/travel/search.json?q=flair%3AImages+tropical&sort=relevance&restrict_sr=on&t=all");

})

function getJson(url) {
  $.ajax({
    type: "GET",
    url: url,
    success: function(response){
      console.log(response.data.children[0].data.title);
    }
  })
}

$('form').submit(function(e){
  e.preventDefault();
  $('.initial_page').hide();
  $('.results_page').show();
  console.log("submitted");
})
