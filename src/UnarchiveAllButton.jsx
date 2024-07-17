import React from 'react';
import { getActivities, updateActivity } from './api';
import { Button } from '@mui/material';
import './css/app.css';


const UnarchiveAllButton = ({ fetchActivities }) => {
    const handleUnarchiveAll = async () => {
        const activities = await getActivities();
        await Promise.all(
            activities.map((activity) => updateActivity(activity.id, false))
        );
        fetchActivities();
    };
    return <Button variant="contained" color="secondary" onClick={handleUnarchiveAll}>Unarchive All Calls</Button>;
};

export default UnarchiveAllButton;
