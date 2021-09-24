import * as React from "react";
import { home_icon } from "@informatica/archipelago-icons";
import { Button } from "@informatica/droplets-core";

const ProductPage = (props) => {
    return (
        <Button>This is a Fixed Page</Button>
    );
};
 
export default (props) => {
    return {
        id: "productPage",
        meta: {
            nav: {
                label: "Home",
                icon: <img src={home_icon} alt="" />
            }
        },
        path: "/product",
        privilege: "*",
        licenseId: "*",
        component: ProductPage,
        preserveState: "children",
        position: 2,
    };
};