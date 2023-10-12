function addNewWeField(){
    console.log("Adding new field");
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','enter here')
    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")
    weOb.insertBefore(newNode,weAddButtonOb);
}
    
function addNewAqField(){
        
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','enter here')
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton")
    aqOb.insertBefore(newNode,aqAddButtonOb);
    }

//generating cv
function generateCv(){
    let nameField=document.getElementById("name").value
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contact").value;
    document.getElementById("addressT").innerHTML=document.getElementById("address").value;
    document.getElementById("gitT").innerHTML=document.getElementById("git").value;
    document.getElementById("LinkedT").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("instaT").innerHTML=document.getElementById("insta").value;
   
//setting objective
 document.getElementById("objectiveT").innerHTML=document.getElementById("obj").value;
 //work experience
 let wes=document.getElementsByClassName("weField")
 let str=" "
 for(let e of wes)
 {
    str=str+ `<li> ${e.value} </li>`;
 }
 document.getElementById("weT").innerHTML=str;
//academic qualification
let aqs=document.getElementsByClassName("eqField");
let str1=" "
for(let e of aqs){
    str1+=`<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;
document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
}

//print cv
function printCv(){
   window.print(); 
}


    





