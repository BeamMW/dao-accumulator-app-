import produce from 'immer';
import { ActionType, createReducer } from 'typesafe-actions';
import { IDAOAccum } from '@app/shared/interface';
import * as actions from './actions';

type Action = ActionType<typeof actions>;

const initialState: IDAOAccum = {
  params: [],
  balance: null,
  predict: 0,
  isLoading: false,
  isNph: 0,
};

const reducer = createReducer<any, Action>(initialState)
  .handleAction(actions.setAppParams, (state, action) => produce(state, (nexState) => {
    nexState.params = action.payload;
  }))
  .handleAction(actions.setUserView, (state, action) => produce(state, (nexState) => {
    nexState.balance = action.payload;
  }))
  .handleAction(actions.setPredict, (state, action) => produce(state, (nexState) => {
    nexState.predict = action.payload;
  }))
  .handleAction(actions.setLoading, (state, action) => produce(state, (nexState) => {
    nexState.predict = action.payload;
  }))
  .handleAction(actions.setIsNph, (state, action) => produce(state, (nexState) => {
    nexState.isNph = action.payload;
  }));
export { reducer as MainReducer };
