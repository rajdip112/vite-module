import { useContext } from "react";
import { PageContext } from "../paging/PageProvider";

const usePage = () => {
  const { activePage, goToPage, allPages, pageId } = useContext(PageContext);

  return { activePage, goToPage, allPages, pageId };
};

export default usePage;
