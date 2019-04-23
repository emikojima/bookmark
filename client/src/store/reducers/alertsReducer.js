import cuid from 'cuid';

function alertsReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_ALERT_MESSAGE':
      return [...state,
          {id: cuid(),
          text: action.message,
          type: action.message.type}
        ];

    case 'DELETE_ALERT_MESSAGE':
      const mssg = state.filter(al => al.id !== action.id)
      return mssg;

    default:
      return state;
    }
}

export default alertsReducer;
