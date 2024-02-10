import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact } from "./operations";

const phoneSlice = createSlice({
    name: 'phone',
    initialState:  {
    items: [],
    isLoading: false,
    error: null
  },
    // reducers: {
    //     addNewContact(state, action) {
    //         state.push(action.payload)
    //     },
    //     deleteContact(state, action) {
    //         return state.filter((contact) => {
    //     return contact.id !== action.payload
    //   })
    //     }
    // }
    extraReducers(builder) {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
         const idx = state.items.findIndex((task) => task.id === action.payload);
        state.items.splice(idx, 1)
        })
          .addMatcher(isAnyOf(fetchContacts.pending, addNewContact.pending, deleteContact.pending), (state) => {
        state.isLoading = true;
      })
    .addMatcher(isAnyOf(fetchContacts.rejected ,addNewContact.rejected ,deleteContact.rejected),(state, action) => {
        state.error = action.payload
    })
    .addMatcher(isAnyOf(fetchContacts.fulfilled, addNewContact.fulfilled, deleteContact.fulfilled),(state) => {
        state.isLoading = false;
        state.error = null;
      })
    }
})

const filterSlise = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter(state, action) {
           return state = action.payload
        }
    }
})

export const phoneReducer = phoneSlice.reducer;
export const filterReducer = filterSlise.reducer;

// export const { addNewContact, deleteContact } = phoneSlice.actions;
export const { changeFilter } = filterSlise.actions;