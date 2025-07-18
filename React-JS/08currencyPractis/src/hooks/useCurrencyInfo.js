import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((responce) => responce.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
