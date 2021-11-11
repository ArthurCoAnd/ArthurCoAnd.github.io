console.log("INTER.js");

// https://math.vercel.app/home

function prl(a,b){
    x = (a*b)/(a+b);
    return x;
}

function cfgEntradas(entradas, tipo){
    for(i=0, l=entradas.length; i<l; i++){
        if(document.getElementById("in"+entradas[i]+tipo).value == ""){
            document.getElementById("in"+entradas[i]+tipo).style.backgroundColor = "red";
            document.getElementById("in"+entradas[i]+tipo).style.color = "white";
        }else{
            document.getElementById("in"+entradas[i]+tipo).style.backgroundColor = "white";
            document.getElementById("in"+entradas[i]+tipo).style.color = "black";
        }
    }
}

function calcPFTBJ(){
    console.log("Polarização Fixa TBJ");
    let tipo = "PFTBJ"
    let entradas = ["Rb","Rc","ro","Beta","Vcc"];
    cfgEntradas(entradas,tipo);
    let Rb = parseFloat(document.getElementById("in"+"Rb"+tipo).value);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let Ib = (Vcc-0.7)/Rb;
    let Ie = (Beta+1)*Ib;
    let re = 0.026/Ie;
    let Avnl = -prl(Rc,ro)/re;
    let Zi = prl(Rb,Beta*re);
    let Zo = prl(Rc,ro);
    let saidas = ["Ib","Ie","re","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential();
    }
}

function calcDTTBJ(){
    console.log("Divisor de Tensão TBJ");
    let tipo = "DTTBJ"
    let entradas = ["R1","R2","Rc","Re","ro","Beta","Vcc"];
    cfgEntradas(entradas,tipo);
    let R1 = parseFloat(document.getElementById("in"+"R1"+tipo).value);
    let R2 = parseFloat(document.getElementById("in"+"R2"+tipo).value);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let Vb = Vcc*R2/(R1+R2);
    let Ve = Vb-0.7;
    let Ie = Ve/Re;
    let re = 0.026/Ie;
    let R_ = prl(R1,R2);
    let Avnl = -prl(Rc,ro)/re;
    let Zi = prl(R_,Beta*re);
    let Zo = prl(Rc,ro);
    let saidas = ["Vb","Ve","Ie","re","R_","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential();
    }
}

function calcSETBJ(){
    console.log("Seguidor Emissor TBJ");
    let tipo = "SETBJ"
    let entradas = ["Rb","Re","ro","Beta","Vcc"];
    cfgEntradas(entradas,tipo);
    let Rb = parseFloat(document.getElementById("in"+"Rb"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let Ib = (Vcc-0.7)/(Rb+Re*(Beta+1));
    let Ie = (Beta+1)*Ib;
    let re = 0.026/Ie;
    let Zb = Beta*(Re+re);
    let Avnl = Re/(Re+re);
    let Zi = prl(Rb,Zb);
    let Zo = prl(Re,prl(Beta*re,prl(re,ro)));
    let saidas = ["Ib","Ie","re","Zb","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential();
    }
}