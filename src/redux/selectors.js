import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.phone.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, currentFilter) => {
     return contacts.filter(({name}) => {
            return name.toLowerCase().indexOf(currentFilter.toLowerCase()) > -1
       })
})
