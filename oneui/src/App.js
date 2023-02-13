import "./App.css";
import React from "react";
import UserList from "./component/UserList";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import UserKelasList from "./component/UserKelasList";


function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />}/>
      <Route path="add" element={<AddUser />}/>
      <Route path="edit/:id" element={<EditUser />}/>
      <Route path="kelasId/:id" element={<UserKelasList />}/>

    </Routes>

</BrowserRouter>

</> 
 );
}

export default App;
