import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import CHECKBOX from "@lugia/lugia-web/dist/checkbox/lugia.checkbox.zh-CN.json";
import CHECKBOXGROUP from "@lugia/lugia-web/dist/checkbox/lugia.checkbox-group.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const LimitedCheckBox = require("./LimitedCheckBox").default;
const DisabledCheckBox = require("./DisabledCheckBox").default;
const BasicGroupDemo = require("./BasicGroupDemo").default;
const VerticalGroupDemo = require("./VerticalGroupDemo").default;
const CheckAllDemo = require("./CheckAllDemo").default;
const SomePropsDemo = require("./SomePropsDemo").default;
const SomeLimitedPropsDemo = require("./SomeLimitedPropsDemo").default;
const ButtonPropsDemo = require("./ButtonPropsDemo").default;
const ButtonLimitedDemo = require("./ButtonLimitedDemo").default;
const DisplayValueGroup = require("./DisplayValueGroup").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title title={"多选框"} subTitle={"Checkbox"} desc={"多选框。"} />
              <Demo
                title={"基本"}
                titleID={"checkbox-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nexport default class CheckBoxDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Checkbox>CheckBox</Checkbox>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"最简单的用法"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"受限的Checkbox"}
                titleID={"checkbox-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nexport default class CheckBoxDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Checkbox checked onChange={this.handleChange}>\n                    CheckBox\n                </Checkbox>\n            </div>\n        );\n    }\n  handleChange = (value: Array<string>) => {\n    this.setState({\n      value,\n    });\n  };\n}\n`}</code>
                }
                desc={"受限的Checkbox"}
                demo={<LimitedCheckBox />}
              ></Demo>
              <Demo
                title={"禁用的Checkbox"}
                titleID={"checkbox-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nexport default class CheckBoxDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Checkbox disabled>CheckBox</Checkbox>\n                <br/>\n                <Checkbox checked disabled>\n                    CheckBox\n                </Checkbox>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"禁用的Checkbox"}
                demo={<DisabledCheckBox />}
              ></Demo>
              <Demo
                title={"Checkbox 组"}
                titleID={"checkbox-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\']\n        };\n    }\n    handleChange = ({ newValue, newDisplayValue }) => {\n        console.info(newValue, newDisplayValue);\n        this.setState({ newValue});\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup onChange={this.handleChange} value={this.state.newValue}>\n                    <Checkbox value=\"11\" disabled>\n                        CheckBox1\n                    </Checkbox>\n                    <Checkbox value=\"22\">CheckBox2</Checkbox>\n                    <Checkbox value=\"33\">CheckBox3</Checkbox>\n                </CheckboxGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"一组Checkbox，组合使用"}
                demo={<BasicGroupDemo />}
              ></Demo>
              <Demo
                title={"垂直的Checkbox组"}
                titleID={"checkbox-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\']\n        };\n    }\n    handleChange = ({ newValue, newDisplayValue }) => {\n        console.info(newValue, newDisplayValue);\n        this.setState({ newValue});\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup styles=\"vertical\" onChange={this.handleChange} value={this.state.newValue}>\n                    <Checkbox value=\"11\" disabled>\n                        CheckBox1\n                    </Checkbox>\n                    <Checkbox value=\"22\">CheckBox2</Checkbox>\n                    <Checkbox value=\"33\">CheckBox3</Checkbox>\n                </CheckboxGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"垂直的Checkbox组"}
                demo={<VerticalGroupDemo />}
              ></Demo>
              <Demo
                title={"全选"}
                titleID={"checkbox-5"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst data = [\n  {\n    text: \'Apple\',\n    value: \'apple\',\n  },\n  {\n    text: \'Pear\',\n    value: \'pear\',\n  },\n  {\n    text: \'Orange\',\n    value: \'orange\',\n  },\n];\nconst CheckAll = styled.div\`\n  padding: 6px;\n\`;\nconst Items = styled.div\`\n  padding: 10px 6px;\n\`;\n\nexport default class extends React.Component {\n  constructor(){\n    super();\n    const value = [\'pear\'];\n    this.state = {\n      value,\n      indeterminate: value.length > 0,\n      checked: value.length === data.length,\n    };\n    this.allValues = [];\n    data.forEach(item => {\n      this.allValues.push(item.value);\n    });\n  }\n  handleChange = value => {\n    console.log(\'value ->\', value);\n    const { newValue } =  value;\n    this.setState({\n      value: newValue,\n      checked: newValue.length === data.length,\n      indeterminate: !!newValue.length && newValue.length < data.length,\n    });\n  };\n  handleCheckAll = () => {\n    const { checked } = this.state;\n    this.setState({\n      value: checked ? [] : this.allValues,\n      checked: !checked,\n      indeterminate: false,\n    });\n  };\n  render() {\n    const { value, indeterminate, checked } = this.state;\n    return (\n      <div>\n        <CheckAll>\n          <Checkbox indeterminate={indeterminate} checked={checked} onChange={this.handleCheckAll}>\n            Check All\n          </Checkbox>\n        </CheckAll>\n        <Items>\n          <CheckboxGroup data={data} value={value} onChange={this.handleChange} />\n        </Items>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"实现全选效果"}
                demo={<CheckAllDemo />}
              ></Demo>
              <Demo
                title={"设置指定字段"}
                titleID={"checkbox-6"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst options = [\n    { label: \'check1\', value: \'11\', name: \'1\' },\n    { label: \'check2\', value: \'22\', name: \'2\' },\n    { label: \'check3\', value: \'33\', name: \'3\' },\n];\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\'],\n            newDisplayValue: [\'check4\', \'check5\'],\n        };\n    }\n    handleChange = ({ newValue, newDisplayValue }) => {\n        console.info(newValue, newDisplayValue);\n        this.setState({ newValue, newDisplayValue });\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup\n                    onChange={this.handleChange}\n                    styles=\"vertical\"\n                    data={options}\n                    defaultValue={[\'11\', \'44\']}\n                    displayValue={[\'check4\', \'check5\']}\n                    displayField=\"label\"\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={
                  "设置Checkbox的展示字段，设置Checkbox组value备用选项，value值不存在展示备用项"
                }
                demo={<SomePropsDemo />}
              ></Demo>
              <Demo
                title={"受限的Checkbox"}
                titleID={"checkbox-7"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst options = [\n    { label: \'check1\', value: \'11\', name: \'1\' },\n    { label: \'check2\', value: \'22\', name: \'2\' },\n    { label: \'check3\', value: \'33\', name: \'3\' },\n];\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\'],\n            newDisplayValue: [\'check4\', \'check5\'],\n        };\n    }\n    handleChange = ({ newValue, newDisplayValue }) => {\n        console.info(newValue, newDisplayValue);\n        this.setState({ newValue, newDisplayValue });\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup\n                    onChange={this.handleChange}\n                    styles=\"vertical\"\n                    data={options}\n                    value={[\'11\', \'44\']}\n                    displayValue={[\'check4\', \'check5\']}\n                    displayField=\"label\"\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"受限的Checkbox,可根据回调函数更改受限字段"}
                demo={<SomeLimitedPropsDemo />}
              ></Demo>
              <Demo
                title={"按钮Checkbox组"}
                titleID={"checkbox-8"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst CheckBoxButton = Checkbox.Button;\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\'],\n            newDisplayValue: [\'check4\', \'check5\'],\n        };\n    }\n    handleChange = obj => {\n        console.info(obj);\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup childType=\"button\" onChange={this.handleChange} defaultValue={[\'1\', \'2\']}>\n                    <CheckBoxButton value=\"1\">CheckBox1</CheckBoxButton>\n                    <CheckBoxButton value=\"2\">CheckBox2</CheckBoxButton>\n                    <CheckBoxButton value=\"3\">CheckBox3</CheckBoxButton>\n                </CheckboxGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"按钮形状的多选框"}
                demo={<ButtonPropsDemo />}
              ></Demo>
              <Demo
                title={"受限按钮Checkbox组"}
                titleID={"checkbox-9"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst options = [\n    { label: \'check1\', value: \'11\', name: \'1\' },\n    { label: \'check2\', value: \'22\', name: \'2\' },\n    { label: \'check3\', value: \'33\', name: \'3\' },\n];\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            newValue: [\'11\', \'44\'],\n            newDisplayValue: [\'check4\', \'check5\'],\n        };\n    }\n    handleChange = ({ newValue, newDisplayValue }: any): any => {\n        console.info(newValue, newDisplayValue);\n        this.setState({ newValue, newDisplayValue });\n    };\n    render() {\n        return (\n            <div>\n                <CheckboxGroup\n                    onChange={this.handleChange}\n                    data={options}\n                    value={this.state.newValue}\n                    displayValue={[\'check4\', \'check5\']}\n                    displayField=\"label\"\n                    childType=\"button\"\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"受限的按钮Checkbox组"}
                demo={<ButtonLimitedDemo />}
              ></Demo>
              <Demo
                title={"按钮Checkbox组取消项"}
                titleID={"checkbox-10"}
                code={
                  <code>{`import React from \'react\';\nimport {Checkbox} from \'@lugia/lugia-web\';\n\nconst CheckboxGroup = Checkbox.Group;\nconst options = [\n    { label: \'check1\', value: \'11\', name: \'1\' },\n    { label: \'check2\', value: \'22\', name: \'2\' },\n    { label: \'check3\', value: \'33\', name: \'3\' },\n];\n\nexport default class CheckBoxDemo extends React.Component {\n\n    render() {\n        return (\n            <div>\n                <CheckboxGroup\n                    data={options}\n                    childType={\'button\'}\n                    defaultValue={[\'11\', \'44\']}\n                    defaultDisplayValue={[\'check4\', \'check5\']}\n                    displayField=\"label\"\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"按钮Checkbox组的取消项展示"}
                demo={<DisplayValueGroup />}
              ></Demo>
              <EditTables dataSource={CHECKBOX} />
              <EditTables dataSource={CHECKBOXGROUP} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"基本"} href={"#checkbox-0"} />
                <Link title={"受限的Checkbox"} href={"#checkbox-1"} />
                <Link title={"禁用的Checkbox"} href={"#checkbox-2"} />
                <Link title={"Checkbox 组"} href={"#checkbox-3"} />
                <Link title={"垂直的Checkbox组"} href={"#checkbox-4"} />
                <Link title={"全选"} href={"#checkbox-5"} />
                <Link title={"设置指定字段"} href={"#checkbox-6"} />
                <Link title={"受限的Checkbox"} href={"#checkbox-7"} />
                <Link title={"按钮Checkbox组"} href={"#checkbox-8"} />
                <Link title={"受限按钮Checkbox组"} href={"#checkbox-9"} />
                <Link title={"按钮Checkbox组取消项"} href={"#checkbox-10"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
