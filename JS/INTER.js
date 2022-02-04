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
    let entradas = ["Rb","Rc","ro","Beta","Vcc","RS","RL"];
    cfgEntradas(entradas,tipo);
    let Rb = parseFloat(document.getElementById("in"+"Rb"+tipo).value);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    let Ib = (Vcc-0.7)/Rb;
    let Ie = (Beta+1)*Ib;
    let re = 0.026/Ie;
    let Avnl = -prl(Rc,ro)/re;
    let Zi = prl(Rb,Beta*re);
    let Zo = prl(Rc,ro);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["Ib","Ie","re","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDTTBJ(){
    console.log("Divisor de Tensão TBJ");
    let tipo = "DTTBJ";
    let entradas = ["R1","R2","Rc","Re","ro","Beta","Vcc","RS","RL"];
    cfgEntradas(entradas,tipo);
    let R1 = parseFloat(document.getElementById("in"+"R1"+tipo).value);
    let R2 = parseFloat(document.getElementById("in"+"R2"+tipo).value);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    let Vb = Vcc*R2/(R1+R2);
    let Ve = Vb-0.7;
    let Ie = Ve/Re;
    let re = 0.026/Ie;
    let R_ = prl(R1,R2);
    let Avnl = -prl(Rc,ro)/re;
    let Zi = prl(R_,Beta*re);
    let Zo = prl(Rc,ro);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["Vb","Ve","Ie","re","R_","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcSETBJ(){
    console.log("Seguidor Emissor TBJ");
    let tipo = "SETBJ";
    let entradas = ["Rb","Re","ro","Beta","Vcc","RS","RL"];
    cfgEntradas(entradas,tipo);
    let Rb = parseFloat(document.getElementById("in"+"Rb"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Beta = parseFloat(document.getElementById("in"+"Beta"+tipo).value);
    let Vcc = parseFloat(document.getElementById("in"+"Vcc"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    let Ib = (Vcc-0.7)/(Rb+Re*(Beta+1));
    let Ie = (Beta+1)*Ib;
    let re = 0.026/Ie;
    let Zb = Beta*(Re+re);
    let Avnl = Re/(Re+re);
    let Zi = prl(Rb,Zb);
    let Zo = prl(Re,prl(Beta*re,prl(re,ro)));
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["Ib","Ie","re","Zb","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcBCTBJ(){
    console.log("Base Comum TBJ");
    let tipo = "BCTBJ";
    let entradas = ["Rc","Re","ro","Alfa","Vee","RS","RL"];
    cfgEntradas(entradas,tipo);
    let Rc = parseFloat(document.getElementById("in"+"Rc"+tipo).value);
    let Re = parseFloat(document.getElementById("in"+"Re"+tipo).value);
    let ro = parseFloat(document.getElementById("in"+"ro"+tipo).value);
    let Alfa = parseFloat(document.getElementById("in"+"Alfa"+tipo).value);
    let Vee = parseFloat(document.getElementById("in"+"Vee"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    let Ie = (Vee-0.7)/Re;
    let re = 0.026/Ie;
    let Avnl = Alfa*prl(Rc,ro)/re;
    let Zi = prl(Re,re);
    let Zo = prl(Rc,ro);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["Ie","re","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcPFFET(){
    console.log("Polarização Fixa FET");
    let tipo = "PFFET";
    let entradas = ["Rg","Rd","rd","Vp","Vgs","Yos","Idss","RS","RL"];
    cfgEntradas(entradas,tipo);
    let Rg = parseFloat(document.getElementById("in"+"Rg"+tipo).value);
    let Rd = parseFloat(document.getElementById("in"+"Rd"+tipo).value);
    let rd = parseFloat(document.getElementById("in"+"rd"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    if(document.getElementById("in"+"rd"+tipo).value == ""){
        rd = 1/Yos;
    }
    if(document.getElementById("in"+"Yos"+tipo).value == ""){
        Yos = 1/rd;
    }
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    Avnl = -gm*prl(Rd,rd);
    Zi = Rg;
    Zo = prl(Rd,rd);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["rd","Yos","gm","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDTFET(){
    console.log("Divisor de Tensão FET");
    let tipo = "DTFET";
    let entradas = ["R1","R2","Rd","Rs","rd","Yos","Vdd","Vp","Vgs","Idss","RS","RL"];
    cfgEntradas(entradas,tipo);
    let R1 = parseFloat(document.getElementById("in"+"R1"+tipo).value);
    let R2 = parseFloat(document.getElementById("in"+"R2"+tipo).value);
    let Rd = parseFloat(document.getElementById("in"+"Rd"+tipo).value);
    let Rs = parseFloat(document.getElementById("in"+"Rs"+tipo).value);
    let rd = parseFloat(document.getElementById("in"+"rd"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Vdd = parseFloat(document.getElementById("in"+"Vdd"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    if(document.getElementById("in"+"rd"+tipo).value == ""){
        rd = 1/Yos;
    }
    if(document.getElementById("in"+"Yos"+tipo).value == ""){
        Yos = 1/rd;
    }
    if(document.getElementById("in"+"Vgs"+tipo).value == ""){
        let W = Rs*Idss;
        let Z = Vdd*R2/(R1+R2);
        let A = W/Math.pow(Vp,2);
        let B = 1 - 2*W/Vp;
        let C = W - Z;
        let Delt = Math.sqrt(Math.pow(B,2)-4*A*C);
        VgsM = (-B+Delt)/(2*A);
        Vgsm = (-B-Delt)/(2*A);
        if(Math.abs(VgsM) <= Math.abs(Vp)){
            Vgs = VgsM;
        }else if(Math.abs(Vgsm) <= Math.abs(Vp)){
            Vgs = Vgsm;
        }
    }
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    Avnl = -gm*prl(Rd,rd);
    Zi = prl(R1,R2);
    Zo = prl(Rd,rd);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["rd","Yos","Vgs","gm","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}

function calcDCFET(){
    console.log("Dreno Comum FET");
    let tipo = "DCFET";
    let entradas = ["Rg","Rs","rd","Vp","Vgs","Yos","Idss","Id","RS","RL"];
    cfgEntradas(entradas,tipo);
    let Rg = parseFloat(document.getElementById("in"+"Rg"+tipo).value);
    let Rs = parseFloat(document.getElementById("in"+"Rs"+tipo).value);
    let rd = parseFloat(document.getElementById("in"+"rd"+tipo).value);
    let Vp = parseFloat(document.getElementById("in"+"Vp"+tipo).value);
    let Vgs = parseFloat(document.getElementById("in"+"Vgs"+tipo).value);
    let Yos = parseFloat(document.getElementById("in"+"Yos"+tipo).value);
    let Idss = parseFloat(document.getElementById("in"+"Idss"+tipo).value);
    let Id = parseFloat(document.getElementById("in"+"Id"+tipo).value);
    let RS = parseFloat(document.getElementById("in"+"RS"+tipo).value);
    let RL = parseFloat(document.getElementById("in"+"RL"+tipo).value);
    if(document.getElementById("in"+"rd"+tipo).value == ""){
        rd = 1/Yos;
    }
    if(document.getElementById("in"+"Yos"+tipo).value == ""){
        Yos = 1/rd;
    }
    if(document.getElementById("in"+"Vgs"+tipo).value == ""){
        Vgs = Vp*(1-Math.sqrt(Id/Idss));
    }
    gm = 2*Idss*(1-(Vgs/Vp))/Math.abs(Vp);
    Avnl = gm*prl(Rs,rd)/(1+gm*prl(Rs,rd));
    Zi = Rg;
    Zo = prl(prl(Rs,rd),1/gm);
    let Av = Avnl;
    if(document.getElementById("in"+"RS"+tipo).value == "" && document.getElementById("in"+"RL"+tipo).value == ""){
        Av = Avnl;
    }else if(document.getElementById("in"+"RS"+tipo).value == "" || RS == 0.0){
        Av = Avnl*(RL/(RL+Zo));
    }else if(document.getElementById("in"+"RL"+tipo).value == "" || RL == 0.0){
        Av = Avnl*(Zi/(Zi+RS));
    }else{
        Av = Avnl*(RL/(RL+Zo))*(Zi/(Zi+RS));
    }
    let saidas = ["rd","Yos","Vgs","gm","Avnl","Zi","Zo","Av"];
    for(i=0, l=saidas.length; i<l; i++){
        document.getElementById("res"+saidas[i]+tipo).textContent = eval(saidas[i]).toExponential(5);
    }
}