import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TAG from "@lugia/lugia-web/dist/tag/lugia.tag.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultTag = require("./DefaultTag").default;
const ClosableTag = require("./ClosableTag").default;
const OptionalTag = require("./OptionalTag").default;
const AddTag = require("./AddTag").default;

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
                title={"标签"}
                subTitle={"Tag"}
                desc={"标记和分类的标签"}
              />
              <Demo
                title={"基本用法"}
                titleID={"tag-0"}
                code={
                  <code>{`import Widget from \'@lugia/lugia-web/dist/consts/index\';\nimport { Theme, Tag } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport React from \'react\';\nconst TagWrap = styled.div\`\n  display: inline-block;\n  margin: 5px;\n\`;\n\nexport default class DefaultTag extends React.Component<any, any> {\n  render() {\n    return [\n      <div>\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#4d63ff\'\n              }\n            }}\n          >\n            <Tag>标签1</Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#e8e8e8\'\n              }\n            }}\n          >\n            <Tag type={\'primary\'}>标签2</Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Tag type={\'basic\'}>标签3</Tag>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#f22735\'\n              }\n            }}\n          >\n            <Tag type={\'presets\'}>标签4</Tag>\n          </Theme>\n        </TagWrap>\n      </div>,\n      <div>\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#4d63ff\'\n              }\n            }}\n          >\n            <Tag shape={\'round\'}>标签1</Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#e8e8e8\'\n              }\n            }}\n          >\n            <Tag type={\'primary\'} shape={\'round\'}>\n              标签2\n            </Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Tag type={\'basic\'} shape={\'round\'}>\n            标签3\n          </Tag>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#f22735\'\n              }\n            }}\n          >\n            <Tag type={\'presets\'} shape={\'round\'}>\n              标签4\n            </Tag>\n          </Theme>\n        </TagWrap>\n      </div>\n    ];\n  }\n\n  onClose = () => {\n    console.log(\'close\');\n  };\n}\n`}</code>
                }
                desc={
                  "最基本的标签,type: customs | primary | basic | presets,四种属性展示不同风格的标签。"
                }
                demo={<DefaultTag />}
              ></Demo>
              <Demo
                title={"可关闭的标签"}
                titleID={"tag-1"}
                code={
                  <code>{`import Widget from \'@lugia/lugia-web/dist/consts/index\';\nimport { Theme, Tag } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport React from \'react\';\nconst TagWrap = styled.div\`\n  display: inline-block;\n  margin: 5px;\n\`;\n\nexport default class ClosableTag extends React.Component<any, any> {\n  render() {\n    return [\n      <div>\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#4d63ff\'\n              }\n            }}\n          >\n            <Tag closable>标签1</Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#e8e8e8\'\n              }\n            }}\n          >\n            <Tag type={\'primary\'} closable>\n              标签2\n            </Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Tag type={\'basic\'} closable>\n            标签3\n          </Tag>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#f22735\'\n              }\n            }}\n          >\n            <Tag type={\'presets\'} closable>\n              标签4\n            </Tag>\n          </Theme>\n        </TagWrap>\n      </div>,\n      <div>\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#4d63ff\'\n              }\n            }}\n          >\n            <Tag shape={\'round\'} closable>\n              标签1\n            </Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#e8e8e8\'\n              }\n            }}\n          >\n            <Tag type={\'primary\'} shape={\'round\'} closable>\n              标签2\n            </Tag>\n          </Theme>\n        </TagWrap>\n\n        <TagWrap>\n          <Tag type={\'basic\'} shape={\'round\'} closable>\n            标签3\n          </Tag>\n        </TagWrap>\n\n        <TagWrap>\n          <Theme\n            config={{\n              [Widget.Tag]: {\n                color: \'#f22735\'\n              }\n            }}\n          >\n            <Tag type={\'presets\'} shape={\'round\'} closable>\n              标签4\n            </Tag>\n          </Theme>\n        </TagWrap>\n      </div>\n    ];\n  }\n\n  onClose = () => {\n    console.log(\'close\');\n  };\n}\n`}</code>
                }
                desc={
                  "可以通过closeable变为可关闭标签,动画执行结束后触发onClose事件。"
                }
                demo={<ClosableTag />}
              ></Demo>
              <Demo
                title={"可选择的标签"}
                titleID={"tag-2"}
                code={
                  <code>{`import { Tag } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport React from \'react\';\nconst TagWrap = styled.div\`\n  display: inline-block;\n  margin: 5px;\n\`;\n\nclass MyTag extends React.Component<any, any> {\n  constructor(props: TagProps) {\n    super(props);\n\n    this.state = {\n      checked: false\n    };\n  }\n  render() {\n    return (\n      <TagWrap>\n        <Tag\n          checked={this.state.checked}\n          type={\'optional\'}\n          onClick={this.onClick}\n        >\n          Click me\n        </Tag>\n      </TagWrap>\n    );\n  }\n\n  onClick = (e, checked) => {\n    this.setState({ checked });\n  };\n}\n\nexport default () => [<MyTag />, <MyTag />, <MyTag />, <MyTag />];\n`}</code>
                }
                desc={
                  "通过type: optional,变为可选择标签,传入checked来控制是否选中"
                }
                demo={<OptionalTag />}
              ></Demo>
              <Demo
                title={"可动态添加标签"}
                titleID={"tag-3"}
                code={
                  <code>{`import Widget from \'@lugia/lugia-web/dist/consts/index\';\nimport { Theme, Tag, Input, Icon } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport React from \'react\';\n\nconst AddIcon = styled(Icon)\`\n  position: relative;\n  top: 2px;\n  left: -3px;\n\`;\n\nconst Box = styled.div\`\n  display: inline-block;\n  margin: 5px;\n\`;\n\nexport default class LimitCase extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = {\n      data: [\'标签1\', \'标签2\'],\n      inputVisible: false,\n      newTagText: \'\'\n    };\n  }\n\n  render() {\n    const { inputVisible } = this.state;\n    const inputConfig = { [Widget.Input]: { width: 100, height: 20 } };\n    const tagConfig = { [Widget.Tag]: { width: 100 } };\n    return (\n      <div>\n        <Box>\n          <Tag>on close</Tag>\n        </Box>\n        {this.getTags()}\n        {inputVisible && (\n          <Theme config={inputConfig}>\n            <Input\n              onChange={this.onChange}\n              autoFocus\n              onBlur={this.onBlur}\n              size={\'small\'}\n              onKeyDown={this.onKeyDown}\n            />\n          </Theme>\n        )}\n        {!inputVisible && (\n          <Box>\n            <Theme config={tagConfig}>\n              <Tag onClick={this.handleAddTag} type=\"basic\">\n                <AddIcon iconClass={\'lugia-icon-reminder_plus_circle_o\'} />\n                标签\n              </Tag>\n            </Theme>\n          </Box>\n        )}\n      </div>\n    );\n  }\n\n  onKeyDown = e => {\n    if (e.keyCode === 13) {\n      this.onBlur();\n    }\n  };\n\n  onClose(item: string, e: Object) {\n    const { data } = this.state;\n    const index = data.indexOf(item);\n    data.splice(index, 1);\n    setTimeout(() => {\n      this.setState({ data });\n    }, 300);\n  }\n\n  onChange = target => {\n    const { newValue: newTagText } = target;\n    this.setState({ newTagText });\n  };\n\n  handleAddTag = () => {\n    this.setState({ inputVisible: true });\n  };\n\n  onBlur = () => {\n    const { data, newTagText } = this.state;\n    if (newTagText) {\n      data.push(newTagText);\n    }\n    this.setState({ inputVisible: false, newTagText: \'\' });\n  };\n\n  getTags = () => {\n    const { data } = this.state;\n    return data.map((item, index) => {\n      return (\n        <Box>\n          <Tag key={item} closable onClose={this.onClose.bind(this, item)}>\n            {item}\n          </Tag>\n        </Box>\n      );\n    });\n  };\n}\n`}</code>
                }
                desc={
                  "遍历数组生成一组标签，通过改变数组的值，动态生成或删除标签"
                }
                demo={<AddTag />}
              ></Demo>
              <EditTables dataSource={TAG} />
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
                <Link title={"基本用法"} href={"#tag-0"} />
                <Link title={"可关闭的标签"} href={"#tag-1"} />
                <Link title={"可选择的标签"} href={"#tag-2"} />
                <Link title={"可动态添加标签"} href={"#tag-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
