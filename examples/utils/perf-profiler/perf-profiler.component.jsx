/* https://auth0.com/blog/optimizing-react/ */

import React from 'react';
import Perf from 'react-addons-perf';
import { Button } from 'react-bootstrap';

import './perf-profiler.scss';

class PerfProfiler extends React.Component {
  constructor(props) {
    super(props);

    this.state = { started: false };
  }

  toggle = () => {
    const { started } = this.state;

    /* eslint-disable no-unused-expressions */
    started ? Perf.stop() : Perf.start();

    this.setState({ started: !started });
  }

  printWasted = () => {
    const lastMeasurements = Perf.getLastMeasurements();

    Perf.printWasted(lastMeasurements);
  }

  printOperations = () => {
    const lastMeasurements = Perf.getLastMeasurements();

    Perf.printOperations(lastMeasurements);
  }

  render() {
    const { started } = this.state;

    return (<div className="perf-profiler">
      <h1>Performance Profiler</h1>
      <Button bsStyle="primary" onClick={this.toggle}>{started ? 'Stop' : 'Start'}</Button>
      <Button onClick={this.printWasted}>Print Wasted</Button>
      <Button onClick={this.printOperations}>Print Operations</Button>
    </div>);
  }
}

export default PerfProfiler;
