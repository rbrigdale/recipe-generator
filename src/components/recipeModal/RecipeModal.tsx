import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: '70%',
    height: '80%',
    overflow: 'scroll',
};

const imageStyle = {
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
};

interface IRecipeModalProps {
    open: boolean;
    close: () => void;
    recipeId: string;
}

interface IRecipeData {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
}

export default function RecipeModal(props: IRecipeModalProps) {
    const [recipe, setRecipe] = useState<IRecipeData | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.recipeId) {
            setLoading(true);
            fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.recipeId}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setRecipe(data.meals[0]);
                    setLoading(false);
                });
        }
    }, [props.recipeId]);

    return (
        <Modal
            open={props.open}
            onClose={props.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            {recipe?.strMeal}
                        </Typography>

                        <img src={recipe?.strMealThumb} style={imageStyle} />

                        <Typography variant="h6" sx={{ mt: 2 }}>
                            Ingredients:
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient1 && recipe.strMeasure1
                                ? `- ${recipe?.strIngredient1}: ${recipe.strMeasure1}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient2 && recipe.strMeasure2
                                ? `- ${recipe?.strIngredient2}: ${recipe.strMeasure2}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient3 && recipe.strMeasure3
                                ? `- ${recipe?.strIngredient3}: ${recipe.strMeasure3}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient4 && recipe.strMeasure4
                                ? `- ${recipe?.strIngredient4}: ${recipe.strMeasure4}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient5 && recipe.strMeasure5
                                ? `- ${recipe?.strIngredient5}: ${recipe.strMeasure5}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient6 && recipe.strMeasure6
                                ? `- ${recipe?.strIngredient6}: ${recipe.strMeasure6}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient7 && recipe.strMeasure7
                                ? `- ${recipe?.strIngredient7}: ${recipe.strMeasure7}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient8 && recipe.strMeasure8
                                ? `- ${recipe?.strIngredient8}: ${recipe.strMeasure8}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient9 && recipe.strMeasure9
                                ? `- ${recipe?.strIngredient9}: ${recipe.strMeasure9}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient10 && recipe.strMeasure10
                                ? `- ${recipe?.strIngredient10}: ${recipe.strMeasure10}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient11 && recipe.strMeasure11
                                ? `- ${recipe?.strIngredient11}: ${recipe.strMeasure11}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient12 && recipe.strMeasure12
                                ? `- ${recipe?.strIngredient12}: ${recipe.strMeasure12}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient13 && recipe.strMeasure13
                                ? `- ${recipe?.strIngredient13}: ${recipe.strMeasure13}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient14 && recipe.strMeasure14
                                ? `- ${recipe?.strIngredient14}: ${recipe.strMeasure14}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient15 && recipe.strMeasure15
                                ? `- ${recipe?.strIngredient15}: ${recipe.strMeasure15}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient16 && recipe.strMeasure16
                                ? `- ${recipe?.strIngredient16}: ${recipe.strMeasure16}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient17 && recipe.strMeasure17
                                ? `- ${recipe?.strIngredient17}: ${recipe.strMeasure17}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient18 && recipe.strMeasure18
                                ? `- ${recipe?.strIngredient18}: ${recipe.strMeasure18}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient19 && recipe.strMeasure19
                                ? `- ${recipe?.strIngredient19}: ${recipe.strMeasure19}`
                                : ''}
                        </Typography>
                        <Typography>
                            {recipe?.strIngredient20 && recipe.strMeasure20
                                ? `- ${recipe?.strIngredient20}: ${recipe.strMeasure20}`
                                : ''}
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            Instructions:
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {recipe?.strInstructions}
                        </Typography>
                    </>
                )}
            </Box>
        </Modal>
    );
}
