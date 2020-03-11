import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import BUTTON from "@lugia/lugia-web/dist/button/lugia.button.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const ShapeDemo = require("./ShapeDemo").default;
const PlainDemo = require("./PlainDemo").default;
const SizeDemo = require("./SizeDemo").default;
const DisabledDemo = require("./DisabledDemo").default;
const PlainDisabledDemo = require("./PlainDisabledDemo").default;
const CircleDemo = require("./CircleDemo").default;
const IconDemo = require("./IconDemo").default;
const ThemeDemo = require("./ThemeDemo").default;

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
                title={"按钮"}
                subTitle={"Button"}
                desc={"方便用户点击操作"}
              />
              <Demo
                title={"五种类型"}
                titleID={"button-0"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component {\n    render() {\n        return (\n            <Wrap>\n                <Button>Default</Button><Empty />\n                <Button type=\"primary\">Primary</Button><Empty />\n                <Button type=\"success\">Success</Button><Empty />\n                <Button type=\"warning\">Warning</Button><Empty />\n                <Button type=\"danger\">Danger</Button><Empty />\n                <Button type=\"link\">Link</Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"五种类型的按钮"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"圆角按钮"}
                titleID={"button-1"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button shape=\"round\">Default</Button><Empty />\n                <Button type=\"primary\" shape=\"round\">Primary</Button><Empty />\n                <Button type=\"success\" shape=\"round\">Success</Button><Empty />\n                <Button type=\"warning\" shape=\"round\">Warning</Button><Empty />\n                <Button type=\"danger\" shape=\"round\">Danger</Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"圆角按钮"}
                demo={<ShapeDemo />}
              ></Demo>
              <Demo
                title={"朴素按钮"}
                titleID={"button-2"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button shape=\"round\" plain>Default</Button><Empty />\n                <Button type=\"primary\" shape=\"round\" plain>Primary</Button><Empty />\n                <Button type=\"success\" shape=\"round\" plain>Success</Button><Empty />\n                <Button type=\"warning\" shape=\"round\" plain>Warning</Button><Empty />\n                <Button type=\"danger\" shape=\"round\" plain>Danger</Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"朴素按钮"}
                demo={<PlainDemo />}
              ></Demo>
              <Demo
                title={"不同尺寸"}
                titleID={"button-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrap>\n        <Button type=\"warning\" size=\"small\">\n          Warning\n        </Button><Empty />\n        <Button>Default</Button><Empty />\n        <Button type=\"primary\" size=\"large\">\n          Primary\n        </Button>\n      </Wrap>\n    );\n  }\n}\n`}</code>
                }
                desc={"不同的按钮尺寸"}
                demo={<SizeDemo />}
              ></Demo>
              <Demo
                title={"禁用状态"}
                titleID={"button-4"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button disabled>Default</Button>\n                <Empty />\n                <Button type=\"primary\" disabled>\n                    Primary\n                </Button>\n                <Empty />\n                <Button type=\"success\" disabled>\n                    Success\n                </Button>\n                <Empty />\n                <Button type=\"warning\" disabled>\n                    warning\n                </Button>\n                <Empty />\n                <Button type=\"danger\" disabled>\n                    danger\n                </Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"按钮的禁用状态"}
                demo={<DisabledDemo />}
              ></Demo>
              <Demo
                title={"朴素按钮禁用"}
                titleID={"button-5"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button plain disabled>\n                    default\n                </Button>\n                <Empty />\n                <Button type=\"primary\" plain disabled>\n                    primary\n                </Button>\n                <Empty />\n                <Button type=\"success\" plain disabled>\n                    success\n                </Button>\n                <Empty />\n                <Button type=\"warning\" plain disabled>\n                    warning\n                </Button>\n                <Empty />\n                <Button type=\"danger\" plain disabled>\n                    danger\n                </Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"朴素按钮的禁用状态"}
                demo={<PlainDisabledDemo />}
              ></Demo>
              <Demo
                title={"圆形按钮"}
                titleID={"button-6"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button circle icon=\"lugia-icon-direction_logout\" /><Empty />\n                <Button type=\"primary\" circle icon=\"lugia-icon-financial_search\" /><Empty />\n                <Button circle icon=\"lugia-icon-financial_download\" />\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"仅展示图标的圆形按钮"}
                demo={<CircleDemo />}
              ></Demo>
              <Demo
                title={"图标按钮"}
                titleID={"button-7"}
                code={
                  <code>{`import * as React from \'react\';\nimport styled from \'styled-components\';\nimport {Button} from \'@lugia/lugia-web\';\n\nconst Empty = styled.span\`\n  display: inline-block;\n  width: 10px;\n\`;\nconst Wrap = styled.div\`\n  & > button {\n    margin-bottom: 10px;\n  }  \n\`;\n\nexport default class ButtonDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Wrap>\n                <Button loading>loading</Button><Empty />\n                <Button loading={{ delay: 3000 }}>loading</Button><Empty />\n                <Button icon=\"lugia-icon-direction_logout\">Button</Button><Empty />\n                <Button icon=\"lugia-icon-financial_global\">Button</Button>\n            </Wrap>\n        );\n    }\n}\n`}</code>
                }
                desc={"带图标的按钮，加载中的状态"}
                demo={<IconDemo />}
              ></Demo>
              <Demo
                title={"配置主题"}
                titleID={"button-8"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Button, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nexport default class ButtonDemo extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            width: 100,\n            height: 50,\n            padding: 9,\n            margin: 10,\n            background: { color: \"orange\" }\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={view}>\n          <Button>Button</Button>\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"根据需要配置主题"}
                demo={<ThemeDemo />}
              ></Demo>
              <EditTables dataSource={BUTTON} />
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
                <Link title={"五种类型"} href={"#button-0"} />
                <Link title={"圆角按钮"} href={"#button-1"} />
                <Link title={"朴素按钮"} href={"#button-2"} />
                <Link title={"不同尺寸"} href={"#button-3"} />
                <Link title={"禁用状态"} href={"#button-4"} />
                <Link title={"朴素按钮禁用"} href={"#button-5"} />
                <Link title={"圆形按钮"} href={"#button-6"} />
                <Link title={"图标按钮"} href={"#button-7"} />
                <Link title={"配置主题"} href={"#button-8"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
