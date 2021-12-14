import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	timeout: process.env.REACT_APP_API_TIMEOUT,
	responseType: 'json',
});

const httpClient = async <T>(options: AxiosRequestConfig) => {
	return axiosInstance(options)
		.then((response: AxiosResponse<T>) => {
			return response.data;
		}).
		catch((error: any) => {
			return Promise.reject(error.response || error.message);
		});
};

export default httpClient; 
