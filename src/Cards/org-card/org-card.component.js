import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

function RepoCardComponent(props) {
    return(
        <Card sx={{ maxWidth: 345 }} className={props.orgClassName}>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.imgSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
            <Link to={`org/repo/${props.name}`}>List of Repos</Link>
        </CardActions>
      </Card>
    )
}

export default RepoCardComponent;