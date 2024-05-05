let uses = +localStorage.getItem("numberofclicks");

//checkboxes
let onetire = document.getElementById("1tire");
let twotire = document.getElementById("2tire");
let threetire = document.getElementById("3tire");
let fourtire = document.getElementById("4tire");
let replacerotor = document.getElementById("replacerotorscheckbox");
let lhcvchbx = document.getElementById("lhboot");
let rhcvchbx = document.getElementById("rhboot");
let tpms1 = document.getElementById("tpms1");
let tpms2 = document.getElementById("tpms2");
let tpms3 = document.getElementById("tpms3");
let tpms4 = document.getElementById("tpms4");
let tpms5 = document.getElementById("tpms5");


//keyboard shortcuts
document.addEventListener('keydown', function(e) { 
    if (e.key == "Control") {
        document.getElementById("copybutton").click();
}});  
document.addEventListener('keydown', function(e){ 
    if (e.key == " ") {
        document.getElementById("insertbutton").click();  
       
}});
 //copy function       
document.getElementById("copybutton").onclick = function(){
    whosUsing();
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
} 
//clear final text field
document.getElementById("finalstoryclearbutton").onclick=function(){
    whosUsing();
    document.getElementById("storyFinal").value=null;
}
//spencer 
document.getElementById("spencerbutton").onclick = function(){
    whosUsing();
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
//brakes main category
    //brakes check if rotors replaced and autofills field
        document.getElementById("frontbrakebutton").onclick = function (){
            whosUsing();
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
        }}
        document.getElementById("rearbrakebutton").onclick = function (){
            whosUsing();
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
        document.getElementById("frontandrearbrakebutton").onclick = function (){
            whosUsing();
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
     //booster autofills
        document.getElementById("replaceboosterbtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value ="REPLACED BRAKE BOOSTER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"
        }
     //mastery cylinder autofills
        document.getElementById("replacemasterbtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value ="DRAIN BRAKE RESERVOIR\nREPLACED BRAKE MASTER CYLINDER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nFILL AND BLEED MASTER CYLINDER\nBLEED ALL CALIPERS\nROAD TEST, OK\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"

        }
//steering suspension main      
    //tires check how many tires replaced and autofills
        document.getElementById("mountandbalancebutton").onclick = function(){
            whosUsing();
            if(onetire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE ONE TIRE\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(twotire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE TWO TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(threetire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE THREE TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(fourtire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE FOUR TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
        }
        document.getElementById("frAlignBtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value = "ALIGN FRONT SUSPENSION\nADJUST ANGLES TO SPEC\nROAD TEST, OK\nVEHICLE TRACKING STRAIGHT";
        }
        document.getElementById("AlignBtn").onclick=function(){
            document.getElementById("storyFinal").value = "ALIGN FRONT AND REAR SUSPENSION\nADJUST ANGLES TO SPEC\nROAD TEST, OK\nVEHICLE TRACKING STRAIGHT";
        }
    //CV axle autofills  
        document.getElementById("innerouterbtn").onclick=function(){
            whosUsing();
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE LH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE LH INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE RH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE RH INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE BOTH FRONT AXLES\nDISSASEMBLE BOTH FRONT CV AXLES\nREPLACE BOTH FRONT INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
        }
        document.getElementById("innerbtn").onclick=function(){
            whosUsing();
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE LH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE LH INNER CV BOOT\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE RH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE RH INNER CV BOOT\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE BOTH FRONT AXLES\nDISSASEMBLE BOTH FRONT CV AXLES\nREPLACE BOTH FRONT INNER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
        }
        document.getElementById("replaceShaft").onclick=function(){
            whosUsing();
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED LH CV AXLE ASSY\nREPLACED AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED RH CV AXLE ASSY\nREPLACED AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED BOTH FRONT CV AXLE ASSY\nREPLACED AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
        }
    //steering rack
        document.getElementById("steeringrackbtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value= "LOCK STEERING WHEEL\nDISCONNECT P/S LINES AND DRAIN FLUID\nDISCONNECT INTERMEDIATE SHAFT\nDISCONNECT BOTH OUTER TIE ROD ENDS\nREMOVE AND REPLACE STEERING RACK\nCENTER NEW PART\nREINSTALL TIE ROD ENDS AND REPLACE COTTER PINS\nREINSTALL P/S LINES\nREINSTALL INTERMEDIATE SHAFT\nFILL AND BLEED SYSTEM\nALIGN FRONT SUSPENSION AND ROAD TEST, OK";
        }
        document.getElementById("pspumpbtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value= "DRAIN P/S FLUID\nREMOVE DRIVE BELT\nREMOVE AND REPLACE P/S PUMP\nREINSTALL DRIVE BELT\nFILL AND BLEED P/S SYSTEM\nCHECK OPERATION, OK";
        }
        document.getElementById("pslinebtn").onclick=function(){
            whosUsing();
            document.getElementById("storyFinal").value= "REMOVE P/S LINE\nFILL AND BLEED P/S SYSTEM\nCHECK FOR LEAKS, OK";
        }
//Engine main
        //Valve Cover(s)
        document.getElementById("singleBank").onclick=function(){
            document.getElementById("storyFinal").value="REPLACED VALVE COVER GASKET AND TUBE SEALS\nCLEAN MATING SURFACES\nTORQUED TO SPEC AND CHECK FOR LEAKS, OK"
        }
        document.getElementById("doubleBank").onclick=function(){
            document.getElementById("storyFinal").value="REPLACED BOTH VALVE COVER GASKETS AND ALL TUBE SEALS\nCLEAN MATING SURFACES\nTORQUED TO SPEC AND CHECK FOR LEAKS, OK"

        }
//AC main
        //EVAP
        document.getElementById("evap").onclick=function(){
            document.getElementById("storyFinal").value="REPLACE EVAPORATOR CORE\nCHARGE REFRIGERANT TO SPEC\nFILL AND BLEED COOLING SYSTEM\nTEST DRIVE, OK\nVERIFY AC BLOWING COLD"
        }
        document.getElementById("evapCondenser").onclick=function(){
            document.getElementById("storyFinal").value="REPLACE EVAPORATOR CORE AND CONDENSER\nCHARGE REFRIGERANT TO SPEC\nFILL AND BLEED COOLING SYSTEM\nTEST DRIVE, OK\nVERIFY AC BLOWING COLD"

        }
//Electrical main
        //TPMS
        document.getElementById("rnrSensor").onclick=function(){
            if(tpms1.checked==true){
                document.getElementById("storyFinal").value="REPLACE ONE TPMS SENSOR\nSET TO 35 PSI\nREGISTER TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK\nTPMS LIGHT OFF.";
            }
            if(tpms2.checked==true){
                document.getElementById("storyFinal").value="REPLACE TWO TPMS SENSORS\nSET TO 35 PSI\nREGISTER TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK\nTPMS LIGHT OFF.";
            }
            if(tpms3.checked==true){
                document.getElementById("storyFinal").value="REPLACE THREE TPMS SENSORS\nSET TO 35 PSI\nREGISTER TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK\nTPMS LIGHT OFF.";

            }
            if(tpms4.checked==true){
                document.getElementById("storyFinal").value="REPLACE FOUR TPMS SENSORS\nSET TO 35 PSI\nREGISTER TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK\nTPMS LIGHT OFF.";

            }
            if(tpms5.checked==true){
                document.getElementById("storyFinal").value="REPLACE FIVE TPMS SENSORS\nSET TO 35 PSI\nREGISTER TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK\nTPMS LIGHT OFF.";

            }
        }
        //Keys
        document.getElementById("addKey").onclick=function(){
            document.getElementById("storyFinal").value="REGISTERED NEW KEY TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK"
        }
        document.getElementById("reseedKey").onclick=function(){
            document.getElementById("storyFinal").value="PERFORM RESEED PROCEDURE\nERASE ALL REGISTERED KEYS\nREGISTERED NEW KEY TO VEHICLE VIA TECHSTREAM\nCHECK OPERATION, OK"
        }
//transmission main
//menu change color
let hdrBtn1=document.getElementById("hdrBtn1");
let hdrBtn2=document.getElementById("hdrBtn2");
let hdrBtn3=document.getElementById("hdrBtn3");
let hdrBtn4=document.getElementById("hdrBtn4");
let hdrBtn5=document.getElementById("hdrBtn5");
let hdrBtn6=document.getElementById("hdrBtn6");


//Open Menus
document.getElementById("hdrBtn1").onclick=function(){
    whosUsing();
    document.getElementById("menu1").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn1.style.backgroundColor=="black"){
        hdrBtn1.style.backgroundColor="green";
        hdrBtn2.style.backgroundColor="black";
        hdrBtn3.style.backgroundColor="black";
        hdrBtn4.style.backgroundColor="black";
        hdrBtn5.style.backgroundColor="black";
        hdrBtn6.style.backgroundColor="black";
    }
    else if(hdrBtn1.style.backgroundColor=="green"){
        hdrBtn1.style.backgroundColor="black";
    }
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn2").onclick=function(){
    whosUsing();
    document.getElementById("menu2").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn2.style.backgroundColor=="black"){
        hdrBtn2.style.backgroundColor="green";
        hdrBtn1.style.backgroundColor="black";
        hdrBtn3.style.backgroundColor="black";
        hdrBtn4.style.backgroundColor="black";
        hdrBtn5.style.backgroundColor="black";
        hdrBtn6.style.backgroundColor="black";
    }
    else if(hdrBtn2.style.backgroundColor=="green"){
        hdrBtn2.style.backgroundColor="black";
    }
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn3").onclick=function(){
    whosUsing();
    document.getElementById("menu3").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn3.style.backgroundColor=="black"){
        hdrBtn3.style.backgroundColor="green";
        hdrBtn2.style.backgroundColor="black";
        hdrBtn1.style.backgroundColor="black";
        hdrBtn4.style.backgroundColor="black";
        hdrBtn5.style.backgroundColor="black";
        hdrBtn6.style.backgroundColor="black";
    }
    else if(hdrBtn3.style.backgroundColor=="green"){
        hdrBtn3.style.backgroundColor="black";
    }
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn4").onclick=function(){
    whosUsing();
    document.getElementById("menu4").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn4.style.backgroundColor=="black"){
        hdrBtn4.style.backgroundColor="green";
        hdrBtn2.style.backgroundColor="black";
        hdrBtn3.style.backgroundColor="black";
        hdrBtn1.style.backgroundColor="black";
        hdrBtn5.style.backgroundColor="black";
        hdrBtn6.style.backgroundColor="black";
    }
    else if(hdrBtn4.style.backgroundColor=="green"){
        hdrBtn4.style.backgroundColor="black";
    }
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden"); 
    document.getElementById("menu6").setAttribute("hidden","hidden");
   
}
document.getElementById("hdrBtn5").onclick=function(){
    whosUsing();
    document.getElementById("menu5").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn5.style.backgroundColor=="black"){
        hdrBtn5.style.backgroundColor="green";
        hdrBtn2.style.backgroundColor="black";
        hdrBtn3.style.backgroundColor="black";
        hdrBtn4.style.backgroundColor="black";
        hdrBtn1.style.backgroundColor="black";
        hdrBtn6.style.backgroundColor="black";
    }
    else if(hdrBtn5.style.backgroundColor=="green"){
        hdrBtn5.style.backgroundColor="black";
    }
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn6").onclick=function(){
    whosUsing();
    document.getElementById("menu6").toggleAttribute("hidden");
    closeDivs();
    if(hdrBtn6.style.backgroundColor=="black"){
        hdrBtn6.style.backgroundColor="green";
        hdrBtn2.style.backgroundColor="black";
        hdrBtn3.style.backgroundColor="black";
        hdrBtn4.style.backgroundColor="black";
        hdrBtn5.style.backgroundColor="black";
        hdrBtn1.style.backgroundColor="black";
    }
    else if(hdrBtn1.style.backgroundColor=="green"){
        hdrBtn1.style.backgroundColor="black";
    }
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");

}
//Declare hidden items
let brkDiv1 = document.getElementById("brkDiv1");
let brkDiv2 = document.getElementById("brkDiv2");
let brkDiv3 = document.getElementById("brkDiv3");
let sSDiv1 = document.getElementById("sSDiv1");
let sSDiv2 = document.getElementById("sSDiv2");  
let sSDiv3 = document.getElementById("sSDiv3");  
let sSDiv4 = document.getElementById("sSDiv4");  
let sSDiv5 = document.getElementById("sSDiv5");  
let sSDiv6 = document.getElementById("sSDiv6");
let engDiv1 = document.getElementById("engDiv1");
let acDiv1 = document.getElementById("acDiv1");
let elecvDiv1 = document.getElementById("elecDiv1"); 
let elecDiv2 = document.getElementById("elecDiv2");     
//Menu Btns show Divs
    //BRAKES
        document.getElementById("brkDiv1Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(brkDiv1.style.display==="none"){
                brkDiv1.style.display="inline-block";
            }
            else if(brkDiv1.style.display==="inline-block"){
                brkDiv1.style.display="none";
            }}
        document.getElementById("brkDiv2Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(brkDiv2.style.display==="none"){
                brkDiv2.style.display="inline-block";
            }
            else if(brkDiv2.style.display==="inline-block"){
                brkDiv2.style.display="none";
            }}
        document.getElementById("brkDiv3Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(brkDiv3.style.display==="none"){
                brkDiv3.style.display="inline-block";
            }
            else if(brkDiv3.style.display==="inline-block"){
                brkDiv3.style.display="none";
            }}
    //STEERING AND SUSPENSION
        document.getElementById("sSDiv1Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(sSDiv1.style.display==="none"){
                sSDiv1.style.display="inline-block";
            }
            else if(sSDiv1.style.display==="inline-block"){
                sSDiv1.style.display="none";
            }}
        document.getElementById("sSDiv2Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(sSDiv2.style.display==="none"){
                sSDiv2.style.display="inline-block";
            }
            else if(sSDiv2.style.display==="inline-block"){
                sSDiv2.style.display="none";
            }}
        document.getElementById("sSDiv3Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(sSDiv3.style.display==="none"){
                sSDiv3.style.display="inline-block";
            }
            else if(sSDiv3.style.display==="inline-block"){
                sSDiv3.style.display="none";
            }}
        document.getElementById("sSDiv4Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(sSDiv4.style.display==="none"){
                sSDiv4.style.display="inline-block";
            }
            else if(sSDiv4.style.display==="inline-block"){
                sSDiv4.style.display="none";
            }}
        document.getElementById("sSDiv5Btn").onclick=function(){
            closeDivs();
            if(sSDiv5.style.display==="none"){
                sSDiv5.style.display="inline-block";
            }
            else if(sSDiv5.style.display==="inline-block"){
                sSDiv5.style.display="none";
            }}
        document.getElementById("sSDiv6Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(sSDiv6.style.display==="none"){
                sSDiv6.style.display="inline-block";
            }
            else if(sSDiv6.style.display==="inline-block"){
                sSDiv6.style.display="none";
            }}
    //ENGINES
        document.getElementById("engDiv1Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(engDiv1.style.display==="none"){
                engDiv1.style.display="inline-block";
            }
            else if(engDiv1.style.display==="inline-block"){
                engDiv1.style.display="none";
            }}
    //AC
        document.getElementById("acDiv1Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(acDiv1.style.display==="none"){
                acDiv1.style.display="inline-block";
            }
            else if(acDiv1.style.display==="inline-block"){
                acDiv1.style.display="none";
            }}
            
    //ELECTRICAL   
        document.getElementById("elecDiv1Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(elecDiv1.style.display==="none"){
                elecDiv1.style.display="inline-block";
            }
            else if(elecDiv1.style.display==="inline-block"){
                elecDiv1.style.display="none";
            }}

         document.getElementById("elecDiv2Btn").onclick=function(){
            whosUsing();
            closeDivs();
            if(elecDiv2.style.display==="none"){
                elecDiv2.style.display="inline-block";
            }
            else if(elecDiv2.style.display==="inline-block"){
                    elecDiv2.style.display="none";
                }}

function closeDivs(){
    sSDiv1.style.display="none";
    sSDiv2.style.display="none";
    sSDiv3.style.display="none";
    sSDiv4.style.display="none";
    sSDiv5.style.display="none";
    sSDiv6.style.display="none";
    brkDiv1.style.display="none";
    brkDiv2.style.display="none";
    brkDiv3.style.display="none";
    engDiv1.style.display="none";
    acDiv1.style.display="none";
    elecvDiv1.style.display="none";
    elecDiv2.style.display="none";
    
}

//menu change color
function menuColor(){

}

function whosUsing(){
    uses++;
    localStorage.setItem("numberofclicks", uses);
}