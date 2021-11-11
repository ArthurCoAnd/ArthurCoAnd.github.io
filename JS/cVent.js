console.log("cVent.js");

let cidadeNome = 0;
let estado = 0;
let pais = 0;
let lat = 0;
let lon = 0;
let velVent = 0;

function cVent(){
	console.log("Velocidade Média Anual do Vento");
	cidade = document.getElementById("inCidade").value;
	console.log(cidade);
	BuscarLocal(cidade);
	
	console.log(cidadeNome);
	document.getElementById("cidadeNome").textContent = cidadeNome;
	console.log(estado);
	document.getElementById("estado").textContent = estado;
	console.log(pais);
	document.getElementById("pais").textContent = pais;
	console.log("lat = "+lat);
	document.getElementById("lat").textContent = lat;
	console.log("lon = "+lon);
	document.getElementById("lon").textContent = lon;
	cVelVent();
	console.log("Velocidade do Vento = "+velVent);
	document.getElementById("velVent").textContent = velVent.toFixed(5);
}

function cVelVent(){
	openW = "621a5643feb2566d0c93203f39b549e0"
	r = JSON.parse(Get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current,minutely,hourly,alerts&appid="+openW+"&units=metric"));
	// console.log(r);
	velVent = 0;
	for (i=0, l=r["daily"].length; i<l; i++){
		// console.log(r["daily"][i]["wind_speed"]);
		velVent += r["daily"][i]["wind_speed"];
	}
	velVent = velVent/r["daily"].length;
}

function BuscarLocal(cidade){
	r = JSON.parse(Get("https://nominatim.openstreetmap.org/?addressdetails=1&city="+cidade+"&format=json&limit=1"));
	// console.log(r)
	cidadeNome = r[0]["address"]["city"];
	if (cidadeNome == undefined){cidadeNome = r[0]["address"]["town"];}
	if (cidadeNome == undefined){cidadeNome = r[0]["address"]["village"];}
	estado = r[0]["address"]["state"];
	pais = r[0]["address"]["country"];
	lat = r[0]["lat"];
	lon = r[0]["lon"];
}

function Get(yourUrl){
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET",yourUrl,false);
	Httpreq.send(null);
	return Httpreq.responseText;
}