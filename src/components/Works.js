import React, { Component } from 'react';
import styled from 'styled-components';

const WorksWrapper = styled.div`
  width: 100%;
  background: lightblue;
`;

export default class Works extends Component {
  state = {
    works: [
      {
        title: 'my awesome first project',
        link: 'website.com',
        image: 'https:imageurl'
      },
      {
        title: '2my awesome first project',
        link: 'website.com',
        image: 'https:imageurl'
      },
      {
        title: '3my awesome first project',
        link: 'website.com',
        image: 'https:imageurl'
      }
    ]
  };
  render() {
    return (
      <WorksWrapper>
        {this.state.works.map(work => (
          <div>{work.title}</div>
        ))}
      </WorksWrapper>
    );
  }
}
