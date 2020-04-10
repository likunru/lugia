import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import PROGRESS from "@lugia/lugia-web/dist/progress/lugia.progress.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const SmallDemo = require("./SmallDemo").default;
const InsideDemo = require("./InsideDemo").default;
const ChangeLineDemo = require("./ChangeLineDemo").default;
const CircleDemo = require("./CircleDemo").default;
const CircleSmallDemo = require("./CircleSmallDemo").default;
const ChangeCircleDemo = require("./ChangeCircleDemo").default;
const DashboardDemo = require("./DashboardDemo").default;

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
                title={"进度条"}
                subTitle={"Progress"}
                desc={"展示操作的当前进度。"}
              />
              <Demo
                title={"进度条"}
                titleID={"progress-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress percent={30} />\n                <br/>\n                <Progress percent={50} active />\n                <br/>\n                <Progress percent={70} status=\"error\" />\n                <br/>\n                <Progress percent={100} status=\"success\" />\n                <br/>\n                <Progress percent={70} showInfo={false} />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"基础的进度条"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"小型进度条"}
                titleID={"progress-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress percent={30} size=\"small\" />\n                <br/>\n                <Progress percent={50} status=\"active\" size=\"small\" />\n                <br/>\n                <Progress percent={70} status=\"error\" size=\"small\" />\n                <br/>\n                <Progress percent={100} status=\"success\" size=\"small\" />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"更小的进度条，放在狭窄的地方"}
                demo={<SmallDemo />}
              ></Demo>
              <Demo
                title={"内容内置"}
                titleID={"progress-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress percent={0} showType=\"inside\" />\n                <br/>\n                <Progress percent={30} showType=\"inside\" status=\"active\" />\n                <br/>\n                <Progress percent={30} showType=\"inside\" />\n                <br/>\n                <Progress percent={100} showType=\"inside\" />\n                <br/>\n                <Progress percent={30} showType=\"inside\" status=\"error\" />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"内容内置的进图条，节省空间"}
                demo={<InsideDemo />}
              ></Demo>
              <Demo
                title={"动态展示"}
                titleID={"progress-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress, Button} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            percent: 30,\n        };\n    }\n    handleClick = type => {\n        let res = this.state.percent;\n        if (type === \'add\') {\n            res += 10;\n            if( res>100 ){\n              res = 100;\n            }\n        } else {\n            res -= 10;\n            if( res < 0){\n              res = 0;\n            }\n        }\n        this.setState({\n            percent: res,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <Progress percent={this.state.percent} status=\"active\" />\n                <br/>\n                <Button onClick={() => this.handleClick(\'add\')}>+10</Button>&nbsp;&nbsp;\n                <Button onClick={() => this.handleClick(\'sub\')}>-10</Button>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可以动的进度条"}
                demo={<ChangeLineDemo />}
              ></Demo>
              <Demo
                title={"圆形进度条"}
                titleID={"progress-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress type=\"circle\" percent={0} />\n                <br/>\n                <Progress type=\"circle\" status=\"error\" percent={50} />\n                <br/>\n                <Progress type=\"circle\" status=\"success\" percent={100} />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"圆形进度条"}
                demo={<CircleDemo />}
              ></Demo>
              <Demo
                title={"小型圆形进度条"}
                titleID={"progress-5"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress type=\"circle\" size=\"small\" percent={0} />\n                <br/>\n                <Progress type=\"circle\" size=\"small\" status=\"error\" percent={50} />\n                <br/>\n                <Progress type=\"circle\" size=\"small\" status=\"success\" percent={100} />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"小型圆形进度条，节省空间"}
                demo={<CircleSmallDemo />}
              ></Demo>
              <Demo
                title={"小型圆形进度条"}
                titleID={"progress-6"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress, Button} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            percent: 30,\n        };\n    }\n    handleClick = type => {\n        let res = this.state.percent;\n        if (type === \'add\') {\n            res += 10;\n            if( res>100 ){\n              res = 100;\n            }\n        } else {\n            res -= 10;\n            if( res < 0){\n              res = 0;\n            }\n        }\n        this.setState({\n            percent: res,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <Progress type=\"circle\" percent={this.state.percent} />\n                <br/>\n                <Button onClick={() => this.handleClick(\'add\')}>+10</Button>&nbsp;\n                <Button onClick={() => this.handleClick(\'sub\')}>-10</Button>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"小型圆形进度条，节省空间"}
                demo={<ChangeCircleDemo />}
              ></Demo>
              <Demo
                title={"仪表盘"}
                titleID={"progress-7"}
                code={
                  <code>{`import React from \'react\';\nimport {Progress} from \'@lugia/lugia-web\';\n\nexport default class ProgressDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Progress type=\"dashboard\" percent={50} />\n                <br/>\n                <Progress type=\"dashboard\" percent={100} />\n                <br/>\n                <Progress type=\"dashboard\" status=\"error\" percent={40} />\n                <br/>\n                <Progress type=\"dashboard\" status=\"success\" percent={80} />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"仪表盘样式的进度条"}
                demo={<DashboardDemo />}
              ></Demo>
              <EditTables dataSource={PROGRESS} />
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
                <Link title={"进度条"} href={"#progress-0"} />
                <Link title={"小型进度条"} href={"#progress-1"} />
                <Link title={"内容内置"} href={"#progress-2"} />
                <Link title={"动态展示"} href={"#progress-3"} />
                <Link title={"圆形进度条"} href={"#progress-4"} />
                <Link title={"小型圆形进度条"} href={"#progress-5"} />
                <Link title={"小型圆形进度条"} href={"#progress-6"} />
                <Link title={"仪表盘"} href={"#progress-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
