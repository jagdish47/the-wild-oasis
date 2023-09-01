import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

// const Heading = styled.h1`
//   font-size: ${10 > 5 ? "30px" : "5px"};
//   font-weight: 600;
//   ${test}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2px;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2px;
      font-weight: 500;
    `}
`;

export default Heading;
