console.log("VASCO.js");
let tEn = 0;
let tFP = 0;

let Sn = "";
let V1 = "";
let V2 = "";
let Vvz = "";
let Ivz = "";
let Pvz = "";
let Vcc = "";
let Icc = "";
let Pcc = "";
let FP = "";
let So = "";
let Vo = "";
let a = "";

let Rc1 = "-";
let Rc2 = "-";
let Rphi = "-";
let Zphi = "-";
let Xphi = "-";
let Xm1 = "-";
let Xm2 = "-";

let Req = "-";
let R1 = "-";
let R2 = "-";
let Zcc = "-";
let Xeq = "-";
let X1 = "-";
let X2 = "-";

let I2 = "-";
let E2 = "-";
let Ic = "-";
let Im = "-";
let Iphi = "-";
let I1_ = "-";
let V1_ = "-";
let V1o = "-";
let I1 = "-";
let Pcu1 = "-";
let Pcu2 = "-";
let Pcu = "-";
let Pnu = "-";
let Pt = "-";
let Rt = "-";
let Nef = "-";

function calcular(){
    lerEntradas()
    calcularEnVz()
    calcularEnCc()
    // calcularEf()
}

function lerEntradas(){
    let entradas = ["Sn","V1","V2","Vvz","Ivz","Pvz","Vcc","Icc","Pcc","FP","So","Vo"];
    for(i=0, l=entradas.length; i<l; i++){
        if(document.getElementById("in"+entradas[i]).value === ""){
            document.getElementById("in"+entradas[i]).style.backgroundColor = "red";
        }else{
            document.getElementById("in"+entradas[i]).style.backgroundColor = "white";
        }
    }
    Sn = document.getElementById("inSn").value;
    V1 = document.getElementById("inV1").value;
    V2 = document.getElementById("inV2").value;
    Vvz = document.getElementById("inVvz").value;
    Ivz = document.getElementById("inIvz").value;
    Pvz = document.getElementById("inPvz").value;
    Vcc = document.getElementById("inVcc").value;
    Icc = document.getElementById("inIcc").value;
    Pcc = document.getElementById("inPcc").value;
    FP = document.getElementById("inFP").value;
    if(document.getElementById("inSo").value == ""){
        So = Sn;
    }else{
        So = document.getElementById("inSo").value;
    }
    if(document.getElementById("inVo").value == ""){
        Vo = V2;
    }else{
        Vo = document.getElementById("inVo").value;
    }
    a = V1/V2;
}

function calcularEnVz(){
    Rphi = Pvz/Ivz**2;
    Zphi = Vvz/Ivz;
    Xphi = Math.sqrt(Zphi**2 - Rphi**2);
    if(tEn == 0){
        Rc1 = Vvz**2/Pvz;
        Rc2 = Rc1/a**2;
        Xm1 = (Rphi**2+Xphi**2)/Xphi;
        Xm2 = Xm1/a**2;
    }
    if(tEn == 1){
        Rc2 = Vvz**2/Pvz;
        Rc1 = Rc2*a**2;
        Xm2 = (Rphi**2+Xphi**2)/Xphi;
        Xm1 = Xm2*a**2;
    }
    let calEnVz = ["Rc1","Rc2","Rphi","Zphi","Xphi","Xm1","Xm2"];
    for(i=0, l=calEnVz.length; i<l; i++){
        document.getElementById("res"+calEnVz[i]).textContent = eval(calEnVz[i])
    }
}

function calcularEnCc(){
    Req = Pcc/Icc**2;
    Zcc = Vcc/Icc;
    Xeq = Math.sqrt(Zcc**2 - Req**2);
    if(tEn == 0){
        R2 = Req/2;
        R1 = R2*a**2;
        X2 = Xeq/2;
        X1 = X2*a**2;
    }
    if(tEn == 1){
        R1 = Req/2;
        R2 = R1/a**2;
        X1 = Xeq/2;
        X2 = X1/a**2;
    }
    let calEnCc = ["Req","R1","R2","Zcc","Xeq","X1","X2"];
    for(i=0, l=calEnCc.length; i<l; i++){
        document.getElementById("res"+calEnCc[i]).textContent = eval(calEnCc[i])
    }
}

class Complex{
    constructor(a,b){
        this.re = a
        this.im = b
    }
    mult(n){
        const re = this.re*n.re - this.im*n.im;
        const im = this.re*n.im + this.im*n.re;
        return new Complex(re,im);
    }
    pol(){
        this.rho = Math.sqrt(this.im**2 + this.im**2)
        this.phi = Math.atan(this.im/this.re)
        return "${this.rho} > ${}º"
    }
}

function rec(rho,phi){
    x = rho*Math.cos(Math.PI*phi/180)
    y = rho*Math.sin(Math.PI*phi/180)
    n = Complex(x,y)
}

function calcularEf(){
    console.clear()
    So = rec(So,Math.acos(FP))
    console.log(So)
    I2 = So/Vo
    console.log(I2)
}

