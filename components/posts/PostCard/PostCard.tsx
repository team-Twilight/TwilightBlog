import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../../lib/postApi";

import {
  PostCard,
  PostThumnail,
  PostTitle,
  PostSubtude,
  PostAuthor,
  PostAvatar,
  AuthorName,
  PostView,
} from "./PostCard.style";

type PostsProps = {
  post: PostType;
};

export const PostCardItem = ({ post }: PostsProps) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <PostCard>
        <PostThumnail>
            {/* 배포시 Image 태그로 변경 필요 height: 180 */}
            <img src={post.coverImage} alt="" />
        </PostThumnail>
        <PostTitle>{post.title}</PostTitle>
        <PostSubtude>
          {post.content}
        </PostSubtude>
        
        <PostAuthor>
            <PostAvatar src={post.author.picture}/>
            <AuthorName>
                {post.author.name}
            </AuthorName>
            <PostView>
                2
            </PostView>
        </PostAuthor>
      </PostCard>
    </Link>
  );
};
