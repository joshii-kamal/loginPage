import React from 'react'
import { useDataLayerValue } from '../reducer/DataLayer';
import "./Home.css";

function Home() {
    const [{user }, dispatch] = useDataLayerValue();
    return (
        <section className="userInfo">
            <div className="innerUserInfo">
                <div>
                   <p> USERNAME:</p><p className="p2">{user.userName}</p> 
                </div>
                <div>
                  <p>  NAME:</p> <p className="p2">{user.name}</p>   
                </div>
                <div>
                   <p> EMAIL:</p><p className="p2">{user.email}</p>  
                </div>
                <div>
                    <p>ADDRESS:</p><p className="p2">{user.address}</p>  
                </div>
                <div>
                    <p>CONTACT NO:</p><p className="p2">{user.contactNo}</p>  
                </div>
            </div>
        </section>
    )
}

export default Home
