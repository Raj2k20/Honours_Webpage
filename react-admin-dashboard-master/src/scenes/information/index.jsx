import axios from "axios";
import {useState, useEffect } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import Header from "../../components/Header";
import { useTheme,Box } from "@mui/material";
import { tokens } from "../../theme";
const Information = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID"},
    { field: "plates", headerName: "NumberPlate",type: "number",flex: 0.5,headerAlign: "center",
    align: "center", },
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
	axios.get("http://localhost:4000/fetchall").then((response) => {
          setccdata(response.data);
          console.log(response.data);
          // stringObj1 = JSON.stringify(ccdata);
          // arr =[...stringObj1];
         }).catch(function (error) {console.log("error here3");});
// }, 5000);
  // const [ccdata,setccdata]=useState() 
  // useEffect(()=>{ 
  // var request = new XMLHttpRequest(); 
  // request.onreadystatechange = function() { 
  // if (request.readyState === 4 && request.status === 200) { 
  // const response=JSON.parse(request.response) 
  // setccdata(response) 
  // console.log(response)
  // console.log("Third log");
  // } 
  // }; 
  // request.open('GET','http://localhost:4000/fetchall', true); 
  // request.send(); 
  // },[]) 
  // useEffect(()=>{ 
  // console.log(ccdata) 
  // console.log("Fourth log");
  // },[ccdata]) 
  return (
    // <p>{}</p>
    <div>{ccdata}</div>
    // <div>{arr.map(arr => <div>{arr.id}</div>)}</div>
    // <div>
    //   <ol>
    //   {ccdata.map((datas) => (
    //     <li>{datas}</li>
    //   ))}
    // </ol>
    // </div>
    
    /* <Box m="20px">
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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
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
          rows={ccdata}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box> */
    /* <h1>{ccdata}</h1> */
  );
};
export default Information;
