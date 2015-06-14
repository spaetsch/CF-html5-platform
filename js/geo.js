// Primary function for the Geo location app
function success(position) {
  // create a simple variable for the ID

  var s = document.querySelector('#geostatus');

  if (s.className == 'success') {
    return;
  }

  // Replaces text with new message
  s.innerHTML = "Found you!";
  // Adds new class to the ID status block
  s.className = 'success';


  // creates the block element at sets the width and height
  var mapcanvas = document.createElement('div');
  // Adds ID to the new div
  mapcanvas.id = 'mapcanvas';
  // sets width and height
  mapcanvas.style.height = '600px';
  mapcanvas.style.width = '1000px';


  // Adds the new block element as the last thing within the article block
  document.querySelector('.map').appendChild(mapcanvas);

  // creates a new variable 'latlng' off of the google maps object
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  // create new variable that contains options in key:value pairs
  var myOptions = {
    zoom: 15,
    center: latlng,
    // ROADMAP is set by default, other options are HYBRID, SATELLITE and TERRAIN
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // creates the new 'map' variable using the google object
  // then using the 'mapcanvas' ID appending the options
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

  // creates new 'marker' variable
  var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });
}

// Function that displays the error message
function error(msg) {

  // sets simple variable to the status ID
  var s = document.querySelector('#geostatus');
  // designates typ eof message and passes in value
  s.innerHTML = typeof msg == 'string' ? msg : "Sorry, but I can't locate you?";
  s.className = 'fail';
}


// statement that tests for device functionality
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
  console.log("here");
  console.log(success);
  console.log(position)
} else {
  error('not supported');
}
