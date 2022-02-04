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
		"Tensão de saída" : 24,
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 3.84,
		"eq" : "0.0034*Math.pow(x,6) - 0.1064*Math.pow(x,5) + 1.2222*Math.pow(x,4) - 6.1068*Math.pow(x,3) + 13.809*Math.pow(x,2) - 11.869*x + 0.9794",
		"imgUrl" : "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024/https://www.enersud.com.br/wp-content/uploads/2019/03/turbina-eolica-notus-marine-02.jpg",
	},
	"Notus 138":{
		"Marca" : "Enersud",
		"Diâmetro da Hélice" : 1.38,
		"Número de Pás" : 3,
		"Peso Total" : 12.5,
		"Potência Nominal" : 420,
		"Rotação Nominal" : 1100,
		"Tensão de saída" : 24,
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 2.2,
		"eq" : "y = 0.0021*Math.pow(x,6) - 0.1048*Math.pow(x,5) + 1.8556*Math.pow(x,4) - 14.165*Math.pow(x,3) + 47.272*Math.pow(x,2) - 50.743*x + 5.1774",
		"imgUrl" : "https://www.enersud.com.br/wp-content/uploads/2019/02/turbina-eolica-notus-138-02.jpg",
	},
	"Gerar Extreme":{
		"Marca" : "Enersud",
		"Diâmetro da Hélice" : 2.46,
		"Número de Pás" : 3,
		"Peso Total" : 39,
		"Potência Nominal" : 1200,
		"Rotação Nominal" :480,
		"Tensão de saída" : 24,
		"Velocidade Nominal" : 13,
		"Velocidade de Partida" : 2.2,
		"eq" : "y = -0.0122*Math.pow(x,6) + 0.84*Math.pow(x,5) - 22.442*Math.pow(x,4) + 292.79*Math.pow(x,3) - 1938.2*Math.pow(x,2) + 6204*x - 7476.4",
		"imgUrl" : "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_614/https://www.enersud.com.br/wp-content/uploads/2019/05/turbina-eolica-gerar-extreme-enersud-614x1024.jpg",
	},
	"ELV-H2.7":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 2.7,
		"Número de Pás" : 3,
		"Peso Total" : 30.35,
		"Potência Nominal" : 500,
		"Rotação Nominal" : 600,
		"Tensão de saída" : 24,
		"Velocidade Nominal" : 7,
		"Velocidade de Partida" : 3,
		"eq" : "y = -0.0028*Math.pow(x,6) + 0.184*Math.pow(x,5) - 4.6274*Math.pow(x,4) + 54.8*Math.pow(x,3) - 316.29*Math.pow(x,2) + 953.89*x - 1134.2",
		"imgUrl" : "https://www.eletrovento.com.br/site/thumb.php?zc=2&a=tl&h=600&w=800&src=midia/produto/095e5efe3e400d3c8ea55932bb15da7e.jpg",
	},
	"ELV-H3.1":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 3.1,
		"Número de Pás" : 3,
		"Peso Total" : 60,
		"Potência Nominal" : 1000,
		"Rotação Nominal" : 500,
		"Tensão de saída" : 48,
		"Velocidade Nominal" : 9,
		"Velocidade de Partida" : 3,
		"eq" : "y = 0.0026*Math.pow(x,6) - 0.1589*Math.pow(x,5) + 3.7645*Math.pow(x,4) - 45.92*Math.pow(x,3) + 315.23*Math.pow(x,2) - 978.91*x + 1101.5",
		"imgUrl" : "https://www.eletrovento.com.br/site/thumb.php?zc=2&a=tl&h=600&w=800&src=midia/produto/b6d041edf0f200e56f853e20af2de81d.jpg",
	},
	"ELV-H3.8":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 3.8,
		"Número de Pás" : 3,
		"Peso Total" : 85,
		"Potência Nominal" : 2000,
		"Rotação Nominal" : 450,
		"Tensão de saída" : 120,
		"Velocidade Nominal" : 9,
		"Velocidade de Partida" : 3,
		"eq" : "y = 0.0043*Math.pow(x,6) - 0.282*Math.pow(x,5) + 7.3834*Math.pow(x,4) - 100.75*Math.pow(x,3) + 749.92*Math.pow(x,2) - 2478.4*x + 2933.9",
		"imgUrl" : "https://www.eletrovento.com.br/site/thumb.php?zc=2&a=tl&h=600&w=800&src=midia/produto/bfd13e8d91fb627b80d50d2d273dfac5.jpg",
	},
	"ELV-H4.6":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 4.8,
		"Número de Pás" : 3,
		"Peso Total" : 182,
		"Potência Nominal" : 3000,
		"Rotação Nominal" : 400,
		"Tensão de saída" : 180,
		"Velocidade Nominal" : 10,
		"Velocidade de Partida" : 2.5,
		"eq" : "y = 0.0043*Math.pow(x,6) - 0.2772*Math.pow(x,5) + 7.1233*Math.pow(x,4) - 97.076*Math.pow(x,3) + 745.05*Math.pow(x,2) - 2542.1*x + 3131.1",
		"imgUrl" : "https://www.eletrovento.com.br/site/thumb.php?zc=2&a=tl&h=600&w=800&src=midia/produto/034dd87a853e042ea84639413df74894.jpg",
	},
	"ELV-H6.4":{
		"Marca" : "Eletrovento",
		"Diâmetro da Hélice" : 6.4,
		"Número de Pás" : 3,
		"Peso Total" : 405,
		"Potência Nominal" : 5000,
		"Rotação Nominal" : 240,
		"Tensão de saída" : 240,
		"Velocidade Nominal" : 10,
		"Velocidade de Partida" : 2.5,
		"eq" : "y = 0.0046*Math.pow(x,6) - 0.2542*Math.pow(x,5) + 5.5045*Math.pow(x,4) - 68.682*Math.pow(x,3) + 581.43*Math.pow(x,2) - 2170.7*x + 2961.9",
		"imgUrl" : "https://www.eletrovento.com.br/site/thumb.php?zc=2&a=tl&h=600&w=800&src=midia/produto/8e9727d716d1d9505db18234917ab035.jpg",
	},
}

