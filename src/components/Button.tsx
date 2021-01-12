import React from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props): JSX.Element {
  return <button className={style.button}>{children}</button>;
}

export default Button;
