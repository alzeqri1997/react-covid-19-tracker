import React from 'react';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';


const Info = ({ data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) return <CircularProgress className={styles.loading}/>
    return (
        <div className={styles.container}>
            <Typography gutterBottom variant="h4" component="h2">Global</Typography>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19"
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19"
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths from COVID-19"
                />
            </Grid>
        </div>
    )
}

export default Info;