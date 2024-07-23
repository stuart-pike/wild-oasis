import styled, { css } from "styled-components";

// In this example, the attrs method is used to set the default value of the type prop to 'vertical' if it is not provided. This ensures that your component behaves correctly without relying on deprecated defaultProps.
const Row = styled.div.attrs((props) => ({
  type: props.type || "vertical",
}))`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
