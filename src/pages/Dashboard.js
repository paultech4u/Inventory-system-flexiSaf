import React from "react";
import { Box, Card, makeStyles, Typography } from "@material-ui/core";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" flex={1} p={10}>
      <Box display="flex" justifyContent="space-evenly">
        <Card className={classes.dashboardCard}>
          <Box p={10}>
            <Typography variant="h6">Orders Today</Typography>
            <Typography variant="h4">200</Typography>
          </Box>
        </Card>
        <Card className={classes.dashboardCard}>
          <Box p={10}>
            <Typography variant="h6">Pending Orders</Typography>
            <Typography variant="h4">30</Typography>
          </Box>
        </Card>
        <Card className={classes.dashboardCard}>
          <Box p={10}>
            <Typography variant="h6">Delivered Orders</Typography>
            <Typography variant="h4">100</Typography>
          </Box>
        </Card>
        <Card className={classes.dashboardCard}>
          <Box p={10}>
            <Typography variant="h6">Cancelled Orders</Typography>
            <Typography variant="h4">10</Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;

const useStyles = makeStyles(() => ({
  dashboardCard: {
    width: 300,
    maxWidth: 500,
  },
}));
