import { render, screen } from '@testing-library/react';
import RecipeList from './RecipeList';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedIngredientsReducer, {
    setSelectedIngredientData,
} from '../../reducers/selectedIngredientsReducer';

describe('RecipeList', () => {
    test('should render the message to add ingredients to the search field', () => {
        const store = configureStore({
            reducer: {
                selectedIngredients: selectedIngredientsReducer,
            },
        });

        render(
            <Provider store={store}>
                <RecipeList />
            </Provider>
        );
        const message = screen.getByText('Add ingredients to the search field');
        expect(message).toBeInTheDocument();
    });

    test('should render the message that no recipe was found for the given ingredients', async () => {
        const store = configureStore({
            reducer: {
                selectedIngredients: selectedIngredientsReducer,
            },
        });

        store.dispatch(
            setSelectedIngredientData([
                {
                    idIngredient: 1,
                    strIngredient: 'test',
                    strDescription: 'test',
                },
            ])
        );
        render(
            <Provider store={store}>
                <RecipeList />
            </Provider>
        );
        const message = await screen.findByText(
            'No recipe found for the given ingredients'
        );
        expect(message).toBeInTheDocument();
    });

    test('should render a recipe card when a recipe is found', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        meals: [
                            {
                                strMeal: 'chicken meal name',
                                strMealThumb: 'chicken',
                                idMeal: '1234',
                            },
                        ],
                    }),
            })
        );

        const store = configureStore({
            reducer: {
                selectedIngredients: selectedIngredientsReducer,
            },
        });

        store.dispatch(
            setSelectedIngredientData([
                {
                    idIngredient: 1,
                    strIngredient: 'chicken',
                    strDescription: 'chicken',
                },
            ])
        );
        render(
            <Provider store={store}>
                <RecipeList />
            </Provider>
        );
        const recipeCard = await screen.findByRole('img');
        expect(recipeCard).toBeInTheDocument();

        const mealName = await screen.getByText('chicken meal name');
        expect(mealName).toBeInTheDocument();
    });
});