// Variaveis VMDV
let cidadeNome = 0;
let estado = 0;
let pais = 0;
let lat = 0;
let lon = 0;
let velVent = 0;

function cVent(){
	console.clear();
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
	document.getElementById("inBBVv").value = velVent.toFixed(5);
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

function dadosAero(){
	let dadosT = ["Marca","Diâmetro da Hélice","Número de Pás","Peso Total","Potência Nominal","Rotação Nominal","Tensão de saída","Velocidade Nominal","Velocidade de Partida"];
	let dadosN = ["m","ddh","np","pt","pn","rn","ts","vn","vdp"];
	let mod = document.getElementById("modNom").value;
	for (i=0, l=dadosT.length; i<l; i++){
		document.getElementById("DDA"+dadosN[i]).textContent = String(modelos[mod][dadosT[i]]);
	}
	document.getElementById("imgAero").src = modelos[mod]["imgUrl"];
}

function calcBB(){
	console.clear();
	console.log("Calculo Banco de Baterias");
	let Ve = document.getElementById("inBBVe").value;
	let Pc = document.getElementById("inBBPc").value;
	let Hu = document.getElementById("inBBHu").value;
	let Da = document.getElementById("inBBDa").value;
	let Vv = document.getElementById("inBBVv").value;
	let ECD = Pc * Hu;
	console.log("ECD = "+ECD);
	let EC = ECD * Da;
	console.log("EC = "+EC);
	let EA = EC / 0.4;
	console.log("EA = "+EA);
	let MA = "-";
	let PA = 0;
	let mods = Object.keys(modelos);
	for(m=0;m<mods.length;m++){ 
		let mod = mods[m];
		if(Vv >= modelos[mod]["Velocidade de Partida"]){
			console.log(mod);
			let x = Vv;
			let Pma = 24*Da*eval(modelos[mod]["eq"]);
			console.log("PA = "+Pma);
			if(Math.abs(EA-Pma)<Math.abs(EA-PA)){
				MA = mod;
				PA = Pma;
			}
		}
	}
	console.log("MA = "+MA);
	document.getElementById("modNom").value = MA;
	dadosAero();
	document.getElementById("varBBMA").textContent = MA;
	console.log("PA = "+PA);
	let CBB = EA/modelos[MA]["Tensão de saída"];
	console.log("CBB = "+CBB);
	let NBS = Math.ceil(modelos[MA]["Tensão de saída"]/12);
	document.getElementById("varBBBS").textContent = NBS;
	let NBP = Math.ceil(CBB/220);
	document.getElementById("varBBBP").textContent = NBP;
	let TB = NBS * NBP;
	document.getElementById("varBBTB").textContent = TB;

	document.getElementById("varInvVin").textContent = modelos[MA]["Tensão de saída"];
	document.getElementById("varInvVout").textContent = Ve;
	document.getElementById("varInvPmin").textContent = Math.ceil(Pc*1.2);
}