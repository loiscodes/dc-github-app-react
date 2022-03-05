import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

class RepoCardComponent extends React.Component {
    render(){
    return(
<Card sx={{ maxWidth: 345 }} className={this.props.repoClassName}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {this.props.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.desc}
          </Typography>
        </CardContent>
        <CardActions>
            <Link href={this.props.repoUrl}>Repo</Link>
          <Link href={this.props.ownerUrl}>Owner</Link>
        </CardActions>
      </Card>
    )
}
}

export default RepoCardComponent;