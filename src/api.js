// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
import axios from "axios";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 30,
      client_id: "KWqiK0WjZfLxOmAY_zwGMcMqK9lmWfa4uvd4_NcTSq8",
    },
  });
  console.log(response.data);
  return response.data;
};
