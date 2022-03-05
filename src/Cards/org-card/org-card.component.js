import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

class OrgCardComponent extends React.Component {
    render(){
    return(
<Card sx={{ maxWidth: 345 }} className={this.props.orgClassName}>
        <CardMedia
          component="img"
          alt={this.props.name}
          height="140"
          image={this.props.imgSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.desc}
          </Typography>
        </CardContent>
        <CardActions>
            <Link to={`org/repo/${this.props.name}`}>List of Repos</Link>
        </CardActions>
      </Card>
    )
}
}

export default OrgCardComponent;