

let login = sessionStorage.getItem("login");

if((login=="null")||(login==null)){
    document.getElementById("main").setAttribute("hidden","hidden");
    document.getElementById("login").removeAttribute("hidden");
}
else{
    document.getElementById("login").setAttribute("hidden","hidden");
    document.getElementById("main").removeAttribute("hidden");
}

document.getElementById("loginBtn").onclick=function(){
    let a = document.getElementById("x").value;
    let b = document.getElementById("y").value;
    if((a == "dev32492u3nkjfdsnt")&&(b=="teste0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3nkjfdsnt")&&(b=="teste0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3nkjfdsnt")&&(b=="teste0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3nkjfdsnt")&&(b=="teste0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "devtest")&&(b=="tester188")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3njfdsnt")&&(b=="teste092342knsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3nkjfdsnt")&&(b=="t3este0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492u3nkjfd3snt")&&(b=="teste09233jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "dev32492nkjfdsnt")&&(b=="teste0923j42knsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    if((a == "de48283492v32492u3nkjfdsnt")&&(b=="teste423v0923jknsdo")){
        document.getElementById("main").removeAttribute("hidden");
        document.getElementById("login").setAttribute("hidden","hidden");
        sessionStorage.setItem("login", "xyz");}
    else {
        document.getElementById("failed").textContent = "INVALID LOGIN"
    }}


let sec = 0;
let count =0;
total = 0; 
let init = +localStorage.getItem("init");

document.getElementById("timeOutBtn").onclick=function(){
    document.getElementById("timerActive").removeAttribute("hidden");



    document.getElementById("timeInBtn").removeAttribute("disabled");
    document.getElementById("timeInBtn").style.backgroundColor="darkslategray";
    document.getElementById("timeOutBtn").setAttribute("disabled", "disabled");
    document.getElementById("timeOutBtn").style.backgroundColor="gray";


    let x = new Date();
    let y = x.getTime();
    localStorage.setItem("startTime",y);
}
document.getElementById("timeInBtn").onclick=function(){
    document.getElementById("timerActive").setAttribute("hidden","hidden");
    




    document.getElementById("timeOutBtn").removeAttribute("disabled");
    document.getElementById("timeOutBtn").style.backgroundColor="darkslategray";
    document.getElementById("timeInBtn").setAttribute("disabled", "disabled");
    document.getElementById("timeInBtn").style.backgroundColor="gray";

    document.getElementById("day").innerHTML = sec;

    splitTime();
    dayTime();
    
}



function splitTime(){
    
    count++;
    let x = new Date();
    let y = x.getTime();
    let z = +localStorage.getItem("startTime");
    let a = (y - z)/1000;
    sec = a/60;
    localStorage.setItem("splitTime"+count, sec);
    localStorage.setItem("init", init);
   document.getElementById("day").textContent = sec;
}

document.getElementById("deletestorage").onclick=function(){
    localStorage.clear();
}

function dayTime(){

let x = +localStorage.getItem("init");
let y = +localStorage.getItem("splitTime"+count);
 init = x+y;
localStorage.setItem("init",init);
document.getElementById("totalpd").innerHTML = init;


 




}





