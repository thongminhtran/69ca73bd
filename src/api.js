// api.js
const BASE_URL = 'https://aircall-backend.onrender.com';

export const getActivities = async () => {
    const response = await fetch(`${BASE_URL}/activities`);
    if (!response.ok) {
        throw new Error('Failed to fetch activities');
    }
    const data = await response.json();
    return data;
};

export const getActivity = async (callId) => {
    const response = await fetch(`${BASE_URL}/activities/${callId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch activity');
    }
    const data = await response.json();
    return data;
};

export const updateActivity = async (callId, isArchived) => {
    try {
        const response = await fetch(`${BASE_URL}/activities/${callId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ is_archived: isArchived }),
        });
        const responseText = await response.text();
        // console.log('Server response text:', responseText);
        if (!response.ok) {
            throw new Error(`Failed to update activity: ${responseText}`);
        }

        // If the response is plain text, return an appropriate object
        return { message: responseText };
    } catch (error) {
        console.error('Error updating activity:', error);
        throw error;
    }
};

export const resetActivities = async () => {
    await fetch(`${BASE_URL}/reset`, {
        method: 'PATCH',
    });
};
