// import axios from 'axios';

const DISPLAY_GREETINGS = 'rails-react-frontend-app/microverse/DISPLAY_GREETINGS';

const api = async () => {
  const data = await fetch('http://localhost:3000/api/v1/greetings');
  const result = await data.json();
  return result;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_GREETINGS:
      return action.payload;

    default:
      return state;
  }
};

const showGreeting = () => async (dispatch) => {
  const display = await api();

  dispatch({
    type: DISPLAY_GREETINGS,
    payload: display,
  });
};

export { showGreeting, reducer };
