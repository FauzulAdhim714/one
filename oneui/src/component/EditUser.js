import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


const EditUser = () => {
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [kelas, setKelas] = useState("1-A");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    });

    const updateUser = async (e) =>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/users/${id}`,{
                name,
                alamat,
                kelas
            });
            navigate("/");
        }
     catch (error) {
        console.log(error);
    }
};
    const getUserById = async () =>{
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setAlamat(response.data.alamat);
        kelas(response.data.kelas);
    }



  return (
<div className="columns">
    <div className="column col-6">
        <form onSubmit={updateUser}>
         <div className="input-group mb-3">
              <span className="input-group-text mx-2" id="inputGroup-sizing-default">Nama  :</span>
               <input type="text" 
               value={name}
               onChange={(e)=> setName(e.target.value)}
               className="form-control" 
               aria-label="Sizing example input" 
               aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
              <span className="input-group-text mx-2" id="inputGroup-sizing-default">Alamat :</span>
               <input type="text" 
                value={alamat}
                onChange={(e)=> setAlamat(e.target.value)}               
               className="form-control" 
               aria-label="Sizing example input" 
               aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
              <span className="input-group-text mx-2" id="inputGroup-sizing-default">Kelas   :</span>
               <input type="text" 
                value={kelas}
                onChange={(e)=> setKelas(e.target.value)}               
               className="form-control" 
               aria-label="Sizing example input" 
               aria-describedby="inputGroup-sizing-default" />
          </div>
            <div className="">
                <button className="btn btn-primary mx-3 mt-3" type="submit">Update</button>
            </div>
        </form>
    </div>
      
</div>
  );
};

export default EditUser;
