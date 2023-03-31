import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = async (...arg) => {
    try {
      setIsLoading(true);
      await callback(...arg);
    } catch (er) {
      setError(er.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
