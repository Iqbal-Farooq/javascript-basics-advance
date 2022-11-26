var form=document.getElementById('frm');
form.addEventListener('submit',AddData);
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

    
    axios.post('https://crudcrud.com/api/82c81643c2a042eda0ff51cf0cd31b06/Data',obj)
    .then((msg)=>{console.log(msg.data)})
    
    
    .catch(err=>console.log(err))
    
}
window.addEventListener("DOMContentLoaded",()=>{
axios.get('https://crudcrud.com/api/82c81643c2a042eda0ff51cf0cd31b06/Data')
.then((msg)=>{console.log(msg.data)
    for (var i=0;i<msg.data.length;i++){
        DataOnScr(msg.data[i]);
    }
})
.then(err=>console.log(err))
})

function DataOnScr(user){
    var getParent=document.getElementById('u');
       var CreateChild=`<li id=${user._id}> ${user.Examount} ${user.ExCat} ${user.Dis}
           <button onclick=deleteUser('${user._id}')> Delete User </button>
               <button onclick=editUserDetails('${user._id}','${user.Examount}','${user.ExCat}','${user.Dis}')>Edit User </button>
           </li>`
     getParent.innerHTML+=CreateChild;

   }

   function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/82c81643c2a042eda0ff51cf0cd31b06/Data/${userId}`).then(()=>{
        removefromscreen();
    })
   }

   function removefromscreen(userDataId){
    var parentNode=document.getElementById('u');


    var childToBeDel=document.getElementById(userDataId);
    if(childToBeDel){
        parentNode.removeChild(childToBeDel);
    }
}

function editUserDetails(userId,Examount,Excat,Dis){

    let e=document.getElementById('n').value = Examount;
    let n=document.getElementById('t').value = Excat;
    let p=document.getElementById('d').value =Dis;
    let obj={
       
        e,
        n,
        p
    }
    axios.put(`https://crudcrud.com/api/dc3845d9788e4cd2bacbc85849a78629/UserData/${userId}`,obj).then(()=>{
        deleteUser(userId)
    }).catch(err=>console.log(err));
    
     
    }
