import React from "react";
import style from "./Widget.module.scss";

type Props = {
  children: React.ReactNode;
};

function Widget({ children }: Props): JSX.Element {
  return <div className={style.widget}>{children}</div>;
}

export default Widget;
