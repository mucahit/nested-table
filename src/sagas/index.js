import { fork } from 'redux-saga/effects';
import users from './users';

export default function* rootSaga() {
  const watchers = [
    users,
  ];

  yield watchers.map(watcher => fork(watcher));
}
