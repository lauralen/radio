import React from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  dataTestid?: string;
}

function Button({ children, dataTestid }: Props): JSX.Element {
  return (
    <button className={style.button} data-testid={dataTestid}>
      {children}
    </button>
  );
}

export default Button;
