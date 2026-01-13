import styled from "styled-components";

export const TextFiledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  width: 300px;
  height: 45px;
  border: 1.5px solid #ccc;
  border-radius: 15px;
  font-family: "LexendBold", sans-serif;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #ccc;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    position: absolute;
  }

  .input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #212121;
    padding: 0 0.2em;
    color: #2196f3;
  }

  input {
    outline: none;
    border: none;
  }
`;
