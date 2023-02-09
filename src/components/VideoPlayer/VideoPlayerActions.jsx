// import { Heart, Message, Share } from "../Icons";
import { Heart, Message, Share } from "../Icons";
import styles from "./styles.module.css";

export default function VideoPlayerActions() {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
      </div>

      <div className={styles.action}>
        <Message />
      </div>

      <div className={styles.action}>
        <Share />
      </div>
    </aside>
  );
}
