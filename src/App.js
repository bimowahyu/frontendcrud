import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./komponen/UserList";
import Adduser from "./komponen/Adduser";
import EditUser from "./komponen/editUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<Adduser/>}/>
       <Route path="/edit/:id" element={<EditUser/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;