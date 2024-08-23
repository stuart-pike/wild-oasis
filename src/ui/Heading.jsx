import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: grey"};
// `;
//
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  line-height: 1.4;
`;

export default Heading;

// The above can work as styled props
// const Heading = styled.h1`
//   ${(props) => {
//     switch (props.as) {
//       case "h1":
//         return css`
//           font-size: 3rem;
//           font-weight: 600;
//         `;
//       case "h2":
//         return css`
//           font-size: 2rem;
//           font-weight: 600;
//         `;
//       case "h3":
//         return css`
//           font-size: 2rem;
//           font-weight: 500;
//         `;
//     }
//   }}

//   line-height: 1.4;
// `;
