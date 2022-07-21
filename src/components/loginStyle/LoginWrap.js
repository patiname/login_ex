import styled from "styled-components";

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid #dbdbdb;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      all: unset;
      border: 1px solid #dbdbdb;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
    }
  }
`;
