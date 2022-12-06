import axios from "axios";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";
import "./index.css";
const Information = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID"},
    {
      field: "plates",
      headerName: "NumberPlate",
      type: "number",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "timestamp",
      headerName: "timestamp",
      flex: 0.25,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "camera",
      headerName: "CameraID",
      type: "number",
      flex: 0.25,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "location",
      headerName: "Location",
      type: "string",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];
  const stringObj1 = {};
  const arr = [];
  var [ccdata, setccdata] = useState([]);

  //  setInterval(() => {
useEffect(() => {
  async function fetchItems() {
    axios
      .get("http://localhost:4000/fetchall")
      .then(async (response) => {
        const jsos = await response.data;
        setccdata(jsos);
        console.log("HI1");
      })
      .catch(function (error) {
        console.log("error here3");
        console.log(error);
      });
  }
  const interval = setInterval(() => {
    fetchItems();
  }, 2000);
  
  return () => clearInterval(interval);
}, []);
  return (
    // <div>{ccdata && ccdata.map((ccdata,index)=><li key={index}>{ccdata.plates}</li>)}</div>
    <Box m="20px">
      <Header
        title="CC Information"
        subtitle="List of data from the fog nodes"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.redAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.grey[800],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.redAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          initialState={{
            sorting: {
              sortModel: [{ field: 'id', sort: 'desc' }],
            },
          }}
          rows={ccdata}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          
        />
      </Box>
    </Box>
    /* <h1>{ccdata}</h1> */
  );
};
export default Information;
