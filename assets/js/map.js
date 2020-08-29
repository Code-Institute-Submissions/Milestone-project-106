function initMap() 
    {
//map displayed and centered, pan and drag options
            var map = new google.maps.Map(document.getElementById("map"), 
            {
                zoom: 5,
                gestureHandling: 'greedy',
                center: 
                {
                    lat: 49.81888, 
                    lng: 3.30115
                }
            });
       
// add location, add marker, set info message    

    addMarker({
        coords:{lat:50.694284, lng:5.626468},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Herstal Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.26704, lng:4.39579},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Antwerp Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:50.7714, lng:3.19861},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Rekkem Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:50.942519, lng:5.703377},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Maasmechelen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    }); 
    addMarker({coords:{lat:52.403594, lng:4.837096},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Amsterdam Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.87894, lng:4.438004},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Waddinxveen II Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.016617, lng:4.62972},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Waddinxveen III Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.695072, lng:5.043066},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Waalwijk Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.46597, lng:5.418019},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Eindhoven Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.970304, lng:5.937688},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Heerenveen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.992709, lng:4.394236},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Pijnacker Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:53.518898, lng:10.022123},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Hamburg Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.31239, lng:10.63523},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Lehre Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.593659, lng:7.220584},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Recklinghausen Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:50.88997, lng:11.8676451},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Hermsdorf Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:48.64408, lng:9.42896},
        iconImage:"https://img.icons8.com/bubbles/50/000000/gas-station.png",
        content:'<h5>Kircheim Shell Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
// AirLiquide
    addMarker({coords:{lat:48.61569, lng:6.21041},
        iconImage:"https://img.icons8.com/ios-filled/30/000000/gas.png",
        content:'<h5>AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:48.54364, lng:7.57352},
        iconImage:"https://img.icons8.com/ios-filled/30/000000/gas.png",
        content:'<h5>AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:48.54364, lng:7.57352},
        iconImage:"https://img.icons8.com/ios-filled/30/000000/gas.png",
        content:'<h5>AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:47.26882, lng:5.135654},
        iconImage:"https://img.icons8.com/ios-filled/30/000000/gas.png",
        content:'<h5>AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:45.5451, lng:4.30658},
        iconImage:"https://img.icons8.com/ios-filled/30/000000/gas.png",
        content:'<h5>AirLiquide Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
//Avia
    addMarker({coords:{lat:46.44395, lng:-0.81275},
        iconImage:"https://img.icons8.com/fluent/48/000000/gas.png",
        content:'<h5>Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:46.44395, lng:-0.81275},
        iconImage:"https://img.icons8.com/fluent/48/000000/gas.png",
        content:'<h5>Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:45.90796, lng:1.29264},
        iconImage:"https://img.icons8.com/fluent/48/000000/gas.png",
        content:'<h5>Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:47.04228, lng:-0.91637},
        iconImage:"https://img.icons8.com/fluent/48/000000/gas.png",
        content:'<h5>Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:44.57839, lng:4.74444},
        iconImage:"https://img.icons8.com/fluent/48/000000/gas.png",
        content:'<h5>Avia Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
//Rolande
    addMarker({coords:{lat:51.9748, lng:6.0041},
        iconImage:"https://img.icons8.com/cotton/64/000000/gas-industry.png",
        content:'<h5>Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.11732, lng:5.03039},
        iconImage:"https://img.icons8.com/cotton/64/000000/gas-industry.png",
        content:'<h5>Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.97661, lng:5.93713},
        iconImage:"https://img.icons8.com/cotton/64/000000/gas-industry.png",
        content:'<h5>Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:52.59748, lng:4.75185},
        iconImage:"https://img.icons8.com/cotton/64/000000/gas-industry.png",
        content:'<h5>Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });
    addMarker({coords:{lat:51.70298, lng:4.20073},
        iconImage:"https://img.icons8.com/cotton/64/000000/gas-industry.png",
        content:'<h5>Rolande Station</h5><br><h6>Pay here with your EuroShell Card</h6>',
    });

  
// add animation and event listener  

        function addMarker(props){
            var marker = new google.maps.Marker(
                {   animation: google.maps.Animation.DROP,
                    position:props.coords,
                    map:map,
                });
                if(props.iconImage){
                    marker.setIcon(props.iconImage);
                }

                if(props.content) {
                    var infoWindow = new google.maps.InfoWindow (
                {
                    content: props.content
                });

                marker.addListener('click', function()
                {
                infoWindow.open(map, marker);
                });  
            }
        }
    }
    