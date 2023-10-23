import { useState, createContext, FC, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import usePage from "../hooks/use-page";
import {
  PageContextProps,
  PageObject,
  PagingButtonProps,
  Page,
} from "./pagingTypes";

export const PageContext = createContext<PageContextProps>(
  {} as PageContextProps
);

export const PageProvider: FC<{ children: React.ReactNode; pages: Page[] }> = ({
  children,
  pages,
}) => {
  const initialUrlHash = atob(
    decodeURIComponent((window as any).location.hash.slice(1))
  );
  const parsedHash = initialUrlHash && JSON.parse(initialUrlHash);
  const foundPageFromURL = pages.find(
    (p) => parsedHash && p.portlet === parsedHash.portlet
  );

  const [activePage, setActivePage] = useState<Page>(
    foundPageFromURL || pages[0]
  );
  const [pageId, setPageId] = useState<number | undefined>(
    parsedHash?.id || undefined
  );

  const handleHashChange = (e: any) => {
    const hash = atob(
      decodeURIComponent((window as any).location.hash.slice(1))
    );
    const pHash = hash && JSON.parse(hash);
    const foundPage = pages.find((p) => pHash && p.portlet === pHash.portlet);
    setActivePage(foundPage || activePage);
    setPageId(pHash?.id ?? pageId);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goToPage = (pageobj: PageObject) => {
    const newPage = pages.find((p) => p.portlet === pageobj.portlet);

    setActivePage(newPage || pages[0]);
    setPageId((prev) => pageobj?.id || prev); //use new id if exists, else use current id
    if (!pageobj.hasOwnProperty("id")) {
      pageobj.id = pageId;
    }
    (window as any).location =
      "#" + encodeURIComponent(btoa(JSON.stringify(pageobj)));
  };

  return (
    <PageContext.Provider
      value={{ goToPage, activePage, allPages: pages, pageId }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const PagingLink: FC<PagingButtonProps> = (props) => {
  const { goToPage } = usePage();
  const { pageobj, children } = props;

  const handleClick = (e: any, pageobj: PageObject): void => {
    props.onClick && props.onClick(e);
    goToPage(pageobj);
  };

  return (
    <Typography
      {...props}
      onClick={(e) => handleClick(e, pageobj)}
      variant="body1"
      style={{ cursor: "pointer", color: "#1976D2", padding: "14px 0px" }}
    >
      {children}
    </Typography>
  );
};

export const PagingButton: FC<PagingButtonProps> = (props) => {
  const { goToPage } = usePage();
  const { pageobj, children } = props;

  const handleClick = (e: any, pageobj: PageObject): void => {
    props.onClick && props.onClick(e);
    goToPage(pageobj);
  };

  return (
    <Button {...props} onClick={(e) => handleClick(e, pageobj)}>
      {children}
    </Button>
  );
};

export const RenderedPage = () => {
  const { activePage } = usePage();
  return activePage?.element ?? <>Page not found</>;
};
