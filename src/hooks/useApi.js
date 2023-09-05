import { useEffect, useState } from "react";
import dataUrl from "../data/data.json?url";

function useApi(method, url, body, options) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(method === "GET");
  const [_reload, setReload] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method,
      body,
      ...options,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [method, url, body, options, _reload]);

  const reload = () => setReload(_reload + 1);
  return { data, error, loading, reload };
}

// export const useFetchLogements = () => useApi ("GET", "/logements")

export const useFetchLogements = () => useApi("GET", dataUrl);

// export const useFetchLogement = (id) => useApi ("GET", `/logements/${id}`)

export const useFetchLogement = (id) => {
  let { data, loading, ...rest } = useApi("GET", dataUrl);
  const house = data?.find((house) => house.id === id);
  return { data: house, loading, ...rest };
};
