const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/14f22a94-a5ab-4f5c-96e5-a37e13f087b9";

async function getDestinations() {
  const response = await fetch(`${BASE_API_URL}/posts`);
  const destinations = await response.json();
  console.log(destinations);
}

async function addNewDestination() {
  const data = {
    title: "Pangandaran",
    detail: "Pangandaran is",
  };

  const response = await fetch(`${BASE_API_URL}/posts`, {
    method: "POST",
    headers: { "Condent-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newDestination = await response.json();

  console.log(newDestination);
}

async function updateDestination() {
  const data = {
    title: "Pangandaran",
    Detail: "Pangandarain is beach at Jawa Barat Indonesia",
  };

  const response = await fetch(
    `${BASE_API_URL}/posts/63e79fa98185f56900e351cf`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    }
  );
  const updateDestinationData = await response.json();

  console.log(updateDestinationData);
}

updateDestination();
