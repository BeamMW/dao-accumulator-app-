import { createSelector } from 'reselect';
import { AppState } from '../../../shared/interface';

const selectMain = (state: AppState) => state.main;

export const selectCurrentBalance = () => createSelector(selectMain, (state) => state.balance);
export const selectPredict = () => createSelector(selectMain, (state) => state.predict);
export const selectIsLoading = () => createSelector(selectMain, (state) => state.isLoading);
export const selectIsNph = () => createSelector(selectMain, (state) => state.isNph);
