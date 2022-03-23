// this helpers needs for save page num and get it
export const savePage = (page: number) => {
  sessionStorage.setItem("currentPage", page.toString());
};

export const getCurrentPage = () => {
  if (sessionStorage.getItem("currentPage"))
    return sessionStorage.getItem("currentPage");

  return null;
};

export const deletePage = () => {
  sessionStorage.removeItem("currentPage");
};
