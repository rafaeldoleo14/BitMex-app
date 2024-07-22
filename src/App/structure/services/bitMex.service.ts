import { bitMexApi } from "../api/bitMexApi";
import { enpoint } from "../api/endpoints";

export const bitMexService = {
  getAllAnnouncement: async () => {
    try {
      const data = bitMexApi.get(enpoint.announcement);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
