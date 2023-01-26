import {
  CommentIcon,
  HeartIcon,
  MessageIcon,
  NoMarginP,
  StyledDiv,
  StyledImg,
  StyledSection,
} from "../Components/StyledComponents";
import avatar from "../Images/your-avatar.png";
import logo from "../Images/oldagram-logo.png";
import { posts } from "./FrontpageFiles/FrontpageTextConsts";

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <img src={logo} />
        <img src={avatar} />
      </StyledDiv>
      {posts.map((item, index) => {
        return (
          <StyledDiv post>
            <StyledDiv upperPost>
              <img src={item.avatar} />
              <div>
                <NoMarginP bold>{item.name}</NoMarginP>
                <NoMarginP>{item.location}</NoMarginP>
              </div>
            </StyledDiv>
            <div>
              <StyledImg src={item.post} />
              <StyledDiv upperPost>
                <HeartIcon />
                <CommentIcon />
                <MessageIcon />
              </StyledDiv>
            </div>
          </StyledDiv>
        );
      })}
    </StyledSection>
  );
};
