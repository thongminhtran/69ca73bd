// ActivityDetail.jsx
import React, { useState, useEffect } from 'react';
import { getActivity } from './api';

const ActivityDetail = ({ callId }) => {
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getActivity(callId);
            setActivity(data);
        };
        fetchData();
    }, [callId]);

    if (!activity) return <div>Loading...</div>;

    return (
        <div>
            <h1>Activity Detail</h1>
            <p>From: {activity.from}</p>
            <p>To: {activity.to}</p>
            <p>Duration: {activity.duration} seconds</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ActivityDetail;
