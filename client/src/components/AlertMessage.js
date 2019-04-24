import React from 'react';
import './AlertMessage.css'

class AlertMessage extends React.Component {

  componentDidMount() {
    return this.props.alert ? this.timer = setTimeout(() =>
      this.props.removeAlert(this.props.alert.id),
      3000
    ) : null;
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
