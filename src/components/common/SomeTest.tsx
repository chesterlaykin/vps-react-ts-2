import { useState } from "react"
import { OtherThing } from "../tests/OtherThing"

interface ITopic{
    title: string
    text?: string
    posts?: ITopicPost[]
}
interface ITopicPost{
    title: string
    text?: string
    image?: ''
}

export const SomeTest = () => {
    const [{ title, text, posts }, setTopic] = useState<ITopic>({
        title: '',
        text: '',
        posts: [] 
    });

    return <div>
        <h1>Test!</h1>
        <OtherThing/>
    </div>
}