const axios = require("axios");

const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/14f22a94-a5ab-4f5c-96e5-a37e13f087b9";

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

async function getDestinations() {
  const response = await axiosInstance.get(`/posts`);
  const posts = response.data;
  console.log(posts);
}

async function addNewDestination() {
  const response = await axiosInstance.post(`/posts`, {
    title: "Surabaya",
    detail: "Surabaya is",
  });
  const newDestination = response.data;

  console.log(newDestination);
}

async function updateDestination() {
  const response = await axiosInstance.patch(
    `/posts/63e7a3bd8185f56900e351d1`,
    {
      title: "Surabaya",
      detail: "Surabaya is the capital of Jawa Timur",
    }
  );
  const updateDestinationData = response.data;

  console.log(updateDestinationData);
}

getDestinations();
