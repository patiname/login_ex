import styled from "styled-components";

const SButton = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: orangered;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;

export const Button = ({ active, text }) => {
  return (
    <SButton opacity={active ? 1 : 0.5} cursor={active ? "pointer" : "auto"}>
      {text}
    </SButton>
  );
};
