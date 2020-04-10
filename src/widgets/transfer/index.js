import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TRANSFER from "@lugia/lugia-web/dist/transfer/lugia.transfer.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const LimitedDemo = require("./LimitedDemo").default;
const SearchDemo = require("./SearchDemo").default;
const TreeDemo = require("./TreeDemo").default;
const LimitedTreeDemo = require("./LimitedTreeDemo").default;
const DisplayTreeDemo = require("./DisplayTreeDemo").default;
const TreeTreeDemo = require("./TreeTreeDemo").default;

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
              <Title title={"穿梭框"} subTitle={"Transfer"} desc={"穿梭框。"} />
              <Demo
                title={"基本"}
                titleID={"transfer-0"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst data = [\n    { text: \'选项1\', value: \'选项1\', disabled: false },\n    { text: \'选项2\', value: \'选项2\', disabled: false },\n    { text: \'选项3\', value: \'选项3\', disabled: false },\n    { text: \'选项4\', value: \'选项4\', disabled: false },\n    { text: \'选项5\', value: \'选项5\', disabled: true },\n    { text: \'选项6\', value: \'选项6\', disabled: false },\n    { text: \'选项7\', value: \'选项7\', disabled: false },\n    { text: \'选项8\', value: \'选项8\', disabled: false },\n    { text: \'选项9\', value: \'选项9\', disabled: false },\n    { text: \'选项0\', value: \'选项0\', disabled: true },\n    { text: \'选项10\', value: \'选项10\', disabled: true },\n];\n\nexport default class TransferDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Transfer\n                    data={data}\n                    defaultValue={[\'选项2\', \'选项3\', \'选项4\']}\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"基础用法,value 指定右侧面板数据项"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"受控的穿梭框"}
                titleID={"transfer-1"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst data = [\n    { text: \'选项1\', value: \'选项1\', disabled: false },\n    { text: \'选项2\', value: \'选项2\', disabled: false },\n    { text: \'选项3\', value: \'选项3\', disabled: false },\n    { text: \'选项4\', value: \'选项4\', disabled: false },\n    { text: \'选项5\', value: \'选项5\', disabled: true },\n    { text: \'选项6\', value: \'选项6\', disabled: false },\n    { text: \'选项7\', value: \'选项7\', disabled: false },\n    { text: \'选项8\', value: \'选项8\', disabled: false },\n    { text: \'选项9\', value: \'选项9\', disabled: false },\n    { text: \'选项0\', value: \'选项0\', disabled: true },\n    { text: \'选项10\', value: \'选项10\', disabled: true },\n];\n\nexport default class TransferDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            targetKeys: [\'选项3\', \'选项7\', \'选项9\'],\n        };\n    }\n    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\n        this.setState({\n            sourceSelectedKeys,\n            targetSelectedKeys,\n        });\n    };\n    handleDirectionClick = (nextTargetKeys, type, moveKey) => {\n        console.info(nextTargetKeys, type, moveKey);\n        this.setState({\n            targetKeys: nextTargetKeys,\n        });\n    };\n    render() {\n        const {targetKeys} = this.state;\n        return (\n            <div>\n                <Transfer\n                    data={data}\n                    value={targetKeys}\n                    onSelectChange={this.handleSelectChange}\n                    onDirectionClick={this.handleDirectionClick}\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"受控的穿梭框"}
                demo={<LimitedDemo />}
              ></Demo>
              <Demo
                title={"带搜索框"}
                titleID={"transfer-2"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst data = [\n    { text: \'选项1\', value: \'选项1\', disabled: false },\n    { text: \'选项2\', value: \'选项2\', disabled: false },\n    { text: \'选项3\', value: \'选项3\', disabled: false },\n    { text: \'选项4\', value: \'选项4\', disabled: false },\n    { text: \'选项5\', value: \'选项5\', disabled: true },\n    { text: \'选项6\', value: \'选项6\', disabled: false },\n    { text: \'选项7\', value: \'选项7\', disabled: false },\n    { text: \'选项8\', value: \'选项8\', disabled: false },\n    { text: \'选项9\', value: \'选项9\', disabled: false },\n    { text: \'选项0\', value: \'选项0\', disabled: true },\n    { text: \'选项10\', value: \'选项10\', disabled: true },\n];\n\nexport default class TransferDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Transfer\n                    showSearch\n                    data={data}\n                    defaultValue={[\'选项2\', \'选项3\', \'选项4\']}\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"带搜索框的穿梭框，可快速查找内容"}
                demo={<SearchDemo />}
              ></Demo>
              <Demo
                title={"树形穿梭框"}
                titleID={"transfer-3"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst treeData = [\n    { text: \'1\', value: \'1\' },\n    {\n        text: \'2\',\n        value: \'2\',\n        children: [\n            {\n                text: \'2.1\',\n                value: \'2.1\',\n                children: [{ text: \'2.1.1\', value: \'2.1.1\' }, { text: \'2.1.2\', value: \'2.1.2\' }],\n            },\n            {\n                text: \'2.2\',\n                value: \'2.2\',\n                children: [{ text: \'2.2.1\', value: \'2.2.1\' }, { text: \'2.2.2\', value: \'2.2.2\' }],\n            },\n        ],\n    },\n];\n\nexport default class TransferDemo extends React.Component {\n    render() {\n        return (\n            <div>\n                <Transfer\n                    data={treeData}\n                    type=\"tree\"\n                    showSearch\n                />\n            </div>\n        );\n    }\n}\n`}</code>
                }
                desc={"支持树形结构的穿梭框"}
                demo={<TreeDemo />}
              ></Demo>
              <Demo
                title={"受限的树形穿梭框"}
                titleID={"transfer-4"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst treeData = [\n    { text: \'1\', value: \'1\' },\n    {\n        text: \'2\',\n        value: \'2\',\n        children: [\n            {\n                text: \'2.1\',\n                value: \'2.1\',\n                children: [{ text: \'2.1.1\', value: \'2.1.1\' }, { text: \'2.1.2\', value: \'2.1.2\' }],\n            },\n            {\n                text: \'2.2\',\n                value: \'2.2\',\n                children: [{ text: \'2.2.1\', value: \'2.2.1\' }, { text: \'2.2.2\', value: \'2.2.2\' }],\n            },\n        ],\n    },\n];\n\nexport default class TransferDemo extends React.Component {\n    render() {\n        return (\n            <Transfer\n                data={treeData}\n                type=\"tree\"\n                sourceSelectedKeys={[\'2.2.1\']}\n                targetSelectedKeys={[\'2.1.1\']}\n                value={[\'2.1.1\']}\n                showSearch\n            />\n        );\n    }\n}\n`}</code>
                }
                desc={"完全受限的树形穿梭框"}
                demo={<LimitedTreeDemo />}
              ></Demo>
              <Demo
                title={"树形穿梭框取消项"}
                titleID={"transfer-5"}
                code={
                  <code>{`import React from \'react\';\nimport {Transfer} from \'@lugia/lugia-web\';\n\nconst treeData = [\n    { text: \'1\', value: \'1\' },\n    {\n        text: \'2\',\n        value: \'2\',\n        children: [\n            {\n                text: \'2.1\',\n                value: \'2.1\',\n                children: [{ text: \'2.1.1\', value: \'2.1.1\' }, { text: \'2.1.2\', value: \'2.1.2\' }],\n            },\n            {\n                text: \'2.2\',\n                value: \'2.2\',\n                children: [{ text: \'2.2.1\', value: \'2.2.1\' }, { text: \'2.2.2\', value: \'2.2.2\' }],\n            },\n        ],\n    },\n];\n\nexport default class TransferDemo extends React.Component {\n    render() {\n        return (\n            <Transfer\n                data={treeData}\n                type=\"tree\"\n                defaultSourceSelectedKeys={[\'2.2.1\']}\n                defaultTargetSelectedKeys={[\'2.1.1\']}\n                defaultValue={[\'3.1\', \'3.2\', \'2.1.1\']}\n                showSearch\n                defaultDisplayValue={[\'dis1\', \'dis2\', \'2.1.1\']}\n            />\n        );\n    }\n}\n`}</code>
                }
                desc={"配置 displayValue 来展示树形穿梭框的取消项"}
                demo={<DisplayTreeDemo />}
              ></Demo>
              <Demo
                title={"树形穿梭框Theme"}
                titleID={"transfer-6"}
                code={
                  <code>{`import React from \"react\";\nimport { Transfer, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts/index\";\n\nconst treeData = [\n  { text: \"1\", value: \"1\" },\n  {\n    text: \"2\",\n    value: \"2\",\n    children: [\n      {\n        text: \"2.1\",\n        value: \"2.1\",\n        children: [\n          { text: \"2.1.1\", value: \"2.1.1\" },\n          { text: \"2.1.2\", value: \"2.1.2\" }\n        ]\n      },\n      {\n        text: \"2.2\",\n        value: \"2.2\",\n        children: [\n          { text: \"2.2.1\", value: \"2.2.1\" },\n          { text: \"2.2.2\", value: \"2.2.2\" }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class TransferDemo extends React.Component {\n  render() {\n    const TransferView = {\n      [Widget.Transfer]: {\n        TransferWrap: {\n          normal: {\n            height: 400\n          }\n        }\n      }\n    };\n    return (\n      <div>\n        <Theme config={TransferView}>\n          <Transfer\n            data={treeData}\n            type=\"tree\"\n            defaultSourceSelectedKeys={[\"2.2.1\"]}\n            defaultTargetSelectedKeys={[\"2.1.1\"]}\n            defaultValue={[\"3.1\", \"3.2\", \"2.1.1\"]}\n            showSearch\n            defaultDisplayValue={[\"dis1\", \"dis2\", \"2.1.1\"]}\n          />\n        </Theme>\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"树形穿梭框配置 Theme，可配置 height 来决定面板的高度"}
                demo={<TreeTreeDemo />}
              ></Demo>
              <EditTables dataSource={TRANSFER} />
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
                <Link title={"基本"} href={"#transfer-0"} />
                <Link title={"受控的穿梭框"} href={"#transfer-1"} />
                <Link title={"带搜索框"} href={"#transfer-2"} />
                <Link title={"树形穿梭框"} href={"#transfer-3"} />
                <Link title={"受限的树形穿梭框"} href={"#transfer-4"} />
                <Link title={"树形穿梭框取消项"} href={"#transfer-5"} />
                <Link title={"树形穿梭框Theme"} href={"#transfer-6"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
