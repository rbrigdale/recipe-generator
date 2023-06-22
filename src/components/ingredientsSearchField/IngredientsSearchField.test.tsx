import { render, screen } from '@testing-library/react';
import IngredientsSearchField from './IngredientsSearchField';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedIngredientsReducer from '../../reducers/selectedIngredientsReducer';

describe('IngredientsSearchField', () => {
    test('should render the ingredient search field', () => {
        const store = configureStore({
            reducer: {
                selectedIngredients: selectedIngredientsReducer,
            },
        });

        render(
            <Provider store={store}>
                <IngredientsSearchField />
            </Provider>
        );
        const searchField = screen.getByPlaceholderText('Ingredients');
        expect(searchField).toBeInTheDocument();
    });
});
