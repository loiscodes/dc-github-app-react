import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function RepoCardComponent(props) {
    return(
        <Card sx={{ maxWidth: 345 }} className={props.repoClassName}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
            <Link href={props.repoUrl}>Repo</Link>
          <Link href={props.ownerUrl}>Owner</Link>
        </CardActions>
      </Card>
    )
}

export default RepoCardComponent;