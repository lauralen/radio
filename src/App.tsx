import React from "react";
import "style/main.scss";

import Widget from "components/Widget/Widget";
import WidgetHeader from "components/Widget/WidgetHeader";
import WidgetFooter from "components/Widget/WidgetFooter";

function App(): JSX.Element {
  return (
    <Widget>
      <WidgetHeader />
      <WidgetFooter />
    </Widget>
  );
}

export default App;
