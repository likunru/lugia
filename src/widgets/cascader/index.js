import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import CASCADER from "@lugia/lugia-web/dist/cascader/lugia.cascader.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultCascader = require("./DefaultCascader").default;
const HoverCascader = require("./HoverCascader").default;
const DefaultValueCascader = require("./DefaultValueCascader").default;
const DisabledItemCascader = require("./DisabledItemCascader").default;
const OnlyShowLastLevelCascader = require("./OnlyShowLastLevelCascader")
  .default;

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
                title={"级联选择"}
                subTitle={"Cascader"}
                desc={"通过级联选择,可以清晰地显示层级数据结构"}
              />
              <Demo
                title={"基本用法"}
                titleID={"cascader-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Cascader, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  {\n    value: \"Lugia Design\",\n    text: \"Lugia Design\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-mega\",\n    text: \"Lugia-mega\"\n  },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          { value: \"Icon\", text: \"Icon\", icon: \"lugia-icon-financial_archive\" }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        children: [{ value: \"Grid\", text: \"Grid\" }]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"Breadcrumb\", text: \"Breadcrumb\" },\n          { value: \"Dropdown\", text: \"Dropdown\" },\n          { value: \"Menu\", text: \"Menu\" },\n          { value: \"Pagination\", text: \"Pagination\" },\n          { value: \"Steps\", text: \"Steps\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        children: [\n          { value: \"AutoComplete\", text: \"AutoComplete\" },\n          { value: \"Cascader\", text: \"Cascader\" },\n          { value: \"Checkbox\", text: \"Checkbox\" },\n          { value: \"DatePicker\", text: \"DatePicker\" },\n          { value: \"Form\", text: \"Form\" },\n          { value: \"Input\", text: \"Input\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Cascader]: {\n              Container: {\n                normal: { width: 300 }\n              }\n            }\n          }}\n        >\n          <Cascader\n            data={data}\n            placeholder={\"请选择\"}\n            action={\"hover\"}\n            separator={\"*\"}\n            defaultValue={\"Components*Data Entry*Cascader\"}\n          />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以自定义separator分隔符展示选中层级数据"}
                demo={<DefaultCascader />}
              ></Demo>
              <Demo
                title={"滑过展开下一级"}
                titleID={"cascader-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Cascader, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  {\n    value: \"Lugia Design\",\n    text: \"Lugia Design\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-mega\",\n    text: \"Lugia-mega\"\n  },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          { value: \"Icon\", text: \"Icon\", icon: \"lugia-icon-financial_archive\" }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        children: [\n          { value: \"Grid\", text: \"Grid\" },\n        ]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"Breadcrumb\", text: \"Breadcrumb\" },\n          { value: \"Dropdown\", text: \"Dropdown\" },\n          { value: \"Menu\", text: \"Menu\" },\n          { value: \"Pagination\", text: \"Pagination\" },\n          { value: \"Steps\", text: \"Steps\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        children: [\n          { value: \"AutoComplete\", text: \"AutoComplete\" },\n          { value: \"Cascader\", text: \"Cascader\" },\n          { value: \"Checkbox\", text: \"Checkbox\" },\n          { value: \"DatePicker\", text: \"DatePicker\" },\n          { value: \"Form\", text: \"Form\" },\n          { value: \"Input\", text: \"Input\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Cascader]: {\n              Container: {\n                normal: { width: 300 }\n              }\n            }\n          }}\n        >\n          <Cascader\n            data={data}\n            placeholder={\"请选择\"}\n            separator={\"/\"}\n            action={\"hover\"}\n          />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"设置action：hover,鼠标滑过时展开下一级"}
                demo={<HoverCascader />}
              ></Demo>
              <Demo
                title={"默认值"}
                titleID={"cascader-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Cascader, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  {\n    value: \"Lugia Design\",\n    text: \"Lugia Design\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-mega\",\n    text: \"Lugia-mega\"\n  },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          { value: \"Icon\", text: \"Icon\", icon: \"lugia-icon-financial_archive\" }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        children: [\n          { value: \"Grid\", text: \"Grid\" },\n        ]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"Breadcrumb\", text: \"Breadcrumb\" },\n          { value: \"Dropdown\", text: \"Dropdown\" },\n          { value: \"Menu\", text: \"Menu\" },\n          { value: \"Pagination\", text: \"Pagination\" },\n          { value: \"Steps\", text: \"Steps\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        children: [\n          { value: \"AutoComplete\", text: \"AutoComplete\" },\n          { value: \"Cascader\", text: \"Cascader\" },\n          { value: \"Checkbox\", text: \"Checkbox\" },\n          { value: \"DatePicker\", text: \"DatePicker\" },\n          { value: \"Form\", text: \"Form\" },\n          { value: \"Input\", text: \"Input\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Cascader]: {\n              Container: {\n                normal: { width: 300 }\n              }\n            }\n          }}\n        >\n          <Cascader data={data} placeholder={\"请选择\"} separator={\"/\"} />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"默认值通过自定义的分隔符，将逐层的valueField连接起来"}
                demo={<DefaultValueCascader />}
              ></Demo>
              <Demo
                title={"禁选项"}
                titleID={"cascader-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Cascader, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  {\n    value: \"Navigation\",\n    text: \"Navigation\",\n    children: [\n      { value: \"Affix\", text: \"Affix\" },\n      { value: \"Breadcrumb\", text: \"Breadcrumb\", disabled: true },\n      { value: \"Dropdown\", text: \"Dropdown\" },\n      { value: \"Menu\", text: \"Menu\", disabled: true },\n      { value: \"Pagination\", text: \"Pagination\" },\n      { value: \"Steps\", text: \"Steps\" }\n    ]\n  },\n\n  {\n    value: \"Data Entry\",\n    text: \"Data Entry\",\n    disabled: true,\n    children: [\n      { value: \"AutoComplete\", text: \"AutoComplete\" },\n      { value: \"Cascader\", text: \"Cascader\" },\n      { value: \"Checkbox\", text: \"Checkbox\" },\n      { value: \"DatePicker\", text: \"DatePicker\" },\n      { value: \"Form\", text: \"Form\" },\n      { value: \"Input\", text: \"Input\" }\n    ]\n  }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Cascader]: {\n              Container: {\n                normal: { width: 300 }\n              }\n            }\n          }}\n        >\n          <Cascader\n            data={data}\n            placeholder={\"请选择\"}\n            separator={\"/\"}\n            action={\"hover\"}\n          />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"在禁选项数据中加上disabled：true,该选项禁选"}
                demo={<DisabledItemCascader />}
              ></Demo>
              <Demo
                title={"只显示根级选中项"}
                titleID={"cascader-4"}
                code={
                  <code>{`import React from \"react\";\nimport { Cascader, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  {\n    value: \"Lugia Design\",\n    text: \"Lugia Design\",\n    icon: \"lugia-icon-financial_add_pic\"\n  },\n  {\n    value: \"Lugia-mega\",\n    text: \"Lugia-mega\"\n  },\n  {\n    value: \"Components\",\n    text: \"Components\",\n    children: [\n      {\n        value: \"General\",\n        text: \"General\",\n        children: [\n          {\n            value: \"Button\",\n            text: \"Button\",\n            icon: \"lugia-icon-financial_add_pic\"\n          },\n          { value: \"Icon\", text: \"Icon\", icon: \"lugia-icon-financial_archive\" }\n        ]\n      },\n\n      {\n        value: \"Layout\",\n        text: \"Layout\",\n        children: [\n          { value: \"Grid\", text: \"Grid\" },\n        ]\n      },\n\n      {\n        value: \"Navigation\",\n        text: \"Navigation\",\n        children: [\n          { value: \"Affix\", text: \"Affix\" },\n          { value: \"Breadcrumb\", text: \"Breadcrumb\" },\n          { value: \"Dropdown\", text: \"Dropdown\" },\n          { value: \"Menu\", text: \"Menu\" },\n          { value: \"Pagination\", text: \"Pagination\" },\n          { value: \"Steps\", text: \"Steps\" }\n        ]\n      },\n\n      {\n        value: \"Data Entry\",\n        text: \"Data Entry\",\n        children: [\n          { value: \"AutoComplete\", text: \"AutoComplete\" },\n          { value: \"Cascader\", text: \"Cascader\" },\n          { value: \"Checkbox\", text: \"Checkbox\" },\n          { value: \"DatePicker\", text: \"DatePicker\" },\n          { value: \"Form\", text: \"Form\" },\n          { value: \"Input\", text: \"Input\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Cascader]: {\n              Container: {\n                normal: { width: 300 }\n              }\n            }\n          }}\n        >\n          <Cascader\n            data={data}\n            placeholder={\"请选择\"}\n            separator={\"/\"}\n            action={\"hover\"}\n            showAllLevels={false}\n          />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"设置showAllLevels：false,只展示根节点选中信息"}
                demo={<OnlyShowLastLevelCascader />}
              ></Demo>
              <EditTables dataSource={CASCADER} />
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
                <Link title={"基本用法"} href={"#cascader-0"} />
                <Link title={"滑过展开下一级"} href={"#cascader-1"} />
                <Link title={"默认值"} href={"#cascader-2"} />
                <Link title={"禁选项"} href={"#cascader-3"} />
                <Link title={"只显示根级选中项"} href={"#cascader-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
