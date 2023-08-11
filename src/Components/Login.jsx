import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./reg.module.css"

const Login = () => {
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loggin, setLoggin] = useState(false);

    let navigate = useNavigate()
    let phoneData=(e)=> {
        e.preventDefault()
        setPhone(e.target.value)
    }

    let passwordData=(e)=> {
        e.preventDefault()
        setPassword(e.target.value)
    }

    let formhandle=(e)=> {
        e.preventDefault();
        var raw = "";

        var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://localhost:8080/employee/verify?phone=${phone}&password=${password}`, requestOptions)
        .then((response) => {
            console.log(response);
            if(response.status==200)
            {
                return response.json();
            }
            else
            {
                throw Error("user not found");
            }
        })
        .then((result) => {
            console.log(result);
            if(result.body.phone == phone )
            {
                if(result.body.password==password)
                {
                    navigate("/home");
                }
                else
                {
                    alert("wrong");
                }
            }
            else
            {
                alert("wrong username or email or phone");
            }
        })
        .catch((error) => {
            alert('error ' + error.message)
        });


};

  return (
<div>
    <div id={style.login}>
        <article >
        <label htmlFor=""> Phone :</label> 
        <input type="tel" onChange={phoneData} value={phone} placeholder="Enter Phone number"/><br />
        <label htmlFor=""> Password :</label>
        <input type="password" onChange={passwordData} value={password} placeholder="Enter Password"/> <br />
        <button onClick={formhandle}>Submit</button>
       </article>
    </div>
</div>
  )
  }

export default Login
