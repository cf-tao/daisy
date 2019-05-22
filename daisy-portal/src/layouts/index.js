import styles from './index.css';
import { Layout } from 'antd';
import MainMenu from '../pages/components/Menu';
import CustomHeader from '../pages/components/CustomHeader';

function BasicLayout(props) {

  const {
    Header, Footer, Sider, Content,
  } = Layout;

  return (
    <Layout className={styles.normal} >
      <Header className={styles.header} >
        <CustomHeader />
      </Header>
      <Content>
        <MainMenu />
        {props.children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default BasicLayout;
