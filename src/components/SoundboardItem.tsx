import React, { useState } from 'react';
import { Item } from '../model/Item';

interface SoundboardItemProps {
  item: Item;
  showNames: boolean;
  onSoundStart: () => void;
  onSoundEnd: () => void;
}


export function SoundboardItem({
  item,
  showNames,
  onSoundStart,
  onSoundEnd,
}: SoundboardItemProps) {
const [isPlaying, setIsPlaying] = useState(false);

function handleOnClick(item: Item) {
const audio = new Audio(item.sound);
audio.addEventListener("canplaythrough", () => {
audio.play();
});
audio.addEventListener("playing", () => {
setIsPlaying(true);
onSoundStart();
});
audio.addEventListener("ended", () => {
setIsPlaying(false);
onSoundEnd();
});
}

return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      className={`soundboardItem ${isPlaying ? "playing" : ""}`}
      onClick={() => handleOnClick(item)}
    >
      <img alt={item.name} src={item.image} />
    </div>
    {showNames && <div className="soundboardItemLabel">{item.name}</div>}
  </div>
);
}


