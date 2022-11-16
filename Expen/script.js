var form=document.getElementById('frm');
form.addEventListener('submit',AddData);
function AddData(e){
    e.preventDefault();
    var obj={
        Examount:document.getElementById('n').value,
        ExCat:document.getElementById('t').value,
        Dis:document.getElementById('d').value,


    }
    
localStorage.setItem(obj.Examount,JSON.stringify(obj));
Dataonscreen(obj);
}
window.addEventListener("DOMContentLoaded",Dataonscreen);


function DisplayDetails(e){
    const localstorageobj=localStorage;
    
    const localstoragekeys=Object.keys(localstorageobj);
    for(var i=0;i<localstoragekeys.length;i++){
        const key=localstoragekeys[i];
        
        const detailsStr=localstorageobj[key];
        const detalisobj=JSON.parse(detailsStr);
        Dataonscreen(detalisobj);
    }
}
function Dataonscreen(data){
    var Getp=document.getElementById('u');
    var createCh=`<li id=${data.Examount}> ${data.Examount} ${data.ExCat} ${data.Dis}
    <button onclick=delet('${data.Examount}')> del</button> <button onclick=edit('${data.Examount}','${data.ExCat}','${data.Dis}')>edit</button></li>`

    Getp.innerHTML+=createCh;
}
   
   function delet(amount){
    localStorage.removeItem(amount);
removeScr(amount);
   }
   function removeScr(data){
    var parentnode=document.getElementById('u');
    var ChildToBedeleted=document.getElementById(data);
    if(ChildToBedeleted){
        parentnode.removeChild(ChildToBedeleted)
    }
   }

   function edit(amount,tye,dis){
    document.getElementById('n').value=amount;
    document.getElementById('t').value=tye;
    document.getElementById('d').value=dis;
    delet(amount);
   }












































































