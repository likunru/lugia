import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TREESELECT from "@lugia/lugia-web/dist/tree-select/lugia.tree-select.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const DefaultTreeSelect = require("./DefaultTreeSelect").default;
const CanSearchSingleTreeSelect = require("./CanSearchSingleTreeSelect")
  .default;
const MutlipleTreeSelect = require("./MutlipleTreeSelect").default;
const DigDataTreeSelect = require("./DigDataTreeSelect").default;
const InlineDataTreeSelect = require("./InlineDataTreeSelect").default;

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
                title={"树形选择控件"}
                subTitle={"TreeSelect"}
                desc={
                  "类似Select选择器，弹出面板是一个树形控件，可以清晰地展示层级数据结构。"
                }
              />
              <Demo
                title={"单项选择树"}
                titleID={"tree-select-0"}
                code={
                  <code>{`import * as React from \'react\';\nimport { TreeSelect, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  { value: \'1\', text: \'1\' },\n  {\n    value: \'1.1\',\n    text: \'1.1\',\n    pid: \'1\',\n    path: \'1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \'1.2\', text: \'1.2\', pid: \'1\', path: \'1\' },\n  { value: \'1.2.1\', text: \'1.2.1\', pid: \'1.2\', path: \'1/1.2\', isLeaf: true },\n  { value: \'1.2.2\', text: \'1.2.2\', pid: \'1.2\', path: \'1/1.2\', isLeaf: true },\n\n  { value: \'1.3\', text: \'1.3\', pid: \'1\', path: \'1\', isLeaf: true },\n  {\n    value: \'1.4\',\n    text: \'1.4\',\n    pid: \'1\',\n    path: \'1\',\n    isLeaf: true,\n    notCanSelect: true\n  },\n  { value: \'1.5\', text: \'1.5\', pid: \'1\', path: \'1\', isLeaf: true },\n\n  { value: \'2\', text: \'2\' },\n  { value: \'2.1\', text: \'2.1\', pid: \'2\', path: \'2\' },\n  { value: \'2.1.1\', text: \'2.1.1\', pid: \'2.1\', path: \'2/2.1\', isLeaf: true },\n  { value: \'2.1.2\', text: \'2.1.2\', pid: \'2.1\', path: \'2/2.1\' },\n  {\n    value: \'2.1.2.1\',\n    text: \'2.1.2.1\',\n    pid: \'2.1.2\',\n    path: \'2/2.1/2.1.2\',\n    isLeaf: true\n  },\n\n  { value: \'3\', text: \'3\' },\n  { value: \'3.1\', text: \'3.1\', pid: \'3\', path: \'3\' },\n  { value: \'3.1.1\', text: \'3.1.1\', pid: \'3.1\', path: \'3/3.1\', isLeaf: true },\n  { value: \'3.1.2\', text: \'3.1.2\', pid: \'3.1\', path: \'3/3.1\' },\n  {\n    value: \'3.1.2.1\',\n    text: \'3.1.2.1\',\n    pid: \'3.1.2\',\n    path: \'3/3.1/3.1.2\',\n    isLeaf: true\n  }\n];\n\nexport default class DefaultTreeSelect extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.TreeSelect]: {\n        Container: {\n          normal: {\n            width: 300,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <TreeSelect\n          data={data}\n          onlySelectLeaf\n          igronSelectField=\"notCanSelect\"\n          expandAll\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"通过igronSelectField指定禁选标识符"}
                demo={<DefaultTreeSelect />}
              ></Demo>
              <Demo
                title={"可搜索的单项选择树"}
                titleID={"tree-select-1"}
                code={
                  <code>{`import * as React from \"react\";\nimport { TreeSelect, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  { value: \"1\", text: \"1\" },\n  {\n    value: \"1.1\",\n    text: \"1.1\",\n    pid: \"1\",\n    path: \"1\",\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \"1.2\", text: \"1.2\", pid: \"1\", path: \"1\" },\n  { value: \"1.2.1\", text: \"1.2.1\", pid: \"1.2\", path: \"1/1.2\", isLeaf: true },\n  { value: \"1.2.2\", text: \"1.2.2\", pid: \"1.2\", path: \"1/1.2\", isLeaf: true },\n\n  { value: \"1.3\", text: \"1.3\", pid: \"1\", path: \"1\", isLeaf: true },\n  {\n    value: \"1.4\",\n    text: \"1.4\",\n    pid: \"1\",\n    path: \"1\",\n    isLeaf: true,\n    notCanSelect: true\n  },\n  { value: \"1.5\", text: \"1.5\", pid: \"1\", path: \"1\", isLeaf: true },\n\n  { value: \"2\", text: \"2\" },\n  { value: \"2.1\", text: \"2.1\", pid: \"2\", path: \"2\" },\n  { value: \"2.1.1\", text: \"2.1.1\", pid: \"2.1\", path: \"2/2.1\", isLeaf: true },\n  { value: \"2.1.2\", text: \"2.1.2\", pid: \"2.1\", path: \"2/2.1\" },\n  {\n    value: \"2.1.2.1\",\n    text: \"2.1.2.1\",\n    pid: \"2.1.2\",\n    path: \"2/2.1/2.1.2\",\n    isLeaf: true\n  },\n\n  { value: \"3\", text: \"3\" },\n  { value: \"3.1\", text: \"3.1\", pid: \"3\", path: \"3\" },\n  { value: \"3.1.1\", text: \"3.1.1\", pid: \"3.1\", path: \"3/3.1\", isLeaf: true },\n  { value: \"3.1.2\", text: \"3.1.2\", pid: \"3.1\", path: \"3/3.1\" },\n  {\n    value: \"3.1.2.1\",\n    text: \"3.1.2.1\",\n    pid: \"3.1.2\",\n    path: \"3/3.1/3.1.2\",\n    isLeaf: true\n  }\n];\n\nexport default class CanSearchTreeSelect extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.TreeSelect]: {\n        Container: {\n          normal: {\n            width: 300,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <TreeSelect\n          data={data}\n          onlySelectLeaf\n          igronSelectField=\"notCanSelect\"\n          expandAll\n          canSearch\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"通过指定canSearch属性，开启检索功能"}
                demo={<CanSearchSingleTreeSelect />}
              ></Demo>
              <Demo
                title={"多项选择树"}
                titleID={"tree-select-2"}
                code={
                  <code>{`import * as React from \"react\";\nimport { TreeSelect, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nconst data = [\n  { value: \"1\", text: \"1\" },\n  {\n    value: \"1.1\",\n    text: \"1.1\",\n    pid: \"1\",\n    path: \"1\",\n    isLeaf: true,\n    notCanSelect: true\n  },\n\n  { value: \"1.2\", text: \"1.2\", pid: \"1\", path: \"1\" },\n  { value: \"1.2.1\", text: \"1.2.1\", pid: \"1.2\", path: \"1/1.2\", isLeaf: true },\n  { value: \"1.2.2\", text: \"1.2.2\", pid: \"1.2\", path: \"1/1.2\", isLeaf: true },\n\n  { value: \"1.3\", text: \"1.3\", pid: \"1\", path: \"1\", isLeaf: true },\n  {\n    value: \"1.4\",\n    text: \"1.4\",\n    pid: \"1\",\n    path: \"1\",\n    isLeaf: true,\n    notCanSelect: true\n  },\n  { value: \"1.5\", text: \"1.5\", pid: \"1\", path: \"1\", isLeaf: true },\n\n  { value: \"2\", text: \"2\" },\n  { value: \"2.1\", text: \"2.1\", pid: \"2\", path: \"2\" },\n  { value: \"2.1.1\", text: \"2.1.1\", pid: \"2.1\", path: \"2/2.1\", isLeaf: true },\n  { value: \"2.1.2\", text: \"2.1.2\", pid: \"2.1\", path: \"2/2.1\" },\n  {\n    value: \"2.1.2.1\",\n    text: \"2.1.2.1\",\n    pid: \"2.1.2\",\n    path: \"2/2.1/2.1.2\",\n    isLeaf: true\n  },\n\n  { value: \"3\", text: \"3\" },\n  { value: \"3.1\", text: \"3.1\", pid: \"3\", path: \"3\" },\n  { value: \"3.1.1\", text: \"3.1.1\", pid: \"3.1\", path: \"3/3.1\", isLeaf: true },\n  { value: \"3.1.2\", text: \"3.1.2\", pid: \"3.1\", path: \"3/3.1\" },\n  {\n    value: \"3.1.2.1\",\n    text: \"3.1.2.1\",\n    pid: \"3.1.2\",\n    path: \"3/3.1/3.1.2\",\n    isLeaf: true\n  }\n];\n\nexport default class MutlipleTreeSelect extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.TreeSelect]: {\n        Container: {\n          normal: {\n            width: 300,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <TreeSelect\n          data={data}\n          onlySelectLeaf\n          igronSelectField=\"notCanSelect\"\n          expandAll\n          mutliple\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"指定mutliple属性,开启多选选择树"}
                demo={<MutlipleTreeSelect />}
              ></Demo>
              <Demo
                title={"可加载大数据"}
                titleID={"tree-select-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport { TreeSelect, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst bigTree = [];\n\ngetNumberKey();\n\nfunction getNumberKey() {\n  let key = 0;\n  for (let a = 0; a < 5; a++) {\n    const keyA = key++;\n    bigTree.push({\n      key: \`\${keyA}\`,\n      title: \`\${a}\`\n    });\n    for (let b = 0; b < 5; b++) {\n      const titleB = \`\${a}.\${b}\`;\n      const keyb = key++;\n      bigTree.push({\n        key: keyb,\n        title: titleB,\n        pid: \`\${keyA}\`,\n        path: \`\${keyA}\`\n      });\n      for (let c = 0; c < 20; c++) {\n        const titleC = \`\${a}.\${b}.\${c}\`;\n        const keyc = key++;\n        bigTree.push({\n          key: keyc,\n          title: titleC,\n          pid: \`\${keyb}\`,\n          path: \`\${keyA}/\${keyb}\`\n        });\n        for (let d = 0; d < 400; d++) {\n          const title = \`\${a}.\${b}.\${c}.\${d}\`;\n          const keyD = key++;\n          bigTree.push({\n            key: keyD,\n            title,\n            pid: \`\${keyc}\`,\n            isLeaf: true,\n            path: \`\${keyA}/\${keyb}/\${keyc}\`\n          });\n        }\n      }\n    }\n  }\n}\n\nexport default class DefaultTreeSelect extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.TreeSelect]: {\n        Container: {\n          normal: {\n            width: 300,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <TreeSelect\n          data={bigTree}\n          canSearch\n          valueField={\'key\'}\n          displayField={\'title\'}\n          onlySelectLeaf\n          igronSelectField=\"notCanSelect\"\n          expandAll\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可支持20万条数据快速加载成Tree控件"}
                demo={<DigDataTreeSelect />}
              ></Demo>
              <Demo
                title={"传入嵌套数据生成选择树"}
                titleID={"tree-select-4"}
                code={
                  <code>{`import * as React from \'react\';\nimport { TreeSelect, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst data = [\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\',\n            disabled: true\n          },\n          { value: \'Icon\', text: \'Icon\', icon: \'lugia-icon-financial_archive\' }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        children: [\n          { value: \'Grid\', text: \'Grid\', disabled: true },\n          { value: \'Layout\', text: \'Layout\' }\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' },\n          { value: \'Dropdown\', text: \'Dropdown\' },\n          { value: \'Menu\', text: \'Menu\' },\n          { value: \'Pagination\', text: \'Pagination\' },\n          { value: \'Steps\', text: \'Steps\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' },\n          { value: \'Checkbox\', text: \'Checkbox\' },\n          { value: \'DatePicker\', text: \'DatePicker\' },\n          { value: \'Form\', text: \'Form\' },\n          { value: \'Input\', text: \'Input\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class InlineDataTreeSelect extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.TreeSelect]: {\n        Container: {\n          normal: {\n            width: 300,\n            height: 30\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={config}>\n        <TreeSelect\n          data={data}\n          onlySelectLeaf\n          expandAll\n          mutliple\n          translateTreeData\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "通过指定translateTreeData属性，传入嵌套数据生成选择树，注意指定valueField和visplayField的值。"
                }
                demo={<InlineDataTreeSelect />}
              ></Demo>
              <EditTables dataSource={TREESELECT} />
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
                <Link title={"单项选择树"} href={"#tree-select-0"} />
                <Link title={"可搜索的单项选择树"} href={"#tree-select-1"} />
                <Link title={"多项选择树"} href={"#tree-select-2"} />
                <Link title={"可加载大数据"} href={"#tree-select-3"} />
                <Link
                  title={"传入嵌套数据生成选择树"}
                  href={"#tree-select-4"}
                />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
