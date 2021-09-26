//TODO: re-enable eslint but don't show errors about require being undefined
/* eslint-disable */
const { override, addWebpackPlugin } = require("customize-cra");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");
const getExternals = require("@informatica/iics-app-build/getExternals");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

const iics_externals = getExternals(process.env.NODE_ENV);

// Because of Yarn workspaces, we have to tell copy-webpack-plugin how to find the workspace node_modules folder.
const cwpContext =
    process.env.NODE_ENV === "development" ? "./node_modules" : "./node_modules";

module.exports = override(
    /**
     * Externalize shared IICS libraries like React, Droplets, iics-utils, etc.
     */
    addWebpackPlugin(
        new HtmlWebpackExternalsPlugin({
            externals: iics_externals,
            cwpOptions: { context: cwpContext },
        })
    )
);
