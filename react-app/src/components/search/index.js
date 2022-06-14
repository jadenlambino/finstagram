import {React, useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import Select from 'react-select'
import {NavLink, Redirect} from 'react-router-dom';

const SearchBar = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
      }
      fetchData();
    }, []);

    const options = users.map(user => {
        return {value: user.username, label: user.username}
    })

    return (
        // original working search function
        // <form>
        //     <input
        //     type='text'
        //     onChange={(e) => setSearch(e.target.value)}
        //     value = {search}
        //     >
        //     </input>
        //         {users.filter(user => user.username.toLowerCase().includes(search.toLowerCase())).map(user => (
        //             <h2>{user.username}</h2>
        //         ))}
        // </form>

        <Select
        options={options}
        // selectOption={<Redirect to={`/users/${user.id}`} />}
        />
    )
}

export default SearchBar;
