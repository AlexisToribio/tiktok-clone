import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "Steliany Toribio",
    description:
      "Programar es hermoso. #developer #javascript #react #junior #frontend #web-development",
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: "sonido original - stoba1",
    albumCover: "link de musica",
    src: "../../../assets/video1.mp4",
  },
  {
    id: 2,
    author: "Alexis Toribio",
    description: "Hermoso gato durmiendo. #cat #sleep #small",
    likes: 321,
    shares: 454,
    comments: 534,
    songTitle: "sonido original - atoba2",
    albumCover: "link de musica",
    src: "../../../assets/video2.mp4",
  },
];

export default function FeedVideos() {
  return VIDEOS.map(video => (
    <div key={video.id} className={styles.item}>
      <VideoPlayer {...video} />
    </div>
  ));
}
