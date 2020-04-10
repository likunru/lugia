import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import NUMBERINPUT from "@lugia/lugia-web/dist/number-input/lugia.number-input.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseNumberInput = require("./BaseNumberInput").default;
const DefaultValueNumberInput = require("./DefaultValueNumberInput").default;
const SizeNumberInput = require("./SizeNumberInput").default;
const DisabledNumberInput = require("./DisabledNumberInput").default;
const RangeNumberInput = require("./RangeNumberInput").default;
const PrecisionNumberInput = require("./PrecisionNumberInput").default;
const TransformNumberInput = require("./TransformNumberInput").default;

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
              <Title
                title={"数字输入框"}
                subTitle={"NumberInput"}
                desc={"常用于数字输入,可以进行快速加减显示"}
              />
              <Demo
                title={"数字输入框基本用法"}
                titleID={"number-input-0"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\n\nexport default class BaseNumberInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return <NumberInput value={this.state.value} onChange={this.onChange} />;\n  }\n}\n`}</code>
                }
                desc={"数字输入框基本用法"}
                demo={<BaseNumberInput />}
              ></Demo>
              <Demo
                title={"显示默认值的数字输入框"}
                titleID={"number-input-1"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\n\nexport default class DefaultValueNumberInput extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <NumberInput\n          defaultValue={1000}\n          onChange={this.props.onChange}\n          max={10000}\n          min={100}\n          step={100}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"显示默认值的数字输入框"}
                demo={<DefaultValueNumberInput />}
              ></Demo>
              <Demo
                title={"尺寸"}
                titleID={"number-input-2"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst InputWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class SizeNumberInput extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <InputWrapper>\n          <NumberInput size={\"small\"} />\n        </InputWrapper>\n        <InputWrapper>\n          <NumberInput />\n        </InputWrapper>\n        <InputWrapper>\n          <NumberInput size={\"large\"} />\n        </InputWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种不同尺寸的数字输入框"}
                demo={<SizeNumberInput />}
              ></Demo>
              <Demo
                title={"禁用状态"}
                titleID={"number-input-3"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput, Button } from \"@lugia/lugia-web\";\n\nexport default class DisabledNumberInput extends React.Component<any, any> {\n  state = {\n    disabled: true\n  };\n\n  click = () => {\n    this.setState({\n      disabled: !this.state.disabled\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 10 }}>\n          <Button onClick={this.click} type=\"primary\">\n            点击切换状态\n          </Button>\n        </div>\n        <NumberInput\n          min={1}\n          max={10}\n          disabled={this.state.disabled}\n          defaultValue={5}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"点击切换禁用状态"}
                demo={<DisabledNumberInput />}
              ></Demo>
              <Demo
                title={"范围"}
                titleID={"number-input-4"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst InputWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class RangeNumberInput extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <InputWrapper>\n          <NumberInput max={100} min={10} step={5} defaultValue=\"5\" />\n        </InputWrapper>\n        <InputWrapper>\n          <NumberInput max={1} min={0.01} step={0.01} defaultValue=\"0.50\" />\n        </InputWrapper>\n        <InputWrapper>\n          <NumberInput max={100} min={10} step={5} defaultValue=\"10\" />\n        </InputWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"设置最大值, 最小值 确定输入范围"}
                demo={<RangeNumberInput />}
              ></Demo>
              <Demo
                title={"精度"}
                titleID={"number-input-5"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\nexport default class PrecisionNumberInput extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <NumberInput\n          max={10}\n          min={0}\n          step={0.5}\n          defaultValue=\"0.5\"\n          precision={1}\n        />\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"数字输入框精度,默认0"}
                demo={<PrecisionNumberInput />}
              ></Demo>
              <Demo
                title={"格式化"}
                titleID={"number-input-6"}
                code={
                  <code>{`import React from \"react\";\nimport { NumberInput } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\n\nexport default class TransformNumberInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n  render() {\n    const formatter = value => {\n      return \`¥ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, \",\");\n    };\n    const parser = value => {\n      return value.replace(/\\$\s?|(,*)/g, \"\");\n    };\n    return (\n      <Wrapper>\n        <NumberInput\n          formatter={formatter}\n          parser={parser}\n          defaultValue={100000}\n          max={1000000}\n          min={10000}\n          step={10000}\n        />\n        <NumberInput\n          formatter={value => \`\${value}%\`}\n          parser={value => value.replace(\"%\", \"\")}\n          defaultValue={10}\n          max={100}\n          min={5}\n          step={5}\n        />\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"配置一套格式化与解析的规则 显示出来"}
                demo={<TransformNumberInput />}
              ></Demo>
              <EditTables dataSource={NUMBERINPUT} />
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
                <Link title={"数字输入框基本用法"} href={"#number-input-0"} />
                <Link
                  title={"显示默认值的数字输入框"}
                  href={"#number-input-1"}
                />
                <Link title={"尺寸"} href={"#number-input-2"} />
                <Link title={"禁用状态"} href={"#number-input-3"} />
                <Link title={"范围"} href={"#number-input-4"} />
                <Link title={"精度"} href={"#number-input-5"} />
                <Link title={"格式化"} href={"#number-input-6"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
