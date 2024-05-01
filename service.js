//count clicks
let uses = +localStorage.getItem("numberofclicks");

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
let insertchbx = document.getElementById("insertcheckbox");
let bladechbx = document.getElementById("bladecheckbox");
let lhbulbchbx = document.getElementById("lhbulb");
let rhbulbchbx = document.getElementById("rhbulb");
let ocochbx = document.getElementById("oco");
//clear input text fields and checkboxes
document.getElementById("clearbutton").onclick = function(){
    whosUsing();
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
    ocochbx.checked=false;
}
//keyboard shorcuts for insert and copy
document.addEventListener('keydown', function(e) { 
    if (e.key == "Control") {
        document.getElementById("copybutton").click();
}});  
document.addEventListener('keydown', function(e){ 
    if (e.key == " ") {
        document.getElementById("insertbutton").click();  
       
}});
//oil filter and oil type buttons set text field values        
document.getElementById("530btn").onclick = function(){
    whosUsing();
    document.getElementById("oiltypeinput").value = "5W30";
}
document.getElementById("520btn").onclick = function(){
    whosUsing();
    document.getElementById("oiltypeinput").value = "5W20";
}
document.getElementById("020btn").onclick = function(){
    whosUsing();
    document.getElementById("oiltypeinput").value = "0W20";
}
document.getElementById("016btn").onclick = function(){
    whosUsing();
    document.getElementById("oiltypeinput").value = "0W16";
}
document.getElementById("a1btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "A1";
}
document.getElementById("a4btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "A4";
}
document.getElementById("a5btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "A5";
}
document.getElementById("a6btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "A6";
}
document.getElementById("n1btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "N1";
}
document.getElementById("d1btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "D1";
}
document.getElementById("d3btn").onclick = function(){
    whosUsing();
    document.getElementById("filterinput").value = "D3";
}
//checkbox auto-unchecks service type
document.getElementById("midyearcheckbox").onclick=function(){
    whosUsing();
if (midchbx.checked==true){
    sixtykchbx.checked=false;
    occhbx.checked = false;
    ocochbx.checked = false;
}}
document.getElementById("60kcheckbox").onclick=function(){
    whosUsing();
    if (sixtykchbx.checked==true){
        midchbx.checked = false;
        occhbx.checked = false;
        ocochbx.checked = false;
}}
document.getElementById("oilchangecheckbox").onclick=function(){
    whosUsing();
        if (occhbx.checked==true){
            midchbx.checked = false;
            sixtykchbx.checked = false;
            ocochbx.checked = false;
}}
document.getElementById("oco").onclick=function(){
    whosUsing();
    if (ocochbx.checked==true){
        midchbx.checked = false;
        sixtykchbx.checked = false;
        occhbx.checked = false;
}}
//checkbox auto-unchecks insert or blades
document.getElementById("insertcheckbox").onclick=function(){
    whosUsing();
    if (insertchbx.checked==true){
        bladechbx.checked = false;
}}
document.getElementById("bladecheckbox").onclick=function(){
    whosUsing();
    if (bladechbx.checked==true){
        insertchbx.checked = false;
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
    whosUsing();
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
    else if (ocochbx.checked==true){
        threeK();
    }
}
//copy to clipboard
document.getElementById("copybutton").onclick = function(){
    whosUsing();
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
function threeK(){
    document.getElementById("storyFinal").value = "TOPPED OFF FLUIDS\nPERFORM BATTERY CHECK\nSET TO 35 PSI\n" + oilqt + "QT " + oiltype + " OIL FILTER " + filtertype +" ADDED KREX\nRESET MAINTENANCE LIGHT";

}
//bg services auto fill final field
document.getElementById("brakeflushbtn").onclick = function(){
    whosUsing();
    document.getElementById("storyFinal").value = "PERFORM BG BRAKE FLUID FLUSH\nREPLACE FLUID IN BRAKE FLUID RESERVOIR\nAPPLY PRESSURE TO BRAKE SYSTEM\nBLEED BRAKE FLUID AT EACH WHEEL\nADJUST FLUID LEVEL";
}
document.getElementById("inductionbtn").onclick = function(){
    whosUsing();
    document.getElementById("storyFinal").value = "PERFORM BG AIR INDUCTION SERVICE\nDISCONNECT AIR INTAKE HOSE AND INSERT INDUCTION CLEANER\nRUN VEHICLE AND SNAP THROTTLE INTERMITTENTLY\nREINSTALL INTAKE AND ADD BG FUEL ADDITIVE";
}
document.getElementById("atfbtn").onclick = function(){
    whosUsing();
    document.getElementById("storyFinal").value = "CHECK AND ADJUST ATF LEVEL, ADD ATF CLEANER\nDISCONNECT TRANSMISSION LINE AND INSTALL BG ATF FLUSH MACHINE LINES\nRUN VEHICLE\nREINSTALL TRANSMISSION LINES\nVERIFY FLUID LEVEL OK";
}
document.getElementById("coolantbtn").onclick=function(){
    whosUsing();
    document.getElementById("storyFinal").value = "PERFORM BG COOLANT FLUSH SERVICE\nSTART VEHICLE AND BRING TO OPERATING TEMP\nBLEED COOLING SYSTEM";
}
document.getElementById("psbtn").onclick=function(){
    whosUsing();
    document.getElementById("storyFinal").value = "PERFORM BG POWER STEERING FLUSH SERVICE\nBLEED POWER STEERING SYSTEM";
}
//misc
    //filters autofill
    document.getElementById("acfilterbtn").onclick=function(){
        whosUsing();
        document.getElementById("storyFinal").value = "REPLACED AC FILTER";
    }
    document.getElementById("enginefilterbtn").onclick=function(){
        whosUsing();
        document.getElementById("storyFinal").value = "REPLACED ENGINE AIR FILTER";
    }
    document.getElementById("engineacbtn").onclick=function(){
        whosUsing();
        document.getElementById("storyFinal").value = "REPLACED ENGINE AND AC AIR FILTERS";
    }
    //wipers checkbox for inserts or blades then autofill
    document.getElementById("frwiperbtn").onclick=function(){
        whosUsing();
        if(insertchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH FRONT WIPER INSERTS";
        }
        if(bladechbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH FRONT WIPER BLADES";
        }}
    document.getElementById("rrwiperbtn").onclick=function(){
        whosUsing();
        if(insertchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED REAR WIPER INSERT";
        }
        if(bladechbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED REAR WIPER BLADE";
        }}
    //battery autofill
    document.getElementById("battbtn").onclick=function(){
        whosUsing();
        document.getElementById("storyFinal").value = "REPLACED 12V BATTERY\nCLEAN POS AND NEG TERMINALS\nTORQUE TO SPEC AND APPLY BATTERY TERMINAL PROTECTOR\nVERIFY OPERATION OF STARTING AND CHARGING SYSTEMS, OK";
    }
    document.getElementById("keyfobbtn").onclick=function(){
        whosUsing();
        document.getElementById("storyFinal").value = "REPLACE KEY FOB BATTERY";
    }
    //bulbs checkbox for location and then autofill
    document.getElementById("headlightbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH HEADLIGHT BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH HEADLIGHT BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH HEADLIGHT BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("taillightbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH TAIL LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH TAIL LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH TAIL LIGHT BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("turnsignalfrbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LF TURN SIGNAL BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RF TURN SIGNAL BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH FRONT TURN SIGNAL BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("turnsignalrrbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LR TURN SIGNAL BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RR TURN SIGNAL BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH REAR TURN SIGNAL BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("licensebtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH LICENSE PLATE LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH LICENSE PLATE LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH LICENSE PLATE LIGHT BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("sidemarkerbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH SIDE MARKER BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH SIDE MARKER BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH SIDE MARKER BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("reversebtn").onclick=function(){
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH REVERSE BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH REVERSE BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH REVERSE BULBS\nCHECK OPERATION, OK";
        }}
    document.getElementById("brakelightbtn").onclick=function(){
        whosUsing();
        if(lhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED LH BRAKE LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED RH BRAKE LIGHT BULB\nCHECK OPERATION, OK";
        }
        if(lhbulbchbx.checked==true&&rhbulbchbx.checked==true){
            document.getElementById("storyFinal").value = "REPLACED BOTH BRAKE LIGHT BULBS\nCHECK OPERATION, OK";
        }}
     //QC
     document.getElementById("qcBtn").onclick=function(){
        document.getElementById("storyFinal").value="PERFORM QC";
     }
     //KREX   
     document.getElementById("krexBtn").onclick=function(){
        document.getElementById("storyFinal").value="ADDED KREX";
     }
//spencer
document.getElementById("spencerbutton").onclick = function(){
    whosUsing();
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
//divider title expands categories
    //declare all things to hide
let factoryMenuHidden = document.getElementById("factorymenu");
let bgHidden = document.getElementById("bg");
let miscHidden = document.getElementById("misc");
let miscDiv1 = document.getElementById("miscDiv1");
let miscDiv2 = document.getElementById("miscDiv2");
let miscDiv3 = document.getElementById("miscDiv3");
let miscDiv4 = document.getElementById("miscDiv4");


document.getElementById("factorymenubutton").onclick=function(){
    whosUsing();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    if(factoryMenuHidden.style.display==="none"){
        closeDivs();
        factoryMenuHidden.style.display="inline-block";
    }
    else if(factoryMenuHidden.style.display==="inline-block"){
        factoryMenuHidden.style.display="none";
    }
     if(document.getElementById("factorymenubutton").style.backgroundColor=="black"){
        document.getElementById("factorymenubutton").style.backgroundColor="green";
            document.getElementById("miscbtn").style.backgroundColor="black";
            document.getElementById("bgbutton").style.backgroundColor="black";
    }
    else if(document.getElementById("factorymenubutton").style.backgroundColor=="green"){
        document.getElementById("factorymenubutton").style.backgroundColor="black";
    }
}


    
document.getElementById("bgbutton").onclick=function(){
    whosUsing();
    document.getElementById("menu1").setAttribute("hidden","hidden");    
    if(bgHidden.style.display==="none"){
        closeDivs();
        bgHidden.style.display="inline-block";
        
    }
    else if(bgHidden.style.display==="inline-block"){
        bgHidden.style.display="none";
    }
    if(document.getElementById("bgbutton").style.backgroundColor=="black"){
        document.getElementById("bgbutton").style.backgroundColor="green";
            document.getElementById("miscbtn").style.backgroundColor="black";
            document.getElementById("factorymenubutton").style.backgroundColor="black";
    }
    else if(document.getElementById("bgbutton").style.backgroundColor=="green"){
        document.getElementById("bgbutton").style.backgroundColor="black";
    }



}

document.getElementById("miscbtn").onclick=function(){
    whosUsing();
    if(document.getElementById("miscbtn").style.backgroundColor=="black"){
    document.getElementById("miscbtn").style.backgroundColor="green";
        document.getElementById("bgbutton").style.backgroundColor="black";
        document.getElementById("factorymenubutton").style.backgroundColor="black";
    }
    else if(document.getElementById("miscbtn").style.backgroundColor=="green"){
    document.getElementById("miscbtn").style.backgroundColor="black";
    }
    closeDivs();
    document.getElementById("menu1").toggleAttribute("hidden");
}
//misc submenu buttons
        document.getElementById("miscDiv1Btn").onclick=function(){   
            whosUsing();          
                if(miscDiv1.style.display==="none"){
                    closeDivs();
                    miscDiv1.style.display="inline-block";
                }
                else if(miscDiv1.style.display==="inline-block"){
                    miscDiv1.style.display="none";
                }}
        document.getElementById("miscDiv2Btn").onclick=function(){
            whosUsing();
                if(miscDiv2.style.display==="none"){
                    closeDivs();
                    miscDiv2.style.display="inline-block";
                }
                else if(miscDiv2.style.display==="inline-block"){
                    miscDiv2.style.display="none";
                }}     
        document.getElementById("miscDiv3Btn").onclick=function(){
            whosUsing();
                if(miscDiv3.style.display==="none"){
                    closeDivs();
                    miscDiv3.style.display="inline-block";
                }
                else if(miscDiv3.style.display==="inline-block"){
                    miscDiv3.style.display="none";
                }}    
        document.getElementById("miscDiv4Btn").onclick=function(){
            whosUsing();
                if(miscDiv4.style.display==="none"){
                    closeDivs();
                    miscDiv4.style.display="inline-block";
                }
                else if(miscDiv4.style.display==="inline-block"){
                    miscDiv4.style.display="none";
                }}   
//clear final text field
document.getElementById("finalstoryclearbutton").onclick=function(){
    document.getElementById("storyFinal").value=null;
    whosUsing();
}
function closeDivs(){
        factoryMenuHidden.style.display="none";
        bgHidden.style.display="none";
        miscDiv1.style.display="none";
        miscDiv2.style.display="none";
        miscDiv3.style.display="none";
        miscDiv4.style.display="none";
}

function whosUsing(){
    uses++;
    localStorage.setItem("numberofclicks", uses);
}

