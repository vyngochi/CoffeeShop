import styled from "styled-components";
import AuthenSwitch from "../components/AuthenSwitch";
import { useState } from "react";
import AuthenTextField from "../components/AuthenTextField";
import { Mail } from "lucide-react";

export default function Test() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* <Wrapper>
        <AuthenSwitch isLogin={isLogin} setIsLogin={setIsLogin} />
        <AuthenTextField icon={<Mail />} label="Email" />
      </Wrapper> */}
      <Wrapper>
        <AuthenTextField icon={<Mail />} label="Email" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
