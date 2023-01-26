import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledUpperDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c6c6c6;
  padding: 1em;
  ${(props) => {
    if (props.upperPost)
      return `
    justify-content: flex-start;
    border: none; `;
  }}
`;

export const StyledInnerDiv = styled.div`
  text-align: left;
`;

export const NoMarginP = styled.p`
  margin: 0;
`;
