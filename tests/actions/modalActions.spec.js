import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { openModal, closeModal } from 'actions/modalActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  isCreateRideModalOpen: false,
  isRideDetailModalOpen: false,
  isRequestOperationModalOpen: false,
};

describe('MODAL ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch OPEN_MODAL actions', () => {
    // actions expected to be fired
    const expectedActions = [
      { type: 'OPEN_MODAL', modalName: 'CreateRideModal'}
    ];

    const store = mockStore(initialState);
    store.dispatch(openModal('CreateRideModal'))
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should dispatch CLOSE_MODAL actions', () => {
    // actions expected to be fired
    const expectedActions = [
      { 
        type: "CLOSE_MODAL",
        modalName: 'CreateRideModal'
      }
    ];

    const store = mockStore(initialState);
    store.dispatch(closeModal('CreateRideModal'))
    expect(store.getActions()).toEqual(expectedActions);
  });
});