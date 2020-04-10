import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import SLIDER from "@lugia/lugia-web/dist/slider/lugia.slider.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseSlider = require("./BaseSlider").default;
const InputSlider = require("./InputSlider").default;
const IconSlider = require("./IconSlider").default;
const TipsSlider = require("./TipsSlider").default;
const ValueSlider = require("./ValueSlider").default;
const MarksSlider = require("./MarksSlider").default;
const DisabledSlider = require("./DisabledSlider").default;
const VerticalSlider = require("./VerticalSlider").default;

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
                title={"滑动输入条"}
                subTitle={"Slider"}
                desc={"滑动型输入器，展示当前值和可选范围"}
              />
              <Demo
                title={"基本"}
                titleID={"slider-0"}
                code={
                  <code>{`import React from \'react\';\nimport { Slider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 20px 20px 0;\n\`;\nexport default class BaseSlider extends React.Component {\n  onchange = v => {\n  };\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Slider defaultValue={5} tips/>\n        </DemoItem>\n          <Slider defaultValue={[5,15]} tips/>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"滑动输入条基本用法"}
                demo={<BaseSlider />}
              ></Demo>
              <Demo
                title={"带输入框的Slider"}
                titleID={"slider-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Slider, NumberInput, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\nexport const DemoItem = styled.div\`\n  display: inline-block;\n  padding: 0 20px 20px 0;\n\`;\nexport default class InputSlider extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      value: 5,\n      maxValue: 30,\n      minValue: 0\n    };\n  }\n  onChange = params => {\n    const { newValue } = params;\n    this.setState({ value: newValue });\n  };\n  render() {\n    const { value, maxValue, minValue } = this.state;\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Theme\n            config={{\n              [Widget.Slider]: { Container: { normal: { width: 300 } } }\n            }}\n          >\n            <Slider\n              value={value}\n              maxValue={maxValue}\n              minValue={minValue}\n              onChange={this.onChange}\n            />\n          </Theme>\n        </DemoItem>\n        <NumberInput\n          value={value}\n          max={maxValue}\n          min={minValue}\n          onChange={this.onChange}\n        />\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"配合输入框使用"}
                demo={<InputSlider />}
              ></Demo>
              <Demo
                title={"带有Icon风格的Slider"}
                titleID={"slider-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Slider } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nexport const DemoItem = styled.div\`\n  padding: 0 30px 0;\n\`;\nexport default class IconSlider extends React.Component {\n  render() {\n    return (\n      <Slider\n        defaultValue={5}\n        tips\n        icons={[\n          { name: \"lugia-icon-financial_sad_o\" },\n          { name: \"lugia-icon-financial_smile_o\" }\n        ]}\n      />\n    );\n  }\n}\n`}</code>
                }
                desc={"可以配置图标"}
                demo={<IconSlider />}
              ></Demo>
              <Demo
                title={"提示框"}
                titleID={"slider-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Slider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 20px 20px 0;\n\`;\nexport default class BaseSlider extends React.Component {\n  constructor(){\n    super();\n    this.state={\n      tipsValue:\'5%\'\n    };\n  }\n  onchange = obj => {\n    const {newValue}=obj;\n    this.setState({tipsValue:\`\${newValue}%\`});\n  };\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Slider defaultValue={5} tips={this.state.tipsValue} onChange={this.onchange}/>\n        </DemoItem>\n          <Slider defaultValue={5}/>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"tips 属性决定提示框是否显示，也可以自定义内容"}
                demo={<TipsSlider />}
              ></Demo>
              <Demo
                title={"受控"}
                titleID={"slider-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Slider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 20px 20px 0;\n\`;\nexport default class BaseSlider extends React.Component {\n  constructor(){\n    super();\n    this.state={\n      value:5,\n      rangeValue:[5,15]\n    };\n  }\n  onchange = obj => {\n    const {newValue}=obj;\n    this.setState({value:newValue});\n  };\n  onchangeRange=obj => {\n    const {newValue}=obj;\n    this.setState({rangeValue:[...newValue]});\n  }\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Slider value={this.state.value} onChange={this.onchange}/>\n        </DemoItem>\n          <Slider value={this.state.rangeValue} onChange={this.onchangeRange}/>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"需要value和onChange配合使用"}
                demo={<ValueSlider />}
              ></Demo>
              <Demo
                title={"离散滑块"}
                titleID={"slider-5"}
                code={
                  <code>{`import React from \'react\';\nimport { Slider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 20px 20px 0;\n\`;\nexport default class MarksSlider extends React.Component {\n  onchange = v => {\n  };\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n            <Slider\n              defaultValue={30}\n              tips\n              marks={{\n                0: \'0℃\',\n                30: \'30℃\',\n                70: \'70℃\',\n                100: {\n                  text: \'100℃\',\n                  style: {\n                    color: \'red\'\n                  }\n                }\n              }}\n            />\n          </DemoItem><br/>\n          <DemoItem>\n            <Slider\n              defaultValue={30}\n              tips\n              marks={{\n                0: {\n                  text: \'0℃\'\n                },\n                30: {\n                  text: \'30℃\'\n                },\n                70: {\n                  text: \'70℃\'\n                },\n                100: {\n                  text: \'100℃\',\n                  style: {\n                    color: \'red\'\n                  }\n                }\n              }}\n            />\n          </DemoItem><br/>\n          <DemoItem>\n            <Slider\n              minValue={0}\n              defaultValue={30}\n              tips\n              marks={{\n                30: {\n                  text: \'30℃\'\n                },\n                70: {\n                  text: \'70℃\'\n                },\n                100: {\n                  text: \'100℃\',\n                  style: {\n                    color: \'red\'\n                  }\n                }\n              }}\n            />\n          </DemoItem>  \n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "使用marks属性实现滑块的分段展示,Slider的可选值为marks的标注值,如果Slider配有minValue | minValue 属性时,marks的取值则依据minValue和maxValue,也可为标注值添加样式"
                }
                demo={<MarksSlider />}
              ></Demo>
              <Demo
                title={"禁用"}
                titleID={"slider-6"}
                code={
                  <code>{`import React from \"react\";\nimport { Slider, Button } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nexport const DemoItem = styled.div\`\n  padding: 20px 0 0 8px;\n\`;\nexport default class DisabledSlider extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      disabled: false\n    };\n  }\n  toggle = () => {\n    this.setState({\n      disabled: !this.state.disabled\n    });\n  };\n  render() {\n    return (\n      <div>\n        <Slider defaultValue={5} tips disabled={this.state.disabled} />\n        <DemoItem>\n          <Button type=\"primary\" onClick={this.toggle}>\n            点击切换\n          </Button>\n        </DemoItem>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"点击切换禁用状态"}
                demo={<DisabledSlider />}
              ></Demo>
              <Demo
                title={"垂直"}
                titleID={"slider-7"}
                code={
                  <code>{`import React from \"react\";\nimport { Slider, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\nexport const DemoList = styled.span\`\n  display: inline-block;\n  padding-right: 30px;\n\`;\nexport default class IconSlider extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Theme\n          config={{\n            [Widget.Slider]: { Container: { normal: { width: 300 } } }\n          }}\n        >\n          <DemoList>\n            <Slider defaultValue={10} vertical tips />\n          </DemoList>\n          <DemoList>\n            <Slider defaultValue={[10, 20]} vertical />\n          </DemoList>\n          <DemoList>\n            <Slider\n              defaultValue={30}\n              tips\n              vertical\n              marks={{\n                0: {\n                  text: \"0℃\"\n                },\n                30: {\n                  text: \"30℃\"\n                },\n                70: {\n                  text: \"70℃\"\n                },\n                100: {\n                  text: \"100℃\",\n                  style: {\n                    color: \"red\"\n                  }\n                }\n              }}\n            />\n          </DemoList>\n        </Theme>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以配置Slider垂直显示"}
                demo={<VerticalSlider />}
              ></Demo>
              <EditTables dataSource={SLIDER} />
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
                <Link title={"基本"} href={"#slider-0"} />
                <Link title={"带输入框的Slider"} href={"#slider-1"} />
                <Link title={"带有Icon风格的Slider"} href={"#slider-2"} />
                <Link title={"提示框"} href={"#slider-3"} />
                <Link title={"受控"} href={"#slider-4"} />
                <Link title={"离散滑块"} href={"#slider-5"} />
                <Link title={"禁用"} href={"#slider-6"} />
                <Link title={"垂直"} href={"#slider-7"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
