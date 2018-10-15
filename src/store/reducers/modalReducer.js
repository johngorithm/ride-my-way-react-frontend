import {
  OPEN_MODAL,
  CLOSE_MODAL
} from 'constants';

const initialState = {
  isCreateRideModalOpen: false,
  isRideDetailModalOpen: false,
  isRequestOperationModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (true) {
    case (action.type === OPEN_MODAL && action.modalName === 'CreateRideModal'):
      return {
        ...state,
        isCreateRideModalOpen: true
      };

    case (action.type === OPEN_MODAL && action.modalName === 'RideDetailModal'):
      return {
        ...state,
        isRideDetailModalOpen: true
      };


    case (action.type === OPEN_MODAL && action.modalName === 'ConfirmRequestOperationModal'):
      return {
        ...state,
        isRequestOperationModalOpen: true
      };

    case (action.type === CLOSE_MODAL && action.modalName === 'CreateRideModal'):
      return {
        ...state,
        isCreateRideModalOpen: false
      };

    case (action.type === CLOSE_MODAL && action.modalName === 'RideDetailModal'):
      return {
        ...state,
        isRideDetailModalOpen: false
      };


    case (action.type === CLOSE_MODAL && action.modalName === 'ConfirmRequestOperationModal'):
      return {
        ...state,
        isRequestOperationModalOpen: false
      };


    default:
      return state;
  }
};

export default modalReducer;
