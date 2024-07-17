import React from 'react';
import { updateActivity } from './api';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';
import './css/app.css';

const ActivityFeed = ({ activities, fetchActivities }) => {
    const handleArchive = async (id) => {
        await updateActivity(id, true);
        fetchActivities();
    };

    return (
        <Box>
            <Box display="flex" justifyContent="center">
                <Typography variant="h6" gutterBottom>Activity Feed</Typography>
            </Box>
            <List className="activity-list">
                {activities.filter(activity => !activity.is_archived).map((activity) => (
                    <ListItem key={activity.id} className="activity-item" divider>
                        <ListItemText
                            primary={`${activity.from} tried to call on ${activity.to}`}
                            secondary={`Duration: ${activity.duration} seconds`}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleArchive(activity.id)}>
                            Archive
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ActivityFeed;
