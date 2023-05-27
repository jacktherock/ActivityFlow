import axiosClient from "./apiClient.js";

export const getActivity = (data) => {
    return axiosClient().get(`activity?date=${data}`).then(response => response.data);
}

export const getProfile = () => {
    return axiosClient().get(`self`).then(response => response.data);
}

export const updateProfile = () => {
    return axiosClient().get(`self`).then(response => response.data);
}