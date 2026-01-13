import * as S from "./common/styles/AuthenSwitch.styled";

interface AuthenSwitchProps {
  isLogin: boolean;
  setIsLogin: (v: boolean) => void;
}
export default function AuthenSwitch({
  isLogin,
  setIsLogin,
}: AuthenSwitchProps) {
  return (
    <S.SwitchBox>
      <S.ActiveSlider $isLogin={isLogin} />
      <S.SwitchButton $active={isLogin} onClick={() => setIsLogin(true)}>
        Login
      </S.SwitchButton>
      <S.SwitchButton $active={!isLogin} onClick={() => setIsLogin(false)}>
        Sign Up
      </S.SwitchButton>
    </S.SwitchBox>
  );
}
