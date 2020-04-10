import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import LOADING from "@lugia/lugia-web/dist/loading/lugia.loading.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseLoad = require("./BaseLoad").default;
const ScaleLoad = require("./ScaleLoad").default;
const SizeLoad = require("./SizeLoad").default;
const TipLoad = require("./TipLoad").default;
const TimeLoad = require("./TimeLoad").default;
const AddComponent = require("./AddComponent").default;
const DelayLoad = require("./DelayLoad").default;
const IconLoad = require("./IconLoad").default;

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
                title={"加载中"}
                subTitle={"Loading"}
                desc={"用于页面和区块的加载中状态"}
              />
              <Demo
                title={"基本"}
                titleID={"loading-0"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nexport default class BaseLoad extends React.Component {\n  render() {\n    return <Loading/>;\n  }\n}\n`}</code>
                }
                desc={"加载中基本用法"}
                demo={<BaseLoad />}
              ></Demo>
              <Demo
                title={"放大"}
                titleID={"loading-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nexport default class ScaleLoad extends React.Component {\n  render() {\n    return <Loading scale />;\n  }\n}\n`}</code>
                }
                desc={"scale boolean,用来设置放大效果"}
                demo={<ScaleLoad />}
              ></Demo>
              <Demo
                title={"三种尺寸"}
                titleID={"loading-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.span\`\n  display:inline-block;\n  padding:0 10px 10px 0;\n\`;\nexport default class BaseLoad extends React.Component {\n  render() {\n    return(\n      <React.Fragment>\n        <DemoItem><Loading size={\'small\'}/></DemoItem>\n        <DemoItem><Loading/></DemoItem>\n        <DemoItem><Loading size={\'large\'}/></DemoItem>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "size属性可配置Loading大小,small | default | large,默认default"
                }
                demo={<SizeLoad />}
              ></Demo>
              <Demo
                title={"自定义文本信息"}
                titleID={"loading-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.span\`\n  display:inline-block;\n  padding:0 10px 10px 0;\n\`;\nexport default class BaseLoad extends React.Component {\n  render() {\n    return(\n      <Loading tip={\'加载中...\'}/>\n    );\n  }\n}\n`}</code>
                }
                desc={"使用tip属性可以自定义Loading文本信息"}
                demo={<TipLoad />}
              ></Demo>
              <Demo
                title={"加载时间"}
                titleID={"loading-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.span\`\n  display:inline-block;\n  padding:0 10px 10px 0;\n\`;\nexport default class BaseLoad extends React.Component {\n  render() {\n    return(\n      <Loading time={ 2 }/>\n    );\n  }\n}\n`}</code>
                }
                desc={"time:number属性可以更改加载的快慢，单位:秒"}
                demo={<TimeLoad />}
              ></Demo>
              <Demo
                title={"卡片中加载"}
                titleID={"loading-5"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading,Alert } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  border:1px solide #ddd\n\`;\nexport default class BaseLoad extends React.Component {\n  render() {\n    return(\n      <Loading tip={\'正在加载中.....\'} size={\'small\'} loading>\n          <Alert\n            message=\"Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n          为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n          为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n          我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n          有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n          为前端开发人员赋能，让用户体验 知性。\"\n          />\n        </Loading>\n    );\n  }\n}\n`}</code>
                }
                desc={"将内容内嵌到Loading组件中"}
                demo={<AddComponent />}
              ></Demo>
              <Demo
                title={"卡片中延迟加载"}
                titleID={"loading-6"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading,Alert,Switch } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.span\`\n  display:inline-block;\n  padding:0 10px 10px 0;\n\`;\nexport default class BaseLoad extends React.Component {\n  constructor(){\n    super();\n    this.state={\n      loading:false\n    };\n  }\n  changeState=obj => {\n    const {newValue}=obj;\n    this.setState({loading:newValue});\n  }\n  render() {\n    return(\n      <React.Fragment>\n        <Loading size={\'small\'} delay={0.3} loading={this.state.loading}>\n            <Alert\n              message=\"Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n            为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n            为前端开发人员赋能，让用户体验 知性。Lugia 的诞生就是要树立金融行业大前端解决方案的标杆。\n            我们提供的不仅仅是设计规范、开源组件库、可视化开发套件......而是将设计、开发、工程，\n            有机高效的演变为一种适应多端、多层的前端设计语言。Lugia 的目标是降低开发成本，提升开发质量，\n            为前端开发人员赋能，让用户体验 知性。\"\n            />\n        </Loading>\n        <Switch onChange={this.changeState}/>\n    </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"使用delay:number 单位秒, 配合loading"}
                demo={<DelayLoad />}
              ></Demo>
              <Demo
                title={"自定义图标"}
                titleID={"loading-7"}
                code={
                  <code>{`import React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.span\`\n  display:inline-block;\n  padding:0 10px 10px 0;\n\`;\nexport default class BaseLoad extends React.Component {\n  render() {\n    return(\n      <React.Fragment>\n        <Loading iconClass={\'lugia-icon-financial_loading_o\'}/>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"使用iconClass属性可以自定义Loading的图标"}
                demo={<IconLoad />}
              ></Demo>
              <EditTables dataSource={LOADING} />
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
                <Link title={"基本"} href={"#loading-0"} />
                <Link title={"放大"} href={"#loading-1"} />
                <Link title={"三种尺寸"} href={"#loading-2"} />
                <Link title={"自定义文本信息"} href={"#loading-3"} />
                <Link title={"加载时间"} href={"#loading-4"} />
                <Link title={"卡片中加载"} href={"#loading-5"} />
                <Link title={"卡片中延迟加载"} href={"#loading-6"} />
                <Link title={"自定义图标"} href={"#loading-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
