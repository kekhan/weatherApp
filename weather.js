
var myRequest = new XMLHttpRequest();

function getLocation(){
	var myRequest= new XMLHttpRequest();
	myRequest.onreadystatechange = function(){
		if (myRequest.readyState === XMLHttpRequest.DONE){
			if(myRequest.status <400){
				var str = JSON.parse(myRequest.responseText);
				weatherInfo(str);
				converter(str);

			}
		}
	};
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&APPID=f04cad83babbc12fc2df40c392ebb7d7';
	        myRequest.open('GET',url,true);
	        myRequest.send(null);

		});

	}
	
}
function weatherInfo(data){
	document.getElementById('date').innerHTML=Date();
	document.getElementById('location').innerHTML=data.name;
	var y = document.getElementById('fahrenheit');
	y.innerHTML=Math.floor(1.8*((data.main.temp)-273)+32) +" °F";
	document.getElementById('des').innerHTML=data.weather[0].description;
	var x = document.createElement("IMG");
	var srcimg = data.weather[0].icon;
    x.setAttribute("src", "http://openweathermap.org/img/w/"+srcimg+".png");
    document.body.appendChild(x);
}
function converter(data){
		element =document.getElementById('celsius')
		element.innerHTML=Math.floor(data.main.temp-273)+" °C";

}


