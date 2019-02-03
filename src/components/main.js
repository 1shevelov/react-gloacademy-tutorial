import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Title = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 700;
  span {
    display: block;
    font-size: 24px;
  }
`
const SubTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  color: white;
  font-size: 18px;
  font-weight: 300;
`
const TitleButton = styled.button`
  width: 190px;
  height: 45px;
  background-color: #ffa14b;
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

class Main extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={6} lgOffset={1}>
          <Title>Самый большой выбор кактусов
          <span>в Калининграде и области</span></Title>
          <SubTitle>
            Закажите ландшафтный дизайн и получите<br/>
            один большой кактус и три маленьких суккулента<br/>
            бесплатно!
          </SubTitle>
          <TitleButton>Отправить заявку</TitleButton>
        </Col>
        <Col lg={5}>

        </Col>
      </Row>
    )
  }
}

export default Main