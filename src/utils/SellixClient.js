const Base_Url = "https://jsonplaceholder.typicode.com/";
const SellixClient = (httpHeaders, url) => {
  const sendRequest = async (set) => {
    try {
      const getRes = await fetch(Base_Url + url, {
        Method: httpHeaders.method ? httpHeaders.method : "GET",
        Headers: httpHeaders.headers ? httpHeaders.headers : {},
        body: httpHeaders.body ? JSON.stringify(httpHeaders.body) : null,
      });

      // start handle Error
      if (!getRes.ok) {
        throw new Error("Request Failed");
      }
      // end handle Error

      const getData = await getRes.json();
      set(getData);
    } catch (err) {
      console.log(err.message || "Somthing went wrong");
    }
  };
  return { sendRequest };
};
export default SellixClient;
