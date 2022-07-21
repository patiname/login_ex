import styled from "styled-components";

const SErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const ErrorMessage = ({ message }) => {
  return <SErrorMessage>{message}</SErrorMessage>;
};
