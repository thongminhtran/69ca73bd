import React from 'react';
import { updateActivity } from './api';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';
import './css/app.css';

const ArchivedActivities = ({ activities, fetchActivities }) => {
    const handleUnarchive = async (id) => {
        await updateActivity(id, false);
        fetchActivities();
    };

    return (
        <Box>
            <Box display="flex" justifyContent="center">
                <Typography variant="h6" gutterBottom>Archived Activities</Typography>
            </Box>
            <List className="activity-list">
                {activities.filter(activity => activity.is_archived).map((activity) => (
                    <ListItem key={activity.id} className="activity-item" divider>
                        <ListItemText
                            primary={`${activity.from} tried to call on ${activity.to}`}
                            secondary={`Duration: ${activity.duration} seconds`}
                        />
                        <Button variant="contained" color="secondary" onClick={() => handleUnarchive(activity.id)}>
                            Unarchive
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ArchivedActivities;
