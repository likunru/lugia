import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import GRID from "@lugia/lugia-web/dist/grid/lugia.grid.zh-CN.json";
import COL from "@lugia/lugia-web/dist/grid/lugia.col.zh-CN.json";
import ROW from "@lugia/lugia-web/dist/grid/lugia.row.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const OffsetDemo = require("./OffsetDemo").default;
const OrderDemo = require("./OrderDemo").default;
const FlexJustifyDemo = require("./FlexJustifyDemo").default;
const FlexAlignDemo = require("./FlexAlignDemo").default;
const FlexOrderDemo = require("./FlexOrderDemo").default;
const ResponsiveDemo = require("./ResponsiveDemo").default;
const GutterDemo = require("./GutterDemo").default;

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
              <Title title={"栅格"} subTitle={"Grid"} desc={"栅格"} />
              <Demo
                title={"基础栅格"}
                titleID={"grid-0"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport {Grid} from \'@lugia/lugia-web\';\nconst {Row, Col} = Grid;\n\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6}><OddItem>col-6</OddItem></Col>\n                    <Col span={6}><EvenItem>col-6</EvenItem></Col>\n                    <Col span={6}><OddItem>col-6</OddItem></Col>\n                    <Col span={6}><EvenItem>col-6</EvenItem></Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"最简单的用法"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"左右偏移"}
                titleID={"grid-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6} offset={6}>\n                      <OddItem>col-6 col-offset-6</OddItem>\n                    </Col>\n                    <Col span={6} offset={6}>\n                      <EvenItem>col-6 col-offset-6</EvenItem>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可设置列的左右偏移值"}
                demo={<OffsetDemo />}
              ></Demo>
              <Demo
                title={"栅格排序"}
                titleID={"grid-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={18} push={6}>\n                      <OddItem>col-18 col-push-6</OddItem>\n                    </Col>\n                    <Col span={6} pull={18}>\n                      <EvenItem>col-6 col-pull-18</EvenItem>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可通过设置 push pull 来排列 Col 的顺序"}
                demo={<OrderDemo />}
              ></Demo>
              <Demo
                title={"flex 水平布局"}
                titleID={"grid-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row type=\"flex\" justify=\"start\">\n                    <Col span={4}><OddItem>col-4</OddItem></Col>\n                    <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                    <Col span={4}><OddItem>col-4</OddItem></Col>\n                    <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                </Row>\n                <Row type=\"flex\" justify=\"center\">\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                </Row>\n                <Row type=\"flex\" justify=\"end\">\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                </Row>\n                <Row type=\"flex\" justify=\"spaceBetween\">\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                </Row>\n                <Row type=\"flex\" justify=\"spaceAround\">\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                  <Col span={4}><OddItem>col-4</OddItem></Col>\n                  <Col span={4}><EvenItem>col-4</EvenItem></Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可通过justify设置Col 水平排列顺序"}
                demo={<FlexJustifyDemo />}
              ></Demo>
              <Demo
                title={"flex 竖直对其"}
                titleID={"grid-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nconst {Row, Col} = Grid;\n\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n  height: 100px;\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n  height: 60px;\n\`;\nconst Title = styled.p\`\n  background: #fbf8f8;\n  padding:10px;\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Title>align: top</Title>\n                <Row type=\"flex\" justify=\"start\" align=\"top\">\n                    <Col span={4}>\n                      <OddItem>col-4 align-top</OddItem>\n                    </Col>\n                    <Col span={4}>\n                      <EvenItem>col-4 align-top</EvenItem>\n                    </Col>\n                    <Col span={4}>\n                      <OddItem>col-4 align-top</OddItem>\n                    </Col>\n                    <Col span={4}>\n                      <EvenItem>col-4 align-top</EvenItem>\n                    </Col>\n                </Row>\n                <Title>align: middle</Title>\n                <Row type=\"flex\" justify=\"center\" align=\"middle\">\n                    <Col span={4}>\n                        <OddItem>col-4 align-middle</OddItem>\n                    </Col>\n                    <Col span={4}>\n                        <EvenItem>col-4 align-middle</EvenItem>\n                    </Col>\n                    <Col span={4}>\n                        <OddItem>col-4 align-middle</OddItem>\n                    </Col>\n                    <Col span={4}>\n                        <EvenItem>col-4 align-middle</EvenItem>\n                    </Col>\n                </Row>\n                <Title>align: bottom</Title>\n                <Row type=\"flex\" justify=\"end\" align=\"bottom\">\n                    <Col span={4}>\n                        <OddItem>col-4 align-bottom</OddItem>\n                    </Col>\n                    <Col span={4}>\n                        <EvenItem>col-4 align-bottom</EvenItem>\n                    </Col>\n                    <Col span={4}>\n                        <OddItem>col-4 align-bottom</OddItem>\n                    </Col>\n                    <Col span={4}>\n                        <EvenItem>col-4 align-bottom</EvenItem>\n                    </Col>\n                </Row>\n\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可通过align设置Col 垂直对齐方式"}
                demo={<FlexAlignDemo />}
              ></Demo>
              <Demo
                title={"flex 排序"}
                titleID={"grid-5"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row type=\"flex\" justify=\"center\">\n                    <Col span={4} order={3}>\n                      <OddItem>col-4 order-3</OddItem>\n                    </Col>\n                    <Col span={4} order={2}>\n                      <EvenItem>col-4 order-2</EvenItem>\n                    </Col>\n                    <Col span={4} order={1}>\n                      <OddItem>col-4 order-1</OddItem>\n                    </Col>\n                    <Col span={4} order={4}>\n                      <EvenItem>col-4 order-4</EvenItem>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可通过order设置Col 的排序方式"}
                demo={<FlexOrderDemo />}
              ></Demo>
              <Demo
                title={"响应式布局"}
                titleID={"grid-6"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        <OddItem>col-responsive</OddItem>\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        <EvenItem>col-responsive</EvenItem>\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        <OddItem>col-responsive</OddItem>\n                    </Col>\n                    <Col span={6} xs={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }}>\n                        <EvenItem>col-responsive</EvenItem>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"可预设六个响应尺寸：xs sm md lg xl  xxl。"}
                demo={<ResponsiveDemo />}
              ></Demo>
              <Demo
                title={"栅格间隔"}
                titleID={"grid-7"}
                code={
                  <code>{`import React from \'react\';\nimport {Grid} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst {Row, Col} = Grid;\nconst Common = styled.div\`\n  text-align: center;\n  line-height: 50px;\n\`;\nconst OddItem = styled(Common)\`\n  background-color: rgba(77, 99, 255, 0.5);\n\`;\nconst EvenItem = styled(Common)\`\n  background-color: rgba(128, 129, 255);\n\`;\n\nexport default class GridDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Row gutter={24}>\n                    <Col span={6}>\n                        <OddItem>col-6</OddItem>\n                    </Col>\n                    <Col span={6}>\n                        <EvenItem>col-6</EvenItem>\n                    </Col>\n                    <Col span={6}>\n                        <OddItem>col-6</OddItem>\n                    </Col>\n                    <Col span={6}>\n                        <EvenItem>col-6</EvenItem>\n                    </Col>\n                </Row>\n                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}>\n                    <Col span={6}>\n                        <OddItem>col-6</OddItem>\n                    </Col>\n                    <Col span={6}>\n                        <EvenItem>col-6</EvenItem>\n                    </Col>\n                    <Col span={6}>\n                        <OddItem>col-6</OddItem>\n                    </Col>\n                    <Col span={6}>\n                        <EvenItem>col-6</EvenItem>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"Col 的水平间隔，可预设响应式间隔"}
                demo={<GutterDemo />}
              ></Demo>
              <EditTables dataSource={GRID} />
              <EditTables dataSource={COL} />
              <EditTables dataSource={ROW} />
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
                <Link title={"基础栅格"} href={"#grid-0"} />
                <Link title={"左右偏移"} href={"#grid-1"} />
                <Link title={"栅格排序"} href={"#grid-2"} />
                <Link title={"flex 水平布局"} href={"#grid-3"} />
                <Link title={"flex 竖直对其"} href={"#grid-4"} />
                <Link title={"flex 排序"} href={"#grid-5"} />
                <Link title={"响应式布局"} href={"#grid-6"} />
                <Link title={"栅格间隔"} href={"#grid-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
