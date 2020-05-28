const httpHelper = async (url, method, body, headers) => {
    try {
        const bodyJson = JSON.stringify(body);
        const response = await fetch(url, {
            method,
            body: bodyJson,
            headers: { "Content-Type": "application/json", ...headers }
        });
        const data = await response.json();
        console.log('response.ok', response.ok);
        return {data, isOk: response.ok};
    } catch (error) {
        return error;
    }
}

export default httpHelper;