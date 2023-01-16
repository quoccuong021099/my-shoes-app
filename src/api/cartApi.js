import axiosClient from './axiosClient';

const cartApi = {
  getCart() {
    const url = '/cart';
    return axiosClient.get(url);
  },
  addItemCart(params) {
    const url = `/cart`;
    return axiosClient.post(url, params);
  },
  delCartItem(id) {
    const url = `/cart/${id}`;
    return axiosClient.delete(url);
  },
};

export default cartApi;
