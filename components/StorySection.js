import Image from "next/image";
import styles from "./StorySection.module.css";
import { STORY_IMAGES } from "@/lib/site";

export default function StorySection() {
  return (
    <section id="story" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Câu chuyện bếp</span>
          <h2 className={styles.title}>
            Từ căn bếp nhỏ,
            <br />
            gửi trao sự an tâm.
          </h2>
          <div className={`divider ${styles.divider}`} />
          <p className={styles.paragraph}>
            Không ồn ào hay phô trương, <strong>Bếp AnAn</strong> ra đời từ
            tình yêu với chiếc bánh quê truyền thống — nơi có mùi thơm dịu
            của đường thốt nốt và vị béo ngậy tự nhiên từ nước cốt dừa tươi.
          </p>
          <p className={styles.paragraph}>
            Chúng tôi tin rằng, một chiếc bánh ngon thực sự không chỉ nằm ở
            hương vị, mà còn ở cảm giác nhẹ nhõm, an tâm khi thưởng thức.
            Từng mẻ bột tại AnAn đều được ủ thủ công tỉ mỉ để tạo nên những
            đường &ldquo;rễ tre&rdquo; đẹp mắt, vị ngọt thanh tao, ăn hoài
            không ngán.
          </p>
        </div>
        <div className={styles.gallery}>
          {STORY_IMAGES.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={400}
              height={220}
              className={`${styles.photo} ${
                img.offset ? styles.photoOffset : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
