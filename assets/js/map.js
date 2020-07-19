function initMap() 
    {
//map displayed and centered, pan and drag options
            var map = new google.maps.Map(document.getElementById("map"), 
            {
                zoom: 5,
                gestureHandling: 'greedy',
                center: 
                {
                    lat: 48.018050,
                    lng: 12.343388
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

// add abnimation and event listener  

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