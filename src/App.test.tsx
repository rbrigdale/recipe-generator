import { render, screen } from '@testing-library/react';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import selectedIngredientsReducer from './reducers/selectedIngredientsReducer';
import { Provider } from 'react-redux';

test('renders page', () => {
    const store = configureStore({
        reducer: {
            selectedIngredients: selectedIngredientsReducer,
        },
    });

    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const linkElement = screen.getByText(/Recipe Generator/i);
    expect(linkElement).toBeInTheDocument();
});
