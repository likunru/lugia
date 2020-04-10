import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TABLE from "@lugia/lugia-web/dist/table/lugia.table.zh-CN.json";
import COLUMN from "@lugia/lugia-web/dist/table/lugia.column.zh-CN.json";
import SELECTOPTIONS from "@lugia/lugia-web/dist/table/lugia.selectOptions.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicDemo = require("./BasicDemo").default;
const ExpandedRowRenderDemo = require("./ExpandedRowRenderDemo").default;
const MergeDemo = require("./MergeDemo").default;
const TreeDemo = require("./TreeDemo").default;
const CheckDemo = require("./CheckDemo").default;

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
              <Title title={"表格"} subTitle={"Table"} desc={"Table  表格。"} />
              <Demo
                title={"基本用法"}
                titleID={"table-0"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Table} from \'@lugia/lugia-web\';\n\nconst columns = [{\n  title: \'Name\', dataIndex: \'name\', key:\'name\', width: 100,\n}, {\n  title: \'Age\', dataIndex: \'age\', key:\'age\', width: 100,\n}, {\n  title: \'Address\', dataIndex: \'address\', key:\'address\', width: 200,\n}, {\n  title: \'Operations\', dataIndex: \'\', key:\'operations\', render: () => <a href=\"javascript:;\">Delete</a>,\n}];\n\nconst data = [\n  { name: \'Jack\', age: 28, address: \'some where\', key:\'1\' },\n  { name: \'Rose\', age: 36, address: \'some where\', key:\'2\' },\n  { name: \'Uzi\', age: 36, address: \'some where\', key:\'3\' },\n  { name: \'ClearLove\', age: 36, address: \'some where\', key:\'4\' },\n  { name: \'Rookie\', age: 36, address: \'some where\', key:\'5\' },\n  { name: \'TheShy\', age: 36, address: \'some where\', key:\'6\' },\n];\n\nexport default class TableDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Table columns={columns} data={data} />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"最简单的 Table 用法"}
                demo={<BasicDemo />}
              ></Demo>
              <Demo
                title={"可展开的Table"}
                titleID={"table-1"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Table} from \'@lugia/lugia-web\';\n\nconst columns = [{\n  title: \'Name\', dataIndex: \'name\', key:\'name\', width: 100,\n}, {\n  title: \'Age\', dataIndex: \'age\', key:\'age\', width: 100,\n}, {\n  title: \'Address\', dataIndex: \'address\', key:\'address\', width: 200,\n}, {\n  title: \'Operations\', dataIndex: \'operations\', key:\'operations\', render: () => <a href=\"javascript:;\">Delete</a>,\n}];\n\nconst data = [\n  { name: \'Uzi\', age: 28, address: \'some where\', key:\'1\' ,description: \'I am ADC.\' },\n  { name: \'ClearLove\', age: 36, address: \'some where\', key:\'2\' ,description: \'I am Jungle.\' },\n  { name: \'JackLove\', age: 36, address: \'some where\', key:\'3\' ,description: \'I am ADC.\' },\n  { name: \'Ming\', age: 36, address: \'some where\', key:\'4\' ,description: \'I am Assist .\' },\n  { name: \'Rookie\', age: 36, address: \'some where\', key:\'5\' ,description: \'I am Ap.\' },\n  { name: \'TheShy\', age: 36, address: \'some where\', key:\'6\' ,description: \'I am Top.\' },\n];\n\nexport default class TableDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Table\n          columns={columns}\n          expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}\n          data={data}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"展示内容过多时，需要折叠展示部分内容"}
                demo={<ExpandedRowRenderDemo />}
              ></Demo>
              <Demo
                title={"可合并的Table"}
                titleID={"table-2"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Table} from \'@lugia/lugia-web\';\n\nconst renderContent = (value, row, index) => {\n  const obj = {\n    children: value,\n    props: {},\n  };\n  if (index === 4) {\n    obj.props.colSpan = 0;\n  }\n  return obj;\n};\n\nconst columns = [{\n  title: \'Name\',\n  dataIndex: \'name\',\n  render: (text, row, index) => {\n    if (index < 4) {\n      return <a href=\"javascript:;\">{text}</a>;\n    }\n    return {\n      children: <a href=\"javascript:;\">{text}</a>,\n      props: {\n        colSpan: 5,\n      },\n    };\n  },\n}, {\n  title: \'Age\',\n  dataIndex: \'age\',\n  render: renderContent,\n}, {\n  title: \'Home phone\',\n  colSpan: 2,\n  dataIndex: \'tel\',\n  render: (value, row, index) => {\n    const obj = {\n      children: value,\n      props: {},\n    };\n    if (index === 2) {\n      obj.props.rowSpan = 2;\n    }\n    if (index === 3) {\n      obj.props.rowSpan = 0;\n    }\n    if (index === 4) {\n      obj.props.colSpan = 0;\n    }\n    return obj;\n  },\n}, {\n  title: \'Phone\',\n  colSpan: 0,\n  dataIndex: \'phone\',\n  render: renderContent,\n}, {\n  title: \'Address\',\n  dataIndex: \'address\',\n  render: renderContent,\n}];\n\nconst data = [{\n  key: \'1\',\n  name: \'John Brown\',\n  age: 32,\n  tel: \'0571-22098909\',\n  phone: 18889898989,\n  address: \'New York No. 1 Lake Park\',\n}, {\n  key: \'2\',\n  name: \'Jim Green\',\n  tel: \'0571-22098333\',\n  phone: 18889898888,\n  age: 42,\n  address: \'London No. 1 Lake Park\',\n}, {\n  key: \'3\',\n  name: \'Joe Black\',\n  age: 32,\n  tel: \'0575-22098909\',\n  phone: 18900010002,\n  address: \'Sidney No. 1 Lake Park\',\n}, {\n  key: \'4\',\n  name: \'Jim Red\',\n  age: 18,\n  tel: \'0575-22098909\',\n  phone: 18900010002,\n  address: \'London No. 2 Lake Park\',\n}, {\n  key: \'5\',\n  name: \'Jake White\',\n  age: 18,\n  tel: \'0575-22098909\',\n  phone: 18900010002,\n  address: \'Dublin No. 2 Lake Park\',\n}];\n\nexport default class TableDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Table columns={columns} data={data} />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "表头只支持列合并，使用 column 里的 colSpan 进行设置。 表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"
                }
                demo={<MergeDemo />}
              ></Demo>
              <Demo
                title={"树形数据的 Table"}
                titleID={"table-3"}
                code={
                  <code>{`import * as React from \'react\';\nimport {Table} from \'@lugia/lugia-web\';\nconsole.info(Table);\n\nconst columns = [{\n  title: \'Name\',\n  dataIndex: \'name\',\n  key: \'name\',\n}, {\n  title: \'Age\',\n  dataIndex: \'age\',\n  key: \'age\',\n  width: \'12%\',\n}, {\n  title: \'Address\',\n  dataIndex: \'address\',\n  width: \'30%\',\n  key: \'address\',\n}];\n\nconst data = [{\n  key: 1,\n  name: \'John Brown sr.\',\n  age: 60,\n  address: \'New York No. 1 Lake Park\',\n  children: [{\n    key: 11,\n    name: \'John Brown\',\n    age: 42,\n    address: \'New York No. 2 Lake Park\',\n  }, {\n    key: 12,\n    name: \'John Brown jr.\',\n    age: 30,\n    address: \'New York No. 3 Lake Park\',\n    children: [{\n      key: 121,\n      name: \'Jimmy Brown\',\n      age: 16,\n      address: \'New York No. 3 Lake Park\',\n    }],\n  }, {\n    key: 13,\n    name: \'Jim Green sr.\',\n    age: 72,\n    address: \'London No. 1 Lake Park\',\n    children: [{\n      key: 131,\n      name: \'Jim Green\',\n      age: 42,\n      address: \'London No. 2 Lake Park\',\n      children: [{\n        key: 1311,\n        name: \'Jim Green jr.\',\n        age: 25,\n        address: \'London No. 3 Lake Park\',\n      }, {\n        key: 1312,\n        name: \'Jimmy Green sr.\',\n        age: 18,\n        address: \'London No. 4 Lake Park\',\n      }],\n    }],\n  }],\n}, {\n  key: 2,\n  name: \'Joe Black\',\n  age: 32,\n  address: \'Sidney No. 1 Lake Park\',\n}];\n\nexport default class TableDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Table columns={columns} data={data} />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "展示树形数据的 Table，当数据中有 children 字段时会自动展示为树形表格"
                }
                demo={<TreeDemo />}
              ></Demo>
              <Demo
                title={"有选择项的 Table"}
                titleID={"table-4"}
                code={
                  <code>{`import * as React from \"react\";\nimport { Table } from \"@lugia/lugia-web\";\n\nconst columns = [\n  {\n    title: \"Name\",\n    dataIndex: \"name\",\n    key: \"name\"\n  },\n  {\n    title: \"Age\",\n    dataIndex: \"age\",\n    key: \"age\"\n  },\n  {\n    title: \"Address\",\n    dataIndex: \"address\",\n    key: \"address\"\n  },\n  {\n    title: \"Operations\",\n    dataIndex: \"\",\n    key: \"operatio ns\",\n    render: () => <a href=\"#\">Delete</a>\n  }\n];\n\nconst data = [\n  { name: \"Jack\", age: 28, address: \"some where\", key: \"1\" },\n  { name: \"Rose\", age: 36, address: \"some where\", key: \"2\" },\n  { name: \"Rook\", age: 22, address: \"some where\", key: \"3\" },\n  { name: \"Lise\", age: 33, address: \"some where\", key: \"4\" }\n];\n\nexport default class TableDemo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      selectRowKeys: [\"1\"]\n    };\n  }\n\n  selectChange = (selectRowKeys: string, records: Object) => {\n    console.log(\"selectRowKeys\", selectRowKeys, \"records\", records);\n    this.setState({\n      selectRowKeys\n    });\n  };\n  render() {\n    return (\n      <div>\n        <Table\n          columns={columns}\n          data={data}\n          selectOptions={{\n            onChange: this.selectChange,\n            selectRowKeys: this.state.selectRowKeys,\n            setCheckboxProps(record) {\n              return { disabled: record.name === \"Jack\" };\n            },\n            width: 60\n          }}\n          expandedRowRender={record => <p>{record.name}</p>}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"有选择项的 Table，可以获取 选中行的keys"}
                demo={<CheckDemo />}
              ></Demo>
              <EditTables dataSource={TABLE} />
              <EditTables dataSource={COLUMN} />
              <EditTables dataSource={SELECTOPTIONS} />
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
                <Link title={"基本用法"} href={"#table-0"} />
                <Link title={"可展开的Table"} href={"#table-1"} />
                <Link title={"可合并的Table"} href={"#table-2"} />
                <Link title={"树形数据的 Table"} href={"#table-3"} />
                <Link title={"有选择项的 Table"} href={"#table-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
