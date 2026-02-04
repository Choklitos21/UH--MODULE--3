const API = `http://localhost:4001`

export async function getTasks() {
    try {
        const response = await fetch(`${API}/tasks`);
        const data = await response.json();
        console.log(data);

        return data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export async function findOneTask(taskId) {
    try {
        const response = await fetch(`${API}/tasks/${taskId}`);
        const data = await response.json();
        console.log(data);

        console.log("Task not found")
        return data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export async function saveTask(task) {
    try {
        const response = await fetch(`${API}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const responseData = await response.json();
        console.log('Success:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteTask(taskId) {
    try {
        const response = await fetch(`${API}/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json();
        console.log('Success:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updateTask(taskId, body) {
    try {
        const response = await fetch(`${API}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log('Updated:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
