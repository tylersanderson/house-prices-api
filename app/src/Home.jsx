import React, { useState } from "react";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
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
  const [loading, setLoading] = useState(false);

  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
      style={spacing.sapUiContentPadding}
    >
      <Form title="House Price Prediction">
        <FormItem label="Sole Form Item">
          <Input />
        </FormItem>
        <FormItem label="Country">
          <Select>
            <Option>Germany</Option>
            <Option>France</Option>
            <Option>Italy</Option>
          </Select>
        </FormItem>
      </Form>
    </FlexBox>
  );
}
