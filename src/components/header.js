import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Link from './link';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`
function ListDiv() {
  const LDiv = styled.div`
    border-left: 1px dotted white;
  `
  return(
    <LDiv>&nbsp;</LDiv>
  )
}

class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <nav>
            <List>
              <Link link="#" text="Кактусы" /><ListDiv sym="|" />
              <Link link="#" text="Истории владельцев" /><ListDiv sym="|" />
              <Link link="#" text="Расцветки" /><ListDiv />
              <Link link="#" text="Запахи" /><ListDiv />
              <Link link="#" text="Иголки" /><ListDiv />
              <Link link="#" text="Контакты" />
            </List>
          </nav>
        </Col>
      </Row>
    )
  }
}

export default Header