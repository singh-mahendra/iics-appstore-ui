import React from "react";
import ReactDOM from "react-dom";
import { Shell } from "@informatica/droplets-common";

import { pages } from "./pages/";
import "@informatica/droplets-core/dist/themes/statement/statement.css";

function App() {
    return (
        <Shell productName="IICS App Store" routes={pages}>
            <Shell.Header productName="IICS App Store" />
            <Shell.Nav />
            <Shell.Main />
        </Shell>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
