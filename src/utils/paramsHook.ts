// utils.ts
export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    telefono: params.get("telefono"),
    id: params.get("id")
  };
};
