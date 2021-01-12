import React from "react";
import "style/main.scss";

import Widget from "components/Widget/Widget";
import WidgetHeader from "components/Widget/WidgetHeader";

function App(): JSX.Element {
  return (
    <Widget>
      <WidgetHeader />
    </Widget>
  );
}

export default App;
