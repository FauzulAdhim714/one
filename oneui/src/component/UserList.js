import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";


const UserList = () => {

  const [Users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUser(response.data);
  };


  const deleteUser = async (id) => {
    try {
      await axios.delete('http://localhost:5000/users/'+ (id))
      getUsers();

    } catch (error){
      console.log(error);

    }
  }

  return (
<div className="columns mt-2">
  <div className="column">
  <table className="table table-striped mx-2">
    <Link to="add">
      <button className="btn btn-sm btn-success mx-5 m-1">+ Add</button>
    </Link>
    
    <thead >
      <tr>
        <th className="text-center">No</th>
        <th>Nama</th>
        <th>Alamat</th>
        <th>Kelas</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="text-left">
      {Users.map((user, index) => (
          <tr key={user.id}>
           <td className="text-center">{index + 1}</td>
           <td>{user.name}</td>
           <td>{user.alamat}</td>
           <td>{user.kelas}</td>
           <td>
              <Link to={"edit/" + (user.id)}>
                <button className="btn btn-sm btn-primary">Edit</button>
              </Link>
              <button onClick={()=> deleteUser(user.id)} 
                className="btn btn-sm btn-danger mx-2">
                Hapus
              </button>
              <Link to={"kelasId/" + (user.id)}>
                <button className="btn btn-sm btn-primary">View Kelas</button>
              </Link>
           </td>
         </tr>
      ))}

  
    </tbody>
</table>  
  </div>
</div>

);
};

export default UserList;
