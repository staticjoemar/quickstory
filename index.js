let servicetype 
let frbr
let rrbr 
let trfr
let trrr
let oiltype 
let oilqt 
let filtertype
let midcheckbox = document.getElementById("midyearcheckbox");
let sixtykcheckbox = document.getElementById("60kcheckbox");
let spcheckbox = document.getElementById("spcheckbox");
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
    if(midcheckbox.checked == true){
        midYear();
    }
    else if(sixtykcheckbox.checked==true){
        sixtyK();
    }
    else if(spcheckbox.checked == true){
        sparkPlugs();
    }
    else{
        oilChange();
    }
}
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
    alert("copied to clipboard");
}  
function midYear(){
    document.getElementById("storyFinal").value = "MIDYEAR SERVICE NO OIL CHANGE\nPERFORM BATTERY CHECK, OK\nTOPPED OFF FLUIDS, ADDED KREX\nROTATED TIRES, SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
function oilChange(){
    document.getElementById("storyFinal").value = "PERFORM " + servicetype + "K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
function sparkPlugs(){
    document.getElementById("storyFinal").value = "PERFORM 5K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nREPLACED ALL SPARK PLUGS. TORQUED TO SPEC\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
function sixtyK(){
    document.getElementById("storyFinal").value = "PERFORM " + servicetype + "K SERVICE PER FACTORY MENU\nPERFORM BATTERY CHECK,OK\nREPLACED ENGINE AIR FILTER\nTOPPED OFF FLUIDS SET TIRES 35 PSI\nBRAKES FRONT@ " + frbr + "MM REAR@ " + rrbr + "MM\nTIRES FRONT@ " + trfr + "/32 REAR@ " + trrr + "/32 OK\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype + " ADDED KREX\nDRAIN AND REFILL ATF\nDRAIN AND FILL COOLANT, BLEED COOLING SYSTEM\nREPLACE GEAR OIL, ADD EFI\nTORQUED LUG NUTS TO 80 FT LBS\nRESET MAINTENANCE LIGHT";
}
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
document.getElementById("frontbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK"
}
document.getElementById("rearbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK" 
}
document.getElementById("frontandrearbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK" 
}
document.getElementById("clearfieldsbutton").onclick = function(){
    document.getElementById("serviceinput").value = " ";
    document.getElementById("frbrinput").value = " ";
    document.getElementById("rrbrinput").value = " ";
    document.getElementById("trfr").value = " ";
   document.getElementById("trrr").value = " ";
    document.getElementById("filterinput").value = " ";
    document.getElementById("oiltypeinput").value = " ";
    document.getElementById("oilqtinput").value = " ";
}
    
