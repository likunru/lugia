import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import MENU from "@lugia/lugia-web/dist/menu/lugia.menu.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const SingleMenu = require("./SingleMenu").default;
const MutlipleMenu = require("./MutlipleMenu").default;
const LargeDataMenu = require("./LargeDataMenu").default;
const CascaderMenu = require("./CascaderMenu").default;

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
                title={"菜单"}
                subTitle={"Menu"}
                desc={"为用户提供菜单列表"}
              />
              <Demo
                title={"单选菜单"}
                titleID={"menu-0"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Menu, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst MenuWrap = styled.div\`\n  box-shadow: 0px 0px 6px rgba(51, 51, 51, 0.2);\n  display: inline-block;\n  margin: 20px;\n\`;\n\nconst data = [\n  { value: \"皮卡丘\", text: \"皮卡丘\" },\n  { value: \"妙蛙种子\", text: \"妙蛙种子\" },\n  { value: \"小火龙\", text: \"小火龙\" },\n  { value: \"杰尼龟\", text: \"杰尼龟\" },\n  { value: \"绿毛虫\", text: \"绿毛虫\" },\n  { value: \"独角虫\", text: \"独角虫\" },\n  { value: \"波波\", text: \"波波\" },\n  { value: \"小拉达\", text: \"小拉达\" },\n  { value: \"阿伯怪\", text: \"阿伯怪\" },\n  { value: \"穿山鼠\", text: \"穿山鼠\" },\n  { value: \"尼多兰\", text: \"尼多兰\" },\n  { value: \"皮皮\", text: \"皮皮\" }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.Menu]: {\n        Container: {\n          normal: {\n            width: 200\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={config}>\n          <MenuWrap>\n            <Menu checkedCSS={\"background\"} data={data} />\n          </MenuWrap>\n\n          <MenuWrap>\n            <Menu checkedCSS={\"checkbox\"} data={data} />\n          </MenuWrap>\n\n          <MenuWrap>\n            <Menu checkedCSS={\"none\"} data={data} />\n          </MenuWrap>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过checkedCSS：background | checkbox | mark | nona切换不同风格的选中样式"
                }
                demo={<SingleMenu />}
              ></Demo>
              <Demo
                title={"多选菜单"}
                titleID={"menu-1"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Menu, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst MenuWrap = styled.div\`\n  box-shadow: 0px 0px 6px rgba(51, 51, 51, 0.2);\n  display: inline-block;\n  margin: 20px;\n  border-radius: 4px;\n\`;\n\nconst data = [\n  { value: \"皮卡丘\", text: \"皮卡丘\" },\n  { value: \"妙蛙种子\", text: \"妙蛙种子\" },\n  { value: \"小火龙\", text: \"小火龙\" },\n  { value: \"杰尼龟\", text: \"杰尼龟\" },\n  { value: \"绿毛虫\", text: \"绿毛虫\" },\n  { value: \"独角虫\", text: \"独角虫\" },\n  { value: \"波波\", text: \"波波\" },\n  { value: \"小拉达\", text: \"小拉达\" },\n  { value: \"阿伯怪\", text: \"阿伯怪\" },\n  { value: \"穿山鼠\", text: \"穿山鼠\" },\n  { value: \"尼多兰\", text: \"尼多兰\" },\n  { value: \"皮皮\", text: \"皮皮\" }\n];\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.Menu]: {\n        Container: {\n          normal: {\n            width: 200\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={config}>\n          <MenuWrap>\n            <Menu checkedCSS={\"background\"} data={data} mutliple />\n          </MenuWrap>\n\n          <MenuWrap>\n            <Menu checkedCSS={\"checkbox\"} data={data} mutliple />\n          </MenuWrap>\n\n          <MenuWrap>\n            <Menu checkedCSS={\"none\"} data={data} mutliple />\n          </MenuWrap>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"指定mutliple属性，开启多选菜单"}
                demo={<MutlipleMenu />}
              ></Demo>
              <Demo
                title={"懒加载"}
                titleID={"menu-2"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Menu, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst MenuWrap = styled.div\`\n  box-shadow: 0px 0px 6px rgba(51, 51, 51, 0.2);\n  display: inline-block;\n  margin: 20px;\n  border-radius: 4px;\n\`;\n\nconst data = [];\nfor (let i = 0; i < 200000; i++) {\n  data.push({ text: \`\${i}\`, value: \`\${i}\`, disabled: false });\n}\n\nexport default class extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.Menu]: {\n        Container: {\n          normal: {\n            width: 200\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={config}>\n          <MenuWrap>\n            <Menu checkedCSS={\"checkbox\"} data={data} mutliple />\n          </MenuWrap>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"菜单具有懒加载功能，传入二十万条数据，不会影响使用"}
                demo={<LargeDataMenu />}
              ></Demo>
              <Demo
                title={"层级的Menu"}
                titleID={"menu-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport { Menu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Button = styled.div\`\n  width: 90px;\n  height: 32px;\n  background: #4d63ff;\n  border-radius: 5px;\n  color: #fff;\n  text-align: center;\n  line-height: 32px;\n  margin: 10px;\n  display: inline-block;\n  cursor: pointer;\n\`;\n\nconst MenuWrap = styled.div\`\n  box-shadow:0px 0px 6px rgba(51,51,51,0.2);\n  display: inline-block;\n  margin: 20px;\n  border-radius: 4px;\n\`;\n\nconst data = [\n  {\n    text: \'一级菜单1\',\n    value: \'一级菜单1\'\n  },\n  { text: \'一级菜单2\', value: \'一级菜单2\', disabled: true },\n  { text: \'一级菜单3\', value: \'一级菜单3\', disabled: false },\n  {\n    text: \'一级菜单4\',\n    value: \'一级菜单4\',\n    children: [\n      {\n        text: \'次级菜单4-1\',\n        value: \'次级菜单4-1\',\n        children: [{ text: \'三级菜单4-1-1\', value: \'三级菜单4-1-1\' }]\n      }\n    ]\n  },\n  { text: \'一级菜单5\', value: \'一级菜单5\', disabled: true },\n  {\n    text: \'一级菜单6\',\n    value: \'一级菜单6\',\n    disabled: false,\n    children: [\n      { text: \'次级菜单6-1\', value: \'次级菜单6-1\' },\n      {\n        text: \'次级菜单6-2\',\n        value: \'次级菜单6-2\',\n        children: [\n          {\n            text: \'三级菜单6-2-1\',\n            value: \'三级菜单6-2-1\'\n          },\n          { text: \'三级菜单6-2-2\', value: \'三级菜单6-2-2\' },\n          { text: \'三级菜单6-2-3\', value: \'三级菜单6-2-3\' }\n        ]\n      },\n      { text: \'次级菜单6-3\', value: \'次级菜单6-3\' },\n      { text: \'次级菜单6-4\', value: \'次级菜单6-4\' },\n      { text: \'次级菜单6-5\', value: \'次级菜单6-5\' },\n      { text: \'次级菜单6-6\', value: \'次级菜单6-6\' },\n      { text: \'次级菜单6-7\', value: \'次级菜单6-7\' },\n      { text: \'次级菜单6-8\', value: \'次级菜单6-8\' },\n      { text: \'次级菜单6-9\', value: \'次级菜单6-9\' },\n      { text: \'次级菜单6-10\', value: \'次级菜单6-10\' }\n    ]\n  },\n  { text: \'一级菜单7\', value: \'一级菜单7\', disabled: true },\n  { text: \'一级菜单8\', value: \'一级菜单8\', disabled: false },\n  { text: \'一级菜单9\', value: \'一级菜单9\', disabled: true },\n  { text: \'一级菜单10\', value: \'一级菜单10\', disabled: false }\n];\nexport default class extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = {\n      selectedKeys: [],\n      expandedPath: []\n    };\n  }\n\n  render() {\n    const { selectedKeys, expandedPath } = this.state;\n    return (\n      <div>\n        <Theme\n          config={{\n            [Widget.Menu]: { width: 200 },\n            [Widget.SubMenu]: { width: 150 }\n          }}\n        >\n          <MenuWrap>\n            <Menu\n              separator={\'/\'}\n              action={\'hover\'}\n              expandedPath={expandedPath}\n              selectedKeys={selectedKeys}\n              data={data}\n              offsetY={0}\n              onExpandPathChange={this.onExpandPathChange}\n              onClick={this.onClick}\n            />\n          </MenuWrap>\n        </Theme>\n        <div />\n        <Button onClick={this.expandClick}>展开</Button>\n        <Button onClick={this.closeClick}>收起</Button>\n      </div>\n    );\n  }\n\n  expandClick = (e, keys, item) => {\n    this.setState({\n      selectedKeys: [\'一级菜单6/次级菜单6-2/三级菜单6-2-1\'],\n      expandedPath: [\'一级菜单6/次级菜单6-2/三级菜单6-2-1\']\n    });\n  };\n\n  closeClick = (e, keys, item) => {\n    this.setState({\n      selectedKeys: [],\n      expandedPath: []\n    });\n  };\n\n  onClick = (e, keys, item) => {\n    const { selectedKeys } = keys;\n    this.setState({ selectedKeys, expandedPath: selectedKeys });\n  };\n\n  onExpandPathChange = expandedPath => {\n    this.setState({ expandedPath });\n  };\n}\n`}</code>
                }
                desc={"传入嵌套数据,生成级联的数据"}
                demo={<CascaderMenu />}
              ></Demo>
              <EditTables dataSource={MENU} />
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
                <Link title={"单选菜单"} href={"#menu-0"} />
                <Link title={"多选菜单"} href={"#menu-1"} />
                <Link title={"懒加载"} href={"#menu-2"} />
                <Link title={"层级的Menu"} href={"#menu-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
