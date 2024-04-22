
//checkboxes
let onetire = document.getElementById("1tire");
let twotire = document.getElementById("2tire");
let threetire = document.getElementById("3tire");
let fourtire = document.getElementById("4tire");
let replacerotor = document.getElementById("replacerotorscheckbox");
let lhcvchbx = document.getElementById("lhboot");
let rhcvchbx = document.getElementById("rhboot");
//keyboard shortcuts
document.addEventListener('keypress', function(e) { 
    if (e.keyCode === 13) {
        document.getElementById("copybutton").click();
    }});  
    document.addEventListener('keypress', function(e){ 
        if (e.keyCode == 32) {
            document.getElementById("insertbutton").click();
        }});
 //copy function       
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
} 
//clear final text field
document.getElementById("finalstoryclearbutton").onclick=function(){
    document.getElementById("storyFinal").value=null;
}
//spencer 
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
//brakes main category
    //brakes check if rotors replaced and autofills field
        document.getElementById("frontbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
        }}
        document.getElementById("rearbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
        document.getElementById("frontandrearbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
     //booster autofills
        document.getElementById("replaceboosterbtn").onclick=function(){
            document.getElementById("storyFinal").value ="REPLACED BRAKE BOOSTER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"
        }
     //mastery cylinder autofills
        document.getElementById("replacemasterbtn").onclick=function(){
            document.getElementById("storyFinal").value ="DRAIN BRAKE RESERVOIR\nREPLACED BRAKE MASTER CYLINDER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nFILL AND BLEED MASTER CYLINDER\nBLEED ALL CALIPERS\nROAD TEST, OK\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"

        }
//steering suspension main      
    //tires check how many tires replaced and autofills
        document.getElementById("mountandbalancebutton").onclick = function(){
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
    //CV axle autofills  
        document.getElementById("innerouterbtn").onclick=function(){
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
    //steering rack
    
        
//expand categories
document.getElementById("brakesbtn").onclick=function(){
    document.getElementById("brakes").toggleAttribute("hidden");
}
document.getElementById("steeringbtn").onclick=function(){
    document.getElementById("steeringsuspension").toggleAttribute("hidden");
}
document.getElementById("enginebtn").onclick=function(){
    document.getElementById("engine").toggleAttribute("hidden");
}
document.getElementById("acbtn").onclick=function(){
    document.getElementById("ac").toggleAttribute("hidden");
}
document.getElementById("elecbtn").onclick=function(){
    document.getElementById("electrical").toggleAttribute("hidden");
}


