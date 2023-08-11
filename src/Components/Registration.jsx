import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import style from "./reg.module.css"

const Registration=()=> {
    let [ename, setName] = useState("")
    let [cname, setCname] = useState("")
    let [designation, setDesignation] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [password, setPassword] = useState("")
    let [address, setAddress] = useState("")

    let navigate = useNavigate()

    let nameData=(e)=> {
        e.preventDefault()
        setName(e.target.value)
    }

    let companyData=(e)=> {
        e.preventDefault()
        setCname(e.target.value)
    }

    let designationData=(e)=> {
        e.preventDefault()
        setDesignation(e.target.value)
    }

    let emailData=(e)=> {
        e.preventDefault()
        setEmail(e.target.value)
    }

    let phoneData=(e)=> {
        e.preventDefault()
        setPhone(e.target.value)
    }

    let passwordData=(e)=> {
        e.preventDefault()
        setPassword(e.target.value)
    }

    let addressData=(e)=> {
        e.preventDefault()
        setAddress(e.target.value)
    }

    let Formhandle=()=> {
        let payload= {ename, cname, designation, email, phone, password, address }
        axios.post("http://localhost:8080/employee", payload)
        .then(()=> {
            console.log("Data has uploaded");

        })
        .catch(()=> {
            console.log("Something went wrong, Try again");
        })

        navigate("/login")
    }

    return (
        <div id={style.myform}>
            <article >
                <label htmlFor="">Employee Name :</label>
                <input type="text" value={ename} onChange={nameData}  />
                <label htmlFor="">Company Name :</label>
                <input type="text" value={cname} onChange={companyData}/>
                <label htmlFor="">Designation :</label>
                <input type="text" value={designation} onChange={designationData} />
                <label htmlFor="">Email Id :</label>
                <input type="text" value={email} onChange={emailData}/>
                <label htmlFor="">Phone :</label>
                <input type="text" value={phone} onChange={phoneData}/>
                <label htmlFor="">Password:</label>
                <input type="text" value={password} onChange={passwordData} />
                <label htmlFor="">Address :</label>
                <input type="text" value={address}  onChange={addressData}/>
                <button onClick={Formhandle}>Submit</button>
            </article>
        </div>
    )
}

export default Registration