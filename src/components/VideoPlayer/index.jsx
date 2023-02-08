import { useState, useRef } from "react";
import styles from "./styles.module.css";
import SRC from "../../../assets/pexels-cottonbro-5473800.mp4";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();
  const handlePlay = async () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <video className={styles.video} src={SRC} controls={false} ref={video} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  );
}
