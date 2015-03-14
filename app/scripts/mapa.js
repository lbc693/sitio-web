'use strict';
/* google maps -----------------------------------------------------*/

var initialize = function initialize() {

    /* position Amsterdam */
    var latlng = new google.maps.LatLng(42.1716047,-0.1015089);

    var mapOptions = {
        center: latlng,
        scrollWheel: false,
        zoom: 10
    };

    var marker = new google.maps.Marker({
        position: latlng,
        url: '/',
        animation: google.maps.Animation.DROP
    });

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    marker.setMap(map);

};
google.maps.event.addDomListener(window, 'load', initialize);

/* end google maps -----------------------------------------------------*/
