import { createSlice } from '@reduxjs/toolkit';
import { IIngredientData } from '../components/ingredientsSearchField/IngredientsSearchField';

interface IState {
    selectedIngredients: IIngredientData[];
}

const initialState: IState = {
    selectedIngredients: [],
};

const ingredientSlice = createSlice({
    name: 'selectedIngredientData',
    initialState,
    reducers: {
        setSelectedIngredientData: (state, action) => {
            state.selectedIngredients = action.payload;
        },
    },
});

export const { setSelectedIngredientData } = ingredientSlice.actions;

export default ingredientSlice.reducer;
