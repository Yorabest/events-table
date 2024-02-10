import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

axios.defaults.baseURL = 'https://65c107d6dc74300bce8d3214.mockapi.io/'

export const fetchContacts = createAsyncThunk("phone/fetchContacts", async (_, thunkAPI) => {
    try {
          const res = await axios.get('/contact')
        return res.data
    } catch (error) {
         thunkAPI.rejectWithValue('Uoops, somethink wrong')
    }
})

export const addNewContact = createAsyncThunk('phone/addNewContact', async ({ name, number }, thunkAPI) => {
    try {
         const res = await axios.post('contact', { name, number })
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uoops, somethink wrong')
    }
})

export const deleteContact = createAsyncThunk('phone/deleteContact', async (contactId, thunkAPI) => {
     try {
        const res = await axios.delete(`contact/${contactId}`)
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue('Uops')
    }
})