import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import { Pie } from 'react-chartjs';

const styles = {
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
};

const PieChart = ({ data, label, translate, classes }) => (
    <div className={classes.main}>
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                {translate('pos.dashboard.'+label)}
            </Typography>
            <Typography variant="headline" component="h2">
                <Pie data={data} width="200" height="250" />
            </Typography>
        </Card>
    </div>
);

export default translate(withStyles(styles)(PieChart));
