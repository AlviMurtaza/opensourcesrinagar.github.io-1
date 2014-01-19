// $(function() {

//   'use strict';

//   var $navBar = $('nav');

//   // If touchscreen listen for touch, if not listen for click
//   var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

//   // Toggle the nav menu list when the user clicks the nav menu button
//   $('.menu').on(hitEvent, function () {
//     $navBar.toggleClass('nav-show');
//   });

//   $('.content').on(hitEvent, function(event) {
//     if ($navBar.hasClass('nav-show')) {
//       $navBar.removeClass('nav-show');
//     }
//   });
// });

var map = new L.Map('map', {
  center: [34.0680246,74.8344129],
  zoom: 16
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

L.tileLayer('http://census.sparkgeo.com/{z}/{x}/{y}.png').addTo(map);

L.marker([34.0680246,74.8344129]).addTo(map)
.bindPopup('Open Source Srinagar')
.openPopup();
