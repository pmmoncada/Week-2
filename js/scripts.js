$('#red-button').on('click', function() {
  $('body').css('background', '#CC0000');
  alert('Why did the invisible student fail the class? Because he was always marked absent!:P ');
});

$('#blue-button').on('click', function() {
  $('body').css('background', '#003CB3');
  alert(' Sorry, You are now a pigeon, Good Luck! ');
});

$('#orange-button').on('click', function() {
  $('body').css('background', '#FFB319');
  alert('You Ran 186,282 miles per second! AMAZIN!');
});

$('#purple-button').on('click', function() {
  $('body').css('background', '#7500C4');
  alert('Wow! You are Intangible');
});


$('#alertButton').on('click', function() {
	alert('The more you weigh the harder you are to kidnap. Stay safe, eat cake');
});

$(".powers").on("click", ".powers-header", function() {
 $(this).toggleClass("active").next().slideToggle();
});

$('.tony').on('click', function() {
  $('#avenger-info').text('The engineer we all want to be. He graduated from MIT at the age of 21 and with multiple degrees.');
});

$('.hulk').on('click', function() {
  $('#avenger-info').text('Bruce Banner has more PhDs (7), than there were Avengers left after Infinity Wars');
});

$('.captain').on('click', function() {
  $('#avenger-info').text('His Birthday is the 4th of July.');
});

$('.thor').on('click', function() {
  $('#avenger-info').text("Supercan cann't lift Thor's hammer.");
});

$('.natasha').on('click', function() {
  $('#avenger-info').text("Before being a hero she was a super soviet soldier");
});

$('.clint').on('click', function() {
  $('#avenger-info').text("He does not have any supernatural powers, but he has a super ability to accurately project any weapon he chooses.");
});
