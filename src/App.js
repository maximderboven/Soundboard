/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo.svg';
import './App.css';

function playSound(e) {
  new Audio(e).play();
}

function App() {
  return (
    <div className="App">
      <div className="soundboard">
        {data.items.map((item) => (
          <div
            className="item"
            key={item.id}
            onClick={() => playSound(item.sound)}
          >
            <img alt={item.name} src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

const data = {
  items: [
    {
      id: 1,
      name: "de naam van dit item",
      image: "https://url-naar-image-van-dit-item",
      sound: "https://url-naar-geluid-van-dit-item",
    },
    {
      id: 2,
      name: "de naam van dit item",
      image: "https://url-naar-image-van-dit-item",
      sound: "https://url-naar-geluid-van-dit-item",
    },
  ],
};

export default App;
