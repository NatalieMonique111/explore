export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getRegion = (region) => _get(`/api/region/${region}`);

export const getSite = (site) => _get(`/api/site/${site}`);

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
