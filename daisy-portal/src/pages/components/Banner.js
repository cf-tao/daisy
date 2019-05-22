/* jshint esversion: 6 */

import { Carousel } from 'antd';
import React, { Component } from 'react';
import styles from './Banner.css';

class Banner extends Component {
  render() {
    return (
      <Carousel className={styles.carousel} autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    )
  }
}

export default Banner;
