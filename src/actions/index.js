import * as firebase from 'firebase';

import { FETCH_TODOS } from './types';

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};
export const completeToDo = completeToDo => async dispatch => {
  todosRef.child(completeToDo).remove();
};
export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
