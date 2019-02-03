import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Subline = styled.div`
  color: #464646;
  font-size: 14px;
  font-weight: 400;

`
const AddressPhone = styled.div`
  color: #2a2a2a;
  font-size: 14px;
  font-weight: 300;

  span {
    display: block;
    color: #464646;
    font-size: 20px;
    font-weight: 700;
  }
`
class PhoneNum extends React.Component {
  render() {
    return (
      <span>тел. {this.props.num}</span>
    )
  }
}

const CallButton = styled.button`
  width: 170px;
  height: 45px;
  background-color: #3fc7db;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  border: none;

  &:hover {
    filter: brightness(115%);
  }
`


class SubHeader extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Subline>Мы продаем растения и делаем ландшафтный дизайн.<br/>
          У нас в наличии <strong>206 сортов</strong> кактусов и суккулентов.</Subline>
        </Col>
        <Col lg={3} lgOffset={2}>
          <AddressPhone>Каштановая аллея, 165<PhoneNum num="222-22-22"/></AddressPhone>
        </Col>
        <Col lg={2}>
          <CallButton>Заказать звонок</CallButton>
        </Col>
      </Row>
    )
  }
}

export default SubHeader