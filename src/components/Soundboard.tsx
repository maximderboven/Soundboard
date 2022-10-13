import "./Soundboard.css";
import {Alert, CircularProgress, Fab} from "@mui/material";
import {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import SettingsContext, {ISettingsContext} from "../context/SettingsContext";
import {useBoardItems} from "../hooks/useBoardItems";
import "./Soundboard.css";
import {SoundboardItem} from "./SoundboardItem";
import { Add } from '@mui/icons-material';
import {ItemData} from "../model/Item";
import AdditemDialog from "./AddItemDialog";

export function Soundboard() {
  const [quote, setQuote] = useState<String | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {id} = useParams();
  const {isLoading, isError, items, addItemMutation} = useBoardItems(id!); //  see https://github.com/remix-run/react-router/issues/8200#issuecomment-962520661
  const {showNames} = useContext<ISettingsContext>(SettingsContext);

  const addItem = (data: ItemData) => {
      addItemMutation({...data, soundboardId: id!});
  };

if (isError || !items) {
  return <Alert severity="error">Items could not be loaded</Alert>;
 } else if (isLoading) {
  return <CircularProgress />;
}else if (isError) {
  return <Alert severity="error">Board could not be loaded</Alert>;
}else {
  return (
    <>
    <div className="App">
      {quote && <div className="soundboardQuote">{quote}</div>}
      <div className="soundboard">
        {items.map((item) => (
          <SoundboardItem
          key={item.id}
          showNames={showNames}
          item={item}
          onSoundStart={() => setQuote(item.quote)}
          onSoundEnd={() => setQuote(null)}
          ></SoundboardItem>
        ))}
        <Fab onClick={() => setIsDialogOpen(true)} color="secondary" aria-label="add" className="fixediconplus">
          <Add />
        </Fab>
        <AdditemDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSubmit={addItem}
            />
      </div>
    </div>
    </>
  );
}
}