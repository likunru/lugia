import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import COLLAPSE from "@lugia/lugia-web/dist/collapse/lugia.collapse.zh-CN.json";
import PANEL from "@lugia/lugia-web/dist/collapse/lugia.panel.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const LimitedDemo = require("./LimitedDemo").default;
const AccordionDemo = require("./AccordionDemo").default;

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
                title={"折叠面板"}
                subTitle={"Collapse"}
                desc={"折叠面板，用于展开/折叠内容区域。"}
              />
              <Demo
                title={"基本"}
                titleID={"collapse-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Collapse } from \'@lugia/lugia-web\';\n\nconst Panel = Collapse.Panel;\n\nexport default class CheckBoxDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Collapse defaultActiveValue={\'1\'}>\n                    <Panel value=\"1\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                    <Panel value=\"2\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                </Collapse>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"最简单的用法，可展开多个面板"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"受限的 Collapse"}
                titleID={"collapse-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Collapse } from \'@lugia/lugia-web\';\n\nconst Panel = Collapse.Panel;\n\nexport default class CheckBoxDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            activeValue: \'1\',\n        };\n    }\n    handleChangeActiveValue = (obj: Object) => {\n        console.info(obj.newValue);\n        this.setState({\n            activeValue: obj.newValue,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <Collapse activeValue={this.state.activeValue} onChange={this.handleChangeActiveValue}>\n                    <Panel value=\"1\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                    <Panel value=\"2\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                </Collapse>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"展开的面板可以受限，根据需要判断是否展开"}
                demo={<LimitedDemo />}
              ></Demo>
              <Demo
                title={"手风琴"}
                titleID={"collapse-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Collapse } from \'@lugia/lugia-web\';\n\nconst Panel = Collapse.Panel;\n\nexport default class CheckBoxDemo extends React.Component {\n\n    render() {\n        return (\n            <div>\n                <Collapse defaultActiveValue={\'1\'} accordion>\n                    <Panel value=\"1\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                    <Panel value=\"2\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                    <Panel value=\"3\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                    <Panel value=\"4\" title=\"LUGIA\">\n                        <div>PanelContent...</div>\n                        <div>PanelContent...</div>\n                    </Panel>\n                </Collapse>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"手风琴模式，只能打开一个面板"}
                demo={<AccordionDemo />}
              ></Demo>
              <EditTables dataSource={COLLAPSE} />
              <EditTables dataSource={PANEL} />
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
                <Link title={"基本"} href={"#collapse-0"} />
                <Link title={"受限的 Collapse"} href={"#collapse-1"} />
                <Link title={"手风琴"} href={"#collapse-2"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
