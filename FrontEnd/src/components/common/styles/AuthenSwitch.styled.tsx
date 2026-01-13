import styled from "styled-components";

export const SwitchBox = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  position: relative;
  display: flex;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ccc;
`;

export const ActiveSlider = styled.div<{ $isLogin: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${(props) =>
    props.$isLogin ? "translateX(0)" : "translateX(100%)"};
  z-index: 1;
`;

export const SwitchButton = styled.button<{ $active: boolean }>`
  flex: 1;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 600;
  z-index: 2;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#333" : "#686868")};
  transition: color 0.3s ease;
  font-family: "LexendBold", sans-serif;
`;
