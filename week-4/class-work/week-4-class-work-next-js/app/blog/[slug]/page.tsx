"use client";
import styles from "../blogPage.module.css";

import { usePathname } from "next/navigation";

import { BLOG_POST_LIST } from "@/data/blogPosts";

import { BlogDetail } from "@/app/(components)/blog/BlogDetail";

export default function BlogPost() {
  const pathname = usePathname();
  const postId = Number(pathname[pathname.length - 1]);

  return (
    <div className={styles.blogPageWrap}>
      {/* <pre>{JSON.stringify(postId)}</pre> */}
      <BlogDetail post={BLOG_POST_LIST[postId - 1]} />
    </div>
  );
}
