import { OPEN_MODAL, CLOSE_MODAL } from 'constants'

export const openModal = (modalName) => ({
  type: OPEN_MODAL,
  modalName: modalName
});

export const closeModal = (modalName) => ({
  type: CLOSE_MODAL,
  modalName
});