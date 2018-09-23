import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { icons } from '../GarmentIcons.js';

const styles = {
  garmentCircle: {
    marginTop: '20px',
    height: '80px',
    width: '80px',
    backgroundColor: 'white',
    border: "1px solid #E2E2E2",
    
    borderRadius: '100px',
  },
  iconActiveColor: {
    backgroundColor: '#7A98E7',
  },
  icon: {
    transform: 'translate(162%,-50%)',
    top: '50%',
    left: '-277%',
    position: 'relative',
    fill: 'white',
  },
  caption: {
    marginTop: '10px',
    width: '80px',
    marginBottom: '20px',
  },
};

class AddClothingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <div className={[classes.garmentCircle, (this.props.active ? classes.iconActiveColor : null)].join(' ')}>
          <img className={classes.icon} src={ icons[this.props.type] } alt="logo" />
        </div>
        <Typography variant="caption" align="center" className={classes.caption}> {this.props.name} </Typography>
      </React.Fragment>
    );
  }
}

AddClothingPage.proptypes = {

}

export default withStyles(styles)(AddClothingPage);
