import { useState, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import VideoPlayerActions from "./VideoPlayerActions";

export default function VideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = async () => {
    const { current: videoEl } = video;
    playing ? videoEl.pause() : videoEl.play();

    setPlaying(!playing);
  };

  const playerClassName = clsx(styles.player, { [styles.hidden]: playing });

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
    </div>
  );
}
