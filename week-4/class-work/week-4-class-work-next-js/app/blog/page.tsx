import { BLOG_POST_LIST } from "@/data/blogPosts";
import { BlogPresentation } from "../(components)/blog/BlogPresentation";
import styles from "./blogPage.module.css";

export default function Blog() {
  return (
    <div className={styles.blogPageWrap}>
      <p className={styles.blogPageHead}>Blogs :</p>
      <BlogPresentation blogPosts={BLOG_POST_LIST} />
    </div>
  );
}
