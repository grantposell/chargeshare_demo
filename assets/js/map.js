var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.91722, lng: 151.23064},
        zoom: 16,
    });
    var marker = new google.maps.Marker({
        position: {lat: -33.91722, lng: 151.23064},
        map: map,
        title: 'Hello World'
    });
}