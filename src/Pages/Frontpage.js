import {
  Logo,
  StyledSection,
  StyledUpperDiv,
} from "../Components/StyledComponents";
import avatar from "../Images/your-avatar.png";
import logo from "../Images/oldagram-logo.png";

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledUpperDiv>
        <img src={logo} />
        <img src={avatar} />
      </StyledUpperDiv>
    </StyledSection>
  );
};
