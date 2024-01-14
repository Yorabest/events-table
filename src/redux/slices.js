import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
    name: 'phone',
    initialState: [
  { "id": "id-1", "name": "Diluc Ragnvindr", "number": "+380639811184" },
  { "id": "id-2", "name": "Kaeya Alberich", "number": "+380992214500" },
  { "id": "id-3", "name": "Jean Gunnhildr", "number": "+380960403962" }
    ],
    reducers: {
        addNewContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            return state.filter((contact) => {
        return contact.id !== action.payload
      })
        }
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

export const { addNewContact, deleteContact } = phoneSlice.actions;
export const { changeFilter } = filterSlise.actions;