import {Card, CardMedia, CardContent, Typography} from "@mui/material";

export default function About() {
    return (
        <Card sx={{maxWidth: 600, mx: 'auto', mt: '2rem'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Soundboards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    React demo project used in programming courses at Karel de Grote Hogeschool
                </Typography>
            </CardContent>
        </Card>
    );
}
