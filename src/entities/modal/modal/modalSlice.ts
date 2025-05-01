import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalProps } from '@shared/ui';

interface ModalState {
  isOpen: boolean;
  modalProps: ModalProps | object;
}

const initialState: ModalState = {
  isOpen: false,
  modalProps: {},
};

/**
 * A slice of the Redux store for managing modal state.
 *
 * The `modalSlice` object contains reducers, action creators, and selectors
 * related to handling modal functionality, such as opening and closing modals
 * and accessing modal properties.
 *
 * @constant
 * @property {string} name The name of the slice, used as a namespace in the Redux store.
 * @property {Object} initialState The initial state structure for the modal management.
 * @property selectors Provides reusable functions to access specific parts
 * of the modal state.
 * - `selectIsModalOpen`: Determines if the modal is currently open.
 * - `selectModalProps`: Retrieves the properties or data associated with the modal.
 * @property reducers An object containing Redux reducers for managing
 * modal-related state updates.
 * - `openModal`: Sets the modal as open and assigns relevant modal properties using the payload.
 * - `closeModal`: Sets the modal as closed and clears modal properties.
 */

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  selectors: {
    selectIsModalOpen: (state) => state.isOpen,
    selectModalProps: (state) => state.modalProps,
  },
  reducers: {
    openModal(state, action: PayloadAction<ModalProps>) {
      state.isOpen = true;
      state.modalProps = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalProps = {};
    },
  },
});

export const { selectIsModalOpen, selectModalProps } = modalSlice.selectors;
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
