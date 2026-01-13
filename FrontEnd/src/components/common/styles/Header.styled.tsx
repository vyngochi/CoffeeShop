import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    .icon {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle 250px at 5% 0%, #fde0bb 30%, #ffffff 70%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  position: relative;
  left: -70px;
  max-height: 80%;
  object-fit: contain;

  @media (max-width: 600px) {
    max-height: 70%;
  }
`;

export const Menu = styled.menu`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;
      font-family: "LexendBold", sans-serif;
      font-size: clamp(14px, 2vw, 18px);
      cursor: pointer;
    }
  }
`;

export const List = styled.li<{ $isActive: boolean }>`
  font-weight: ${(props) => (props.$isActive ? 500 : 300)};
  color: ${(props) => (props.$isActive ? "black" : "#686868")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ProfileIconWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
