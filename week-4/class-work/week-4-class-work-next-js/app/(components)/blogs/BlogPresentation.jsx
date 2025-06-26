import "./blogPresentation.css";

import Link from "next/link";

export const BlogPresentation = ({ blogPosts }) => {
  return (
    <div className="post-block-wrap">
      {blogPosts &&
        blogPosts.map((x, i) => (
          <Link
            href={`/blog/${x.title.toLowerCase().replaceAll(" ", "-")}-${x.id}`}
            className="post-block"
            key={i}
          >
            <p className="post-title">{x.title}</p>
            <p className="post-date">Posted on: {x.postedOn}</p>
            <p className="post-body">
              {x.body.substring(0, 100)} <br></br>
              read more ...
            </p>
            <p className="post-author">By: {x.postedBy}</p>
          </Link>
        ))}
    </div>
  );
};
