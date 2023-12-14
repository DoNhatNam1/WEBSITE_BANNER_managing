import * as React from "react";
import {useParams, useNavigate } from 'react-router-dom'
import backendallbannerapi from '../../../../apis/ManagerDashboardAPI'
import EditIcon from "@mui/icons-material/Edit";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {Box} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs';
import { v4 } from "uuid";
import { Context } from '../../../../context/Context'
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";

function EditToolbar() {
  const { managerId } = useParams();
    const { 
    setIsOpenPopupBannerAddInMgDashboard,
} = React.useContext(Context); 


  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpenPopupBannerAddInMgDashboard(true);
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Banner
      </Button>
    </GridToolbarContainer>
  );
}

export default function ManagerBannerListTableUI() {
  const [rowModesModel, setRowModesModel] = React.useState({});
  const { managerId } = useParams();
    const {
    bannerRows, 
    setBannerRows,
    setIsOpenPopupBannerEditInMgDashboard,
    setBannerIdShowInfoInMgDashData,
    isOpenPopupBannerEditInMgDashboard,
    isOpenPopupBannerAddInMgDashboard,
    reLoadBannerEditPage,
    reLoadBannerAddPage,
} = React.useContext(Context); 
  const navigateTo = useNavigate()

  let handleEventFectchUIList = false
  React.useEffect(() => {
    if(!handleEventFectchUIList){
      handleEventFectchUIList = true
      const fetchDataBanner = async () => {
        try {
          const responseauseraccount = await backendallbannerapi.get(`/${managerId}/bannerlist`)
          console.log(responseauseraccount.data.databanners);
          setBannerRows(responseauseraccount.data.databanners.banners);
        } catch (err) {
          console.log(err);
        }
      };
      fetchDataBanner();
    }

  }, [isOpenPopupBannerEditInMgDashboard, isOpenPopupBannerAddInMgDashboard, reLoadBannerEditPage, reLoadBannerAddPage]);




  const handleEditClick = (e, idBanner) => {
      e.stopPropagation();  
      setBannerIdShowInfoInMgDashData(idBanner);
      setIsOpenPopupBannerEditInMgDashboard(true);

    }
   

  const handleDeleteClick = (bannerId) => () => {
    try {
      const response = backendallbannerapi.delete(`/${managerId}/bannerlist/${bannerId}/delete`);
      setBannerRows(
        bannerRows.filter((row) => {
          return row.banner_id !== bannerId;
        })
      );
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      toast.success('Deleted Banner Successfull!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
     }, 1000);
    navigateTo(`/managerdashboard/${managerId}/bannerlist`);
  };



  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "ImgLinking",
      headerName: "Ảnh",
      type: 'image',
      headerAlign: "center",
      align: "center",

      width: 120,
      renderCell: (params) =><img className='img' src={params.value} />,
    },
    {
      field: "BannerName",
      headerName: "Tên Banner",
      headerAlign: "left",
      width: 280,
    },
    {
      field: "BannerSizeName",
      headerName: "kích thước Banner",
      width: 280,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "StatusBanner",
      headerName: "Trạng thái Banner",
      headerAlign: "center",
      align: "center",
      width: 160,

      renderCell: params => {
        if (params.row.StatusBanner === 'On Process') {
          return <div className="StatusOff grid">{params.row.StatusBanner}</div>;
        }
        return <div className="StatusOn grid">{params.row.StatusBanner}</div>;
      }
    },
    {
      field: "position",
      headerName: "Vị trí hiển thị",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="EditBtn"
            onClick={(e) => handleEditClick(e, id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="DelBtn"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
        <Box
      sx={{
        height: 500,
        width: "90%",
        position: "relative",
        top: "30px",
        boxShadow: 2,
        border: 2,
        borderColor: "primary.light",
        "& .DelBtn": {
          color: "#5a0707",
        },
        "& .EditBtn": {
          color: "#005810",
        },
        "& .StatusOn": {
          border: 1,
          borderRadius: 4,
          borderColor: "rgb(22, 182, 22)",
          color: "rgb(22, 182, 22)",
          width: 120,
          height: 40,
          placeItems: 'center',
        },
        "& .StatusOff": {
          border: 1,
          borderRadius: 4,
          borderColor: "rgb(246, 177, 49)",
          color: "rgb(246, 177, 49)",
          width: 120,
          height: 40,
          placeItems: 'center',
        },

        "& .img": {
          padding: 1,
          width: 60,
          height: 60,
          borderRadius: '50%',
        }
      }}>
      <DataGrid
        getRowId={(rows) => rows.banner_id}
        rows={bannerRows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        sx={{ 
          color: "#d5d5d5",
          "& p": {
            color: "#d5d5d5",
          },

          "& .MuiSelect-select": {
            color: "#d5d5d5",
          },
          "& .MuiToolbar-root svg": {
            color: "#d5d5d5",
          },
          "& .MuiDataGrid-columnHeaders svg": {
            color: "#d5d5d5",
          },
        }}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setBannerRows, setRowModesModel },
        }}
      />
    </Box>
    <ToastContainer />
    </>

  );
}
