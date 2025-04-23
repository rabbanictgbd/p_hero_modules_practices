const sections= document.querySelectorAll('section');
for(const section of sections){
    section.style.border= "2px solid steelblue";
    section.style.padding= "2px";
    section.style.margin= "2rem";
    section.style.borderRadius= "15px";
    section.style.backgroundColor= "lightgray";

}

document.querySelector('#c1').style.backgroundColor= "blue";
const sectionId1= document.getElementById('c1');
sectionId1.style.backgroundColor= "red"
document.getElementById('c1').style.backgroundColor= "lightblue"

