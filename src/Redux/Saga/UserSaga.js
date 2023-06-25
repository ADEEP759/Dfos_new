import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginFailure,
  loginSucess,
} from "../Actions/UserAction";
import {
  USER_LOGIN_REQUEST,
} from "../Constants/UserConstants";
import axiosInstance from "../apiBase";

function* LoginSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,`/app/api/v1/login`, action.payload.values,
    );
    yield put(loginSucess(response.data));
    localStorage.setItem("Dfos_User", JSON.stringify(response.data));
  } catch (error) {
    yield put(loginFailure(error.response.data.detail));
  }
}


function* UserSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, LoginSaga);
}

export default UserSaga;
