import React from "react";
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid-pro";
import "../index.css"
interface FormProps {
  data: any[];
  columns?: any;
  loading: any;
  CustomToolbar: boolean;
}

const Form: React.FC<FormProps> = (props) => {
  const { data, columns, loading, CustomToolbar } = props;

  const Toolbar = () => {
    return (
      <>
        <GridToolbarContainer sx={{ marginBottom: "25px" }}>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarFilterButton />
        </GridToolbarContainer>
      </>
    );
  };

  return (
    <>
      <DataGridPro
        loading={loading}
        rows={data ? data : []}
        columns={columns}
        style={{ padding: "30px 16px 4px 16px", margin: "12px 26px" }}
        getRowId={(row: any) => row.id}
        slots={{
          toolbar: CustomToolbar ? Toolbar : null,
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
