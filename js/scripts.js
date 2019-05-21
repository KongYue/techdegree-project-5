lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  showImageNumberLabel: false,
  fadeDuration: 200,
  alwaysShowNavOnTouchDevices: true
});

//*************Use plugin to hook up search function****************
// $("#search").hideseek({
//   attribute: "data-value"
// });

// **************** To get extra credit   ***************
// First try to get the value of the search field whenever a user types in that field, and log
// that value to the screen with a console.log() statement. Checkout the keyup event
// listener for this. And be sure to make the value case insensitive by using something like
// the toLowerCase() method.
// Next, start trying to target the entire caption by using the getAttribute() method, then
// looping and logging the all lowercase version of the captions to the console.
// Next comes the fun part. Start trying to find ways to check if the current value of the
// search input is included within any of the captions, and if so, log the associated image
// to the console.
// Lastly, use a conditional so that if there's a match, display the container of the image,
// and if not, hide it . Piece of cake!

// set global scoop for entire lis that contain all the name ,title and captions, because this is also
// used for people search by delete charactor

var entire_li = $(".list li");

// keyup -The keyup event occurs when a keyboard key is released

$(".searchbar input").keyup(function() {
  var type_input = $(this)
    .val()
    .toLowerCase();
  var response_result = search_result(type_input);
  $(".list").html(response_result.join(""));
});

// This function user provide input value, will return an array including all the match li html element.

function search_result(input) {
  var return_results = [];
  entire_li.each(function() {
    var caption = $(this).attr("data-value");
    var checkresult = caption.toLowerCase().indexOf(input);
    if (checkresult == -1) {
      return_results.push("");
    } else {
      return_results.push(
        '<li data-value="' + caption + '">' + $(this).html() + "</li>"
      );
    }
  });
  return return_results;
}
