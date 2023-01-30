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
  //updates the like count
  const [heart, setHeart] = useState(false);
  //state for likes count
  const [number, setNumber] = useState([
    [{ likes: 21 }],
    [{ likes: 4 }],
    [{ likes: 152 }],
  ]);
  //array for temporary likes count storage
  let newArr = [];
  //turns the like button red, stores the likes state in newArr and then puts newArr back into likes state, changes heart state so dom updates
  const like = (index, e) => {
    if (e.target.style.fill === "red") {
      e.target.style.fill = "white";
      newArr = number;
      newArr[index].forEach((item, index) => {
        --item.likes;
      });
      setHeart(!heart);
      setNumber(newArr);
    } else {
      e.target.style.fill = "red";
      newArr = number;
      newArr[index].forEach((item, index) => {
        item.likes++;
      });
      setHeart(!heart);
      setNumber(newArr);
    }
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
                  return (
                    <StyledDiv lowerPost key={index}>
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
