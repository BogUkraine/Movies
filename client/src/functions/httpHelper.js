const httpHelper = async (url, method, body, headers) => {
    try {
        const bodyJson = JSON.stringify(body);
        const response = await fetch(url, {
            method,
            body: bodyJson,
            headers: { "Content-Type": "application/json", ...headers }
        });
        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    } catch (error) {
        return error;
    }
}

export default httpHelper;