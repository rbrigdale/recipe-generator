import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import { useEffect, useState } from 'react';
import { getCommonElements } from '../../utils/utils';
import RecipeModal from '../recipeModal/RecipeModal';

interface IMeal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export default function RecipeList() {
    const selectedIngredients = useSelector(
        (state: RootState) => state.selectedIngredients
    );
    const [recipesToDisplay, setRecipesToDisplay] = useState<IMeal[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [recipeId, setRecipeId] = useState('');

    useEffect(() => {
        const urls: string[] = [];
        selectedIngredients.selectedIngredients.forEach((ingredient) => {
            urls.push(
                `https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient.strIngredient}`
            );
        });

        if (selectedIngredients.selectedIngredients.length === 0) {
            setRecipesToDisplay([]);
        }

        Promise.all(
            urls.map((url) =>
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => data.meals)
            )
        ).then((data) => {
            if (data.length > 0) {
                setRecipesToDisplay(getCommonElements(data));
            }
        });
    }, [selectedIngredients]);

    return (
        <>
            {recipesToDisplay.length === 0 ? (
                <Typography variant="h5" align="center">
                    {selectedIngredients.selectedIngredients.length === 0
                        ? 'Add ingredients to the search field'
                        : 'No recipe found for the given ingredients'}
                </Typography>
            ) : (
                <Stack spacing={2}>
                    {recipesToDisplay.map((recipe) => (
                        <Card sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={recipe.strMealThumb}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {recipe.strMeal}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            setModalOpen(true);
                                            setRecipeId(recipe.idMeal);
                                        }}
                                    >
                                        Show Recipe
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    ))}
                </Stack>
            )}

            <RecipeModal
                recipeId={recipeId}
                open={modalOpen}
                close={() => setModalOpen(false)}
            />
        </>
    );
}
