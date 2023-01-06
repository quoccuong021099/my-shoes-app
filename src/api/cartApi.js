import axiosClient from './axiosClient';

const cartApi = {
  getCart(token) {
    const url = '/cart';
    return axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  addItemCart(params, token) {
    const url = `/cart`;
    return axiosClient.post(
      url,
      { params },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  },
  delCartItem(id, token) {
    const url = `/cart/${id}`;
    return axiosClient.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default cartApi;
