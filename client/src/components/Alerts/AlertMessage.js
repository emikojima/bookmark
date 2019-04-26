import React from 'react';
import './AlertMessage.css'

class AlertMessage extends React.Component {

  componentDidMount() {
    this.timer = setTimeout(() =>
      this.props.removeAlert(this.props.alert.id),
      2000
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { alert } = this.props;
    const alertClassName = ` ${ alert.type } `;
    return(
      <div className={alertClassName}>
      { alert.text }
      <button
         onClick={ () => {this.props.removeAlert(alert.id)} }> x
      </button>
      </div>
    );
  }
}

export default AlertMessage;
