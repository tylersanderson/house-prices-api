import React, { useState, useEffect } from "react";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Button,
  Card,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { Input } from "@ui5/webcomponents-react/lib/Input";
import { CheckBox } from "@ui5/webcomponents-react/lib/CheckBox";
import { Select } from "@ui5/webcomponents-react/lib/Select";
import { Label } from "@ui5/webcomponents-react/lib/Label";
import { FormItem } from "@ui5/webcomponents-react/lib/FormItem";
import { FormGroup } from "@ui5/webcomponents-react/lib/FormGroup";
import { Option } from "@ui5/webcomponents-react/lib/Option";
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js";
import "@ui5/webcomponents-icons/dist/icons/line-chart.js";
import "@ui5/webcomponents-icons/dist/icons/list.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js"; // Only if using the @ui5/webcomponents-fiori package
import "@ui5/webcomponents-icons/dist/Assets.js"; // Only if using the @ui5/webcomponents-icons package
import { useHistory } from "react-router-dom";
import { Form } from "@ui5/webcomponents-react/lib/Form";
import { MessageBox } from "@ui5/webcomponents-react/lib/MessageBox";

export function Home() {
  const [aboveGroundSqFt, setAboveGroundSqFt] = useState();
  const [overallQuality, setOverallQuality] = useState(1);
  const [basementFinishSqFt, setBasemenFinishSqFt] = useState();
  const [basementTotalSqFt, setBasementTotalSqFt] = useState();
  const [secondFloorSqFt, setSecondFloorSqFt] = useState();
  const [yearBuilt, setYearBuilt] = useState();
  const [firstFloorSqFt, setFirstFloorSqFt] = useState();
  const [lotAreaSqFt, setLotAreaSqFt] = useState();
  const [garageAreaSqFt, setGarageAreaSqFt] = useState();
  const [garageCars, setGarageCars] = useState(1);

  const [aboveGroundSqFtValueState, setAboveGroundSqFtValueState] = useState(
    "None"
  );
  const [overallQualityValueState, setOverallQualityValueState] = useState(
    "None"
  );
  const [
    basementFinishSqFtValueState,
    setBasementFinishSqFtValueState,
  ] = useState("None");
  const [
    basementTotalSqFtValueState,
    setBasementTotalSqFtValueState,
  ] = useState("None");
  const [secondFloorSqFtValueState, setSecondFloorSqFtValueState] = useState(
    "None"
  );
  const [yearBuiltValueState, setYearBuiltValueState] = useState("None");
  const [firstFloorSqFtValueState, setFirstFloorSqFtValueState] = useState(
    "None"
  );
  const [lotAreaSqFtValueState, setLotAreaSqFtValueState] = useState("None");
  const [garageAreaSqFtValueState, setGarageAreaSqFtValueState] = useState(
    "None"
  );
  const [garageCarsValueState, setGarageCarsValueState] = useState("None");

  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const openMessageBox = () => {
    setMessageBoxOpen(true);
  };
  const handleMessageBoxClose = () => {
    setMessageBoxOpen(false);
  };

  useEffect(() => {
    wakeupServer();
  }, []);

  // useEffect(() => {
  //   function checkValueStates() {
  //     const allValueStates = [aboveGroundSqFtValueState];
  //     if (allValueStates.indexOf("Error") !== -1) {
  //       alert("Error exists!");
  //     } else {
  //       alert("Error does not exist");
  //     }
  //   }
  //   checkValueStates();
  // });

  async function wakeupServer() {
    let wakeupResponse = await fetch("http://127.0.0.1:1080/wakeup");
    let wakeupResponseJSON = await wakeupResponse.json();
    return wakeupResponseJSON;
  }

  function handleSubmit() {
    aboveGroundSqFt == null || aboveGroundSqFt < 0
      ? setAboveGroundSqFtValueState("Error")
      : setAboveGroundSqFtValueState("None");

    overallQuality == null || overallQuality < 1
      ? setOverallQualityValueState("Error")
      : setOverallQualityValueState("None");

    lotAreaSqFt == null || lotAreaSqFt < 0
      ? setLotAreaSqFtValueState("Error")
      : setLotAreaSqFtValueState("None");

    basementTotalSqFt == null || basementTotalSqFt < 0
      ? setBasementTotalSqFtValueState("Error")
      : setBasementTotalSqFtValueState("None");

    basementFinishSqFt == null || basementFinishSqFt < 0
      ? setBasementFinishSqFtValueState("Error")
      : setBasementFinishSqFtValueState("None");

    firstFloorSqFt == null || firstFloorSqFt < 0
      ? setFirstFloorSqFtValueState("Error")
      : setFirstFloorSqFtValueState("None");

    secondFloorSqFt == null || secondFloorSqFt < 0
      ? setSecondFloorSqFtValueState("Error")
      : setSecondFloorSqFtValueState("None");

    yearBuilt == null || yearBuilt < 1900
      ? setYearBuiltValueState("Error")
      : setYearBuiltValueState("None");

    garageAreaSqFt == null || garageAreaSqFt < 0
      ? setGarageAreaSqFtValueState("Error")
      : setGarageAreaSqFtValueState("None");

    garageCars == null || garageCars < 0
      ? setGarageCarsValueState("Error")
      : setGarageCarsValueState("None");

    async function predictionPost() {
      fetch("http://127.0.0.1:1080/predict", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          OverallQual: overallQuality,
          GrLivArea: aboveGroundSqFt,
          BsmtFinSF1: basementFinishSqFt,
          TotalBsmtSF: basementTotalSqFt,
          "2ndFlrSF": secondFloorSqFt,
          YearBuilt: yearBuilt,
          "1stFlrSF": firstFloorSqFt,
          LotArea: lotAreaSqFt,
          GarageArea: garageAreaSqFt,
          GarageCars: garageCars,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }

    const validationBool =
      aboveGroundSqFt >= 0 &&
      overallQuality > 0 &&
      basementFinishSqFt >= 0 &&
      basementTotalSqFt >= 0 &&
      secondFloorSqFt >= 0 &&
      yearBuilt >= 1900 &&
      firstFloorSqFt >= 0 &&
      lotAreaSqFt >= 0 &&
      garageAreaSqFt >= 0 &&
      garageCars >= 0;

    if (validationBool === true) {
      predictionPost();
    } else {
      openMessageBox();
    }
  }

  const overallRatingOptions = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
    { id: 7, text: "7" },
    { id: 8, text: "8" },
    { id: 9, text: "9" },
    { id: 10, text: "10" },
  ];

  const garageCarOptions = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
  ];

  return (
    <div>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Form title="House Price Prediction">
          <FormItem label="Overall Quality">
            <Select
              required={true}
              valueState={overallQualityValueState}
              onChange={(e) => {
                setOverallQuality(e.detail.selectedOption.dataset.id);
              }}
              onSubmit={handleSubmit}
            >
              {overallRatingOptions.map((item) => (
                <Option key={item.id} data-id={item.id}>
                  {item.text}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Above Ground Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={aboveGroundSqFtValueState}
              onChange={(e) => {
                setAboveGroundSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Lot Area Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={lotAreaSqFtValueState}
              onChange={(e) => {
                setLotAreaSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Basement Total Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={basementTotalSqFtValueState}
              onChange={(e) => {
                setBasementTotalSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Basement Fisnished Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={basementFinishSqFtValueState}
              onChange={(e) => {
                setBasemenFinishSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="First Floor Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={firstFloorSqFtValueState}
              onChange={(e) => {
                setFirstFloorSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Second Floor Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={secondFloorSqFtValueState}
              onChange={(e) => {
                setSecondFloorSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Year Built">
            <Input
              required={true}
              type="Number"
              valueState={yearBuiltValueState}
              onChange={(e) => {
                setYearBuilt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Garage Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState={garageAreaSqFtValueState}
              onChange={(e) => {
                setGarageAreaSqFt(e.target.value);
              }}
              onSubmit={handleSubmit}
            />
          </FormItem>
          <FormItem label="Garage Cars">
            <Select
              required={true}
              valueState={garageCarsValueState}
              onChange={(e) => {
                setGarageCars(e.detail.selectedOption.dataset.id);
              }}
              onSubmit={handleSubmit}
            >
              {garageCarOptions.map((item) => (
                <Option key={item.id} data-id={item.id}>
                  {item.text}
                </Option>
              ))}
            </Select>
          </FormItem>
        </Form>
      </FlexBox>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Button
          //icon="arrow-right"
          onClick={handleSubmit}
          disabled={false}
        >
          Submit
        </Button>
      </FlexBox>
      <div>
        <MessageBox
          title="Submission Error"
          open={messageBoxOpen}
          onClose={handleMessageBoxClose}
        >
          Please ensure all fields are populated with valid entries
        </MessageBox>
      </div>
    </div>
  );
}
