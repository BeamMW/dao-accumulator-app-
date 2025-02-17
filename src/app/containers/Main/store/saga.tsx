import { call, put, takeLatest } from 'redux-saga/effects';
import {
  UserGetYield,
  UserLockPrePhase, UserUpdate, UserView, UserViewDeployd, ViewParams,
} from '@core/api';
import { IBalanceFull, IUserView, IViewParams } from '@app/shared/interface';
import { toast } from 'react-toastify';
import { actions } from '.';

export function* loadParamsSaga(
  action: ReturnType<typeof actions.loadAppParams.request>,
): Generator {
  try {
    const params = (yield call(ViewParams, action.payload ? action.payload : null)) as IViewParams;
    yield put(actions.setAppParams(params));
    yield put(actions.setLoading(true));
  } catch (e) {
    yield put(actions.loadAppParams.failure(e));
  }
}
export function* loadUserView(
  action: ReturnType<typeof actions.loadUserView.request>,
): Generator {
  try {
    const balance = (yield call(UserView, action.payload ? action.payload : null)) as IBalanceFull;
    yield put(actions.setUserView(balance));
  } catch (e) {
    yield put(actions.loadUserView.failure(e));
  }
}
export function* addUserLockPrePhase(
  action: ReturnType<typeof actions.addUserPrePhase.request>,
): Generator {
  try {
    // @ts-ignore
    const params = (yield call(UserLockPrePhase, action.payload ? action.payload : null));
  } catch (e) {
    console.log(e);
    if (e === 'pre-phase is over') {
      toast('Pre period is end, waiting farm period for withdraw');
    }
    yield put(actions.addUserPrePhase.failure(e));
  }
}
export function* userUpdate(
  action: ReturnType<typeof actions.userUpdate.request>,
): Generator {
  try {
    // @ts-ignore
    const params = (yield call(UserUpdate, action.payload ? action.payload : null));
  } catch (e) {
    console.error(e);
    yield put(actions.userUpdate.failure(e));
  }
}
export function* userGetYield(
  action: ReturnType<typeof actions.userGetYield.request>,
): Generator {
  try {
    // @ts-ignore
    const res = (yield call(UserGetYield, action.payload ? action.payload : null));
    yield put(actions.setPredict(res.res.reward));
  } catch (e) {
    console.error(e);
    yield put(actions.userGetYield.failure(e));
  }
}

function* mainSaga() {
  yield takeLatest(actions.loadAppParams.request, loadParamsSaga);
  yield takeLatest(actions.loadUserView.request, loadUserView);
  yield takeLatest(actions.addUserPrePhase.request, addUserLockPrePhase);
  yield takeLatest(actions.userUpdate.request, userUpdate);
  yield takeLatest(actions.userGetYield.request, userGetYield);
}

export default mainSaga;
