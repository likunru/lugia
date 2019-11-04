import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import UPLOAD from '@lugia/lugia-web/dist/upload/lugia.upload.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseUpload =  require('./BaseUpload').default;  const FileListUpload =  require('./FileListUpload').default;  const CustomUpload =  require('./CustomUpload').default;  const PictureUpload =  require('./PictureUpload').default;  const DisabledUpload =  require('./DisabledUpload').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'上传'} subTitle={'Upload'} desc={'上传组件,可通过文件选择和拖拽上传'} />
                              <Demo title={'按钮'} titleID={'upload-0'} code={<code>{ `import React from \'react\';
                              <EditTables dataSource={UPLOAD} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'按钮'} href={'#upload-0'} /><Link title={'文件列表'} href={'#upload-1'} /><Link title={'多种风格'} href={'#upload-2'} /><Link title={'图片'} href={'#upload-3'} /><Link title={'禁用'} href={'#upload-4'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        