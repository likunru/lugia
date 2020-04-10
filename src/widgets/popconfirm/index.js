import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import POPCONFIRM from "@lugia/lugia-web/dist/popconfirm/lugia.popconfirm.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasePopconfirm = require("./BasePopconfirm").default;
const TypePopconfirm = require("./TypePopconfirm").default;
const ActionPopconfirm = require("./ActionPopconfirm").default;
const CoditionPopconfirm = require("./CoditionPopconfirm").default;

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
                title={"气泡确认框"}
                subTitle={"Popconfirm"}
                desc={"气泡式的确认框"}
              />
              <Demo
                title={"气泡确认框基本用法"}
                titleID={"popconfirm-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Popconfirm, Theme, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\`;\nconst buttonWidth = 80;\nconst DirectionButton = styled(Button)\`\n  width: \${buttonWidth}px;\n\`;\nconst ToolTipBaseWrapper = styled.div\`\n  display: inline-block;\n\`;\nconst DirectionButtonButtonTopWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst DirectionButtonButtonLeftWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  position: absolute;\n\`;\nconst DirectionButtonButtonRightWrapper = styled.div\`\n  width: \${buttonWidth}px;\n  margin-left: \${buttonWidth * 4 + 24}px;\n\`;\nconst DirectionButtonButtonBottomWrapper = styled.div\`\n  margin-left: \${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n\`;\nconst ToolTipHWrapper = styled(ToolTipBaseWrapper)\`\n  margin-right: 10px;\n\`;\nconst ToolTipVWrapper = styled(ToolTipBaseWrapper)\`\n  margin-top: 10px;\n\`;\nexport default class BasePopconfirm extends React.Component<any, any> {\n  render() {\n    const text = \"确定删除这个选项吗?\";\n    const config = {\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            width: buttonWidth\n          }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={config}>\n          <DirectionButtonButtonTopWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"topLeft\" title={text} action={\"click\"}>\n                <DirectionButton type=\"primary\">TL</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"top\" title={text}>\n                <DirectionButton type=\"primary\">Top</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"topRight\" title={text}>\n                <DirectionButton type=\"primary\">TR</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n          </DirectionButtonButtonTopWrapper>\n          <DirectionButtonButtonLeftWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"leftTop\" title={text}>\n                <DirectionButton type=\"primary\">LT</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"left\" title={text}>\n                <DirectionButton type=\"primary\">Left</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"leftBottom\" title={text}>\n                <DirectionButton type=\"primary\">LB</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n          </DirectionButtonButtonLeftWrapper>\n          <DirectionButtonButtonRightWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"rightTop\" title={text}>\n                <DirectionButton type=\"primary\">RT</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"right\" title={text}>\n                <DirectionButton type=\"primary\">Right</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n            <ToolTipVWrapper>\n              <Popconfirm placement=\"rightBottom\" title={text}>\n                <DirectionButton type=\"primary\">RB</DirectionButton>\n              </Popconfirm>\n            </ToolTipVWrapper>\n          </DirectionButtonButtonRightWrapper>\n          <DirectionButtonButtonBottomWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"bottomLeft\" title={text}>\n                <DirectionButton type=\"primary\">BL</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"bottom\" title={text}>\n                <DirectionButton type=\"primary\">Bottom</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n            <ToolTipHWrapper>\n              <Popconfirm placement=\"bottomRight\" title={text}>\n                <DirectionButton type=\"primary\">BR</DirectionButton>\n              </Popconfirm>\n            </ToolTipHWrapper>\n          </DirectionButtonButtonBottomWrapper>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"气泡确认框基本用法"}
                demo={<BasePopconfirm />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"popconfirm-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Popconfirm, Button, Icon } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Direction = styled(Button)\`\`;\nconst Wrapper = styled.div\`\`;\nconst IconWrapper = styled.div\`\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n\`;\nconst HintIcon: Object = styled(Icon)\`\n  color: white;\n  font-size: 14px;\n\`;\nconst PopWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class TypePopconfirm extends React.Component<any, any> {\n  render() {\n    const text = \"确定删除这个选项吗?\";\n    return (\n      <Wrapper>\n        <PopWrapper>\n          <Popconfirm\n            placement=\"top\"\n            title={text}\n            action={\"click\"}\n            cancelText=\"No\"\n            okText=\"yes\"\n            okType=\"danger\"\n            icon={\n              <IconWrapper style={{ background: \"orange\" }}>\n                <HintIcon iconClass={\"lugia-icon-reminder_exclamation\"} />\n              </IconWrapper>\n            }\n          >\n            <Direction type=\"primary\">提示</Direction>\n          </Popconfirm>\n        </PopWrapper>\n        <PopWrapper>\n          <Popconfirm\n            placement=\"top\"\n            title={text}\n            action={\"click\"}\n            cancelText=\"No\"\n            okText=\"yes\"\n            okType=\"danger\"\n            icon={\n              <IconWrapper style={{ background: \"#f22735\" }}>\n                <HintIcon\n                  style={{ color: \"white\" }}\n                  iconClass={\"lugia-icon-reminder_question\"}\n                />\n              </IconWrapper>\n            }\n          >\n            <Direction type=\"primary\">危险操作</Direction>\n          </Popconfirm>\n        </PopWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"气泡确认框多种风格,可选择添加不同颜色图标"}
                demo={<TypePopconfirm />}
              ></Demo>
              <Demo
                title={"三种触发条件"}
                titleID={"popconfirm-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Popconfirm, Button, Input } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Direction = styled(Button)\`\`;\nconst Wrapper = styled.div\`\`;\nconst PopWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nexport default class ActionPopconfirm extends React.Component<any, any> {\n  render() {\n    const text = \"确定删除这个选项吗?\";\n    return (\n      <Wrapper>\n        <PopWrapper>\n          <Popconfirm placement=\"top\" title={text} action={\"click\"}>\n            <Direction type=\"primary\">鼠标点击</Direction>\n          </Popconfirm>\n        </PopWrapper>\n        <PopWrapper>\n          <Popconfirm placement=\"top\" title={text} action={\"hover\"}>\n            <Direction type=\"primary\">鼠标移入</Direction>\n          </Popconfirm>\n        </PopWrapper>\n        <PopWrapper>\n          <Popconfirm title={text} action={\"focus\"} placement=\"top\">\n            <Input placeholder={\"聚焦弹出\"} />\n          </Popconfirm>\n        </PopWrapper>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"三种触发条件,click,hover,focus"}
                demo={<ActionPopconfirm />}
              ></Demo>
              <Demo
                title={"控制是否弹出"}
                titleID={"popconfirm-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Popconfirm, Button, notification, Switch } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst PopWrapper = styled.div\`\n  margin-right: 10px;\n  display: inline-block;\n\`;\nconst Direction = styled(Button)\`\`;\nexport default class CoditionPopconfirm extends React.Component<any, any> {\n  state = {\n    visible: false,\n    condition: true\n  };\n\n  changeCondition = (value: Object) => {\n    const condition = value.oldValue === true;\n    this.setState({ condition });\n  };\n\n  confirm = () => {\n    this.setState({ visible: false });\n    notification.success({ title: \"操作成功 \" });\n  };\n\n  cancel = () => {\n    this.setState({ visible: false });\n    notification.error({ title: \"取消操作\" });\n  };\n\n  handleVisibleChange = (visible: Object) => {\n    if (!visible) {\n      this.setState({ visible });\n      return;\n    }\n    if (this.state.condition === true) {\n      this.confirm();\n    } else {\n      this.setState({ visible });\n    }\n  };\n\n  render() {\n    return (\n      <div>\n        <PopWrapper>\n          <Switch defaultChecked onChange={this.changeCondition} />\n        </PopWrapper>\n        <PopWrapper>\n          <Popconfirm\n            placement=\"top\"\n            title=\"确定要删除吗?\"\n            visible={this.state.visible}\n            onVisibleChange={this.handleVisibleChange}\n            onConfirm={this.confirm}\n            onCancel={this.cancel}\n            okText=\"确定\"\n            cancelText=\"取消\"\n          >\n            <Direction type=\"primary\">删除任务</Direction>\n          </Popconfirm>\n        </PopWrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可根据情况选择 控制是否弹出"}
                demo={<CoditionPopconfirm />}
              ></Demo>
              <EditTables dataSource={POPCONFIRM} />
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
                <Link title={"气泡确认框基本用法"} href={"#popconfirm-0"} />
                <Link title={"风格"} href={"#popconfirm-1"} />
                <Link title={"三种触发条件"} href={"#popconfirm-2"} />
                <Link title={"控制是否弹出"} href={"#popconfirm-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
