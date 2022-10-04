import { ITopic, ITopicPost } from "@/types/content";
import { useEffect, useState } from "react";
import { TopicPost } from "./TopicPost";
// import './topic.scss';

export const Topic = () => {
  // const [{title, text, posts}: ITopic, setTopic]  = useState<ITopic>();
//   const [topic, setTopic] = useState<ITopic>();
  const [{ title, text, posts }, setTopic] = useState<ITopic>({
    posts: [],
    text: "",
    title: "",
  });

  return (
    <div className="topic">
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      {posts &&
        posts.map((post: ITopicPost, i) => {
          return <TopicPost topicPost={post} key={`post_${i}`} />;
        })}
    </div>
  );
};
