import React from 'react';

const UsersList = ({usersList, deleteUser, selectUser}) => {

    return (
        <div className='user_container'>
            <h1>Users List</h1>
            <ul>
                {usersList.map(user => (
                    <li key={user.id} className="user-card">
                        <div className='data-container'>
                            <div className='name_container'>
                                <h4> {user.first_name}{" "}{user.last_name}</h4>
                            </div>
                            <li><b>Email:</b>{" "}{user.email}</li>
                            <li><b>Password:</b>{" "}{user.password}</li>
                            <li><b>Birthday:</b>{" "}{user.birthday}</li>
                        </div>
                        
                        <div>
                            <button onClick={() => deleteUser(user)}>Delete</button>
                            <button onClick={() => selectUser(user)}>Select</button>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default UsersList;