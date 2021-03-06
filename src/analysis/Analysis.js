import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { Title } from 'react-admin';
import { get } from '../authProvider'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });
  
  class SimpleTabs extends React.Component {
    state={
      value: 0,
      results:[]
    };

    componentDidMount(props){
        get('space/spaces')
            .then(({results}) => {
                this.setState({results});
        });
    };
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value, results } = this.state;
      const spaceTabs=[]
      for (let space of results) {
        spaceTabs.push(
          <Tab key={space.name} label={'Space: '+space.name}/>
        )
      }
      return (
        <Card>
          <Title title='Analysis' />
          <div className={classes.root}>
            <Tabs value={value} onChange={this.handleChange}>
              {spaceTabs}
            </Tabs>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Notebook" />
              <Tab label="PiFlow" />
            </Tabs>
            {value === 0 && <TabContainer><iframe src="http://10.0.88.41:9995/#/notebook/2DMPKVR1U" width="100%" height="1100px" frameBorder="0"/></TabContainer>}
            {value === 1 && <TabContainer><iframe src="http://10.0.88.41:8006/piflowwebui/" width="100%" height="1100px" scrolling="no" frameBorder="0" /></TabContainer>}
          </div>
        </Card>
      );
    }
  }
  
  SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleTabs);