/* eslint-disable jsx-a11y/img-redundant-alt */
import {Soundboard} from "./components/Soundboard";
import './App.css';

const data = {
  items: [
    {
      id: 1,
      name: "de naam van dit item",
      image: "https://www.nicepng.com/png/detail/72-727302_minecraft-transparent-half-a-heart-minecraft-heart-png.png",
      sound: "https://www.myinstants.com/media/sounds/classic_hurt.mp3",
      quote: "HUH",
    },
    {
      id: 2,
      name: "de naam van dit item",
      image: "https://url-naar-image-van-dit-item",
      sound: "https://url-naar-geluid-van-dit-item",
      quote: "dit is een quote",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Soundboard soundboard={data}></Soundboard>
    </div>
  );
}

export default App;
