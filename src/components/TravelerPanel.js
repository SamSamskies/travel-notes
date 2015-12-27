import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

export default class TravelerPanel extends Component {

  render() {
    const { destinations } = this.props;

    return (
      <Panel
        className="active"
        expanded
        {...this.props}
      >
        <ul className="list-unstyled">
          {destinations.map((d, i) => {
            const key = this.props.id + i;
            return (
              <li key={key}>
                <div className="checkbox checkbox-success">
                  <input type="checkbox" id={"checkbox" + key} checked={d.visited} readOnly />
                  <label htmlFor={"checkbox" + key}>
                    {d.name}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </Panel>
    );
  }

};
