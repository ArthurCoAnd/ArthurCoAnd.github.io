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
    let tipo = "PFTBJ";
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
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDTTBJ(){
    console.log("Divisor de Tensão TBJ");
    let tipo = "DTTBJ";
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
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcSETBJ(){
    console.log("Seguidor Emissor TBJ");
    let tipo = "SETBJ";
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
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcBCTBJ(){
    console.log("Base Comum TBJ");
    let tipo = "BCTBJ";
    let entradas = ["Rc","Re","ro","Alfa","Vee"];
    cfgEntradas(entradas,tipo);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Alfa = parseFloat(document.getElementById("in"+"Alfa"+tipo).value);
    let Vee = parseFloat(document.getElementById("in"+"Vee"+tipo).value);
    let Ie = (Vee-0.7)/Re;
    let re = 0.026/Ie;
    let Avnl = Alfa*prl(Rc,ro)/re;
    let Zi = prl(Re,re);
    let Zo = prl(Rc,ro);
    let saidas = ["Ie","re","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcPFFET(){
    console.log("Polarização Fixa FET");
    let tipo = "PFFET";
    let entradas = ["Rg","Rd","Vp","Vgs","Yos","Idss"];
    cfgEntradas(entradas,tipo);
    let Rg = parseFloat(document.getElementById("in"+"Rg"+tipo).value);
    let Rd = parseFloat(document.getElementById("in"+"Rd"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    rd = 1/Yos;
    Avnl = -gm*prl(Rd,rd);
    Zi = Rg;
    Zo = prl(Rd,rd);
    let saidas = ["gm","rd","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDTFET(){
    console.log("Divisor de Tensão FET");
    let tipo = "DTFET";
    let entradas = ["R1","R2","Rd","Vp","Vgs","Yos","Idss"];
    cfgEntradas(entradas,tipo);
    let R1 = parseFloat(document.getElementById("in"+"R1"+tipo).value);
    let R2 = parseFloat(document.getElementById("in"+"R2"+tipo).value);
    let Rd = parseFloat(document.getElementById("in"+"Rd"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    rd = 1/Yos;
    Avnl = -gm*prl(Rd,rd);
    Zi = prl(R1,R2);
    Zo = prl(Rd,rd);
    let saidas = ["gm","rd","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDCFET(){
    console.log("Dreno Comum FET");
    let tipo = "DCFET";
    let entradas = ["Rg","Rs","Vp","Vgs","Yos","Idss"];
    cfgEntradas(entradas,tipo);
    let Rg = parseFloat(document.getElementById("in"+"Rg"+tipo).value);
    let Rs = parseFloat(document.getElementById("in"+"Rs"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    rd = 1/Yos;
    Avnl = gm*prl(Rs,rd)/(1+gm*prl(Rs,rd));
    Zi = Rg;
    Zo = prl(prl(Rs,rd),1/gm);
    let saidas = ["gm","rd","Avnl","Zi","Zo"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}