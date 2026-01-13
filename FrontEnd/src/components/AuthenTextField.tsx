import type React from "react";
import * as S from "./common/styles/AuthTextField.styled";

interface AuthTextFieldProps {
  icon: React.ReactNode;
  label: string;
}
export default function AuthenTextField({ icon, label }: AuthTextFieldProps) {
  return (
    <S.TextFiledWrapper>
      <S.Icon>{icon}</S.Icon>
      <S.InputWrapper>
        <label>{label}</label>
        <input type="text" />
      </S.InputWrapper>
    </S.TextFiledWrapper>
  );
}
