import Axios from "axios";
import { apiRoute } from "./setup";

const offers = {
  getAllOffers: async () => {
    try {
      const offers = await Axios.get(`${apiRoute}/offers`);
      return offers.data;
    } catch (err) {
      return err;
    }
  },
  createOffer: async offerData => {
    try {
      const newOffer = await Axios.post(`${apiRoute}/offers`, offerData);
      return newOffer.data;
    } catch (err) {
      return err;
    }
  }
};

export default offers;
