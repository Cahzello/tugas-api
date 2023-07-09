/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import axios from 'axios';
import { useState } from 'react';

const fetchData = async () => {
  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        i: 'tt0903747'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  const [post, setPost] = useState({});

  const handleButtonClick = async () => {
    document.writeln = "Loading";
    const responseData = await fetchData();
    setPost(responseData);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Klik Saya</button>

      <table>
        <tbody>
          <tr>
            <th>Nama:</th>
            <td>{post.Title}</td>
          </tr>
          <tr>
            <th>Tahun Tayang:</th>
            <td>{post.Year}</td>
          </tr>
          <tr>
            <th>Tahun Rilis:</th>
            <td>{post.Released}</td>
          </tr>
          <tr>
            <th>Genre:</th>
            <td>{post.Genre}</td>
          </tr>
          <tr>
            <th>Runtime:</th>
            <td>{post.Runtime}</td>
          </tr>
          <tr>
            <th>Director:</th>
            <td>{post.Director}</td>
          </tr>
          <tr>
            <th>Writer:</th>
            <td>{post.Writer}</td>
          </tr>
          <tr>
            <th>Actors:</th>
            <td>{post.Actors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


