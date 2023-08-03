import { useState } from "react";

const AddUserForm =(props)=>{

    const initialFormState={id:null,name:'',username:''}
    const[user,setusers] = useState(initialFormState);

    const handleInputChange =(event)=>{
        const {name,value} =event.target;
        setusers({...user,[name]:value});

    }
   
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username)return;
                props.addUser(user);
                setusers(initialFormState);
            }
        }>
            <label>
                Name:
            </label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name}/>
            <label>
                UserName
            </label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username}/>
            <button>Add New User</button>
        </form>

    )
}

export default AddUserForm;