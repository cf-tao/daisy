import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styles from './CustomHeader.css';
import logo from '../../assets/antd-logo.svg';
import text from '../../assets/antd-text.svg';

class CustomHeader extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Row>
          <Col xs={5} lg={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} >
            <img className={styles.logo} src={logo} width={32} />
            <img src={text} width={120} />
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }} >

          </Col>
        </Row>
      </div>
    )
  }
}

export default CustomHeader;
