import {useState} from "react"
import MainPage from './components/MainPage';
import TopBar from "./components/TopBar";
import Modal from "./components/Modal";

function App() {
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [imgInfo, setImgInfo] = useState(null)

  return (
    <div className="main">
      <TopBar />
      <MainPage setIsEnlarged={setIsEnlarged} setImgInfo={setImgInfo} />
      {isEnlarged ? (
        <Modal
          isEnlarged={isEnlarged}
          setIsEnlarged={setIsEnlarged}
          imgInfo={imgInfo}
        />
      ) : null}
    </div>
  );
}

export default App;
