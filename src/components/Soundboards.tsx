import "./Soundboard.css";
import axios from "axios";
import { Board } from "../model/Board";
import {useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { CircularProgress } from '@mui/material';
axios.defaults.baseURL = "http://localhost:3001";


export const getBoards = async () => {
  const boards = await axios.get<Board[]>('/soundboards');
  return boards.data;
};

export function Soundboards() {
  const [boards, setItems] = useState<Board[] | null>(null);
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
      } catch (error: any) {
        console.log(error.response); // this is the main part. Use the response property from the error object
        return error.response;
      }
    }
    fetchItems();
  }, []);

  if (loading|| !boards) {
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