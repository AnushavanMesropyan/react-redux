import React from "react";

import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(true, false);

    return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
