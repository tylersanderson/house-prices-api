import React from "react";
import { ShellBar, ShellBarItem, Avatar } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { useHistory } from "react-router-dom";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js"; // Only if using the @ui5/webcomponents-fiori package
import "@ui5/webcomponents-icons/dist/Assets.js"; // Only if using the @ui5/webcomponents-icons package

export function MyApp() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("./");
  };

  return (
    <>
      <ShellBar
        logo={<img alt="logo" src="react-logo.png" />}
        profile={<Avatar image="ui5-logo.png" />}
        primaryTitle={"House Price Prediction"}
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}
