import "./Soundboard.css";
import {SoundboardItem} from "./SoundboardItem";
import axios from "axios";
import {UseParams, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { CircularProgress } from '@mui/material';
axios.defaults.baseURL = "http://localhost:3001";

export function Soundboard() {
  const {id} = useParams();
  const [items, setItems] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        await axios
          .get(`/soundboards/${id}/sounds`)
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
  return <CircularProgress />;
} else {
  return (
    <div className="App">
      {quote && <div className="soundboardQuote">{quote}</div>}
      <div className="soundboard">
        {items.map((item) => (
          <SoundboardItem
            key={item.id}
            item={item}
            onSoundStart={() => setQuote(item.quote)}
            onSoundEnd={() => setQuote(null)}
          ></SoundboardItem>
        ))}
      </div>
    </div>
  );
}

}