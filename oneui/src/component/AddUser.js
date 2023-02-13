import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [kelas, setKelas] = useState("none");
    const navigate = useNavigate();

    const saveUser = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/users",{
                name,
                alamat,
                kelas
            });
            navigate("/");
        }
     catch (error) {
        console.log(error);
    }
}

  return (
<div className="columns">
    <div className="column">
        <form onSubmit={saveUser}>
         <div className="input-group mb-3">
              <span className="input-group-text mx-2" id="inputGroup-sizing-default">Nama  .</span>
               <input type="text" 
               value={name}
               onChange={(e)=> setName(e.target.value)}
               className="form-control" 
               aria-label="Sizing example input" 
               aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
              <span className="input-group-text mx-2" id="inputGroup-sizing-default">Alamat</span>
               <input type="text" 
                value={alamat}
                onChange={(e)=> setAlamat(e.target.value)}               
               className="form-control" 
               aria-label="Sizing example input" 
               aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="">
            <select 
            value={kelas}
            onChange={(e)=> setKelas(e.target.value)}
            className="form-select mx-5" 
            aria-label="Default">
                <option value="1-A">1-A</option>
                <option value="1-B">1-B</option>
                <option value="1-C">1-C</option>
                <option value="1-D">1-D</option>
                <option value="1-E">1-E</option>
            </select>
          </div>

           
            <div className="">
                <button className="btn btn-primary mx-3 mt-3" type="submit">Add</button>
            </div>
        </form>
    </div>
      
</div>
  );
};

export default AddUser;
