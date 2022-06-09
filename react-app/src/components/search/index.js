import {React, useEffect, useState} from 'react';

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

    return (
        <form>
            <input
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            value = {search}
            >
            </input>
            {search.length > 1 && users.filter(user => user.username.toLowerCase().includes(search.toLowerCase())).map(user => (
                <h2>{user.username}</h2>
            ))}
        </form>
    )
}

export default SearchBar;
