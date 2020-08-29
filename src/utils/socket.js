import io from 'socket.io-client';
import { serverUrl } from 'config/server';
import { eventChannel } from 'redux-saga';
import Axios from 'axios';

/**
 * Establish socket.io connection and return the socket via a Promise
 * @return {Promise} a socket object
 */
export const connect = () =>
  new Promise((resolve, reject) => {
    try {
      const socket = io(serverUrl);
      socket.on('connect', () => {
        resolve(socket);
      });
    } catch (error) {
      reject(error);
    }
  });

// this function creates an event channel from a given socket
// Setup subscription to incoming `event` events
export function createSocketChannel(socket, event) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel

  Axios.defaults.headers['socketId'] = socket.id;
  return eventChannel(emit => {
    const eventHandler = event => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      emit(event.payload);
    };

    const errorHandler = errorEvent => {
      // create an Error object and put it into the channel
      emit(new Error(errorEvent.reason));
    };

    // setup the subscription
    socket.on(event, eventHandler);
    socket.on('error', errorHandler);

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.off(event, eventHandler);
    };

    return unsubscribe;
  });
}
