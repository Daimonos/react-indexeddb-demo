import * as React from 'react';
import { Link } from 'react-router-dom';

export default class HomeComponent extends React.Component {
  buckets = ['Bucket01', 'Bucket02']
  businessUnits = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5']
  status = ['Completed', 'Pending', 'In Progress']
  render() {
    let refs = []
    this.buckets.forEach(bu => {
      this.businessUnits.forEach(b => {
        this.status.forEach(s => {
          let path = "/serviceOrders/bucket/" + bu + "/businessUnit/" + b + "/status/" + s
          refs.push(<Link to={path}>{path}</Link>)
        })
      })
    })
    return <div>
      <h3>Some Routes</h3>
      {refs.map((r, i) => <li key={i}>{r}</li>)}
    </div>
  }
}