angular.module('starter.controllers', [])

.controller('AppCtrl', function() { })

.controller('MapCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.$on('$ionicView.enter', function() {
    $ionicSideMenuDelegate.canDragContent(false);
  });
  $scope.$on('$ionicView.leave', function() {
    $ionicSideMenuDelegate.canDragContent(true);
  });

  var style = {
  "version": 8,
  "sources": {
    "countries": {
      "type": "vector",
      // "url": "mapbox://map-id"
      // "url": "http://tileserver.com/layer.json", 
      "tiles": ["http://192.168.1.4:3001/services/postgis/cleantech2/geom/vector-tiles/{z}/{x}/{y}.pbf"],
      "maxzoom": 6
    }
  },
  "glyphs": location.origin+location.pathname+"font/{fontstack}/{range}.pbf",
  "layers": [{
    "id": "background",
    "type": "background",
    "paint": {
      "background-color": "#ddeeff"
    }
  },{
    "id": "country-glow-outer",
    "type": "line",
    "source": "countries",
    "source-layer": "country",
    "layout": {
      "line-join":"round"
    }
  }]
};

var init_lat = 1.3552799//42.299228067198634;
var init_lng = 103.6945413;//-83.69717033229782;

  mapboxgl.accessToken = 'pk.eyJ1IjoiamN6YXBsZXdza2kiLCJhIjoiWnQxSC01USJ9.oleZzfREJUKAK1TMeCD0bg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: style,//'mapbox://styles/jczaplewski/cigmb1q45000yaaknp766niu2',
      center: [init_lng,init_lat],
      zoom: 15
  });
  
// map.on('load', function () {
//     map.addSource('museums', {
//         type: 'vector',
//         url: 'http://192.168.1.4:3001/services/postgis/cleantech2/geom/vector-tiles/{z}/{x}/{y}.pbf'
//     });
//     map.addLayer({
//         'id': 'museums',
//         'type': 'circle',
//         'source': 'museums',
//         'layout': {
//             'visibility': 'visible'
//         },
//         'paint': {
//             'circle-radius': 8,
//             'circle-color': 'rgba(55,148,179,1)'
//         },
//         'source-layer': 'museum-cusco'
//     });
// 
//     map.addSource('contours', {
//         type: 'vector',
//         url: 'mapbox://mapbox.mapbox-terrain-v2'
//     });
//     map.addLayer({
//         'id': 'contours',
//         'type': 'line',
//         'source': 'contours',
//         'source-layer': 'contour',
//         'layout': {
//             'visibility': 'visible',
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#877b59',
//             'line-width': 1
//         }
//     });
// });

  map.addControl(new mapboxgl.Navigation({position: 'bottom-left'}));

});
