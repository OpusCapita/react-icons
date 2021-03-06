import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import IconsView from '../components/icons-view.component';
import GithubLogo from '../images/logo-github.svg';
import './example.container.scss';

export default () => (
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={10} md={11}>
            <h3>Opuscapita - React icons</h3>
          </Col>
          <Col xs={2} md={1}>
            <a
              href="https://github.com/OpusCapita/react-icons"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel style={{ height: '100%' }}>
          <IconsView />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
