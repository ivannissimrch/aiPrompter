export default function getDataFromLocalStorage(identifier = "") {
  const data = localStorage.getItem(identifier);
  if (data !== null) {
    return JSON.parse(data);
  } else {
    console.log("Data not found");
    return [];
  }
}
