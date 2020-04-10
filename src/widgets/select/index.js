import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import SELECT from "@lugia/lugia-web/dist/select/lugia.select.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultSelect = require("./DefaultSelect").default;
const LimitSingleSelect = require("./LimitSingleSelect").default;
const SearchSelect = require("./SearchSelect").default;
const MutlipleSelect = require("./MutlipleSelect").default;
const CanInputSelect = require("./CanInputSelect").default;
const LimitMutlipleSelect = require("./LimitMutlipleSelect").default;

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
                title={"选择器"}
                subTitle={"Select"}
                desc={"选项过多时，弹出下拉菜单给用户选择操作"}
              />
              <Demo
                title={"基本用法"}
                titleID={"select-0"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  }\n];\nexport default class DefaultSelect extends React.Component {\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select autoHeight data={data} />\n        </SelectWrap>\n\n        <SelectWrap>\n          <Select disabled data={data} defaultValue={\"lugia-E\"} />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"默认select为单选"}
                demo={<DefaultSelect />}
              ></Demo>
              <Demo
                title={"受限的单选 Select 选择器"}
                titleID={"select-1"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  }\n];\nexport default class LimitSingleSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: [\"lugia-E\"],\n      displayValue: [\"皮卡丘\"]\n    };\n  }\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n    const { value, displayValue } = this.state;\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select\n            valueField={\"value\"}\n            displayField={\"text\"}\n            data={data}\n            autoHeight\n            value={value}\n            displayValue={displayValue}\n            onChange={this.onChange}\n          />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n\n  onChange = obj => {\n    const { newValue, newDisplayValue } = obj;\n    this.setState({ value: newValue, displayValue: newDisplayValue });\n  };\n}\n`}</code>
                }
                desc={
                  "单选模式下,通过onChange事件和setState函数配合,实现对选中值的切换。注意：value和displayValue要同时使用"
                }
                demo={<LimitSingleSelect />}
              ></Demo>
              <Demo
                title={"带搜索框的 Select 选择器"}
                titleID={"select-2"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  }\n];\nexport default class SearchSelect extends React.Component {\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select\n            valueField={\"value\"}\n            displayField={\"text\"}\n            data={data}\n            canSearch\n            autoHeight\n          />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过 canSearch 属性开启搜索框,在搜索框中输入值时触发onQuery事件"
                }
                demo={<SearchSelect />}
              ></Demo>
              <Demo
                title={"多选的 Select 选择器"}
                titleID={"select-3"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  },\n  {\n    value: \"lugia-F\",\n    text: \"大针蜂\"\n  },\n  {\n    value: \"lugia-G\",\n    text: \"小拉达\"\n  },\n  {\n    value: \"lugia-H\",\n    text: \"大嘴雀\"\n  },\n  {\n    value: \"lugia-I\",\n    text: \"雷丘\"\n  },\n  {\n    value: \"lugia-J\",\n    text: \"尼多兰\"\n  },\n  {\n    value: \"lugia-K\",\n    text: \"胖可丁\"\n  }\n];\nexport default class MutlipleSelect extends React.Component {\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select\n            valueField={\"value\"}\n            displayField={\"text\"}\n            data={data}\n            mutliple\n            defaultValue={[\"lugia-B\", \"lugia-D\"]}\n          />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"通过 mutliple 属性开启多选"}
                demo={<MutlipleSelect />}
              ></Demo>
              <Demo
                title={"自定义输入值的 Select 选择器"}
                titleID={"select-4"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  },\n  {\n    value: \"lugia-F\",\n    text: \"大针蜂\"\n  },\n  {\n    value: \"lugia-G\",\n    text: \"小拉达\"\n  },\n  {\n    value: \"lugia-H\",\n    text: \"大嘴雀\"\n  },\n  {\n    value: \"lugia-I\",\n    text: \"雷丘\"\n  },\n  {\n    value: \"lugia-J\",\n    text: \"尼多兰\"\n  },\n  {\n    value: \"lugia-K\",\n    text: \"胖可丁\"\n  }\n];\nexport default class CanInputSelect extends React.Component {\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select\n            valueField={\"value\"}\n            displayField={\"text\"}\n            data={data}\n            mutliple\n            defaultValue={[\"lugia-B\", \"lugia-D\"]}\n            canSearch\n            canInput\n          />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过 canInput 属性开启自定义输入值,只有在开启canSearch时生效"
                }
                demo={<CanInputSelect />}
              ></Demo>
              <Demo
                title={"受限的多选 Select 选择器"}
                titleID={"select-5"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Select, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst SelectWrap = styled.div\`\n  margin: 10px;\n  display: inline-block;\n\`;\n\nconst data = [\n  {\n    value: \"lugia-A\",\n    text: \"杰尼龟\",\n    disabled: true\n  },\n  {\n    value: \"lugia-B\",\n    text: \"火恐龙\"\n  },\n  {\n    value: \"lugia-C\",\n    text: \"绿毛虫\"\n  },\n  {\n    value: \"lugia-D\",\n    text: \"独角虫\"\n  },\n  {\n    value: \"lugia-E\",\n    text: \"皮卡丘\"\n  }\n];\nexport default class LimitSingleSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: [\"lugia-C\", \"lugia-E\"],\n      displayValue: [\"绿毛虫\", \"皮卡丘\"]\n    };\n  }\n  render() {\n    const config = {\n      [Widget.Select]: {\n        Container: {\n          normal: {\n            width: 250,\n            height: 30\n          }\n        }\n      }\n    };\n    const { value, displayValue } = this.state;\n    return (\n      <Theme config={config}>\n        <SelectWrap>\n          <Select\n            valueField={\"value\"}\n            displayField={\"text\"}\n            data={data}\n            value={value}\n            mutliple\n            canInput\n            displayValue={displayValue}\n            onChange={this.onChange}\n          />\n        </SelectWrap>\n      </Theme>\n    );\n  }\n\n  onChange = obj => {\n    const { newValue, newDisplayValue } = obj;\n    this.setState({ value: newValue, displayValue: newDisplayValue });\n  };\n}\n`}</code>
                }
                desc={
                  "单选模式下,通过onChange事件和setState函数配合,实现对选中值的切换。注意：value和displayValue要同时使用"
                }
                demo={<LimitMutlipleSelect />}
              ></Demo>
              <EditTables dataSource={SELECT} />
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
                <Link title={"基本用法"} href={"#select-0"} />
                <Link title={"受限的单选 Select 选择器"} href={"#select-1"} />
                <Link title={"带搜索框的 Select 选择器"} href={"#select-2"} />
                <Link title={"多选的 Select 选择器"} href={"#select-3"} />
                <Link
                  title={"自定义输入值的 Select 选择器"}
                  href={"#select-4"}
                />
                <Link title={"受限的多选 Select 选择器"} href={"#select-5"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
