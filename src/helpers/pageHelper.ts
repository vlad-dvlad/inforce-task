// this helpers needs for save page num and get it
export const savePage = (page: number) => {
  localStorage.setItem("currentPage", page.toString());
};

export const getCurrentPage = () => {
  if (localStorage.getItem("currentPage"))
    return localStorage.getItem("currentPage");

  return null;
};