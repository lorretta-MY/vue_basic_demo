export const getUrlParams = (name) => {
  const url = window.location.href.split("?")[1] || "";
  if (!url) return "";
  const theRequest = new Object();
  const params = url.split("&");
  for (let i = 0; i < params.length; i++) {
    const el = params[i].split("=");
    theRequest[el[0]] = el[1];
  }
  return theRequest[name] || "";
};
