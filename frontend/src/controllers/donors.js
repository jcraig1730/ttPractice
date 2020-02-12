import Axios from "axios";
import { apiRoute } from "./setup";

const donors = {
  getDonor: async id => {
    try {
      const donor = await Axios.get(`${apiRoute}/accounts/donors/${id}`);
      return donor.data;
    } catch (err) {
      return err;
    }
  },

  createDonor: async donorInfo => {
    try {
      const newDonor = await Axios.post(
        `${apiRoute}/accounts/donors`,
        donorInfo
      );
      return newDonor.data;
    } catch (err) {
      return err;
    }
  }
};

export default donors;
