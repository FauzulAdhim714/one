import React,{useEffect, useState} from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom";


const UserKelasList = () => {
    
  const [KelasUser, setKelasUser] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getUsersKelas();
  });

  const getUsersKelas = async () => {
    const response = await axios.get("http://localhost:5000/kelasId/"+(id));
    setKelasUser(response.data);
  };

  const deleteUserKelas = async (id) => {
    try{
      await axios.deleteUserKelas(``);
      getUsersKelas();
    } catch (error){
      console.log(error);
      alert.log(error);
    }
  }
  
  return (
<div className="columns mt-2">
    <div className="column">
        <table className="table table-striped mx-2">
         <thead >
         <tr>
           <th className="text-center">No</th>
           <th>Nama</th>
           <th>Alamat</th>
           <th>indonesia</th>
           <th>inggris</th>
           <th>matematika</th>
           <th>ipa</th>
           <th>ips</th>
           <th>olahraga</th>
           <th>sunda</th>
           <th>kesenian</th>
           <th>extra</th>
           <th>kelas</th>
           <th>kelasId</th>
           <th>Action</th>
          </tr>
         </thead>
         <tbody className="text-left">
          {KelasUser.map((user, index) => (
             <tr key={user.id}>
             <td className="text-center">{index + 1}</td>
             <td>{user.name}</td>
             <td>{user.alamat}</td>
             <td>{user.indonesia}</td>
             <td>{user.inggris}</td>
             <td>{user.matematika}</td>
             <td>{user.ipa}</td>
             <td>{user.ips}</td>
             <td>{user.olahraga}</td>
             <td>{user.sunda}</td>
             <td>{user.kesenian}</td>
             <td>{user.extra}</td>
             <td>{user.kelas}</td>
             <td>{user.kelasId}</td>
             <td>
              <button onClick={()=> deleteUserKelas(user.id)} 
                className="btn btn-sm btn-danger mx-2">
                Hapus
              </button>
              <Link to={"edit/" + (user.id)}>
                <button className="btn btn-sm btn-primary">View Kelas</button>
              </Link>
           </td>
           </tr>
        ))}
  
    
      </tbody>
  </table>  
    </div>
  </div>
  
  )
}

export default UserKelasList
