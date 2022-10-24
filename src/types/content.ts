import { Image } from '@/types';

export interface ITopic{
    title: string
    text?: string
    posts?: ITopicPost[]
}
export interface ITopicPost{
    title: string
    text?: string
    image?: Image
}
export interface IMenuItem{
    className: string
    href?: string
    text: string
}