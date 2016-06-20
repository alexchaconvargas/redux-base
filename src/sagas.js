import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    const user = yield call(fetchUserApi);
    yield put({type: "USER_FETCH_SUCCEEDED", user});
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }
  
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* mySaga() {
  yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

function fetchUserApi() {
	fetch('http://localhost:3000/api/candidates', {method: 'get'})
	.then(status)
	.then(json)
	.then(data =>{ 
		console.log(data);
		 return 	data; })
}
















