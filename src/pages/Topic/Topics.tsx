import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./topic.scss";

const topics: string[] = ["fruits", "recipes", "clothes", "travel"];

export function Topics() {
  return (
    <div>
      <h1>Topics</h1>
      {topics.map((topic, i) => {
        return (
          <div className="topics" key={`topic_${i}`}>
            <Link to={`/topics/${topic}`}>{topic}</Link>
          </div>
        );
      })}
    </div>
  );
}
