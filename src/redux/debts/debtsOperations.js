import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDebtsList, addNewDebt } from '../../services/api/api'

export const getDebts = createAsyncThunk(
    'debts/getDebts',
    async (_, thunkAPI) => {
        try {
            const data = await getDebtsList();
            return data.data.response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

// export const addTodo = createAsyncThunk(
//     'todos/addTodo',
//     async (newTodo, thunkAPI) => {
//         try {
//             await addNewTodo(newTodo);

//         } catch (error) {
//             return thunkAPI.rejectWithValue('Something wrong :(');
//         }
//     }
// )