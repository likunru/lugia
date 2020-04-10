import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import POPOVER from "@lugia/lugia-web/dist/popover/lugia.popover.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasePopover = require("./BasePopover").default;
const ActionPopover = require("./ActionPopover").default;
const InnerClosePopover = require("./InnerClosePopover").default;
const HoverClickPopover = require("./HoverClickPopover").default;

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
                title={"气泡卡片"}
                subTitle={"Popover"}
                desc={"气泡式的卡片浮层"}
              />
              <Demo
                title={"气泡弹出框基本用法"}
                titleID={"popover-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Popover, Theme, Button } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\nconst buttonWidth = 80;\nconst DirectionButton = styled(Button)\`\n  width: \${buttonWidth}px;\n\`;\nconst ToolTipBaseWrapper = styled.div\`\n  display: inline-block;\n\`;\nconst DirectionButtonTopWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst DirectionButtonLeftWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  position: absolute;\n\`;\nconst DirectionButtonRightWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  margin-left: \${buttonWidth * 4 + 24}px;\n\`;\nconst DirectionButtonBottomWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst ToolTipHWrapper = styled(ToolTipBaseWrapper)\`\n  margin-right: 10px;\n\`;\nconst ToolTipVWrapper = styled(ToolTipBaseWrapper)\`\n  margin-top: 10px;\n\`;\nexport default class BasePopover extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \"\" };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const config = {\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            width: buttonWidth\n          }\n        }\n      }\n    };\n    const text = \"this is title \";\n    const description = \"this is description\";\n    return (\n      <Wrapper>\n        <Theme config={config}>\n          <DirectionButtonTopWrapper>\n            <ToolTipHWrapper>\n              <Popover placement=\"topLeft\" title={text} action={\"click\"}>\n                <DirectionButton type=\"primary\">TL</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popover\n                placement=\"top\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">Top</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popover\n                placement=\"topRight\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">TR</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n          </DirectionButtonTopWrapper>\n          <DirectionButtonLeftWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"leftTop\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">LT</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"left\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">Left</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"leftBottom\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">LB</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n          </DirectionButtonLeftWrapper>\n          <DirectionButtonRightWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"rightTop\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">RT</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"right\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">Right</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popover\n                placement=\"rightBottom\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">RB</DirectionButton>\n              </Popover>\n            </ToolTipVWrapper>\n          </DirectionButtonRightWrapper>\n          <DirectionButtonBottomWrapper>\n            <ToolTipHWrapper>\n              <Popover\n                placement=\"bottomLeft\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">BL</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popover\n                placement=\"bottom\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">Bottom</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popover\n                placement=\"bottomRight\"\n                title={text}\n                description={[\n                  <div>{description}</div>,\n                  <div>{description}</div>\n                ]}\n              >\n                <DirectionButton type=\"primary\">BR</DirectionButton>\n              </Popover>\n            </ToolTipHWrapper>\n          </DirectionButtonBottomWrapper>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"气泡弹出框基本用法"}
                demo={<BasePopover />}
              ></Demo>
              <Demo
                title={"三种触发条件"}
                titleID={"popover-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Popover, Button, Input } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport { Popconfirm } from \"../popconfirm/ActionPopconfirm\";\n\nconst Direction = styled(Button)\`\`;\nconst Wrapper = styled.div\`\`;\nconst PopWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class ActionPopover extends React.Component<any, any> {\n  render() {\n    const text = \"this is title \";\n    const description = \"this is description\";\n    return (\n      <Wrapper>\n        <PopWrapper>\n          <Popover\n            title={text}\n            action={\"click\"}\n            placement=\"top\"\n            description={[<div>{description}</div>, <div>{description}</div>]}\n          >\n            <Direction type=\"primary\">鼠标点击</Direction>\n          </Popover>\n        </PopWrapper>\n        <PopWrapper>\n          <Popover\n            title={text}\n            action={\"hover\"}\n            placement=\"top\"\n            description={[<div>{description}</div>, <div>{description}</div>]}\n          >\n            <Direction type=\"primary\">鼠标移入</Direction>\n          </Popover>\n        </PopWrapper>\n        <PopWrapper>\n          <Popover\n            title={text}\n            action={\"focus\"}\n            placement=\"top\"\n            description={[<div>{description}</div>, <div>{description}</div>]}\n          >\n            <Input placeholder={\"聚焦弹出\"} />\n          </Popover>\n        </PopWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种触发条件,click,hover,focus"}
                demo={<ActionPopover />}
              ></Demo>
              <Demo
                title={"内部关闭"}
                titleID={"popover-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Popover, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Direction = styled(Button)\`\`;\nexport default class InnerClosePopover extends React.Component<any, any> {\n  state = {\n    visible: false\n  };\n\n  hide = () => {\n    this.setState({\n      visible: false\n    });\n  };\n\n  handleVisibleChange = visible => {\n    this.setState({ visible });\n  };\n\n  render() {\n    const description = \"this is description\";\n    return (\n      <Popover\n        placement=\"top\"\n        title=\"this is the title\"\n        action=\"click\"\n        visible={this.state.visible}\n        onVisibleChange={this.handleVisibleChange}\n        clear={\"lugia-icon-reminder_close\"}\n        description={[<div>{description}</div>]}\n        onClearClick={this.hide}\n      >\n        <Direction type=\"primary\">内部关闭</Direction>\n      </Popover>\n    );\n  }\n}\n`}</code>
                }
                desc={"可在清除关闭"}
                demo={<InnerClosePopover />}
              ></Demo>
              <Demo
                title={"嵌套使用"}
                titleID={"popover-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Popover, Button } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nconst Direction = styled(Button)\`\`;\nexport default class HoverClickPopover extends React.Component<any, any> {\n  state = {\n    clicked: false,\n    hovered: false\n  };\n\n  hide = () => {\n    this.setState({\n      clicked: false,\n      hovered: false\n    });\n  };\n\n  handleHoverChange = visible => {\n    const { onVisibleChange } = this.props;\n    this.setState({\n      hovered: visible,\n      clicked: false\n    });\n    onVisibleChange && onVisibleChange(visible);\n  };\n\n  handleClickChange = visible => {\n    this.setState({\n      clicked: visible,\n      hovered: false\n    });\n  };\n\n  render() {\n    const hoverContent = <div>This is hover content.</div>;\n    const clickContent = <div>This is click content.</div>;\n    return (\n      <Popover\n        style={{ width: 500 }}\n        description={hoverContent}\n        title=\"This is  hover title\"\n        action={\'hover\'}\n        placement=\"topLeft\"\n        visible={this.state.hovered}\n        onVisibleChange={this.handleHoverChange}\n      >\n        <div>\n          <Popover\n            description={clickContent}\n            title=\"This is  click title\"\n            action={\'click\'}\n            placement=\"topLeft\"\n            visible={this.state.clicked}\n            clear={\'lugia-icon-reminder_close\'}\n            onVisibleChange={this.handleClickChange}\n            onClearClick={this.hide}\n          >\n            <Direction type=\"primary\">Hover and click / 悬停并单击</Direction>\n          </Popover>\n        </div>\n      </Popover>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以多层嵌套使用"}
                demo={<HoverClickPopover />}
              ></Demo>
              <EditTables dataSource={POPOVER} />
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
                <Link title={"气泡弹出框基本用法"} href={"#popover-0"} />
                <Link title={"三种触发条件"} href={"#popover-1"} />
                <Link title={"内部关闭"} href={"#popover-2"} />
                <Link title={"嵌套使用"} href={"#popover-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
