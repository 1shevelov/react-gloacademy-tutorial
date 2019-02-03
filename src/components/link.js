import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.active ? 'pink' : 'white'};
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;

  &:hover {
    color: #8d8d8d;
    text-decoration: none;
  }

`

class Link extends React.Component {
  render() {
    return(
      <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
    )
  }
}

export default Link