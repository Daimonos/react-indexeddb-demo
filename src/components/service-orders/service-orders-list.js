import * as React from 'react';
import { DBService } from '../../services/DBService';
import { CircularProgress, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
export default class ServiceOrdersListComponent extends React.Component {
  style = {
    head: {
      backgroundColor: '#FFF',
      position: 'sticky',
      top: 0
    }
  }
  constructor(props) {
    super(props)
    this._db = new DBService()
    console.log(this.props.match.params)
    this.state = {
      bucket: this.props.match.params.bucket,
      businessUnit: this.props.match.params.businessUnit,
      status: this.props.match.params.status,
      isLoading: true
    }
    this._getOrders()
  }

  _getOrders() {
    let idx = [this.state.bucket, this.state.businessUnit, this.state.status]
    console.log(idx)
    this._db.getAll('ServiceOrders', 'BucketBusinessUnitStatus', idx).then(orders => {
      console.log(orders);
      this.setState({ orders: orders, isLoading: false })

    });
  }

  render() {
    let { bucket, businessUnit, status, isLoading } = this.state
    let { orders } = this.state
    return <div>
      <h1>{bucket} - {businessUnit} - {status}</h1>
      {orders && <p>Viewing {orders.length} orders</p>}
      {isLoading && <CircularProgress />}
      {!isLoading && <Table>
        <TableHead>
          <TableRow>
            <TableCell style={this.style.head}>ID</TableCell>
            <TableCell style={this.style.head}>Bucket</TableCell>
            <TableCell style={this.style.head}>Business Unit</TableCell>
            <TableCell style={this.style.head}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ overflowY: 'scroll' }}>
          {orders && orders.map(o => <TableRow key={o.id}>
            <TableCell>{o.id}</TableCell>
            <TableCell>{o.bucket}</TableCell>
            <TableCell>{o.businessUnit}</TableCell>
            <TableCell>{o.status}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>}
    </div>;
  }
}