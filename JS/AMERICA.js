console.log("AMERIAC.js");
// https://math.vercel.app/home

let modelos = {
	"Notus Marine":{
		"Marca" : "Enersud",
		"Diâmetro da Hélice" : 1.12,
		"Número de Pás" : 3,
		"Peso Total" : 10,
		"Potência Nominal" : 200,
		"Rotação Nominal" : 900,
		"Tensão de saída" : "12/24",
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 3.84,
	},
	"Notus 138":{
		"Marca" : "Enersud",
		"Diâmetro da Hélice" : 1.38,
		"Número de Pás" : 3,
		"Peso Total" : 12.5,
		"Potência Nominal" : 420,
		"Rotação Nominal" : 1100,
		"Tensão de saída" : "12/24/48",
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 2.2,
	},
	"Gerar Extreme":{
		"Marca" : "Enersud",
		"Diâmetro da Hélice" : 2.46,
		"Número de Pás" : 3,
		"Peso Total" : 39,
		"Potência Nominal" : 1200,
		"Rotação Nominal" :480,
		"Tensão de saída" : "12/24/48",
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 2.2,
	},
	"ELV-H2.7":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 2.7,
		"Número de Pás" : 3,
		"Peso Total" : 30.35,
		"Potência Nominal" : 500,
		"Rotação Nominal" : 600,
		"Tensão de saída" : "24",
		"Velocidade Nominal" : 7,
		"Velocidade de Partida" : 3,
	},
	"ELV-H3.1":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 3.1,
		"Número de Pás" : 3,
		"Peso Total" : 60,
		"Potência Nominal" : 1000,
		"Rotação Nominal" : 500,
		"Tensão de saída" : "48",
		"Velocidade Nominal" : 9,
		"Velocidade de Partida" : 3,
	},
	"ELV-H3.8":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 3.8,
		"Número de Pás" : 3,
		"Peso Total" : 85,
		"Potência Nominal" : 2000,
		"Rotação Nominal" : 450,
		"Tensão de saída" : "120",
		"Velocidade Nominal" : 9,
		"Velocidade de Partida" : 3,
	},
	"ELV-H4.6":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 4.8,
		"Número de Pás" : 3,
		"Peso Total" : 182,
		"Potência Nominal" : 3000,
		"Rotação Nominal" : 400,
		"Tensão de saída" : "180",
		"Velocidade Nominal" : 10,
		"Velocidade de Partida" : 2.5,
	},
	"ELV-H6.4":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 6.4,
		"Número de Pás" : 3,
		"Peso Total" : 405,
		"Potência Nominal" : 5000,
		"Rotação Nominal" : 240,
		"Tensão de saída" : "240",
		"Velocidade Nominal" : 10,
		"Velocidade de Partida" : 2.5,
	},
}

// Variaveis CalcPb
let OpCalcPb = 0;
let formURL = {
	Pb: "Pb%3D%5Cfrac%7BHQ%7D%7B3960%7D",
	H: "H%3D%5Cfrac%7B3960Pb%7D%7BQ%7D",
	Q: "Q%3D%5Cfrac%7B3960Pb%7D%7BH%7D"};

// Variaveis VMDV
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
    velVent = 0;
	openW = "621a5643feb2566d0c93203f39b549e0"
    r = JSON.parse(Get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current,minutely,hourly,alerts&appid="+openW+"&units=metric"));
    console.log(r);
    for (i=0, l=r["daily"].length; i<l; i++){
        velVent += r["daily"][i]["wind_speed"];
    }
    velVent = velVent/r["daily"].length;
}

function strD2D(d){
	let date = ("0" + d.getDate()).slice(-2);
	let month = ("0" + (d.getMonth() + 1)).slice(-2);
	let year = d.getFullYear()
	let hours = ("0" + (d.getHours() + 1)).slice(-2);
	let minutes = ("0" + (d.getMinutes() + 1)).slice(-2);
	let seconds = ("0" + (d.getSeconds() + 1)).slice(-2);
	let strData = hours + ":" + minutes + ":" + seconds + " " + date + "-" + month + "-" + year;
	return strData;
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

function cPb(){
	console.log("Calcular Potência da Bomba");
	cfgOpCalcPb()
	Pb = document.getElementById("inPb").value;
	H = document.getElementById("inH").value;
	Q = document.getElementById("inQ").value;
	if(OpCalcPb!="Pb"){console.log("Pb = "+Pb);}
	if(OpCalcPb!="H"){console.log("H = "+H);}
	if(OpCalcPb!="Q"){console.log("Q = "+Q);}
	switch(OpCalcPb){
		case "Pb":
			Pb = H*Q/3960;
			console.log("Pb = "+Pb);
			document.getElementById("inPb").value = Pb;
			break;
		case "H":
			H = 3960*Pb/Q;
			console.log("H = "+H);
			document.getElementById("inH").value = H;
			break;
		case "Q":
			Q = 3960*Pb/H;
			console.log("Q = "+Q);
			document.getElementById("inQ").value = Q;
			break;
		default:
			console.log("Erro em Calcular Potência da Bomba");
	}
}

function cfgOpCalcPb(){
	// console.log("Configurar Opções de Cálculo");
	varCalc = document.getElementsByName("varCalc");
	for (i=0, l=varCalc.length; i<l; i++){
		if (varCalc[i].checked){
			OpCalcPb = varCalc[i].value;
			console.log("OpCalc = "+OpCalcPb);
			document.getElementById("in"+OpCalcPb).style.backgroundColor = "black";
			document.getElementById("in"+OpCalcPb).style.color = "white";
			document.getElementById("in"+OpCalcPb).value = "";
			document.getElementById("in"+OpCalcPb).disabled = true;
			document.getElementById("imgPb").src = "https://math.now.sh?from="+formURL[OpCalcPb]+"&color=green&alternateColor=black";
		}
		else{
			document.getElementById("in"+varCalc[i].value).style.backgroundColor = "white";
			document.getElementById("in"+varCalc[i].value).style.color = "black";
			document.getElementById("in"+varCalc[i].value).disabled = false;
		}
	}
	// console.log("OpCalc = "+OpCalcPb);
}

function dadosAero(){
	let dadosT = ["Marca","Diâmetro da Hélice","Número de Pás","Peso Total","Potência Nominal","Rotação Nominal","Tensão de saída","Velocidade Nominal","Velocidade de Partida"];
	let dadosN = ["m","ddh","np","pt","pn","rn","ts","vn","vdp"];
	let mod = document.getElementById("modNom").value;
	for (i=0, l=dadosT.length; i<l; i++){
		document.getElementById("DDA"+dadosN[i]).textContent = String(modelos[mod][dadosT[i]]);
	}
}