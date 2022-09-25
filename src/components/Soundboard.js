import "./Soundboard.css";
import {SoundboardItem} from "./SoundboardItem";
import {useState} from "react";

export function Soundboard({soundboard}) {
  const [quote, setQuote] = useState(null);
  return (
    <>
      {quote && <div className="soundboardQuote">{quote}</div>}
      <div className="soundboard">
        {soundboard.items.map((item) => (
          <SoundboardItem
            key={item.id}
            item={item}
            onSoundStart={() => setQuote(item.quote)}
            onSoundEnd={() => setQuote(null)}
          ></SoundboardItem>
        ))}
      </div>
    </>
  );
}