export const getItemWithKey = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};
export const storeItemWithKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const removeItemWithKey = (key) => {
  localStorage.removeItem(key);
};
