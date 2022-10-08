import "./Soundboard.css";
import {SoundboardItem} from "./SoundboardItem";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { Item } from '../model/Item';
import { CircularProgress, Alert, Fab } from '@mui/material';
import { AddIcon } from '@mui/icons-material';
axios.defaults.baseURL = "http://localhost:3001";


export function Soundboard() {
  const {id} = useParams();
  const [items, setItems] = useState<Item[] | null>(null);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [quote, setQuote] = useState<String | null>(null);

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
            setIsError(true);
            setIsLoading(false);
            console.log(error.response.data.error);
          });
      } catch (error: any) {
        console.log(error.response); // this is the main part. Use the response property from the error object
        return error.response;
      }
    }
    fetchItems();
}, [id]);

if (isError || !items) {
  return <Alert severity="error">Items could not be loaded</Alert>;
 } else if (loading) {
  return <CircularProgress />;
}else if (isError) {
  return <Alert severity="error">Board could not be loaded</Alert>;
}else {
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
        <Fab color="secondary" aria-label="add" className="fixediconplus">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

}