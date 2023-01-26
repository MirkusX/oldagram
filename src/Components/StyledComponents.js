import styled from "styled-components";
import { FiHeart, FiSend } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

export const HeartIcon = styled(FiHeart)`
  width: 25px;
  height: 25px;
`;

export const CommentIcon = styled(FaRegComment)`
  width: 25px;
  height: 25px;
`;

export const MessageIcon = styled(FiSend)`
  width: 25px;
  height: 25px;
`;

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
  padding: 0.625em;
  @media (max-width: 811px) {
    width: 100%;
  }
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
    gap: 0.5em;
    `;
  }}
  ${(props) => {
    if (props.lowerPost)
      return `
    gap: 1em;
    border: none;
    justify-content: flex-start;`;
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

export const StyledImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  ${(props) => {
    if (props.logo)
      return `
    margin-left: 0.625em;
    min-width: auto;
    min-height: auto;
    `;
  }}
  ${(props) => {
    if (props.avatar)
      return `
    margin-right: 0.625em;
    min-width: auto;
    min-height: auto;
    `;
  }}
`;
