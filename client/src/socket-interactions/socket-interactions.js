import io from 'socket.io-client';
import { getDataAction } from '../store/actions/actions';

const socket = io.connect('http://localhost:4000');

export function startStocks() {
  socket.emit('start');
}

export function stopStocks() {
  socket.disconnect();
}

export function getData() {
  return function (dispatch) {
    try {
      socket.on('ticker', (response) => {
        dispatch(getDataAction(response));
      });
    } catch (e) {
      console.error(e);
    }
  };
}
