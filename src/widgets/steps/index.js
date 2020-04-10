import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import STEPS from "@lugia/lugia-web/dist/steps/lugia.steps.zh-CN.json";
import STEP from "@lugia/lugia-web/dist/steps/lugia.step.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseSteps = require("./BaseSteps").default;
const SizeSteps = require("./SizeSteps").default;
const TypeSteps = require("./TypeSteps").default;
const OrientationSteps = require("./OrientationSteps").default;
const StepsDemo = require("./StepsDemo").default;

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
                title={"步骤条"}
                subTitle={"Steps"}
                desc={"引导用户按照流程完成任务的导航条"}
              />
              <Demo
                title={"基本用法"}
                titleID={"steps-0"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { Steps } from \"@lugia/lugia-web\";\nconst Step = Steps.Step;\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin-bottom: 50px;\n\`;\nexport default class BaseSteps extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Wrapper>\n          <Steps orientation=\"horizontal\" size={\"normal\"}>\n            <Step\n              title=\"step1\"\n              description={\"description1\"}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"step2\"\n              description={\"description2\"}\n              stepStatus=\"process\"\n            />\n            <Step\n              title=\"step3\"\n              description={\"description3\"}\n              stepStatus=\"next\"\n            />\n          </Steps>\n        </Wrapper>\n        <br />\n        <Wrapper>\n          <Steps orientation=\"horizontal\" size={\"normal\"} desAlign={\"center\"}>\n            <Step\n              title=\"step1\"\n              description={\"description1\"}\n              stepStatus=\"finish\"\n            />\n            <Step\n              title=\"step2\"\n              description={\"description2\"}\n              stepStatus=\"process\"\n            />\n            <Step\n              title=\"step3\"\n              description={\"description3\"}\n              stepStatus=\"next\"\n            />\n          </Steps>\n        </Wrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"步骤条基本用法,有五种状态"}
                demo={<BaseSteps />}
              ></Demo>
              <Demo
                title={"尺寸"}
                titleID={"steps-1"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { Steps } from \"@lugia/lugia-web\";\nconst Step = Steps.Step;\nconst Wrapper = styled.div\`\n  margin-bottom: 50px;\n\`;\nexport default class SizeSteps extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Wrapper>\n          <Steps stepType=\"simple\" size=\"mini\">\n            <Step title=\"step1\" stepStatus=\"finish\" content=\"content1\" />\n            <Step title=\"step2\" stepStatus=\"process\" content=\"content2\" />\n            <Step title=\"step3\" stepStatus=\"next\" content=\"content3\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <Steps stepType=\"simple\" size=\"normal\">\n            <Step title=\"step1\" stepStatus=\"finish\" content=\"content1\" />\n            <Step title=\"step2\" stepStatus=\"process\" content=\"content2\" />\n            <Step title=\"step3\" stepStatus=\"next\" content=\"content3\" />\n          </Steps>\n        </Wrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"可配置两种尺寸的步骤条"}
                demo={<SizeSteps />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"steps-2"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { Steps } from \"@lugia/lugia-web\";\nconst Step = Steps.Step;\nconst Wrapper = styled.div\`\n  text-align: left;\n  margin: 50px;\n\`;\nexport default class TypeSteps extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Wrapper>\n          <Steps orientation=\"horizontal\" size={\"normal\"} desAlign={\"center\"}>\n            <Step title=\"step1\" stepStatus=\"finish\" />\n            <Step title=\"step2\" stepStatus=\"process\" />\n            <Step title=\"step3\" stepStatus=\"next\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <Steps orientation=\"horizontal\" stepType={\"flat\"} size={\"normal\"}>\n            <Step title=\"step1\" stepStatus=\"finish\" />\n            <Step title=\"step2\" stepStatus=\"process\" />\n            <Step title=\"step3\" stepStatus=\"next\" />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <Steps orientation=\"horizontal\" stepType={\"icon\"} size={\"mini\"}>\n            <Step\n              icon={\"lugia-icon-financial_cloud\"}\n              title=\"step1\"\n              stepStatus=\"finish\"\n            />\n            <Step\n              icon={\"lugia-icon-financial_cloud\"}\n              title=\"step2\"\n              stepStatus=\"process\"\n            />\n            <Step\n              icon={\"lugia-icon-financial_cloud\"}\n              title=\"step3\"\n              stepStatus=\"next\"\n            />\n          </Steps>\n        </Wrapper>\n        <Wrapper>\n          <Steps orientation=\"horizontal\" stepType={\"dot\"}>\n            <Step title=\"step1\" stepStatus=\"finish\" />\n            <Step title=\"step2\" stepStatus=\"process\" isDashed={true} />\n            <Step title=\"step3\" stepStatus=\"next\" isDashed={true} />\n          </Steps>\n        </Wrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"步骤条多种风格"}
                demo={<TypeSteps />}
              ></Demo>
              <Demo
                title={"方向"}
                titleID={"steps-3"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { Steps } from \"@lugia/lugia-web\";\nconst Step = Steps.Step;\nconst VWrapper = styled.div\`\n  margin-left: 150px;\n  display: inline-block;\n\`;\nexport default class OrientationSteps extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <VWrapper>\n          <Steps orientation=\"vertical\" stepType=\"simple\" size=\"normal\">\n            <Step title=\"step1\" stepStatus=\"finish\" content=\"content1\" />\n            <Step title=\"step2\" stepStatus=\"process\" content=\"content2\" />\n            <Step title=\"step3\" stepStatus=\"next\" content=\"content3\" />\n          </Steps>\n        </VWrapper>\n        <VWrapper>\n          <Steps orientation=\"vertical\" stepType=\"flat\" size=\"normal\">\n            <Step title=\"step1\" stepStatus=\"finish\" content=\"content1\" />\n            <Step title=\"step2\" stepStatus=\"process\" content=\"content2\" />\n            <Step title=\"step3\" stepStatus=\"next\" content=\"content3\" />\n          </Steps>\n        </VWrapper>\n        <VWrapper>\n          <Steps orientation=\"vertical\" stepType={\"dot\"}>\n            <Step title=\"step1\" stepStatus=\"finish\" />\n            <Step title=\"step2\" stepStatus=\"process\" isDashed={true} />\n            <Step title=\"step3\" stepStatus=\"next\" isDashed={true} />\n          </Steps>\n        </VWrapper>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"步骤条方向,垂直,水平"}
                demo={<OrientationSteps />}
              ></Demo>
              <Demo
                title={"按步骤显示"}
                titleID={"steps-4"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport { Steps, Button, Theme } from \"@lugia/lugia-web\";\nconst Step = Steps.Step;\n\nconst steps = [\n  {\n    title: \"First Step\",\n    description: \"First Step Content\"\n  },\n  {\n    title: \"Second Step\",\n    description: \"Second  Step Content\"\n  },\n  {\n    title: \"Last Step\",\n    description: \"Third  Step Content\"\n  }\n];\nconst StepDescription = styled.div\`\n  width: 400px;\n  margin-top: 40px;\n  border: 1px solid #ccc;\n  height: 100px;\n  text-align: center;\n  padding-top: 20px;\n\`;\nconst Warpper = styled.div\`\n  margin-left: 50px;\n\`;\n\nexport default class StepsDemo extends React.Component<Object, Object> {\n  constructor(props) {\n    super(props);\n    this.state = {\n      currentStepNumber: 1\n    };\n  }\n  next() {\n    const currentStepNumber =\n      this.state.currentStepNumber > 3 ? 1 : this.state.currentStepNumber + 1;\n    this.setState({ currentStepNumber });\n  }\n  pre() {\n    const currentStepNumber =\n      this.state.currentStepNumber <= 1 ? 3 : this.state.currentStepNumber - 1;\n    this.setState({ currentStepNumber });\n  }\n  render() {\n    const { currentStepNumber } = this.state;\n    const matchCurrentNumber = currentStepNumber > 0 && currentStepNumber <= 3;\n    const theCurrentStepNumber = matchCurrentNumber ? currentStepNumber : 1;\n    const description = matchCurrentNumber\n      ? steps[theCurrentStepNumber - 1].description\n      : \"\";\n    const view = {\n      [Widget.Steps]: {\n        StepsOutContainer: {\n          normal: {\n            width: 400\n          }\n        }\n      },\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            width: 80,\n            margin: {\n              top: 20\n            }\n          }\n        }\n      }\n    };\n    const button = {\n      [Widget.Button]: {\n        Container: {\n          normal: {\n            margin: {\n              left: 6\n            }\n          }\n        }\n      }\n    };\n    return (\n      <Warpper>\n        <Theme config={view}>\n          <Steps\n            currentStepNumber={currentStepNumber}\n            stepType={\"simple\"}\n            desAlign={\'center\'}\n            size={\"normal\"}\n          >\n            {steps.map((item, i) => <Step title={item.title} />)}\n          </Steps>\n          <StepDescription>{description}</StepDescription>\n          <Button type=\"primary\" onClick={() => this.pre()}>\n            上一步\n          </Button>\n          <Button theme={button} type=\"primary\" onClick={() => this.next()}>\n            下一步\n          </Button>\n        </Theme>\n      </Warpper>\n    );\n  }\n}\n`}</code>
                }
                desc={"逐步进行步骤条"}
                demo={<StepsDemo />}
              ></Demo>
              <EditTables dataSource={STEPS} />
              <EditTables dataSource={STEP} />
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
                <Link title={"基本用法"} href={"#steps-0"} />
                <Link title={"尺寸"} href={"#steps-1"} />
                <Link title={"风格"} href={"#steps-2"} />
                <Link title={"方向"} href={"#steps-3"} />
                <Link title={"按步骤显示"} href={"#steps-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
