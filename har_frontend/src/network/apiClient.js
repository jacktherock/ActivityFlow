import axios from "axios";

const axiosClient = () => {
    if (localStorage.getItem("idToken")) {
        const idToken = localStorage.getItem("idToken");
        return axios.create({
            baseURL: "http://127.0.0.1:5000/",
            headers: { token: `${idToken}` },
        });
    }
};

export default axiosClient;