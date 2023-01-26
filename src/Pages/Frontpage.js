import {
  Logo,
  NoMarginP,
  StyledInnerDiv,
  StyledSection,
  StyledUpperDiv,
} from "../Components/StyledComponents";
import avatar from "../Images/your-avatar.png";
import logo from "../Images/oldagram-logo.png";
import { posts } from "./FrontpageFiles/FrontpageTextConsts";

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledUpperDiv>
        <img src={logo} />
        <img src={avatar} />
      </StyledUpperDiv>
      {posts.map((item, index) => {
        return (
          <StyledUpperDiv upperPost>
            <div>
              <img src={item.avatar} />
            </div>
            <StyledInnerDiv>
              <NoMarginP>{item.name}</NoMarginP>
              <NoMarginP>{item.location}</NoMarginP>
            </StyledInnerDiv>
          </StyledUpperDiv>
        );
      })}
    </StyledSection>
  );
};
