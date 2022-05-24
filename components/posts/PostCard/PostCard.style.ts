import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 게시글
export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  box-sizing: border-box;
  border: 3px solid #ffffff;
  border-radius: 16px;
  min-width: 334.64px;
  height: 410px;

  :hover {
    cursor: pointer;
    border: 3px solid #000000;

    h3 {
      color: #4a94e6;
    }
  }
`;

// 게시글 썸네일
export const PostThumnail = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 180px;
  border-radius: 8px;
  order: 0;

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export const PostTitle = styled.h3`
  ${FontStyle}

  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;
  max-height: 3.2rem;

  text-overflow: ellipsis;
  overflow: hidden;

  color: #000000;
  order: 1;
`;

export const PostSubtude = styled.p`
  color: #4e4e4e;
  overflow: hidden;
  position: relative;

  ${FontStyle}
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.6rem;

  max-height: 3.2rem;
  color: #666;
  order: 2;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15%;
    height: 1.6rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 75%
    );
  }
`;

export const PostAuthor = styled.div`
  box-sizing: border-box;
  order: 3;
  display: flex;
  flex-direction: row;
  padding: 1rem 0px 0px;
  gap: 0.6rem;
  height: 54px;

  border-top: 3px solid #000000;
`;

export const PostAvatar = styled.img`
  box-sizing: border-box;

  width: 36px;
  height: 36px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 100%;
  order: 0;
`;

export const AuthorName = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  text-transform: capitalize;

  color: #000000;
`;

export const PostView = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  ${FontStyle}
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2.2rem;

  color: #000000;

  :after {
    content: "view";
    display: inline-block;
    background-size: contain;
    margin-left: 6px;
  }
`;
