import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import RADIO from "@lugia/lugia-web/dist/radio/lugia.radio.zh-CN.json";
import RADIOGROUP from "@lugia/lugia-web/dist/radio/lugia.radio-group.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const DisableDemo = require("./DisableDemo").default;
const BasicGroupDemo = require("./BasicGroupDemo").default;
const LimitedDemo = require("./LimitedDemo").default;
const DataDemo = require("./DataDemo").default;
const DisplayDemo = require("./DisplayDemo").default;
const ButtonDemo = require("./ButtonDemo").default;
const ButtonDisplayDemo = require("./ButtonDisplayDemo").default;

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
              <Title title={"单选框"} subTitle={"Radio"} desc={"单选框。"} />
              <Demo
                title={"基本"}
                titleID={"radio-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nexport default class RadioDemo extends React.Component {\n    render() {\n        return (\n            <Radio value=\"1\">Radio</Radio>\n        );\n    }\n}\n`}</code>
                }
                desc={"最简单的用法"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"禁用状态"}
                titleID={"radio-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nexport default class RadioDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Radio value=\"1\" disabled>\n                    Radio\n                </Radio>\n                <br/>\n                <Radio value=\"1\" checked disabled>\n                    Radio\n                </Radio>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"Radio 不可用"}
                demo={<DisableDemo />}
              ></Demo>
              <Demo
                title={"单选按钮组"}
                titleID={"radio-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nconst RadioGroup = Radio.Group;\n\nexport default class RadioGroupDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <RadioGroup defaultValue=\"1\">\n                    <Radio value=\"1\">Radio1</Radio>\n                    <Radio value=\"2\">Radio2</Radio>\n                </RadioGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"单选按钮组"}
                demo={<BasicGroupDemo />}
              ></Demo>
              <Demo
                title={"受控的 RadioGroup"}
                titleID={"radio-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nconst RadioGroup = Radio.Group;\n\nexport default class RadioGroupDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <RadioGroup value=\"1\">\n                    <Radio value=\"1\">Radio1</Radio>\n                    <Radio value=\"2\">Radio2</Radio>\n                </RadioGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"受控的 RadioGroup"}
                demo={<LimitedDemo />}
              ></Demo>
              <Demo
                title={"快速生成"}
                titleID={"radio-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nconst RadioGroup = Radio.Group;\nconst data = [\n    { text: \'radio1\', value: \'Apple\' },\n    { text: \'radio2\', value: \'Pear\' },\n    { text: \'radio3\', value: \'Orange\', disabled: true },\n];\n\nexport default class RadioGroupDemo extends React.Component {\n    onChange = obj => {\n        console.info(\'obj-demo\', obj);\n    };\n    render() {\n        return (\n            <div>\n                <RadioGroup\n                    onChange={this.onChange}\n                    styles=\"vertical\"\n                    displayFiled=\"text\"\n                    valueField=\"value\"\n                    defaultValue=\"Apple\"\n                    data={data}\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"快速生成 RadioGroup，可指定展示字段和value字段"}
                demo={<DataDemo />}
              ></Demo>
              <Demo
                title={"设置 DisplayValue"}
                titleID={"radio-5"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\nconst RadioGroup = Radio.Group;\nconst data = [\n    { text: \'radio1\', value: \'Apple\' },\n    { text: \'radio2\', value: \'Pear\' },\n    { text: \'radio3\', value: \'Orange\', disabled: true },\n];\n\nexport default class RadioGroupDemo extends React.Component {\n    constructor(){\n        super();\n        this.state ={\n            value: \'apples\'\n        };\n    }\n    onChange = obj => {\n        console.info(\'obj-demo\', obj);\n        this.setState({\n          value: obj.newValue\n        });\n    };\n    render() {\n        const radioView = {\n            [Widget.RadioGroup]: {\n                width: 100,\n                color: \'red\',\n            },\n        };\n        return (\n            <div>\n                <RadioGroup\n                    onChange={this.onChange}\n                    displayFiled=\"text\"\n                    valueField=\"value\"\n                    value={this.state.value}\n                    styles=\"vertical\"\n                    displayValue=\"DisplayValue\"\n                    data={data}\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"设置 value备选项，value 找不到时作为取消项展示备选项"}
                demo={<DisplayDemo />}
              ></Demo>
              <Demo
                title={"按钮类型"}
                titleID={"radio-6"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\n\nconst RadioButton = Radio.Button;\nconst RadioGroup = Radio.Group;\n\nexport default class RadioDemo extends React.Component {\n    onChange = obj => {\n        console.info(\'obj-demo\', obj);\n    };\n    render() {\n        return (\n            <div>\n                <RadioGroup childType=\"button\" onChange={this.onChange} defaultValue=\"1\">\n                    <RadioButton value=\"1\">Radio1</RadioButton>\n                    <RadioButton value=\"2\">Radio2</RadioButton>\n                    <RadioButton value=\"3\">Radio3</RadioButton>\n                </RadioGroup>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"按钮类型的 RadioGroup，配置 childType 为 button "}
                demo={<ButtonDemo />}
              ></Demo>
              <Demo
                title={"按钮类型的 DisplayValue"}
                titleID={"radio-7"}
                code={
                  <code>{`import React from \'react\';\nimport {Radio} from \'@lugia/lugia-web\';\nconst RadioGroup = Radio.Group;\n\nconst data = [\n    { text: \'radio1\', value: \'Apple\' },\n    { text: \'radio2\', value: \'Pear\' },\n    { text: \'radio3\', value: \'Orange\', disabled: true },\n];\n\nexport default class RadioDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            value: \'apple\',\n            displayValue: \'hello\',\n        };\n    }\n    handleChange = obj => {\n        this.setState({\n            value: obj.newValue,\n            displayValue: obj.newDisplayValue,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <RadioGroup\n                    onChange={this.handleChange}\n                    data={data}\n                    value={this.state.value}\n                    displayValue={this.state.displayValue}\n                    childType=\"button\"\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={
                  "按钮类型的 value备选项，value 找不到时作为取消项展示备选项"
                }
                demo={<ButtonDisplayDemo />}
              ></Demo>
              <EditTables dataSource={RADIO} />
              <EditTables dataSource={RADIOGROUP} />
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
                <Link title={"基本"} href={"#radio-0"} />
                <Link title={"禁用状态"} href={"#radio-1"} />
                <Link title={"单选按钮组"} href={"#radio-2"} />
                <Link title={"受控的 RadioGroup"} href={"#radio-3"} />
                <Link title={"快速生成"} href={"#radio-4"} />
                <Link title={"设置 DisplayValue"} href={"#radio-5"} />
                <Link title={"按钮类型"} href={"#radio-6"} />
                <Link title={"按钮类型的 DisplayValue"} href={"#radio-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
