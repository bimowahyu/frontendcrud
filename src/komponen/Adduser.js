import React,{useState} from 'react';
import axios from 'axios';
import{ useNavigate } from "react-router-dom";



const Adduser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();
   
    const saveUser = async (e) =>
    {
       e.preventDefault();
       try{
        await axios.post("http://localhost:1200/users",{
            name,
            email,
            gender
        });
        navigate("/");
       } catch (error){
            console.log(error);
       }
    };
    
  
    
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="filed">
                    <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Nama'/>
                        </div>
                   
                </div>
                <div className="filed">
                    <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" value={email}  onChange={(e)=> setEmail(e.target.value)}  placeholder='Email'/>
                        </div>
                    
                </div>
                <div className="filed">
                    <label className="label">Gender</label>
                        <div className="control">
                            <div className="select" is-fullwidth="true">
                                <select value={gender}  onChange={(e)=> setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="filed">
                    <button type='submit' className='button is-success'>Save</button>
                    
                </div>
                </div>
            </form>
        </div>
    </div>
  )
};


export default Adduser