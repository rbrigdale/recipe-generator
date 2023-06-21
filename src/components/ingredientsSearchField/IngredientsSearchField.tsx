import { TextField, Autocomplete, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIngredientData } from '../../reducers/selectedIngredientsReducer';
import { AppDispatch, RootState } from '../..';

export interface IIngredientData {
    idIngredient: number;
    strIngredient: string;
    strDescription: string;
}

export default function IngredientsSearchField() {
    const [ingredientData, setIngredientData] = useState<IIngredientData[]>([]);
    const selectedIngredients = useSelector(
        (state: RootState) => state.selectedIngredients
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/list.php?i=list')
            .then((response) => response.json())
            .then((data) => {
                setIngredientData(data.meals);
            });
    }, []);

    return (
        <Stack spacing={3}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={ingredientData}
                defaultValue={selectedIngredients.selectedIngredients}
                getOptionLabel={(option) =>
                    option.strIngredient ? option.strIngredient : ''
                }
                filterSelectedOptions
                onChange={(event, value) =>
                    dispatch(setSelectedIngredientData(value))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Ingredient Search"
                        placeholder="Ingredients"
                    />
                )}
            />
        </Stack>
    );
}
