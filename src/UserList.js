import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/users'

export default function UserList() {
   
    const navigate = useNavigate();

    const [ profiles, setProfiles ] = useState([]);
    

    const fetchProfiles = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setProfiles(data))
        .catch((error) => console.error('Error fetching profiles:', error))
    }

    
    
    useEffect(() => {
        fetchProfiles()
    },[]);
   
    return (
        <div className='App'>
            <div className='background-container'>
                <h2 style={{ color: 'green', fontSize: 40, justifyContent:'center', textAlign:'center'}}>Users List</h2>
            
                <center>
                    {profiles.map((profile) => { 
                        return (
                            <div key={profile.id} style={{ width:"15em", backgroundColor:"#35D841", padding: 2,
                                borderRadius: 10, marginBlock: 10
                            }}>
                                <button  onClick={() => {
                                    navigate(`/User/${encodeURIComponent(profile.id)}`)
                                }}>
                            <ul style={{ fontSize: 20, color: 'white' }}>
                            <li >Profile: {profile.id}, {profile.name}
                                </li>
                            </ul>
                            </button>
                            </div>
                        )})
                    }
                </center>
            </div>
        </div>
    )
};
