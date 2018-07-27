import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import PaginatedTable from "components/Table/PaginatedTable.jsx";

import Chartist from 'chartist';
import ChartistGraph from "react-chartist";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as Actions from 'reducers/actions'
import dateFormat from 'dateformat'

const mapStateToProps = (state, ownProps) => ({
  // dailyActivity: getDailyActivity(state, ownProps),
  activeDevice: state.analytics.displayingAnalytics,
  analyticsDevices: state.analytics.analyticsDeviceList,
  rawData: state.analytics[state.analytics.displayingAnalytics] ? state.analytics[state.analytics.displayingAnalytics].raw : [],
  allAnalytics: state.analytics, 
  dailyActivity: state.analytics[state.analytics.displayingAnalytics] ? state.analytics[state.analytics.displayingAnalytics].summary.hourBins : [],
  deviceDetails: state.devices
})


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;

  return (
    <Grid container>
      {displayChart(classes, props)}
      {devicesTable(classes, props)}
    </Grid>
  );
}

const devicesTable = (classes, props) => {

  const tableData = props.analyticsDevices.map(deviceID => {
    var summary = props.allAnalytics[deviceID].summary;
    return [props.deviceDetails[deviceID].Name, summary.count, convertHourToString(summary.mostActiveHour), dateFormat(summary.latest, "ddd, mmm dS, h:MM tt"), <Button onClick={() => props.selectDeviceToDisplay(deviceID)}> View </Button>]
  })
  
  return (<GridItem xs={12} sm={12} md={12}>
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>All Devices</h4>
        <p className={classes.cardCategoryWhite}>
          All Devices Reporting Analytics
        </p>
      </CardHeader>
      <CardBody>
        <Table
          tableHeaderColor="primary"
          tableHead={["Name", "Data Points", "Most Active Hour", "Last Reported",""]}
          tableData={tableData}
        />
      </CardBody>
    </Card>
  </GridItem>)

}

const displayChart = (classes, props) => (
  <Card chart>
    <CardHeader color="success">
      <ChartistGraph
        className="ct-chart"
        data={dailyActivitySchema(props.dailyActivity).data}
        type="Line"
        options={dailyActivitySchema(props.dailyActivity).options}
        listener={dailyActivitySchema().animation}
      />
    </CardHeader>

    <CardBody>
      <h4 className={classes.cardTitle}>{props.deviceDetails[props.activeDevice] ? props.deviceDetails[props.activeDevice].Name : ''}</h4>
      
      <CardHeader color="warning" style={{marginTop: 20}}>
        Raw Data Log
      </CardHeader>
      <PaginatedTable
        tableHead={["Date", "Time", "Control", "Value"]}
        tableData={props.rawData.map(dataEntry => (
          [dateFormat(dataEntry.timeStamp, "dddd, mmmm dS, yyyy"), dateFormat(dataEntry.timeStamp, "h:MM:ss tt"), dataEntry.controlID, dataEntry.controlValue]
        ))}
      />
    </CardBody>
    <CardFooter chart>
      <div className={classes.stats}>
        <AccessTime /> updated 4 minutes ago
      </div>
    </CardFooter>
  </Card>
)

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TableList)))


// ##############################
// // // Completed Tasks
// #############################

var delays = 80,
  durations = 500;

const dailyActivitySchema = (dailyActivity = []) => ({
  data: {
    labels: ["", "", "2am", "", "", "5am", "", "", "8am", "", "", "11am", "", "", "2pm", "", "", "5pm", "", "", "8pm", "", "", "11pm"],
    series: [dailyActivity]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: Math.max(...dailyActivity) + 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
});

const convertHourToString = (hr) => {
  const hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]
  return hours[hr]
}
