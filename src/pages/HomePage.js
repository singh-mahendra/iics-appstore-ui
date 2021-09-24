import * as React from "react";
import { home_icon } from "@informatica/archipelago-icons";
import { Button } from "@informatica/droplets-core";

const HomePage = (props) => {
    return (
        <h1>Welcome to Informatica IICS App Store</h1>
    );
};
 
export default (props) => {
    return {
        id: "homePage",
        meta: {
            nav: {
                label: "Home",
                icon: <img src={home_icon} alt="" />
            }
        },
        path: "/home",
        privilege: "*",
        licenseId: "*",
        component: HomePage,
        preserveState: "children",
        position: 1,
    };
};