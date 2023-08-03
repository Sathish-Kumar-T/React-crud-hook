//we use ()=>(~~<~>,~~<~>,~<~>) round bracket for html tempelate as a jsx element
const UserTable=(props)=>(
     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {props.users.length>0?(
                props.users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button onClick={()=>props.editRow(user)} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                    </td>
                </tr>
                ))
                ):(
                    <tr>
                        <td colSpan="3">No User Found</td>
                    </tr>    
                    
                  )
                } 
            </tbody>
     
     </table>
)
export default UserTable;