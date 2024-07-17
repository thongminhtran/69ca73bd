import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed.jsx';
import ArchivedActivities from './ArchivedActivities.jsx';
import ArchiveAllButton from './ArchiveAllButton.jsx';
import UnarchiveAllButton from './UnarchiveAllButton.jsx';
import { Container, Box, Tabs, Tab, AppBar } from '@mui/material';
import './css/app.css';
import './css/body.css';
import './css/header.css';
import {getActivities} from "./api";

const App = () => {
    const [tab, setTab] = useState(0);
    const [activities, setActivities] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(Date.now()); // Add this line

    const fetchActivities = async () => {
        const data = await getActivities();
        setActivities(data);
        setLastUpdated(Date.now());
    };

    useEffect(() => {
        fetchActivities();
    }, [lastUpdated]);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container className="container">
            <Header />
            <Box className="tab-container">
                <AppBar position="static" color="default">
                    <Tabs value={tab} onChange={handleChange} aria-label="activity tabs" indicatorColor="primary">
                        <Tab label="Inbox" />
                        <Tab label="All calls" />
                    </Tabs>
                </AppBar>
                {tab === 0 && (
                    <Box>
                        <Box className="button-container">
                            <ArchiveAllButton fetchActivities={fetchActivities}  />
                        </Box>
                        <ActivityFeed activities={activities} fetchActivities={fetchActivities} />
                    </Box>
                )}
                {tab === 1 && (
                    <Box>
                        <Box className="button-container">
                            <UnarchiveAllButton fetchActivities={fetchActivities} />
                        </Box>
                        <ArchivedActivities activities={activities} fetchActivities={fetchActivities} />
                    </Box>
                )}
            </Box>
        </Container>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
