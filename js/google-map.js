$(document).ready(CrearMapa);
	var map;
	var marcador;

function CrearMapa() {
	var image = new google.maps.MarkerImage('http://servitech.pe/images/location.png', new google.maps.Size(47,75));
	var mapOptions = {
		center: new google.maps.LatLng(-12.0540695,-77.0730754),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("google-map"),mapOptions);
	var place =  new google.maps.LatLng(-12.0540695,-77.0730754);
	marcador = new google.maps.Marker({
			position: place,
			title:"Mi Casa",
			map: map,
			icon: image

	});

var styles = [
  {
    stylers: [
      { hue: "#16a085"},
      { saturation: 20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 10 },
      { visibility: "on" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "on" }
    ]
  }
];

map.setOptions({styles: styles});
		

}