import { useState, useRef } from "react";
import styles from "./styles.module.css";
import SRC from "../../../assets/image.jpg";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();
  const handlePlay = () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }

    setPlaying(!playing);
  };

  return (
    //<video className={styles.video} src={SRC} controls={false} />
    <div>
      <img className={styles.video} src={SRC} alt="image" ref={video} />
      <button className={styles.player} onClick={handlePlay}></button>
    </div>
  );
}
