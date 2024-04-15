
let servicetype 
let frbr
let rrbr 
let trfr
let trrr
let oiltype 
let oilqt 
let filtertype
let checkbox = document.getElementById("midyearcheckbox");
document.getElementById("530btn").onclick = function(){
    document.getElementById("oiltypeinput").value = "5W30";
}
document.getElementById("520btn").onclick = function(){
    document.getElementById("oiltypeinput").value = "5W20";
}
document.getElementById("020btn").onclick = function(){
    document.getElementById("oiltypeinput").value = "0W20";
}
document.getElementById("016btn").onclick = function(){
    document.getElementById("oiltypeinput").value = "0W16";
}
document.getElementById("a1btn").onclick = function(){
    document.getElementById("filterinput").value = "A1";
}
document.getElementById("a4btn").onclick = function(){
    document.getElementById("filterinput").value = "A4";
}
document.getElementById("a5btn").onclick = function(){
    document.getElementById("filterinput").value = "A5";
}
document.getElementById("a6btn").onclick = function(){
    document.getElementById("filterinput").value = "A6";
}
document.getElementById("n1btn").onclick = function(){
    document.getElementById("filterinput").value = "N1";
}
document.getElementById("d3btn").onclick = function(){
    document.getElementById("filterinput").value = "D3";
}
function getInputValues(){
    servicetype = document.getElementById("serviceinput").value;
    frbr = document.getElementById("frbrinput").value;
    rrbr = document.getElementById("rrbrinput").value;
    trfr = document.getElementById("trfr").value;
    trrr = document.getElementById("trrr").value;
    filtertype = document.getElementById("filterinput").value;
    oiltype = document.getElementById("oiltypeinput").value;
    oilqt = document.getElementById("oilqtinput").value;
}
document.getElementById("insertbutton").onclick = function()
{
    getInputValues();
    if(checkbox.checked == true){
        midYear();
    }
    else{
        oilChange();
    }
}
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
}  
function midYear(){
    document.getElementById("storyFinal").value = "MIDYEAR SERVICE NO OIL CHANGE\nPERFORM BATTERY CHECK, OK\nTOPPED OFF FLUIDS, ADDED KREX\nROTATED TIRES, SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + " /32 OK\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
function oilChange(){
    document.getElementById("storyFinal").value = "PERFORM " + servicetype + "K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + " /32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
