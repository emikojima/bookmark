import React from 'react';
import './AlertMessage.css'

class AlertMessage extends React.Component {

  componentDidMount() {
    return this.props.alert ? this.timer = setTimeout( () =>
      this.props.removeAlert(this.props.alert.id),
      2000
    ) : null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  alertClass (type) {
    let classes = {
      error: 'alert-danger',
      success: 'alert-success'
    };
    return classes[type] || classes.success;
  }

  render() {
    const { alert } = this.props;

    // const alertClassName = `alert ${ this.alertClass(alert.type) } fade show`;
    return(
      <div className="alert">
      { alert.text }
      <button className='close'
         onClick={ () => {this.props.removeAlert(alert.id)} }>x
      </button>

      </div>
    );
  }
}

export default AlertMessage;
