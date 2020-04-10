import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import LAYOUT from "@lugia/lugia-web/dist/layout/lugia.layout.zh-CN.json";
import ASIDE from "@lugia/lugia-web/dist/layout/lugia.aside.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const LeftAsideDemo = require("./LeftAsideDemo").default;
const RightAsideDemo = require("./RightAsideDemo").default;
const AsideLeftDemo = require("./AsideLeftDemo").default;
const AsideRightDemo = require("./AsideRightDemo").default;

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
                title={"布局"}
                subTitle={"Layout"}
                desc={"页面整体布局。"}
              />
              <Demo
                title={"通用布局"}
                titleID={"layout-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Layout} from \'@lugia/lugia-web\';\n\nconst { Header, Content, Footer, Aside } = Layout;\nconst header = (\n    <div style={{ height: \'60px\', lineHeight: \'60px\', textAlign: \'center\', background: \'#F0F2FF\' }}>\n        Header\n    </div>\n);\nconst content = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            textAlign: \'center\',\n            background: \'#B7C0FF\',\n        }}\n    >\n        Content\n    </div>\n);\nconst footer = (\n    <div\n        style={{\n            height: \'60px\',\n            lineHeight: \'60px\',\n            textAlign: \'center\',\n            background: \'#E6E9FF\',\n        }}\n    >\n        Footer\n    </div>\n);\n\nexport default class LayoutDemo extends React.Component {\n    render() {\n        return (\n            <Layout>\n                <Header>{header}</Header>\n                <Content>{content}</Content>\n                <Footer>{footer}</Footer>\n            </Layout>\n        );\n    }\n}\n`}</code>
                }
                desc={"上中下布局"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"顶部-侧边布局"}
                titleID={"layout-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Layout} from \'@lugia/lugia-web\';\n\nconst { Header, Content, Footer, Aside } = Layout;\nconst header = (\n    <div style={{ height: \'60px\', lineHeight: \'60px\', textAlign: \'center\', background: \'#F0F2FF\' }}>\n        Header\n    </div>\n);\nconst content = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            textAlign: \'center\',\n            background: \'#B7C0FF\',\n        }}\n    >\n        Content\n    </div>\n);\nconst footer = (\n    <div\n        style={{\n            height: \'60px\',\n            lineHeight: \'60px\',\n            textAlign: \'center\',\n            background: \'#E6E9FF\',\n        }}\n    >\n        Footer\n    </div>\n);\nconst aside = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            width: \'200px\',\n            textAlign: \'center\',\n            background: \'#CCD4FF\',\n        }}\n    >\n        Aside\n    </div>\n);\n\nexport default class LayoutDemo extends React.Component {\n    render() {\n        return (\n            <Layout>\n                <Header>{header}</Header>\n                <Layout direction=\"row\">\n                    <Aside>{aside}</Aside>\n                    <Content>{content}</Content>\n                </Layout>\n                <Footer>{footer}</Footer>\n            </Layout>\n        );\n    }\n}\n`}</code>
                }
                desc={"顶部-左侧边布局"}
                demo={<LeftAsideDemo />}
              ></Demo>
              <Demo
                title={"布局"}
                titleID={"layout-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Layout} from \'@lugia/lugia-web\';\n\nconst { Header, Content, Footer, Aside } = Layout;\nconst header = (\n    <div style={{ height: \'60px\', lineHeight: \'60px\', textAlign: \'center\', background: \'#F0F2FF\' }}>\n        Header\n    </div>\n);\nconst content = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            textAlign: \'center\',\n            background: \'#B7C0FF\',\n        }}\n    >\n        Content\n    </div>\n);\nconst footer = (\n    <div\n        style={{\n            height: \'60px\',\n            lineHeight: \'60px\',\n            textAlign: \'center\',\n            background: \'#E6E9FF\',\n        }}\n    >\n        Footer\n    </div>\n);\nconst aside = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            width: \'200px\',\n            textAlign: \'center\',\n            background: \'#CCD4FF\',\n        }}\n    >\n        Aside\n    </div>\n);\n\nexport default class LayoutDemo extends React.Component {\n    render() {\n        return (\n            <Layout>\n                <Header>{header}</Header>\n                <Layout direction=\"row\">\n                    <Content>{content}</Content>\n                    <Aside>{aside}</Aside>\n                </Layout>\n                <Footer>{footer}</Footer>\n            </Layout>\n        );\n    }\n}\n`}</code>
                }
                desc={"顶部-右侧边布局"}
                demo={<RightAsideDemo />}
              ></Demo>
              <Demo
                title={"左侧边布局"}
                titleID={"layout-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Layout,Theme} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\n\nconst { Header, Content, Footer, Aside } = Layout;\nconst header = (\n    <div style={{ height: \'60px\', lineHeight: \'60px\', textAlign: \'center\', background: \'#F0F2FF\' }}>\n        Header\n    </div>\n);\nconst content = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            textAlign: \'center\',\n            background: \'#B7C0FF\',\n        }}\n    >\n        Content\n    </div>\n);\nconst footer = (\n    <div\n        style={{\n            height: \'60px\',\n            lineHeight: \'60px\',\n            textAlign: \'center\',\n            background: \'#E6E9FF\',\n        }}\n    >\n        Footer\n    </div>\n);\n\nexport default class LayoutDemo extends React.Component {\n    render() {\n        return (\n            <Layout direction=\"row\">\n              <Theme config={{ [Widget.Aside]: { backgroundColor: \'#CCD4FF\' } }}>\n                <Aside collapsible breakpoint={\'lg\'}>\n                    <div>Aside</div>\n                </Aside>\n              </Theme>\n                <Layout>\n                    <Header>{header}</Header>\n                    <Content>{content}</Content>\n                    <Footer>{footer}</Footer>\n                </Layout>\n            </Layout>\n        );\n    }\n}\n`}</code>
                }
                desc={"侧边布局"}
                demo={<AsideLeftDemo />}
              ></Demo>
              <Demo
                title={"右侧边布局"}
                titleID={"layout-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Layout,Theme} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\n\nconst { Header, Content, Footer, Aside } = Layout;\nconst header = (\n    <div style={{ height: \'60px\', lineHeight: \'60px\', textAlign: \'center\', background: \'#F0F2FF\' }}>\n        Header\n    </div>\n);\nconst content = (\n    <div\n        style={{\n            height: \'200px\',\n            lineHeight: \'200px\',\n            textAlign: \'center\',\n            background: \'#B7C0FF\',\n        }}\n    >\n        Content\n    </div>\n);\nconst footer = (\n    <div\n        style={{\n            height: \'60px\',\n            lineHeight: \'60px\',\n            textAlign: \'center\',\n            background: \'#E6E9FF\',\n        }}\n    >\n        Footer\n    </div>\n);\n\nexport default class LayoutDemo extends React.Component {\n    render() {\n        return (\n            <Layout direction=\"row\">\n                <Layout>\n                    <Header>{header}</Header>\n                    <Content>{content}</Content>\n                    <Footer>{footer}</Footer>\n                </Layout>\n              <Theme config={{ [Widget.Aside]: { backgroundColor: \'#CCD4FF\' } }}>\n                <Aside collapsible breakpoint={\'lg\'}>\n                    <div>Aside</div>\n                </Aside>\n              </Theme>\n            </Layout>\n        );\n    }\n}\n`}</code>
                }
                desc={"侧边布局"}
                demo={<AsideRightDemo />}
              ></Demo>
              <EditTables dataSource={LAYOUT} />
              <EditTables dataSource={ASIDE} />
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
                <Link title={"通用布局"} href={"#layout-0"} />
                <Link title={"顶部-侧边布局"} href={"#layout-1"} />
                <Link title={"布局"} href={"#layout-2"} />
                <Link title={"左侧边布局"} href={"#layout-3"} />
                <Link title={"右侧边布局"} href={"#layout-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
