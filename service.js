//textfields
let servicetype 
let frbr
let rrbr 
let trfr
let trrr
let oiltype 
let oilqt 
let filtertype
//checkboxes
let midchbx = document.getElementById("midyearcheckbox");
let sixtykchbx = document.getElementById("60kcheckbox");
let occhbx = document.getElementById("oilchangecheckbox");
let spchbx = document.getElementById("spcheckbox");
let efichbx = document.getElementById("eficheckbox");
let acfchbx = document.getElementById("acfiltercheckbox");
let engfiltchbx = document.getElementById("enginefiltercheckbox");

//clear input text fields and checkboxes
document.getElementById("clearbutton").onclick = function(){
    console.log("clearbtnpressed");
   document.getElementById("frbrinput").value = null;
   document.getElementById("rrbrinput").value = null;
    document.getElementById("trfr").value = null;
    document.getElementById("trrr").value = null;
    document.getElementById("filterinput").value = null;
    document.getElementById("oiltypeinput").value = null;
    document.getElementById("oilqtinput").value = null;
    engfiltchbx.checked=false;
    acfchbx.checked=false;
    efichbx.checked=false;
    midchbx.checked=false;
    sixtykchbx.checked=false;
    occhbx.checked=false;
    spchbx.checked=false;
}
//keyboard shorcuts for insert and copy
document.addEventListener('keypress', function(e) { 
    if (e.keyCode === 13) {
        document.getElementById("copybutton").click();
}});  
document.addEventListener('keypress', function(e){ 
    if (e.keyCode == 32) {
        document.getElementById("insertbutton").click();  
}});
//oil filter and oil type buttons set text field values        
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
document.getElementById("d1btn").onclick = function(){
    document.getElementById("filterinput").value = "D1";
}
document.getElementById("d3btn").onclick = function(){
    document.getElementById("filterinput").value = "D3";
}
//checkbox auto-unchecks service type
document.getElementById("midyearcheckbox").onclick=function(){
if (midchbx.checked==true){
    sixtykchbx.checked=false;
    occhbx.checked = false;
    
}}
document.getElementById("60kcheckbox").onclick=function(){
    if (sixtykchbx.checked==true){
        midchbx.checked = false;
        occhbx.checked = false;
}}
document.getElementById("oilchangecheckbox").onclick=function(){
        if (occhbx.checked==true){
            midchbx.checked = false;
            sixtykchbx.checked = false;
}}
//collect input values
function getInputValues(){
    frbr = document.getElementById("frbrinput").value;
    rrbr = document.getElementById("rrbrinput").value;
    trfr = document.getElementById("trfr").value;
    trrr = document.getElementById("trrr").value;
    filtertype = document.getElementById("filterinput").value;
    oiltype = document.getElementById("oiltypeinput").value;
    oilqt = document.getElementById("oilqtinput").value;
}
//insert values into final text field
document.getElementById("insertbutton").onclick = function()
{
    getInputValues();
    if(midchbx.checked == true){
        midYear();
    }
    else if(sixtykchbx.checked==true){
        sixtyK();
    }
    else if (occhbx.checked==true){
        oilChange();
    }
}
//copy to clipboard
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
}  
//writingfunctions
function midYear(){
    if(efichbx.checked==true){
        document.getElementById("storyFinal").value = "MIDYEAR SERVICE NO OIL CHANGE\nPERFORM BATTERY CHECK, OK\nTOPPED OFF FLUIDS, ADDED KREX AND EFI\nROTATED TIRES, SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
    }
    else{
    document.getElementById("storyFinal").value = "MIDYEAR SERVICE NO OIL CHANGE\nPERFORM BATTERY CHECK, OK\nTOPPED OFF FLUIDS, ADDED KREX\nROTATED TIRES, SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}}
function oilChange(){
    if(efichbx.checked==true){
        if(acfchbx.checked==true){
            document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nREPLACED AC FILTER\nADDED EFI FUEL ADDITIVE\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
        }
        else{
        document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nADDED EFI FUEL ADDITIVE\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
    }}
    else if(acfchbx.checked==true){
        if(engfiltchbx.checked==true){
            document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nREPLACED ENGINE AND AC AIR FILTERS\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
        }
        else{
        document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nREPLACED AC FILTER\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + " /32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
    }}
    else if(engfiltchbx.checked==true){
        document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nREPLACED ENGINE AIR FILTER\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
    }
    else if(spchbx.checked==true){
        document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nREPLACED ALL SPARK PLUGS. TORQUED TO SPEC\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
    }
    else{
    document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}}
function sixtyK(){
    document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nREPLACED ENGINE AIR FILTER\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + " /32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nDRAIN AND REFILL ATF\nDRAIN AND FILL COOLANT, BLEED COOLING SYSTEM\nREPLACE GEAR OIL, ADD EFI\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}

//bg services auto fill final field
document.getElementById("brakeflushbtn").onclick = function(){
    document.getElementById("storyFinal").value = "PERFORM BG BRAKE FLUID FLUSH\nREPLACE FLUID IN BRAKE FLUID RESERVOIR\nAPPLY PRESSURE TO BRAKE SYSTEM\nBLEED BRAKE FLUID AT EACH WHEEL\nADJUST FLUID LEVEL";
}
document.getElementById("inductionbtn").onclick = function(){
    document.getElementById("storyFinal").value = "PERFORM BG AIR INDUCTION SERVICE\nDISCONNECT AIR INTAKE HOSE AND INSERT INDUCTION CLEANER\nRUN VEHICLE AND SNAP THROTTLE INTERMITTENTLY\nREINSTALL INTAKE AND ADD BG FUEL ADDITIVE";
}
document.getElementById("atfbtn").onclick = function(){
    document.getElementById("storyFinal").value = "CHECK AND ADJUST ATF LEVEL, ADD ATF CLEANER\nDISCONNECT TRANSMISSION LINE AND INSTALL BG ATF FLUSH MACHINE LINES\nRUN VEHICLE\nREINSTALL TRANSMISSION LINES\nVERIFY FLUID LEVEL OK";
}
document.getElementById("coolantbtn").onclick=function(){
    document.getElementById("storyFinal").value = "PERFORM BG COOLANT FLUSH SERVICE\nSTART VEHICLE AND BRING TO OPERATING TEMP\nBLEED COOLING SYSTEM";
}
document.getElementById("psbtn").onclick=function(){
    document.getElementById("storyFinal").value = "PERFORM BG POWER STEERING FLUSH SERVICE\nBLEED POWER STEERING SYSTEM";
}

//spencer
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
//divider title expands categories
document.getElementById("factorymenubutton").onclick=function(){
    document.getElementById("factorymenu").toggleAttribute("hidden");
}
document.getElementById("bgbutton").onclick=function(){
    document.getElementById("bg").toggleAttribute("hidden");
}
document.getElementById("miscbtn").onclick=function(){
    document.getElementById("misc").toggleAttribute("hidden");
}
//clear final text field
document.getElementById("finalstoryclearbutton").onclick=function(){
    document.getElementById("storyFinal").value=null;
}



