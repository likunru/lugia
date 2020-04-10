import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import CAROUSEL from "@lugia/lugia-web/dist/carousel/lugia.carousel.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultCarousel = require("./DefaultCarousel").default;
const DefaultClickCarousel = require("./DefaultClickCarousel").default;
const VerticalIndicatorCarousel = require("./VerticalIndicatorCarousel")
  .default;
const OutsideIndicatorCarousel = require("./OutsideIndicatorCarousel").default;
const FadeCarousel = require("./FadeCarousel").default;
const LimitCarousel = require("./LimitCarousel").default;

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
                title={"走马灯"}
                subTitle={"Carousel"}
                desc={"常用于展示一组图片或卡片轮播"}
              />
              <Demo
                title={"基本用法"}
                titleID={"carousel-0"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel } from \'@lugia/lugia-web\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nexport default class DefaultCarousel extends React.Component<any, any> {\n  render() {\n    return <Carousel>{this.getItemWrap()}</Carousel>;\n  }\n\n  getItemWrap = () => {\n    const len = 4;\n    const items = [];\n    for (let i = 0; i < len; i++) {\n      const index = i + 1;\n      items.push(<ItemWrap i={i}>{\'Banner0\' + index}</ItemWrap>);\n    }\n    return items;\n  };\n}\n`}</code>
                }
                desc={"默认hover指示器触发切换"}
                demo={<DefaultCarousel />}
              ></Demo>
              <Demo
                title={"基本用法"}
                titleID={"carousel-1"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel } from \'@lugia/lugia-web\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nexport default class DefaultCarousel extends React.Component<any, any> {\n  render() {\n    return <Carousel action={\'click\'}>{this.getItemWrap()}</Carousel>;\n  }\n\n  getItemWrap = () => {\n    const len = 4;\n    const items = [];\n    for (let i = 0; i < len; i++) {\n      const index = i + 1;\n      items.push(<ItemWrap i={i}>{\'Banner0\' + index}</ItemWrap>);\n    }\n    return items;\n  };\n}\n`}</code>
                }
                desc={"click指示器触发切换"}
                demo={<DefaultClickCarousel />}
              ></Demo>
              <Demo
                title={"指示器垂直显示"}
                titleID={"carousel-2"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel } from \'@lugia/lugia-web\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nexport default class DefaultCarousel extends React.Component<any, any> {\n  render() {\n    return (\n      <Carousel indicatorType={\'vertical\'} switchType={\'vertical\'}>\n        {this.getItemWrap()}\n      </Carousel>\n    );\n  }\n\n  getItemWrap = () => {\n    const len = 4;\n    const items = [];\n    for (let i = 0; i < len; i++) {\n      const index = i + 1;\n      items.push(<ItemWrap i={i}>{\'Banner0\' + index}</ItemWrap>);\n    }\n    return items;\n  };\n}\n`}</code>
                }
                desc={
                  "设置indicator：vertical指示器垂直显示,设置switchType：vertical切换方式垂直切换"
                }
                demo={<VerticalIndicatorCarousel />}
              ></Demo>
              <Demo
                title={"指示器在外部显示"}
                titleID={"carousel-3"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel } from \'@lugia/lugia-web\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nexport default class DefaultCarousel extends React.Component<any, any> {\n  render() {\n    return (\n      <Carousel indicatorType={\'outside\'} animationTime={1000}>\n        {this.getItemWrap()}\n      </Carousel>\n    );\n  }\n\n  getItemWrap = () => {\n    const len = 4;\n    const items = [];\n    for (let i = 0; i < len; i++) {\n      const index = i + 1;\n      items.push(<ItemWrap i={i}>{\'Banner0\' + index}</ItemWrap>);\n    }\n    return items;\n  };\n}\n`}</code>
                }
                desc={"设置indicator：outside指示器在外部显示"}
                demo={<OutsideIndicatorCarousel />}
              ></Demo>
              <Demo
                title={"渐显切换"}
                titleID={"carousel-4"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel } from \'@lugia/lugia-web\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nexport default class DefaultCarousel extends React.Component<any, any> {\n  render() {\n    return (\n      <Carousel switchType={\'fade\'} animationTime={1000}>\n        {this.getItemWrap()}\n      </Carousel>\n    );\n  }\n\n  getItemWrap = () => {\n    const len = 4;\n    const items = [];\n    for (let i = 0; i < len; i++) {\n      const index = i + 1;\n      items.push(<ItemWrap i={i}>{\'Banner0\' + index}</ItemWrap>);\n    }\n    return items;\n  };\n}\n`}</code>
                }
                desc={
                  "设置switchType：fade切换方式渐显,设置animationTime：1000设置动画执行时间为1000毫秒"
                }
                demo={<FadeCarousel />}
              ></Demo>
              <Demo
                title={"受限的走马灯"}
                titleID={"carousel-5"}
                code={
                  <code>{`import React from \'react\';\nimport styled from \'styled-components\';\nimport { Carousel, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst getBackground = (props: Object) => {\n  const { i } = props;\n  const isEven = i % 2 === 0;\n  return \`background: \${isEven ? \'#000033\' : \'#161651\'}\`;\n};\n\nconst ItemWrap = styled.div\`\n  width: 100%;\n  height: 100%;\n  line-height: 200px;\n  text-align: center;\n  \${getBackground};\n  color: #ccc;\n\`;\n\nconst Img = styled.img\`\n  width: 100%;\n  height: auto;\n  display: inline-block;\n  vertical-align: top;\n\`;\n\nconst data = [\n  \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751358232&di=f7fd14870cb6028086f7bb55d479df53&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F586b090b7f42b.jpg\',\n  \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751053813&di=7374346483180a4f42ea53227f866fcb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-19%2F59e8072871e49.jpg\',\n  \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751112606&di=d22242ff68a6a20996cc4ac375d04776&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-07-20%2F5b517965781e5.jpg\',\n  \'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543751600594&di=be6d42fffdc5d235f4d2c83455885936&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201601%2F24%2F175433rossj7cn74vksn4p.jpg\'\n];\n\nconst getImgWrap = () => {\n  const len = data.length;\n  const items = [];\n  for (let i = 0; i < len; i++) {\n    items.push(\n      <ItemWrap i={i}>\n        <Img src={data[i]} />\n      </ItemWrap>\n    );\n  }\n  return items;\n};\n\nexport default class CarouselLimtDemo extends React.Component<any, any> {\n  constructor() {\n    super();\n    this.state = { start: 2 };\n  }\n\n  onChange = (param: Object) => {\n    const { newValue } = param;\n    this.setState({ start: newValue });\n  };\n\n  render() {\n    const view = { [Widget.Carousel]: { width: 500, height: 250 } };\n    return (\n      <Theme config={view}>\n        <Carousel\n          animationTime={500}\n          delay={3000}\n          start={this.state.start}\n          onChange={this.onChange}\n        >\n          {getImgWrap()}\n        </Carousel>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"通过传入start来控制走马灯的切换,start是索引值"}
                demo={<LimitCarousel />}
              ></Demo>
              <EditTables dataSource={CAROUSEL} />
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
                <Link title={"基本用法"} href={"#carousel-0"} />
                <Link title={"基本用法"} href={"#carousel-1"} />
                <Link title={"指示器垂直显示"} href={"#carousel-2"} />
                <Link title={"指示器在外部显示"} href={"#carousel-3"} />
                <Link title={"渐显切换"} href={"#carousel-4"} />
                <Link title={"受限的走马灯"} href={"#carousel-5"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
