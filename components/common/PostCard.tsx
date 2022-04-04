import React from "react";
import styled from "styled-components";
import { Author, PostType } from "../../lib/commonType";

type PostCardProps = {
    post: PostType;
};
const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <PostCardWrapper>
            <div className="og_image"></div>
            <div className="content">
                <h3>{post.title}</h3>
                <div>
                    <span>tags</span>
                    <span>{post.date}</span>
                </div>
                <div>{post.content}</div>
            </div>
        </PostCardWrapper>
    );
};

const PostCardWrapper = styled.div`
    display: flex;
    height: 70px;

    .og_image {
        flex-basis: 30%;
    }
    .content {
        flex-basis: 70%;
    }
`;

export default PostCard;
