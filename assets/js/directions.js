var source, destination;
var directionsDisplay;


var directionsService = new google.maps.DirectionsService();
google.maps.event.addDomListener(window, 'load', function () {
    new google.maps.places.SearchBox(document.getElementById('txtSource'));
    new google.maps.places.SearchBox(document.getElementById('txtDestination'));
    directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
});
 


function GetRoute() {
    var europe = new google.maps.LatLng(49.81888, 3.30115);
    var mapOptions = {
        zoom: 5,
        gestureHandling: 'greedy',
        center: europe
    };

    var waypts = [];
    var checkboxArray = document.getElementById("txtWaypoint");

        for (let i = 0; i < checkboxArray.length; i++) {
          if (checkboxArray.options[i].selected) {
            waypts.push({
              location: checkboxArray[i].value,
              stopover: true,
            });
          }
        }



    map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('dvPanel'));
 
    //*********DIRECTIONS AND ROUTE**********************//
    source = document.getElementById("txtSource").value;
    destination = document.getElementById("txtDestination").value;
    waypoint = document.getElementById("txtWaypoint").value
 
    var request = {
        origin: source,
        destination: destination,
        waypoints: waypts,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
 
    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, 
    function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            var dvDistance = document.getElementById("dvDistance");
            dvDistance.innerHTML = "";
            dvDistance.innerHTML += "Distance: " + distance + "<br />";
            dvDistance.innerHTML += "Duration: " + duration;
 
        } else {
            alert("Unable to find the route.");
        }
    });

    //*********MARKERS AND ICONS**********************//
   //*********SHELL**********************//
	addMarker({
		coords: {
			lat: 50.694284,
			lng: 5.626468
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Herstal Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.26704,
			lng: 4.39579
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Antwerp Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 50.7714,
			lng: 3.19861
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Rekkem Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 50.942519,
			lng: 5.703377
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Maasmechelen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.403594,
			lng: 4.837096
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Amsterdam Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.87894,
			lng: 4.438004
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Waddinxveen II Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.016617,
			lng: 4.62972
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Waddinxveen III Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.695072,
			lng: 5.043066
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Waalwijk Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.46597,
			lng: 5.418019
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Eindhoven Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.970304,
			lng: 5.937688
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Heerenveen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.992709,
			lng: 4.394236
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Pijnacker Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 53.518898,
			lng: 10.022123
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Hamburg Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.31239,
			lng: 10.63523
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Lehre Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.593659,
			lng: 7.220584
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Recklinghausen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 50.88997,
			lng: 11.8676451
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Hermsdorf Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 48.64408,
			lng: 9.42896
		},
		iconImage: "assets/images/shell_logo.png",
		content: '<h5>Kircheim Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
   //*********AIRLIQUIDE**********************//
	addMarker({
		coords: {
			lat: 48.61569,
			lng: 6.21041
		},
		iconImage: "assets/images/airliquide_logo.png",
		content: '<h5>Nancy AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 48.54364,
			lng: 7.57352
		},
		iconImage: "assets/images/airliquide_logo.png",
		content: '<h5>Strasbourg AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 47.26882,
			lng: 5.135654
		},
		iconImage: "assets/images/airliquide_logo.png",
		content: '<h5>Dijon AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 45.5451,
			lng: 4.30658
		},
		iconImage: "assets/images/airliquide_logo.png",
		content: '<h5>Saint-Étienne AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
 //*********AVIA**********************//
	addMarker({
		coords: {
			lat: 46.44395,
			lng: -0.81275
		},
		iconImage: "assets/images/avia_logo.png",
		content: '<h5>Fontenay-le-Comte Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});

	addMarker({
		coords: {
			lat: 45.90796,
			lng: 1.29264
		},
		iconImage: "assets/images/avia_logo.png",
		content: '<h5>Limoges Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 47.04228,
			lng: -0.91637
		},
		iconImage: "assets/images/avia_logo.png",
		content: '<h5>Cholet Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 44.57839,
			lng: 4.74444
		},
		iconImage: "assets/images/avia_logo.png",
		content: '<h5>Montélimar Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
   //*********ROLANDE**********************//
	addMarker({
		coords: {
			lat: 51.9748,
			lng: 6.0041
		},
		iconImage: "assets/images/Rolande_logo.png",
		content: '<h5>Arnhem Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.11732,
			lng: 5.03039
		},
		iconImage: "assets/images/Rolande_logo.png",
		content: '<h5>Utrecht Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.97661,
			lng: 5.93713
		},
		iconImage: "assets/images/Rolande_logo.png",
		content: '<h5>Heerenveen Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 52.59748,
			lng: 4.75185
		},
		iconImage: "assets/images/Rolande_logo.png",
		content: '<h5>Alkmaar Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
	});
	addMarker({
		coords: {
			lat: 51.70298,
			lng: 4.20073
		},
		iconImage: "assets/images/Rolande_logo.png",
		content: '<h5>Oude-Tonge Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    
	// add animation and event listener  
	function addMarker(props) {
		var marker = new google.maps.Marker({
			animation: google.maps.Animation.DROP,
			position: props.coords,
			map: map,
		});
		if(props.iconImage) {
			marker.setIcon(props.iconImage);
		}
		if(props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});
			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			});
		}
	}
}

    //*********I was trying to simplify it but could not add info window, can you please add a comment on how i could add an info window**********************//
    //*********SHELL**********************//
    //     var locationsShell = [
    //         ["Herstal", 50.694284, 5.626468],
    //         ["Antwerp", 51.26704, 4.39579],
    //         ["Rekkem", 50.7714, 3.19861],
    //         ["Maasmechelen",50.942519,5.703377],
    //         ["Amsterdam", 52.403594,4.837096],
    //         ["Waddinxveen II", 51.87894,4.438004],
    //         ["Waddinxveen III", 52.016617,4.62972],
    //         ["Waawijk", 51.695072,5.043066],
    //         ["Eindhoven",51.46597,5.418019],
    //         ["Heerenveen", 52.970304,5.937688],
    //         ["Pijnacker",53.518898,10.022123],
    //         ["Hamburg",53.518898,10.022123],
    //         ["Lehre",52.31239,10.63523],
    //         ["Recklinghausen",51.26704, 4.39579],
    //         ['Hermsdorf', 50.88997,11.8676451],
    //         ["Kircheim",48.64408,9.42896],
    //     ];

    //     for (i = 0; i <locationsShell.length; i++) {
    //         marker = new google.maps.Marker ({
    //             position: new google.maps.LatLng(locationsShell[i][1], locationsShell[i][2]),
    //             map:map,
    //             icon: 'assets/images/shell_logo.png',
    //         });
    //     }
    // //*********AIRLIQUIDE**********************//
    //     var locationsAirLiquide =[
    //         ["Nancy",48.61569,6.21041],
    //         ["Strasbourg",48.54364,7.57352],
    //         ["Dijon",47.26882,5.135654],
    //         ["Saint-Étienne",45.5451, 4.30658],
    //     ];

    //     for (i = 0; i <locationsAirLiquide.length; i++) {
    //         marker = new google.maps.Marker ({
    //             position: new google.maps.LatLng(locationsAirLiquide[i][1], locationsAirLiquide[i][2]),
    //             map:map,
    //             icon: 'assets/images/airliquide_logo.png',
    //         });
    //     }
    // //*********AVIA**********************//
    //     var locationsAvia =[
    //         ["Fontenay-le-Comte",46.44395, -0.81275],
    //         ["Limoges",45.90796,1.29264],
    //         ["Cholet",47.04228, -0.91637],
    //         ["Montélimar",44.57839,4.74444],
    //     ];

    //     for (i = 0; i <locationsAvia.length; i++) 
    //     {
    //         marker = new google.maps.Marker 
    //         ({
    //             position: new google.maps.LatLng(locationsAvia[i][1], locationsAvia[i][2]),
    //             map:map,
    //             icon: 'assets/images/avia_logo.png',
    //         });
    //     }
  
    // //*********ROLANDE**********************//
    //     var locationsRolande =[
    //         ["Arnhem",51.9748,6.0041],
    //         ["Utrecht",52.11732,5.03039],
    //         ["Heerenveen",52.97661,5.93713],
    //         ["Alkmaar",52.59748,4.75185],
    //         ["Oude-Tonge",51.70298,4.20073],
    //     ];

    //     for (i = 0; i <locationsRolande.length; i++) {
    //         marker = new google.maps.Marker ({
    //             position: new google.maps.LatLng(locationsRolande[i][1], locationsRolande[i][2]),
    //             map:map,
    //             icon: 'assets/images/Rolande_logo.png',
    //         });       
    //     }