
var form=document.getElementById('frm');
form.addEventListener('submit',AddData);
let expenseExists=false;
let Eid;
function AddData(e){
    e.preventDefault();
    Examount=document.getElementById('n').value;
        ExCat=document.getElementById('t').value;
        Dis=document.getElementById('d').value;
let obj={
    Examount,
    ExCat,
    Dis
}
    if(expenseExists==true){
    
        axios.put(`https://crudcrud.com/api/a277de147b6249a7a94b3e63d3ae254b/expense-data/${Eid}`,obj).then(msg=>{
            
            var getParent=document.getElementById('u');
            var CreateChild=`<li id=${Eid}> ${obj.Examount} ${obj.ExCat} ${obj.Dis}
                <button onclick=deleteUser('${Eid}')> Delete Exp </button>
                    <button onclick="editUserDetails('${Eid}','${obj.Examount}','${obj.ExCat}','${obj.Dis}')">Edit Exp </button>
                </li>`
          getParent.innerHTML+=CreateChild;
        //   DataOnScr(obj)
           console.log(obj);

    }) .catch(err=>console.log(err));
        
    expenseExists=false;

    }

else {
  
    axios.post('https://crudcrud.com/api/a277de147b6249a7a94b3e63d3ae254b/expense-data',obj)
    .then((msg)=>{
        DataOnScr(msg.data)
        console.log(msg.data)})
    .catch(err=>console.log(err));
} 
document.getElementById('n').value='';
document.getElementById('t').value='';
document.getElementById('d').value='';

}

window.addEventListener("DOMContentLoaded",show);

  function show(e){
e.preventDefault();
axios.get('https://crudcrud.com/api/a277de147b6249a7a94b3e63d3ae254b/expense-data')
.then((msg)=>{
    console.log(msg.data)
    for (var i=0;i<msg.data.length;i++){
        DataOnScr(msg.data[i]);
    }
})

}

function DataOnScr(user){
    var getParent=document.getElementById('u');
       var CreateChild=`<li id=${user._id}> ${user.Examount} ${user.ExCat} ${user.Dis}
           <button onclick=deleteUser('${user._id}')> Delete Exp </button>
               <button onclick="editUserDetails('${user._id}','${user.Examount}','${user.ExCat}','${user.Dis}')">Edit Exp </button>
           </li>`
     getParent.innerHTML+=CreateChild;
    

   }

   function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/a277de147b6249a7a94b3e63d3ae254b/expense-data/${userId}`).then(()=>
        removefromscreen(userId)
        
    )
   }

   function removefromscreen(userDataId){
    var parentNode=document.getElementById('u');


    var childToBeDel=document.getElementById(userDataId);
    if(childToBeDel){
        parentNode.removeChild(childToBeDel);
        
    }
}


function editUserDetails(userId,Examount,Excat,Dis){
 document.getElementById('n').value =Examount;
document.getElementById('t').value = Excat;
document.getElementById('d').value =Dis;
   
    expenseExists=true;
    Eid=userId;
    removefromscreen(Eid);
    // let obj1={
       
    //     e,
    //     n,
    //     p
    // }
    // axios.put(`https://crudcrud.com/api/5d436ec002884da7a423278dda8fd1c4/expense-data/${userId}`,obj1).then((msg)=>{
    //     console.log(msg)
    //     removefromscreen(userId); 
    // })
    
     
    }
