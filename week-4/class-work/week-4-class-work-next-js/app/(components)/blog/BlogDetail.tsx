import { BlogPostVm } from "@/models/BlogPostVm";
import "./blogDetail.css";

import Link from "next/link";

type Props = {
  post: BlogPostVm;
};

export const BlogDetail = ({ post }: Props) => {
  return (
    <div className="blog-detail-wrap">
      <div className="blog-detail-block">
        <p className="blog-detail-head">{post && post.title}</p>
        <p className="blog-detail-date">Posted on : {post && post.postedOn}</p>
        <p className="blog-detail-body">{post && post.body}</p>
        <p className="blog-detail-author">By : {post && post.postedBy}</p>
      </div>
      <Link className="blog-detail-link" href="/blog">
        Back to main Blog
      </Link>
    </div>
  );
};
