import React, { useState } from 'react';
import { Item } from '../model/Item';

interface SoundboardItemProps {
  item: Item;
  onSoundStart: () => void;
  onSoundEnd: () => void;
}


export function SoundboardItem({item, onSoundStart, onSoundEnd}: SoundboardItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  function playSound(sound:string, onSoundStart:()=>void, onSoundEnd:()=>void) {
    const audio = new Audio(sound);
    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });
    audio.addEventListener("playing", () => {setIsPlaying(true)});
    audio.addEventListener("playing", () => {onSoundStart()});
    audio.addEventListener('ended', () => {setIsPlaying(false)});
    audio.addEventListener('ended', () => {onSoundEnd()});
    }
    return (
      <div className={`item ${isPlaying ? "playing" : ""}`} onClick={() => playSound(item.sound, onSoundStart,onSoundEnd)}>
        <img alt={item.name} src={item.image} />
      </div>
    );
  }

