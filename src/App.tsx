import './App.css';
import Header from './components/header/Header';
import { Box, Container } from '@mui/material';
import IngredientsSearchField from './components/ingredientsSearchField/IngredientsSearchField';
import RecipeList from './components/recipeList/RecipeList';

function App() {
    return (
        <div className="App">
            <Header />

            <Container maxWidth="md">
                <Box m={2} pt={2}>
                    <IngredientsSearchField />
                </Box>

                <Box m={2} pt={2}>
                    <RecipeList />
                </Box>
            </Container>
        </div>
    );
}

export default App;
