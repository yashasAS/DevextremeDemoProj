
import React, {useState} from "react"
import { Popup } from "devextreme-react";
import './Registration.css'
export function Login() {
    const [data,setData] = useState({
        email:'',
        state:'',
        Name:'',
        city:''
    })
    const{email}=data;

    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]});
        localStorage.setItem('Name', email);
    }

    const submitHandler = e =>{
        e.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <Popup
            width={550}
            height={350}
            visible={true}
            showTitle={false}
            hideOnOutsideClick={true}
            >
                <center>
                <form onSubmit={submitHandler}>
                    <input type="text" name="email" value={email} onChange={changeHandler}/> <br />
                    <input type='submit' name='submit'/>
                </form>
            </center>
            </Popup>
            <h1 className='loginpagee'>click on home Button</h1>
        </div>
    );
}