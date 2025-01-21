import axios from "axios";
const removeOrderItemFromServer = (orderId: number) => {
  return axios.delete(`orders/${orderId}`);
};

export { removeOrderItemFromServer };
