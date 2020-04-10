import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import WINDOW from "@lugia/lugia-web/dist/window/lugia.window.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseWindow = require("./BaseWindow").default;
const CanScaleWindow = require("./CanScaleWindow").default;
const SizeWindow = require("./SizeWindow").default;
const PositionWindow = require("./PositionWindow").default;
const MiddleWindow = require("./MiddleWindow").default;
const MaskWindow = require("./MaskWindow").default;
const FixedWindow = require("./FixedWindow").default;
const DoubleClickEnlargeWindow = require("./DoubleClickEnlargeWindow").default;
const CanMinimizeWindow = require("./CanMinimizeWindow").default;
const LockWindow = require("./LockWindow").default;

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
                title={"窗体"}
                subTitle={"Window"}
                desc={"支持拖拽的窗体组件"}
              />
              <Demo
                title={"基本"}
                titleID={"window-0"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  padding: 20px 20px 20px;\n  text-align: center;\n\`;\nclass BaseWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>点击打开窗体组件</Button>\n        <Window visible={visible} onClose={this.onClose}>\n          <Text>我是窗体组件</Text>\n          <Text>点头部灰色区域可以拖拽</Text>\n          <Text>右上角可以关闭</Text>\n          <Text>窗体大小，由内容撑开</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n\nexport default BaseWindow;\n`}</code>
                }
                desc={"窗体组件的基本用法"}
                demo={<BaseWindow />}
              ></Demo>
              <Demo
                title={"拉伸缩放"}
                titleID={"window-1"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  //width: 200px;\n  line-height: 200px;\n  text-align: center;\n\`;\n\nexport default class CanScaleWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>打开窗体</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          middle\n          canScale\n          width={500}\n          height={500}\n        >\n          <Text>拉伸四边，四角</Text>\n          <Text>可实现窗体缩放</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以通过拉伸周边进行窗体的缩放"}
                demo={<CanScaleWindow />}
              ></Demo>
              <Demo
                title={"自定义窗体宽高"}
                titleID={"window-2"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  padding: 20px 20px 20px;\n  text-align: center;\n\`;\nconst Inner = styled.div\`\n  width: 300px;\n  height: 300px;\n  margin: 10px auto 0px;\n  background: #f2f2f2;\n\`;\nexport default class SizeWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>点击打开窗体组件</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          width={400}\n          height={500}\n        >\n          <Inner>\n            <Text>我是内容</Text>\n            <Text>窗体大小，可以自定义设置</Text>\n          </Inner>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以通过width、height属性设置宽高"}
                demo={<SizeWindow />}
              ></Demo>
              <Demo
                title={"自定义窗体位置"}
                titleID={"window-3"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  padding: 20px 20px 20px;\n  text-align: center;\n  width:200px;\n\`;\nexport default class PositionWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>点击打开窗体组件</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          x={300}\n          y={200}\n        >\n          <Text>我的初始位置是</Text>\n          <Text>距离左上角</Text>\n          <Text>水平300 垂直200</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以通过x、y属性设置初始化窗体位置"}
                demo={<PositionWindow />}
              ></Demo>
              <Demo
                title={"窗体居中"}
                titleID={"window-4"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  padding: 20px 20px 20px;\n  text-align: center;\n  width: 200px;\n\`;\nconst Item = styled.span\`\n  display: inline-block;\n  margin-right: 20px;\n\`;\nexport default class MiddleWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      levelVisible: false,\n      verticalVisible: false,\n      middleVisible: false\n    };\n  }\n  onClick = key => () => {\n    this.setState({ [key]: true });\n  };\n  onClose = key => () => {\n    this.setState({ [key]: false });\n  };\n  render() {\n    const { levelVisible, verticalVisible, middleVisible } = this.state;\n    return (\n      <Fragment>\n        <Item>\n          <Button onClick={this.onClick(\"levelVisible\")}>水平居中</Button>\n        </Item>\n        <Item>\n          <Button onClick={this.onClick(\"verticalVisible\")}>垂直居中</Button>\n        </Item>\n        <Item>\n          <Button onClick={this.onClick(\"middleVisible\")}>居中</Button>\n        </Item>\n        <Window\n          visible={levelVisible}\n          onClose={this.onClose(\"levelVisible\")}\n          middle\n          y={200}\n        >\n          <Text>水平居中显示</Text>\n          <Text> 垂直200</Text>\n        </Window>\n        <Window\n          visible={verticalVisible}\n          onClose={this.onClose(\"verticalVisible\")}\n          middle\n          x={200}\n        >\n          <Text>垂直居中显示</Text>\n          <Text>水平 200</Text>\n        </Window>\n        <Window\n          visible={middleVisible}\n          onClose={this.onClose(\"middleVisible\")}\n          middle\n        >\n          <Text>居中显示</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "可以通过middle属性设置初始化窗体位置居中显示，同时不影响x，y的设置"
                }
                demo={<MiddleWindow />}
              ></Demo>
              <Demo
                title={"开启遮罩"}
                titleID={"window-5"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  text-align: center;\n  width: 200px;\n  height: 200px;\n  line-height: 200px;\n\`;\n\nexport default class MaskWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>带有遮罩的窗体</Button>\n        <Window visible={visible} onClose={this.onClose} middle mask>\n          <Text>带有遮罩的窗体</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以通过mask属性设置是否显示遮罩层"}
                demo={<MaskWindow />}
              ></Demo>
              <Demo
                title={"固钉窗体"}
                titleID={"window-6"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  //width: 200px;\n  line-height: 200px;\n  text-align: center;\n\`;\n\nexport default class FixedWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>打开窗体</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          middle\n          onFixed={() => {}}\n          width={500}\n          height={500}\n        >\n          <Text>点击头部区域按钮</Text>\n          <Text>可以实现固定在当前位置</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"双击头部最大化"}
                demo={<FixedWindow />}
              ></Demo>
              <Demo
                title={"双击放大"}
                titleID={"window-7"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  //width: 200px;\n  line-height: 200px;\n  text-align: center;\n\`;\n\nexport default class DoubleClickEnlargeWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>打开窗体</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          middle\n          canDoubleClickScale\n        >\n          <Text>双击头部最大化</Text>\n          <Text>再次双击，还原原来的大小和位置</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"双击头部最大化"}
                demo={<DoubleClickEnlargeWindow />}
              ></Demo>
              <Demo
                title={"窗体最小化"}
                titleID={"window-8"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  //width: 200px;\n  line-height: 200px;\n  text-align: center;\n\`;\n\nexport default class CanMinimizeWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ visible: true });\n  };\n  onClose = () => {\n    this.setState({ visible: false });\n  };\n  render() {\n    const { visible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>打开窗体</Button>\n        <Window\n          visible={visible}\n          onClose={this.onClose}\n          middle\n          canMinimize\n          width={500}\n          height={500}\n        >\n          <Text>窗体最小化点击头部最小化图标</Text>\n          <Text>可实现窗体最小化</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"窗体最小化"}
                demo={<CanMinimizeWindow />}
              ></Demo>
              <Demo
                title={"锁定窗体"}
                titleID={"window-9"}
                code={
                  <code>{`import React, { Component, Fragment } from \"react\";\nimport { Window, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst Text = styled.p\`\n  width: 200px;\n  line-height: 200px;\n  text-align: center;\n\`;\n\nexport default class LockWindow extends Component {\n  constructor() {\n    super();\n    this.state = {\n      leftVisible: false,\n      rightVisible: false\n    };\n  }\n  onClick = () => {\n    this.setState({ leftVisible: true, rightVisible: true });\n  };\n  onClose = key => () => {\n    this.setState({ [key]: false });\n  };\n  render() {\n    const { leftVisible, rightVisible } = this.state;\n    return (\n      <Fragment>\n        <Button onClick={this.onClick}>打开窗体</Button>\n        <Window\n          visible={leftVisible}\n          onClose={this.onClose(\"leftVisible\")}\n          width={500}\n          height={800}\n          lockingWay={\"drag\"}\n          defaultIsLock\n          lockDirection={\"left\"}\n          lockTop={100}\n          lockBottom={100}\n        >\n          <Text>左侧窗体</Text>\n          <Text>可以拖拽</Text>\n        </Window>\n        <Window\n          visible={rightVisible}\n          onClose={this.onClose(\"rightVisible\")}\n          width={500}\n          height={800}\n          lockingWay={\"drag\"}\n          isLock\n          lockDirection={\"right\"}\n          lockTop={100}\n          lockBottom={100}\n        >\n          <Text>右侧窗体</Text>\n          <Text>始终锁定</Text>\n        </Window>\n      </Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"锁定窗体在浏览器的两侧，可以选择初始化锁定或始终锁定"}
                demo={<LockWindow />}
              ></Demo>
              <EditTables dataSource={WINDOW} />
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
                <Link title={"基本"} href={"#window-0"} />
                <Link title={"拉伸缩放"} href={"#window-1"} />
                <Link title={"自定义窗体宽高"} href={"#window-2"} />
                <Link title={"自定义窗体位置"} href={"#window-3"} />
                <Link title={"窗体居中"} href={"#window-4"} />
                <Link title={"开启遮罩"} href={"#window-5"} />
                <Link title={"固钉窗体"} href={"#window-6"} />
                <Link title={"双击放大"} href={"#window-7"} />
                <Link title={"窗体最小化"} href={"#window-8"} />
                <Link title={"锁定窗体"} href={"#window-9"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
