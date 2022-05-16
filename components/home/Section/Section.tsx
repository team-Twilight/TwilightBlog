import {
    SectionContainer,
    SectionWrap
  } from "./Section.style";
import { PostWrap } from "./PostWrap/PostWrap";
import { StatusWrap } from "./StatusWrap/StatusWrap";

export const Section = () => {
    return (
        <SectionContainer>
            <SectionWrap>
                <PostWrap />
                <StatusWrap />
            </SectionWrap>
        </SectionContainer>
    )
}