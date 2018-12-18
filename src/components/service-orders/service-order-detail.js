import * as React from 'react';
import { DBService } from '../../services/DBService';
export default class ServiceOrderDetailComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: parseInt(this.props.match.params.id) }
    this._db = new DBService()
    this._getOrder()
  }

  _getOrder() {
    this._db.get('ServiceOrders', this.state.id).then(o => {
      console.log(o)
      this.setState({ order: o })
    })
  }

  render() {
    const { order } = this.state;
    return <div>Order Details:
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  }
}