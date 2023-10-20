// import React from "react";

// function Form() {
//   return <div>Hello Arshad !!!!</div>;

// }

// export default Form;




import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  DataGridPro,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid-pro";
// import { useQuery } from "@apollo/client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
// import { LOAD_DASHBOARD_QUERY } from "../../graphql/queries";
// import { PagingLink } from "../../paging";
// import { MusicIcon, RightArrowIcon } from "../../commonComponents/SvgIcons";

const Liferay = (window as any).Liferay;
const location = (window as any).location;

const Form: React.FC = () => {
  const [clientServiceData, setClientServiceData] = useState([]);
  const [menuAnchors, setMenuAnchors] = React.useState<{
    [id: string]: HTMLElement | null;
  }>({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const { loading } = useQuery(LOAD_DASHBOARD_QUERY, {
  //   variables: {
  //     pageSize: -1,
  //   },
  //   onCompleted: (data) => {
  //     setClientServiceData(
  //       data?.c?.clientServiceAccounts?.items?.map((item: any) => {
  //         return {
  //           clientName: item.clientName,
  //           id: item.id,
  //           kickoff: item.kickoff,
  //           clientConfig: item.clientConfig,
  //           cLM: item.cLM,
  //           firstBatchLicenses: item.firstBatchLicenses,
  //           sxMx: item.sxMx,
  //           lSR: item.lSR,
  //           lDR: item.lDR,
  //           usage: item.usage,
  //           mRVR: item.mRVR,
  //           statements: item.statements,
  //           iTCloseout: item.iTCloseout,
  //           monitorRA: item.monitorRA,
  //           actions: item.id,
  //         };
  //       })
  //     );
  //   },
  // });

  const CustomToolbar = () => {
    return (
      <>
        <GridToolbarContainer sx={{ marginBottom: '25px' }}>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarFilterButton />
        </GridToolbarContainer>
      </>
    );
  };

  useEffect(() => {
    Liferay.fire("HeaderChange", "dashboard");
  }, []);

  const handleNewClick = (event: React.MouseEvent<HTMLElement>) => {
    Liferay.fire("NewClientFireEvent", "");
  };

  const handleCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  function statusCell(row: any, column: string) {
    let ret: any = "";
    try {
      switch (row[column]) {
        case 2:
          // ret = <MusicIcon />;
          break;
        case 1:
          // ret = <RightArrowIcon />;
          break;
      }
    } catch (error) {}
    return ret;
  }

  function summaryNavigation(row: any) {
    Liferay.fire("HeaderChange", "summary", row.id, row.clientName);
  }

  function navigateToSummary(row: any) {
    summaryNavigation(row);
    const code = encodeURIComponent(
      btoa(
        JSON.stringify({
          params: { id: row.id },
          portlet: "summary",
        })
      )
    );
    location.href = `#${code}`;
  }

  const columns: GridColDef[] = [
    {
      field: "clientName",
      headerName: "Client Service",
      minWidth: 285,
      flex: 1,
      renderCell: (cellValues: any) => {
        return (
          <>
            <Box
              data-testElementId={`datagrid-title-${cellValues.row.id}`}
              onClick={() => summaryNavigation(cellValues.row)}
            >
              {/* <PagingLink
                pageobj={{
                  portlet: "summary",
                  params: {
                    id: cellValues.row.id
                  },
                }}
              >
                {cellValues.row.clientName}
              </PagingLink> */}
            </Box>
          </>
        );
      },
    },
    {
      field: "kickoff",
      headerName: "Kickoff",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "kickoff");
      },
    },
    {
      field: "clientConfig",
      headerName: "Client Config",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "clientConfig");
      },
    },
    {
      field: "cLM",
      headerName: "CLM",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "cLM");
      },
    },
    {
      field: "firstBatchLicenses",
      headerName: "License Templates",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "firstBatchLicenses");
      },
    },
    {
      field: "sxMx",
      headerName: "SxMx",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "sxMx");
      },
    },
    {
      field: "lSR",
      headerName: "LSR",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "lSR");
      },
    },
    {
      field: "lDR",
      headerName: "LDR",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "lDR");
      },
    },
    {
      field: "usage",
      headerName: "Usage",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "usage");
      },
    },
    {
      field: "mRVR",
      headerName: "MRVR",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "mRVR");
      },
    },
    {
      field: "statements",
      headerName: "Statements",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "statements");
      },
    },
    {
      field: "iTCloseout",
      headerName: "IT Closeout",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "iTCloseout");
      },
    },
    {
      field: "monitorRA",
      headerName: "Monitor RA",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        return statusCell(cellValues.row, "monitorRA");
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      flex: 1,
      renderCell: (cellValues: any) => {
        const row = cellValues.row;

        const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
          setMenuAnchors((prevState) => ({
            ...prevState,
            [row.id]: event.currentTarget,
          }));
        };

        const handleMenuClose = () => {
          setMenuAnchors((prevState) => ({
            ...prevState,
            [row.id]: null,
          }));
        };

        return (
          <>
            <IconButton
              onClick={handleMenuOpen}
              data-testElementId={`datagrid-action-${row.id}`}
              size="small"
              aria-controls={open ? "actions-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <ExpandCircleDownOutlinedIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchors[row.id]}
              open={Boolean(menuAnchors[row.id])}
              onClose={handleMenuClose}
              onClick={handleCloseClick}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  navigateToSummary(row);
                  handleMenuClose();
                }}
              >
                <Typography variant="inherit">View Details</Typography>
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box>
        <Button
          className="clientRegistrationButton"
          sx={{
            m: 3,
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "auto",
          }}
          data-testelementid="add-new-client-registration-form"
          variant="contained"
          onClick={handleNewClick}
          endIcon={<AddIcon />}
        >
          PROVISION NEW CLIENT SERVICE
        </Button>
      </Box>
      <DataGridPro
        {...clientServiceData}
        // loading={loading}
        columns={columns}
        rows={clientServiceData ? clientServiceData : []}
        style={{ padding: "30px 16px 4px 16px" }}
        getRowId={(row: any) => {
          return row.id;
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        initialState={{
          pinnedColumns: { right: ["actions"] },
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        getRowHeight={() => "auto"}
        sx={{
          ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
            { marginTop: "1em", marginBottom: "1em" },
        }}
        disableColumnMenu
        pagination
        pageSizeOptions={[10, 20, 30, 40, 50]}
      />
    </>
  );
};
export default Form;
