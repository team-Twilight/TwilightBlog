export type PostFieldsType =
    | "slug"
    | "title"
    | "date"
    | "author"
    | "content"
    | "ogImage"
    | "coverImage";

// OG Image(Open Graphic Iamge) : the image that appears when you post a link to a web page or video content on your social media page
export type PostType = {
    slug: string;
    title: string;
    content: string;
    author: string;
    date: Date;
    ogImage: {
        url: string;
    };
    coverImage: string;
};