function cfgFP(){
    varFP = document.getElementsByName("tFP");
    for (i=0, l=varFP.length; i<l; i++){
        if (varFP[i].checked){
            tFP = varFP[i].value;
        }
    }
    calcular()
}

function cfgTEn(tipo){
    if(tipo === "Vz"){
        varEnVz = document.getElementsByName("tEnVz");
        for (i=0, l=varEnVz.length; i<l; i++){
            if (varEnVz[i].checked){
                tEn = varEnVz[i].value;
            }
        }
        varEnCc = document.getElementsByName("tEnCc");
        for (i=0, l=varEnCc.length; i<l; i++){
            if(varEnCc[i].value === tEn){
                varEnCc[i].checked = true;
            }
            else{
                varEnCc[i].checked = false;
            }
        }
    }
    if(tipo === "Cc"){
        varEnCc = document.getElementsByName("tEnCc");
        for (i=0, l=varEnCc.length; i<l; i++){
            if (varEnCc[i].checked){
                tEn = varEnCc[i].value;
            }
        }
        varEnVz = document.getElementsByName("tEnVz");
        for (i=0, l=varEnVz.length; i<l; i++){
            if(varEnVz[i].value === tEn){
                varEnVz[i].checked = true;
            }
            else{
                varEnVz[i].checked = false;
            }
        }
    }
    // https://math.vercel.app/home
    let ordImgTEnVz = ["Rc1","Rc2","Xm1","Xm2"];
    let ordImgTEnCc = ["R1","R2","X1","X2"];
    let urlImgTEnVz0 = {
        Rc1: "R_%7Bc1%7D%3D%5Cfrac%7BV_%7Bvz%7D%5E%7B2%7D%7D%7BP_%7Bvz%7D%7D",
        Rc2: "R_%7Bc2%7D%3D%5Cfrac%7BR_%7Bc1%7D%7D%7Ba%5E%7B2%7D%7D",
        Xm1: "X_%7Bm1%7D%3D%5Cfrac%7BR_%7B%5Cpsi%7D%5E%7B2%7D%2BX_%7B%5Cpsi%7D%5E%7B2%7D%7D%7BX_%7B%5Cpsi%7D%7D",
        Xm2: "X_%7Bm2%7D%3D%5Cfrac%7BX_%7Bm1%7D%7D%7Ba%5E%7B2%7D%7D",
    };
    let urlImgTEnCc0 = {
        R1: "R_%7B1%7D%3DR_%7B2%7D.a%5E%7B2%7D",
        R2: "R_%7B2%7D%3D%5Cfrac%7BR_%7Beq%7D%7D%7B2%7D",
        X1: "X_%7B1%7D%3DX_%7B2%7D.a%5E%7B2%7D",
        X2: "X_%7B2%7D%3D%5Cfrac%7BX_%7Beq%7D%7D%7B2%7D",
    };
    let urlImgTEnVz1 = {
        Rc1: "R_%7Bc1%7D%3DR_%7Bc2%7D.a%5E%7B2%7D",
        Rc2: "R_%7Bc2%7D%3D%5Cfrac%7BV_%7Bvz%7D%5E%7B2%7D%7D%7BP_%7Bvz%7D%7D",
        Xm1: "X_%7Bm1%7D%3DX_%7Bm2%7D.a%5E%7B2%7D",
        Xm2: "X_%7Bm2%7D%3D%5Cfrac%7BR_%7B%5Cpsi%7D%5E%7B2%7D%2BX_%7B%5Cpsi%7D%5E%7B2%7D%7D%7BX_%7B%5Cpsi%7D%7D",
    };
    let urlImgTEnCc1 = {
        R1: "R_%7B1%7D%3D%5Cfrac%7BR_%7Beq%7D%7D%7B2%7D",
        R2: "R_%7B2%7D%3DR_%7B1%7D.a%5E%7B2%7D",
        X1: "X_%7B1%7D%3D%5Cfrac%7BX_%7Beq%7D%7D%7B2%7D",
        X2: "X_%7B2%7D%3DX_%7B1%7D.a%5E%7B2%7D",
    };
    if(tEn == 0){
        for(i=0, l=ordImgTEnVz.length; i<l; i++){
            document.getElementById("img"+ordImgTEnVz[i]).src = "https://math.now.sh?from="+urlImgTEnVz0[ordImgTEnVz[i]]+"&color=black&alternateColor=white";
            document.getElementById("img"+ordImgTEnCc[i]).src = "https://math.now.sh?from="+urlImgTEnCc0[ordImgTEnCc[i]]+"&color=black&alternateColor=white";
        }
    }
    if(tEn == 1){
        for(i=0, l=ordImgTEnVz.length; i<l; i++){
            document.getElementById("img"+ordImgTEnVz[i]).src = "https://math.now.sh?from="+urlImgTEnVz1[ordImgTEnVz[i]]+"&color=black&alternateColor=white";
            document.getElementById("img"+ordImgTEnCc[i]).src = "https://math.now.sh?from="+urlImgTEnCc1[ordImgTEnCc[i]]+"&color=black&alternateColor=white";
        }
    }
    calcular();
}