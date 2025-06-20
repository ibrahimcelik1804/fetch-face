import { axiosClient } from './instance';

export const getRequest = async (URL, params) => {
  const response = await axiosClient.get(URL, { params });
  return response;
};

export const postRequest = async (URL, payload) => {
  const response = await axiosClient.post(URL, payload);
  return response;
};

export const putRequest = async (URL, payload) => {
  const response = await axiosClient.put(URL, payload);
  return response;
};

export const patchRequest = async (URL, payload) => {
  const response = await axiosClient.patch(URL, payload);
  return response;
};

export const deleteRequest = async (URL, payload) => {
  const response = await axiosClient.delete(URL, payload);
  return response;
};
