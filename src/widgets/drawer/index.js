import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import DRAWER from "@lugia/lugia-web/dist/drawer/lugia.drawer.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const DirectionDemo = require("./DirectionDemo").default;
const LevelDrawer = require("./LevelDrawer").default;
const ClosableDemo = require("./ClosableDemo").default;

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
                title={"抽屉"}
                subTitle={"Drawer"}
                desc={"在屏幕边缘出现的浮层面板。"}
              />
              <Demo
                title={"基础抽屉"}
                titleID={"drawer-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Drawer,Button} from \'@lugia/lugia-web\';\n\nexport default class DrawerDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false\n        };\n    }\n    openDrawer = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    onClick= () => {\n        this.setState({\n            visible: false\n        });\n    };\n    render() {\n        const {visible} = this.state;\n        return (\n            <div>\n                <Button type=\"primary\" onClick={this.openDrawer}>\n                    click me\n                </Button>\n                <Drawer title=\"Basic Drawer\" onClose={this.onClick} visible={visible}>\n                    <p>Basic Drawer</p>\n                    <p>Basic Drawer</p>\n                    <p>Basic Drawer</p>\n                </Drawer>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"从右侧滑出，点击遮罩层关闭"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"自定义位置"}
                titleID={"drawer-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Drawer, Radio, Button} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst RadioGroup = Radio.Group;\nconst RadioBox = styled.div\`\n  margin-bottom: 10px;\n\`;\n\nexport default class DrawerDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false,\n            radioValue: \'right\'\n        };\n    }\n    openDrawer = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    onClick= () => {\n        this.setState({\n            visible: false\n        });\n    };\n    handleChange = obj => {\n        this.setState({\n            radioValue: obj.newValue,\n        });\n    };\n    render() {\n        const {visible, radioValue} = this.state;\n        return (\n            <div>\n                <RadioBox>\n                    <RadioGroup value={radioValue} onChange={this.handleChange}>\n                        <Radio value=\"right\">right</Radio>\n                        <Radio value=\"left\">left</Radio>\n                        <Radio value=\"top\">top</Radio>\n                        <Radio value=\"bottom\">bottom</Radio>\n                    </RadioGroup>\n                </RadioBox>\n                <Button type=\"primary\" onClick={this.openDrawer}>\n                    click me\n                </Button>\n\n                <Drawer\n                    title=\"Direction Drawer\"\n                    placement={radioValue}\n                    onClose={this.onClick}\n                    visible={visible}\n                >\n                    <p>Direction Drawer</p>\n                    <p>Direction Drawer</p>\n                    <p>Direction Drawer</p>\n                </Drawer>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"自定义抽屉弹出位置"}
                demo={<DirectionDemo />}
              ></Demo>
              <Demo
                title={"多层抽屉"}
                titleID={"drawer-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Drawer, Button} from \'@lugia/lugia-web\';\n\nexport default class DrawerDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible1: false,\n            visible2: false,\n            visible3: false\n        };\n    }\n    openDrawer = cur => () => {\n        this.setState({\n            [\'visible\' + cur]: true,\n        });\n    };\n    onClick = cur => () => {\n        this.setState({\n            [\'visible\' + cur]: false,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <Button type=\"primary\" onClick={this.openDrawer(1)}>\n                    click me\n                </Button>\n\n                <Drawer title=\"Drawer-Header\" onClose={this.onClick(1)} visible={this.state.visible1}>\n                    <p>First contents...</p>\n                    <p>First contents...</p>\n                    <p>First contents...</p>\n                    <br/>\n                    <Button type=\"primary\" onClick={this.openDrawer(2)}>\n                        Second Drawer\n                    </Button>\n                    <Drawer onClose={this.onClick(2)} visible={this.state.visible2}>\n                        <p>Second contents...</p>\n                        <p>Second contents...</p>\n                        <p>Second contents...</p>\n                        <br/>\n                        <Button type=\"primary\" onClick={this.openDrawer(3)}>\n                            Three Drawer\n                        </Button>\n                        <Drawer onClose={this.onClick(3)} visible={this.state.visible3}>\n                            <p>Three contents...</p>\n                            <p>Three contents...</p>\n                            <p>Three contents...</p>\n                        </Drawer>\n                    </Drawer>\n                </Drawer>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"多层抽屉嵌套"}
                demo={<LevelDrawer />}
              ></Demo>
              <Demo
                title={"关闭按钮"}
                titleID={"drawer-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Drawer, Button} from \'@lugia/lugia-web\';\n\nexport default class DrawerDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false\n        };\n    }\n    openDrawer = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    onClick= () => {\n        this.setState({\n            visible: false\n        });\n    };\n    render() {\n        const {visible} = this.state;\n        return (\n            <div>\n                <Button type=\"primary\" onClick={this.openDrawer}>\n                    click me\n                </Button>\n                <Drawer\n                    title=\"Basic Drawer\"\n                    closable\n                    maskClosable={false}\n                    onClose={this.onClick}\n                    visible={visible}\n                >\n                    <p>closable Drawer</p>\n                    <p>closable Drawer</p>\n                    <p>closable Drawer</p>\n                </Drawer>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"显示关闭按钮"}
                demo={<ClosableDemo />}
              ></Demo>
              <EditTables dataSource={DRAWER} />
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
                <Link title={"基础抽屉"} href={"#drawer-0"} />
                <Link title={"自定义位置"} href={"#drawer-1"} />
                <Link title={"多层抽屉"} href={"#drawer-2"} />
                <Link title={"关闭按钮"} href={"#drawer-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
