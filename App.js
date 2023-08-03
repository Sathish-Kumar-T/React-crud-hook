import { useState } from "react";
import UserTable from "./tables/Usertable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditForm";
 
function App() {

  const userData=[
    {id:1,name:'Sathish',username:'Sathish sk'},
    {id:2,name:'Kumar',username:'Kumar sk'},
    {id:3,name:'Sathish Kumar',username:'Sk'},
  ];

  const addUser = (user)=>{
    user.id = users.length + 1;
    setusers([...users,user])
  }
  const deleteUser = (id) =>{
    setusers(users.filter((user)=>user.id!==id))
    setEditing(false);
  }
  const [users,setusers]=useState(userData); 
  const [editing,setEditing]=useState(false)

  const initialFormState={id:null,name:'',username:''}

  const[currentUser,setCurrentUser]=useState(initialFormState)

  const editRow = (user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  const updateUser=(id,updateUser)=>{
    setEditing(false)
    setusers(users.map((user=>(user.id===id?updateUser:user))))
  }
  return (
    <div className="Container">
      <h1>CRUD app with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
           {editing? (<div>
               <h2>Edit User</h2>
                <EditUserForm 
                   setEditing={setEditing}
                   currentUser={currentUser}
                   updateUser={updateUser}/>
             </div>):(<div>
               <h2>Add user</h2>
               <AddUserForm addUser={addUser}/>
               </div>)
            }
            </div>
         
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable  users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
