import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [records, setRecords] = useState([])

  const addRecord = async () => {
    try {
      const randomId = Math.floor(Math.random() * 83) + 1
      const response = await axios.get(`https://swapi.dev/api/people/${randomId}/`)


      const newRecord = {
        id: randomId,
        name: response?.data?.name,
        gender: response?.data?.gender
      }

      setRecords((prev) => [...prev, newRecord])
    } catch (error) {
      console.log('Error fetching data', error)
    }
  }

  const deleteRecord = (id) => {
    setRecords((prev) => prev.filter((record) => record.id !== id))
  }

  return (
    <div>
      <h1>User Table</h1>
      <button onClick={addRecord}>Add Records</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index.id}>
              <td>{record?.id}</td>
              <td>{record?.name}</td>
              <td>{record?.gender}</td>
              <td>
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
