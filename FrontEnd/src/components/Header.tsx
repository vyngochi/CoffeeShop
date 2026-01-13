import * as S from "./common/styles/Header.styled";

import logo from "./../assets/imgs/CoffeeShop-logo.png";
import { CircleUserRound, TextAlignJustify } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthenButton from "./AuthenButton";

interface MenuInterface {
  title: string;
  path: string;
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const Menu: MenuInterface[] = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/products" },
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/aboutus" },
  ];

  const handleClickMenu = (path: string) => {
    navigate(path);
  };
  return (
    <S.HeaderWrapper>
      <S.Logo className="logo">
        <S.LogoImg src={logo} alt="Coffee shop logo" />
      </S.Logo>
      <S.Menu>
        {Menu.map((menu, idx) => (
          <S.List
            $isActive={location.pathname === menu.path}
            key={idx}
            onClick={() => handleClickMenu(menu.path)}
          >
            {menu.title}
          </S.List>
        ))}
      </S.Menu>
      <S.ProfileIconWrapper>
        {/* <CircleUserRound size={30} className="profileIcon" /> */}
        <AuthenButton />
      </S.ProfileIconWrapper>
      <TextAlignJustify className="icon" size={30} />
    </S.HeaderWrapper>
  );
}
