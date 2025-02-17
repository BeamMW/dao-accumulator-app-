export enum MainActionsTypes {
  SET_VIEW_PARAMS = '@@MAIN/SET_VIEW_PARAMS',
  SET_USER_VIEW = '@@MAIN/SET_USER_VIEW',
  SET_USER_GET_YIELD = '@@MAIN/SET_USER_GET_YIELD',
  SET_IS_LOADING = '@@MAIN/SET_IS_LOADING',
  SET_IS_NPH = '@@MAIN/SET_IS_NPH',

  LOAD_PARAMS = '@@MAIN/LOAD_PARAMS',
  LOAD_PARAMS_SUCCESS = '@@MAIN/LOAD_PARAMS_SUCCESS',
  LOAD_PARAMS_FAILURE = '@@MAIN/LOAD_PARAMS_FAILURE',
  LOAD_USER_VIEW = '@@MAIN/LOAD_USER_VIEW',
  LOAD_USER_VIEW_SUCCESS = '@@MAIN/LOAD_USER_VIEW_SUCCESS',
  LOAD_USER_VIEW_FAILURE = '@@MAIN/LOAD_USER_VIEW_FAILURE',
  ADD_USER_PREPHASE = '@@MAIN/ADD_USER_PREPHASE',
  ADD_USER_PREPHASE_SUCCESS = '@@MAIN/ADD_USER_PREPHASE_SUCCESS',
  ADD_USER_PREPHASE_FAILURE = '@@MAIN/ADD_USER_PREPHASE_FAILURE',
  USER_UPDATE = '@@MAIN/USER_UPDATE',
  USER_UPDATE_SUCCESS = '@@MAIN/USER_UPDATE_SUCCESS',
  USER_UPDATE_FAILURE = '@@MAIN/USER_UPDATE_FAILURE',
  USER_GET_YIELD = '@@MAIN/USER_GET_YIELD',
  USER_GET_YIELD_SUCCESS = '@@MAIN/USER_GET_YIELD_SUCCESS',
  USER_GET_YIELD_FAILURE = '@@MAIN/USER_GET_YIELD_FAILURE',
}
