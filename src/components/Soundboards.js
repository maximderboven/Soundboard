import "./Soundboard.css";
import axios from "axios";
import {useState, useEffect, useParams, } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { CircularProgress } from '@mui/material';
axios.defaults.baseURL = "http://localhost:3001";




export function Soundboards() {
  const [boards, setItems] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        await axios
          .get(`/soundboards/`)
          .then((response) => {
            setItems(response.data);
          })
          .then((data) => {
            console.log(data);
          })
          .finally(() => setIsLoading(false))
          .catch((error) => {
            console.log(error.response.data.error);
          });
      } catch (error) {
        console.log(error.response); // this is the main part. Use the response property from the error object
        return error.response;
      }
    }
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="soundboards">
        {boards.map((board) => (
          <Link key={board.id} to={`/soundboards/${board.id}`}>
            <div className={`item ${board.id}`}>
              <img alt={board.image} src={board.image} />
              {board.name}
            </div>
          </Link>
        ))}
      </div>
    );
  }
}