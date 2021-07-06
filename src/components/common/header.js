import React, { useContext } from "react";
import AuthContext from "../../lib/contexts/auth.context";
import LogoIcon from "../icons/logo";

const Header = () => {
  const { authState } = useContext(AuthContext);
  const username = authState ? authState.user.username : undefined;

  return (
    <header className="flex-s-c header">
      <LogoIcon className="logo" />
    </header>
  );
};

export default Header;
