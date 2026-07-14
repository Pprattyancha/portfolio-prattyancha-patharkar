const BASE_URL = "https://portfolio-back-end-2-drj5.onrender.com/api";

export const apiRequest = async (endpoint, method = "GET", data = null) => {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });

        const result = await res.json();

        if (!res.ok) {
            throw new Error(result.detail || "Something went wrong");
        }

        return result;
    } catch (err) {
        console.error("API Error:", err.message);
        return null;
    }
};
export const apiGet = (url) => apiRequest(url, "GET");
export const apiPost = (url, data) => apiRequest(url, "POST", data);
export const apiPut = (url, data) => apiRequest(url, "PUT", data);
export const apiDelete = (url) => apiRequest(url, "DELETE");