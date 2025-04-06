import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import classes from "./post-content.module.css";

import PostHeader from "./post-header";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(img) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${img.src}`}
          alt={img.alt}
          width={600}
          height={300}
        />
      );
    },

    code(code) {
      const { language, value } = code;
      return <SyntaxHighlighter language={language} children={value} style={atomDark} />
    }

  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
