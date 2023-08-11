import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./reg.module.css"
import { Link } from 'react-router-dom'

const Home = () => {
    let [content,setContent] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8080/employee")
        .then((response)=> {
            console.log("Got the data");
            console.log(response.data.body);
            setContent(response.data.body)
        })
        .catch(()=> {
            console.log("Did not get the Data");
        })
    },[])

    let deleteData=(value)=> {
        axios.delete(`http://localhost:8080/employee/${value}`)
        window.location.assign(`/home`)
    }
    
    return (
        <div id={style.menu}>
            <div className={style.menu1}>
                <h2>LIST OF EMPLOYEES</h2>
            </div>
        <div id={style.home}>
            <table>
                <thead>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Company Name</th>
                    <th>Designation</th>
                    <th>Phone number</th>
                </thead>
                <tbody>
                    {Array.isArray(content) && content.map((x) =>
                    <tr>
                        <td>{x.eid}</td>
                        <td>{x.ename}</td>
                        <td>{x.cname}</td>
                        <td>{x.designation}</td>
                        <td>{x.phone}</td>
                        <td><button><Link to={`/update`}>UPDATE</Link></button></td>
                    <td><button onClick={()=> {deleteData(x.eid)}}>DELETE</button></td>
                    </tr> 
                    )
                }
                </tbody>
            </table>
          </div>  
          </div>
    )
}

export default Home
