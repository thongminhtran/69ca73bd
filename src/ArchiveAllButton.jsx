import React from 'react';
import { getActivities, updateActivity } from './api';
import { Button } from '@mui/material';
import './css/app.css';

const ArchiveAllButton = ({ fetchActivities }) => {
    const handleArchiveAll = async () => {
        const activities = await getActivities();
        await Promise.all(
            activities.map((activity) => updateActivity(activity.id, true))
        );
        fetchActivities();
    };

    return <Button variant="contained" color="primary" onClick={handleArchiveAll}>Archive All Calls</Button>;
};

export default ArchiveAllButton;
