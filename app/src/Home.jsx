import React, { useState } from "react";
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

export function Home() {
  const [aboveGroundSqFt, setAboveGroundSqFt] = useState(0);
  const [overallQuality, setOverallQuality] = useState(1);

  async function handleSubmit() {
    // if (password !== confirmPassword) {
    //   alert("passwords don't match");
    //   return;
    // }

    if (true) {
      fetch("http://127.0.0.1:1080/predict", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          OverallQual: overallQuality,
          GrLivArea: aboveGroundSqFt,
          BsmtFinSF1: 1000,
          TotalBsmtSF: 1000,
          "2ndFlrSF": 1000,
          YearBuilt: 2000,
          "1stFlrSF": 1000,
          LotArea: 1000,
          GarageArea: 200,
          GarageCars: 2,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }

  const ratings = [
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

  return (
    <div>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Form title="House Price Prediction">
          <FormItem label="Above Ground Sq-Ft">
            <Input
              required={true}
              type="Number"
              valueState="None"
              onChange={(e) => {
                setAboveGroundSqFt(e.target.value);
              }}
            />
          </FormItem>
          <FormItem label="Overall Quality">
            <Select
              required={true}
              onChange={(e) => {
                setOverallQuality(e.detail.selectedOption.dataset.id);
              }}
            >
              {ratings.map((item) => (
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
    </div>
  );
}
