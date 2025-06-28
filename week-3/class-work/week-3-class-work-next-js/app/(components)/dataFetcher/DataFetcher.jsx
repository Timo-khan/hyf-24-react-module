"use client";

import { useEffect, useState } from "react";
import "./dataFetcher.css";
import { getPeople } from "@/services/starWarsServices";

export const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getPeople();
      setData(response);
    } catch (e) {
      setIsError(true);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="data-fetcher-wrapper">
      {isLoading && <div className="data-fetcher-loading">Loading...</div>}
      {isError && (
        <div className="data-fetcher-error">
          <p className="data-fetcher-error-head">An error occurred:</p>
          <p className="data-fetcher-error-body">{error}</p>
        </div>
      )}
      {data.length > 0 &&
        data.map((x, i) => (
          <div key={i} className="data-fetcher-block">
            <p className="data-fetcher-data-head">{x.name}</p>
            <p>Height: {x.height}</p>
            <p>Weight: {x.mass}</p>
          </div>
        ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};
