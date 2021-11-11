console.log("cPb.js");
let OpCalcPb = 0;

// https://math.vercel.app/home
let formURL = {
	Pb: "Pb%3D%5Cfrac%7BHQ%7D%7B3960%7D",
	H: "H%3D%5Cfrac%7B3960Pb%7D%7BQ%7D",
	Q: "Q%3D%5Cfrac%7B3960Pb%7D%7BH%7D"};
	
cfgOpCalcPb();

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