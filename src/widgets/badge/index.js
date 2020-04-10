import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import BADGE from "@lugia/lugia-web/dist/badge/lugia.badge.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseBadge = require("./BaseBadge").default;
const OverFlowBadge = require("./OverFlowBadge").default;
const ColorBadge = require("./ColorBadge").default;
const ClickBadge = require("./ClickBadge").default;
const ShowZeroBadge = require("./ShowZeroBadge").default;
const ChangeBadge = require("./ChangeBadge").default;

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
                title={"徽标数"}
                subTitle={"Badge"}
                desc={"图标右上角的圆形徽标数字"}
              />
              <Demo
                title={"徽标基本用法"}
                titleID={"badge-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Badge, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class BaseBadge extends React.Component<any, any> {\n  render() {\n    const dot = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { top: -5, right: -5 }\n          }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={dot}>\n          <Badge>\n            <Box />\n          </Badge>\n          <Badge count={5}>\n            <Box />\n          </Badge>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"显示不同数量的徽标"}
                demo={<BaseBadge />}
              ></Demo>
              <Demo
                title={"封顶数字"}
                titleID={"badge-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Badge, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class OverFlowBadge extends React.Component<any, any> {\n  render() {\n    const dot = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: { position: { top: -5, right: -5 } }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={dot}>\n          <Badge overFlow={99} count={98}>\n            <Box />\n          </Badge>\n          <Badge overFlow={99} count={100}>\n            <Box />\n          </Badge>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"显示不同封顶数字的徽标"}
                demo={<OverFlowBadge />}
              ></Demo>
              <Demo
                title={"设置颜色"}
                titleID={"badge-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Badge, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class ColorBadge extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Theme\n          config={{\n            green: {\n              Badge: {\n                normal: {\n                  position: { top: -5, right: -5 },\n                  background: { color: \"green\" }\n                }\n              }\n            }\n          }}\n        >\n          <Badge viewClass=\"green\">\n            <Box />\n          </Badge>\n        </Theme>\n        <Theme\n          config={{\n            purple: {\n              Badge: {\n                normal: {\n                  position: { top: -5, right: -5 },\n                  background: { color: \"purple\" }\n                }\n              }\n            }\n          }}\n        >\n          <Badge viewClass=\"purple\">\n            <Box />\n          </Badge>\n        </Theme>\n        <Theme\n          config={{\n            yellow: {\n              Badge: {\n                normal: {\n                  position: { top: -5, right: -5 },\n                  background: { color: \"yellow\" }\n                }\n              }\n            }\n          }}\n        >\n          <Badge viewClass=\"yellow\">\n            <Box />\n          </Badge>\n        </Theme>\n        <Theme\n          config={{\n            blue: {\n              Badge: {\n                normal: {\n                  position: { top: -5, right: -5 },\n                  background: { color: \"blue\" }\n                }\n              }\n            }\n          }}\n        >\n          <Badge viewClass=\"blue\">\n            <Box />\n          </Badge>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"显示不同颜色的徽标"}
                demo={<ColorBadge />}
              ></Demo>
              <Demo
                title={"可点击"}
                titleID={"badge-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Badge, Theme } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\n\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class ClickBadge extends React.Component<any, any> {\n\n  render () {\n    const dot = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { top: -5, right: -5 }\n          }\n        },\n      }\n    };\n    return (\n      <Wrapper>\n        <a href=\"/component/badge\">\n            <Theme config={dot}>\n              <Badge  >\n                <Box />\n              </Badge>\n            </Theme>\n        </a>\n      </Wrapper>);\n  }\n}\n`}</code>
                }
                desc={"用a标签包裹 可以点击"}
                demo={<ClickBadge />}
              ></Demo>
              <Demo
                title={"0的显示"}
                titleID={"badge-4"}
                code={
                  <code>{`import React from \"react\";\nimport { Badge, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class BaseBadge extends React.Component<any, any> {\n  render() {\n    const dot = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { top: -5, right: -5 }\n          }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={dot}>\n          <Badge count={0}>\n            <Box />\n          </Badge>\n          <Badge showZero count={0}>\n            <Box />\n          </Badge>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"徽标数是0时,是否显示数字"}
                demo={<ShowZeroBadge />}
              ></Demo>
              <Demo
                title={"动态修改"}
                titleID={"badge-5"}
                code={
                  <code>{`import React from \"react\";\nimport { Badge, Theme, Icon } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst Wrapper = styled.div\`\`;\nconst Box = styled.div\`\n  width: 40px;\n  height: 40px;\n  background: #ccc;\n  margin-left: 10px;\n\`;\nexport default class ChangeBadge extends React.Component<any, any> {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  click = type => () => {\n    const newCount = type === \'plus\' ? this.state.count + 1 : this.state.count - 1;\n    const count = newCount <= 0 ? 0 : newCount > 100 ? 100 : newCount;\n    this.setState({ count });\n  };\n  render() {\n    const config = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: { position: { top: -5, right: -5 } }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={config}>\n          <Badge count={this.state.count} showZero overflowCount={99}>\n            <Box />\n          </Badge>\n          <Icon\n            iconClass=\"lugia-icon-reminder_plus_square_o\"\n            onClick={this.click(\"plus\")}\n          />\n          <Icon\n            iconClass=\"lugia-icon-reminder_minus_square_o\"\n            onClick={this.click(\"minus\")}\n          />\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"动态改变显示徽标数"}
                demo={<ChangeBadge />}
              ></Demo>
              <EditTables dataSource={BADGE} />
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
                <Link title={"徽标基本用法"} href={"#badge-0"} />
                <Link title={"封顶数字"} href={"#badge-1"} />
                <Link title={"设置颜色"} href={"#badge-2"} />
                <Link title={"可点击"} href={"#badge-3"} />
                <Link title={"0的显示"} href={"#badge-4"} />
                <Link title={"动态修改"} href={"#badge-5"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
