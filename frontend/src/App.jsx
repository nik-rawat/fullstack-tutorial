import {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get('/api/friends')
    .then((response) => {
      setBackendData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>

    <h1>Project</h1>
    <p>Friends: {backendData.length}</p>
    {
      backendData.map((user,i) => (
        <p key={user.id}>{user.name}</p>
      ))
    }

    </>
  )
}

export default App