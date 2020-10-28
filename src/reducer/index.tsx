type State = {
  start: boolean;
  stop: boolean;
  pause: boolean;
  speed: number;
  minutes: number;
  displayMinutes: number;
  displaySeconds: number;
  notification: string;
  timesUp: boolean;
};

type Action = { type: 'TIMER_UPDATE'; payload: State } | { type: 'TIMER_DECREMENT'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TIMER_UPDATE': {
      return { ...state, ...action.payload };
    }
    case 'TIMER_DECREMENT': {
      return {
        ...state,
        displaySeconds: state.displaySeconds - 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
