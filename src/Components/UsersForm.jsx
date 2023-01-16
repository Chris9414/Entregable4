import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, userSelected, updateUser}) => {

    const [first_name,setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [birthday,setBirthday] = useState("")

    const cleanForm = () =>{
            setFirst_name("")
            setLast_name("")
            setEmail("")
            setPassword("")
            setBirthday("")
    }

    useEffect( () => {
        if(userSelected !== null){
            setFirst_name(userSelected.first_name)
            setLast_name(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            cleanForm()
        }
    },[userSelected])
    
    const submit = e => {
        e.preventDefault();
        const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday,
        }
        if(userSelected){
            updateUser(user)
        }else{
            addUser(user,cleanForm)
        }
    }


    return (
        <div className='user-form'>
            <form onSubmit={submit}>
                <h1>New User</h1>
                <div className='name_container'>
                    <div className='input_container'>
                        <input type="text" placeholder="First Name" id="first_name" value={first_name} onChange={e => setFirst_name(e.target.value)}/>
                    </div>  
                    <div className='input_container'>
                        <input type="text" placeholder="Last Name" id="last_name" value={last_name} onChange={e => setLast_name(e.target.value)}/>
                    </div>  
                </div>
                <div className='input_container'>
                    <input type="text" placeholder="Email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='input_container'>
                    <input type="password" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>  
                <div className='input_container'>
                    <input type="date" placeholder="Birthday" id="birthday" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                </div> 
                <button>Submit</button>

            </form>
        </div>
    );
};

export default UsersForm;