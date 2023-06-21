import { AppBar, Toolbar, Typography } from '@mui/material';
import { APP_NAME } from '../../utils/utils';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">{APP_NAME}</Typography>
            </Toolbar>
        </AppBar>
    );
}
