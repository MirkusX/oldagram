import {
  CommentIcon,
  HeartIcon,
  MessageIcon,
  NoMarginP,
  StyledButton,
  StyledDiv,
  StyledImg,
  StyledSection,
  StyledSpan,
} from "../Components/StyledComponents";
import avatar from "../Images/your-avatar.png";
import logo from "../Images/oldagram-logo.png";
import { posts } from "./FrontpageFiles/FrontpageTextConsts";
import { useState } from "react";

export const Frontpage = () => {
  const [heart, setHeart] = useState(false);
  const [number, setNumber] = useState([
    [{ likes: 21 }],
    [{ likes: 1 }],
    [{ likes: 3 }],
  ]);
  const like = (index, e) => {
    const newArr = number;
    newArr[index].forEach((item, index) => {
      item.likes++;
    });
    setHeart(!heart);
    setNumber(newArr);
    e.target.style.fill = "red";
    console.log(number);
  };
  return (
    <StyledSection container>
      <StyledDiv>
        <StyledImg logo src={logo} />
        <StyledImg avatar src={avatar} />
      </StyledDiv>
      <StyledSection>
        {posts.map((item, index) => {
          return (
            <StyledDiv post key={index}>
              <StyledDiv upperPost>
                <img src={item.avatar} />
                <div>
                  <NoMarginP bold>{item.name}</NoMarginP>
                  <NoMarginP>{item.location}</NoMarginP>
                </div>
              </StyledDiv>
              <div>
                <StyledImg src={item.post} />
                <StyledDiv icons>
                  <StyledButton onClick={(e) => like(index, e)}>
                    <HeartIcon />
                  </StyledButton>
                  <CommentIcon />
                  <MessageIcon />
                </StyledDiv>
                {number[index].map((item, index) => {
                  console.log("it ran");
                  return (
                    <StyledDiv lowerPost>
                      <NoMarginP bold liked={heart}>
                        {item.likes} likes
                      </NoMarginP>
                    </StyledDiv>
                  );
                })}
                <StyledDiv comment>
                  <NoMarginP>
                    <StyledSpan>{item.username}</StyledSpan> {item.comment}
                  </NoMarginP>
                </StyledDiv>
              </div>
            </StyledDiv>
          );
        })}
      </StyledSection>
    </StyledSection>
  );
};
