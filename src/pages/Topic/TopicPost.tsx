
import {ITopicPost} from '@/types/content';

interface IProps {
    topicPost: ITopicPost;
}
export const TopicPost = ( {topicPost : {title, text, image}} : IProps) => {
    return <div className="topic-post">
        {title && <h1 className="topic-title">{title}</h1>}
        {text && <p className="topic-text">{text}</p>}
        {image && <div className="topic-image">image!</div>}
    </div>
}