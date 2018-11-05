import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import {chartDataBar, chartOptionsBar, chartDataDoughnut, chartDataDoughnutGender, chartOptionsDoughnut} from './myCharts.js';
import {StyledCard} from './myCards.js';
import {HorizontalBar as Bar, Doughnut} from 'react-chartjs-2'; 

const styles = {

    gridcontainer: {
        margin: 'auto',
        width: '90%',
    },
    gridcardscontainer: {
        margin: '10px 10px 10px 10px',
    },
    gridContainerChart: {
        margin: '30px 30px 30px 30px',
    },
    cardmauve: {
        background: "rgb(255,215,189)",
    },
    cardpink: {
        background: "rgb(254,225,237)",
    },
    cardblue: {
        background: "rgb(170,227,255)",
    },
    cardgreen: {
        background: "rgb(218,255,238)",
    },
    chart: {
        border: '1px solid rgb(211,211,211)',
        borderRadius: '25px',
    },
    doughnut: {
        border: "solid blue",
    },
    paperChartTitle: {
        fontWeight: 'bold',
    },
};

class MyTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { activeTabIndex: 0 };
    }

    handleChange = (event, value) => {
        this.setState({ activeTabIndex : value });
      };

    render() {
        return (
            <Grid container >
            <Tabs value={this.state.activeTabIndex} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
                <Tab label="AGE" />
                <Tab label="GENDER" />
            </Tabs>

            {this.state.activeTabIndex === 0 && <Doughnut data={chartDataDoughnut} options={chartOptionsDoughnut} /> }
            {this.state.activeTabIndex === 1 && <Doughnut data={chartDataDoughnutGender} options={chartOptionsDoughnut} />}
            </Grid>

        );
    }


}

function Page(props) {
  const { classes } = props;
   
  return (
    <div className={classes.root}>
        <Grid container className={classes.gridcontainer}>  
            <Grid container className={classes.gridcardscontainer}> 
                <StyledCard cardClasses={[classes.cardmauve]} cardTitle='TICKETS' cardText='65k' cardFooter=' 8% less than last month' arrow='down'/>
                <StyledCard cardClasses={[classes.cardpink]} cardTitle='ATTENDEES'cardText='6.1k' cardFooter=' 12% less than last month' arrow='down'/>
                <StyledCard cardClasses={[classes.cardblue]} cardTitle='REVENUE' cardText='23.5k' cardSubtitle='SAR' cardFooter=' 20% more than last month' arrow='up'/>
                <StyledCard cardClasses={[classes.cardgreen]} cardTitle='GENDER RATIO' cardText='68.6%' cardSubtitle='FEMALE' cardFooter=' Female booking up by 12.5%' arrow='up'/>
            </Grid>
            <Grid className={classes.chart} item xs={6}>
                <Grid container className={classes.gridContainerChart}>
                    <Paper className={classes.paperChartTitle} elevation={0}>Sales by Demographic</Paper>
                    <MyTabs classes={[classes]}></MyTabs>   
                </Grid>             
            </Grid>
            <Grid className={classes.chart} item xs={6}>
                <Grid container className={classes.gridContainerChart}>
                    <Paper className={classes.paperChartTitle} elevation={0}>Sales by Category</Paper>
                    <Bar data={chartDataBar} options={chartOptionsBar} type='horizontalBar' />
                </Grid>
            </Grid>
        </Grid>
    </div>  
  );
}

var StyledPage = withStyles(styles)(Page);

export {StyledPage};
