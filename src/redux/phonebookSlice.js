import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

// const extraActions = [addContact, deleteContact, fetchContacts];
// function createExtraActions(type) {
//   return extraActions.map(action => {
//     return action[type];
//   });
// }

const phonebookInititalState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInititalState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
    // .addMatcher(isAnyOf(...createExtraActions('pending'), handlePending))
    // .addMatcher(isAnyOf(...createExtraActions('rejected'), handleRejected))
  },
});

export const { setFilter } = contactsSlice.actions;
export const phonebookReducer = contactsSlice.reducer;
