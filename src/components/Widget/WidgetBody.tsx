import React from "react";
import style from "./WidgetBody.module.scss";

type Props = {
  children: React.ReactNode;
};

function WidgetBody({ children }: Props): JSX.Element {
  return <div className={style.body}>{children}</div>;
}

export default WidgetBody;
