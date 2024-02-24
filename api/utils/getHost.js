// const url = require("url");
import url from "url";

export const getHost = (url) => {
  // Example URL
  const urlString = "http://mern-thal-estate-added.onrender.com/reset-password";

  // Parse the URL
  const parsedUrl = url.parse(urlString);

  // Extract the hostname
  const host = parsedUrl.hostname;

  console.log(host); // Output: mern-thal-estate-added.onrender.com
};
