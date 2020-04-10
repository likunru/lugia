import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TOOLTIP from "@lugia/lugia-web/dist/tooltip/lugia.tooltip.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseTooltip = require("./BaseTooltip").default;
const ActionTooltip = require("./ActionTooltip").default;

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
                title={"文字提示"}
                subTitle={"Tooltip"}
                desc={"简单的文字气泡提示框"}
              />
              <Demo
                title={"提示气泡框基本用法"}
                titleID={"tooltip-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Tooltip, Theme, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nconst buttonWidth = 80;\nconst DirectionButton = styled(Button)\`\n  width: \${buttonWidth}px;\n\`;\nconst ToolTipBaseWrapper = styled.div\`\n  display: inline-block;\n\`;\nconst DirectionTopWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst DirectionLeftWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  position: absolute;\n\`;\nconst DirectionRightWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  margin-left: \${buttonWidth * 4 + 24}px;\n\`;\nconst DirectionBottomWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst ToolTipHWrapper = styled(ToolTipBaseWrapper)\`\n  margin-right: 10px;\n\`;\nconst ToolTipVWrapper = styled(ToolTipBaseWrapper)\`\n  margin-top: 10px;\n\`;\nexport default class BaseTooltip extends React.Component<any, any> {\n  render() {\n    const text = <span>prompt text</span>;\n    const config = {\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            width: buttonWidth\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={config}>\n        <DirectionTopWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"topLeft\" title={text}>\n              <DirectionButton type=\"primary\">TL</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"top\" title={text}>\n              <DirectionButton type=\"primary\">Top</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"topRight\" title={text}>\n              <DirectionButton type=\"primary\">TR</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n        </DirectionTopWrapper>\n        <DirectionLeftWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"leftTop\" title={text}>\n              <DirectionButton type=\"primary\">LT</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"left\" title={text}>\n              <DirectionButton type=\"primary\">Left</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"leftBottom\" title={text}>\n              <DirectionButton type=\"primary\">LB</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n        </DirectionLeftWrapper>\n        <DirectionRightWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"rightTop\" title={text}>\n              <DirectionButton type=\"primary\">RT</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"right\" title={text}>\n              <DirectionButton type=\"primary\">Right</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"rightBottom\" title={text}>\n              <DirectionButton type=\"primary\">RB</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n        </DirectionRightWrapper>\n        <DirectionBottomWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottomLeft\" title={text}>\n              <DirectionButton type=\"primary\">BL</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottom\" title={text}>\n              <DirectionButton type=\"primary\">Bottom</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottomRight\" title={text}>\n              <DirectionButton type=\"primary\">BR</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n        </DirectionBottomWrapper>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"提示气泡框基本用法,十二个方向"}
                demo={<BaseTooltip />}
              ></Demo>
              <Demo
                title={"三种触发条件"}
                titleID={"tooltip-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Tooltip, Theme, Button, Input } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\nimport { Popconfirm } from \"../popconfirm/ActionPopconfirm\";\n\nconst Direction = styled(Button)\`\`;\nconst Wrapper = styled.div\`\`;\nconst PopWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class ActionTooltip extends React.Component<any, any> {\n  render() {\n    const text = \"this is title \";\n    return (\n      <Wrapper>\n        <PopWrapper>\n          <Tooltip title={text} action={\"click\"} placement=\"top\">\n            <Direction type=\"primary\">鼠标点击</Direction>\n          </Tooltip>\n        </PopWrapper>\n        <PopWrapper>\n          <Tooltip title={text} action={\"hover\"} placement=\"top\">\n            <Direction type=\"primary\">鼠标移入</Direction>\n          </Tooltip>\n        </PopWrapper>\n        <PopWrapper>\n          <Tooltip title={text} action={\"focus\"} placement=\"top\">\n            <Input placeholder={\"聚焦弹出\"} />\n          </Tooltip>\n        </PopWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种触发条件,click,hover,focus"}
                demo={<ActionTooltip />}
              ></Demo>
              <EditTables dataSource={TOOLTIP} />
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
                <Link title={"提示气泡框基本用法"} href={"#tooltip-0"} />
                <Link title={"三种触发条件"} href={"#tooltip-1"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
