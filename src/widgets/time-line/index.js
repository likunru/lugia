import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TIMELINE from "@lugia/lugia-web/dist/time-line/lugia.time-line.zh-CN.json";
import TIMELINEITEM from "@lugia/lugia-web/dist/time-line/lugia.timeLineItem.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseTimeLine = require("./BaseTimeLine").default;
const ModeTimeLine = require("./ModeTimeLine").default;
const DescriptionTimeLine = require("./DescriptionTimeLine").default;
const TypeTimeLine = require("./TypeTimeLine").default;
const StatusTimeLine = require("./StatusTimeLine").default;
const ReverseTimeLine = require("./ReverseTimeLine").default;
const PendingTimeline = require("./PendingTimeline").default;

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
                title={"时间轴"}
                subTitle={"TimeLine"}
                desc={"垂直展示的时间流信息"}
              />
              <Demo
                title={"基本用法"}
                titleID={"time-line-0"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nexport default class BaseTimeLine extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <TimeLine>\n          <TimeLineItem time=\"2018-01-01\" />\n          <TimeLineItem time=\"2018-01-02\" />\n          <TimeLineItem time=\"2018-01-03\" />\n          <TimeLineItem time=\"2018-01-04\" />\n          <TimeLineItem time=\"2018-01-05\" />\n        </TimeLine>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"时间轴基本用法"}
                demo={<BaseTimeLine />}
              ></Demo>
              <Demo
                title={"模式"}
                titleID={"time-line-1"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nconst Wrapper = styled.div\`\n  display: inline-block;\n  margin-left: 100px;\n\`;\nexport default class ModeTimeLine extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <TimeLine mode={\"alternate\"}>\n          <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n          <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n          <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n          <TimeLineItem time=\"2018-01-04\" description={\"description444\"} />\n          <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n        </TimeLine>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"右边显示,或者分散排布"}
                demo={<ModeTimeLine />}
              ></Demo>
              <Demo
                title={"描述"}
                titleID={"time-line-2"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nexport default class DescriptionTimeLine extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <TimeLine>\n          <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n          <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n          <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n          <TimeLineItem time=\"2018-01-04\" description={\"description444\"} />\n          <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n        </TimeLine>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"配置显示描述信息"}
                demo={<DescriptionTimeLine />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"time-line-3"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nconst Wrapper = styled.div\`\n  margin-right: 150px;\n  display: inline-block;\n\`;\nexport default class TypeTimeLine extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Wrapper>\n          <TimeLine>\n            <TimeLineItem\n              time=\"2018-01-01\"\n              description={\"description111\"}\n              type={\"icon\"}\n              icon={\"lugia-icon-financial_progress\"}\n            />\n            <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n            <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n            <TimeLineItem\n              time=\"2018-01-04\"\n              description={\"description444\"}\n              type={\"icon\"}\n              icon={\"lugia-icon-financial_progress\"}\n            />\n            <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n          </TimeLine>\n        </Wrapper>\n        <Wrapper>\n          <TimeLine>\n            <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n            <TimeLineItem\n              time=\"2018-01-02\"\n              description={\"description222\"}\n              type=\"explain\"\n            />\n            <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n            <TimeLineItem\n              time=\"2018-01-04\"\n              description={\"description444\"}\n              type=\"explain\"\n            />\n            <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n          </TimeLine>\n        </Wrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"时间轴多种风格"}
                demo={<TypeTimeLine />}
              ></Demo>
              <Demo
                title={"状态"}
                titleID={"time-line-4"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nconst Wrapper = styled.div\`\n  text-align: left;\n\`;\nexport default class StatusTimeLine extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <br />\n        <TimeLine>\n          <TimeLineItem time=\"2018-01-01\" status={\"success\"} />\n          <TimeLineItem time=\"2018-01-02\" />\n          <TimeLineItem time=\"2018-01-03\" status={\"failed\"} />\n          <TimeLineItem time=\"2018-01-04\" />\n          <TimeLineItem time=\"2018-01-05\" />\n        </TimeLine>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"时间轴多种状态"}
                demo={<StatusTimeLine />}
              ></Demo>
              <Demo
                title={"翻转"}
                titleID={"time-line-5"}
                code={
                  <code>{`import React from \"react\";\nimport { TimeLine ,Button} from \"@lugia/lugia-web\";\nconst TimeLineItem = TimeLine.TimeLineItem;\nexport default class ReverseTimeLine extends React.Component<Object, Object> {\n  state = {\n    reverse: false\n  };\n\n  handleClick = () => {\n    this.setState({ reverse: !this.state.reverse });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: \"30px\" }}>\n          <Button type=\"primary\" onClick={this.handleClick}>\n            点击反转\n          </Button>\n        </div>\n        <TimeLine reverse={this.state.reverse}>\n          <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n          <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n          <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n          <TimeLineItem time=\"2018-01-04\" description={\"description444\"} />\n          <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n        </TimeLine>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以进行翻转显示"}
                demo={<ReverseTimeLine />}
              ></Demo>
              <Demo
                title={"幽灵节点"}
                titleID={"time-line-6"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { TimeLine, Icon} from \"@lugia/lugia-web\";\nconst TimeLineItem = TimeLine.TimeLineItem;\n\nconst Wrapper = styled.div\`\n  margin-right: 150px;\n  display: inline-block;\n\`;\nexport default class PendingTimeline extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Wrapper>\n          <TimeLine pending={true}>\n            <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n            <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n            <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n            <TimeLineItem time=\"2018-01-04\" description={\"description444\"} />\n            <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n          </TimeLine>\n        </Wrapper>\n        <Wrapper>\n          <TimeLine\n            pending={true}\n            pendingDot={<Icon iconClass={\"lugia-icon-financial_abort\"} />}\n          >\n            <TimeLineItem time=\"2018-01-01\" description={\"description111\"} />\n            <TimeLineItem time=\"2018-01-02\" description={\"description222\"} />\n            <TimeLineItem time=\"2018-01-03\" description={\"description333\"} />\n            <TimeLineItem time=\"2018-01-04\" description={\"description444\"} />\n            <TimeLineItem time=\"2018-01-05\" description={\"description555\"} />\n          </TimeLine>\n        </Wrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"幽灵节点,当最后一个是幽灵节点时,可以指定其图标资源"}
                demo={<PendingTimeline />}
              ></Demo>
              <EditTables dataSource={TIMELINE} />
              <EditTables dataSource={TIMELINEITEM} />
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
                <Link title={"基本用法"} href={"#time-line-0"} />
                <Link title={"模式"} href={"#time-line-1"} />
                <Link title={"描述"} href={"#time-line-2"} />
                <Link title={"风格"} href={"#time-line-3"} />
                <Link title={"状态"} href={"#time-line-4"} />
                <Link title={"翻转"} href={"#time-line-5"} />
                <Link title={"幽灵节点"} href={"#time-line-6"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
