import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

export const HeartIcon = styled(FiHeart)``;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c6c6c6;
  padding: 1em 0;
  ${(props) => {
    if (props.post)
      return `
    justify-content: center;
    border: none;
    flex-direction: column;
`;
  }}
  ${(props) => {
    if (props.upperPost)
      return `
    width: 100%;
    border: none;
    justify-content: flex-start;
    text-align: left;
    `;
  }}
`;

export const NoMarginP = styled.p`
  margin: 0;
  ${(props) => {
    if (props.bold)
      return `
    font-weight: bold;`;
  }}
`;
