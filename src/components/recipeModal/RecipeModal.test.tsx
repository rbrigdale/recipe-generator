import { render, screen, waitFor } from '@testing-library/react';
import RecipeModal from './RecipeModal';

describe('RecipeModal', () => {
    test('should render the recipe modal', () => {
        render(<RecipeModal open={true} close={() => {}} recipeId="52772" />);
        const modal = screen.getByRole('presentation');
        expect(modal).toBeInTheDocument();
    });

    test('should not render the recipe modal when it is closed', () => {
        render(<RecipeModal open={false} close={() => {}} recipeId="52772" />);
        const modal = screen.queryByRole('presentation');
        expect(modal).not.toBeInTheDocument();
    });

    test('should test api call', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        meals: [
                            {
                                idMeal: '52772',
                                strMeal: 'Beef and Mustard Pie',
                                strInstructions:
                                    'This is a test for instructions',
                                strMealThumb: '',
                                strIngredient1: 'Beef',
                                strIngredient2: 'Mustard',
                                strMeasure1: '1 Steak',
                                strMeasure2: '1bsp',
                            },
                        ],
                    }),
            })
        );

        render(<RecipeModal open={true} close={() => {}} recipeId="52772" />);

        await waitFor(
            () => screen.getByText('Beef and Mustard Pie') !== undefined
        );

        const mealName = await screen.getByText('Beef and Mustard Pie');
        expect(mealName).toBeInTheDocument();

        const instruction = await screen.getByText(
            'This is a test for instructions'
        );
        expect(instruction).toBeInTheDocument();

        const ingredient1 = await screen.getByText('- Beef: 1 Steak');
        expect(ingredient1).toBeInTheDocument();

        const ingredient2 = await screen.getByText('- Mustard: 1bsp');
        expect(ingredient2).toBeInTheDocument();
    });
});
