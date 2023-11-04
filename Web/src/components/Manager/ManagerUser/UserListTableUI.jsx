import * as React from "react";
import {useParams, useNavigate } from 'react-router-dom'
import UseAccountsAndInfos from '../../../apis/ManagerDashboardAPI'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs';
import { Context } from '../../../context/Context'
import backenduserinfoapi from '../../../apis/ManagerDashboardAPI'
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";


export default function UserListTableUI() {
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [hasFetchedUserAccount, setHasFetchedUserAccount] = React.useState(false);
  const { managerId } = useParams();
    const { 
    setIsOpenPopupUserInfoInMgDashboard,
    setUserIdShowInfoInMgDashData,
} = React.useContext(Context); 
  const navigateTo = useNavigate()


  const fetchDataUserAccount = async () => {
    try {
      const responseauseraccount = await UseAccountsAndInfos.get(`/${managerId}/userlist`)
      console.log(responseauseraccount.data.datauseraccountandinfo);
      setRows(responseauseraccount.data.datauseraccountandinfo.useraccountsandinfos);
      setHasFetchedUserAccount(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetchedUserAccount) {
    fetchDataUserAccount();
  }

  const handleDetailClick = (e, idUser) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${managerId}/userlist`);
    setUserIdShowInfoInMgDashData(idUser);
    setIsOpenPopupUserInfoInMgDashboard(true);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });

    navigateTo(`/managerdashboard/${managerId}/userlist`);
  };

  const handleDeleteClick = (userId) => () => {
    try {
      const response = backenduserinfoapi.delete(`/${managerId}/userlist/${userId}/delete`);
      setRows(
        rows.filter((row) => {
          return row.UserAccount_id !== userId;
        })
      );
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      toast.success('Deleted User Successfull!', {
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
    navigateTo(`/managerdashboard/${managerId}/userlist`);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.UserAccount_id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.UserAccount_id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    console.log(newRow);
    const hashedUserName = bcrypt.hashSync(newRow.AccountName, 10);
    const hashedPassword = bcrypt.hashSync(newRow.Pass, 10);
    const HadUserName = rows.find(account => bcrypt.compareSync(newRow.AccountName, account.AccountName))

    if(!newRow.email.endsWith('@gmail.com')){
      setTimeout(() => {
        toast.error('Email không hợp lệ!', {
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
       navigateTo(`/managerdashboard/${managerId}/userlist`);
    } else if (newRow.AccountName === '' || newRow.Pass === ''){
      setTimeout(() => {
        toast.error('Vui lòng nhập đầy đủ tài khoản và mật khẩu!', {
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
       navigateTo(`/managerdashboard/${managerId}/userlist`);
    }else if(HadUserName){
      setTimeout(() => {
        toast.error('Tên đăng nhập đã được sử dụng. Vui lòng chọn tên đăng nhập khác!', {
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
       navigateTo(`/managerdashboard/${managerId}/userlist`);
    } else if (newRow.Pass.length < 10){
      setTimeout(() => {
        toast.warn('Để nâng cao bảo mật, vui lòng nhập mật khẩu không dưới 10 ký tự!', {
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
       navigateTo(`/managerdashboard/${managerId}/userlist`);
    } else {

      const updatedUserAccount = backenduserinfoapi.put(`/${managerId}/userlist/${newRow.UserAccount_id}/edit`, {
        Full_Name: newRow.Full_Name,
        AccountName: hashedUserName,
        Pass: hashedPassword,
        email: newRow.email,
      }).then((response) => {
        console.log(response.data.datauseraccount);
        setTimeout(() => {
          toast.success('Updated User Successfull!', {
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
        navigateTo(`/managerdashboard/${managerId}/userlist`);
      }).catch((err) => {
        console.log(err);
      });
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row.UserAccount_id === newRow.UserAccount_id ? updatedRow : row)));
      return updatedRow;
    }

  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "Full_Name",
      headerName: "Họ và Tên",
      width: 180,
      editable: true,
    },
    {
      field: "AccountName",
      headerName: "Tài khoản",
      width: 180,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "Pass",
      headerName: "Mật khẩu",
      width: 180,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      editable: true,
      type: "email",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="CancelBtn"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="EditBtn"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<InfoIcon />}
            label="Info"
            className="InfoBtn"
            onClick={(e) => handleDetailClick(e, id)}
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
        "& .CancelBtn": {
          color: "#920505",
        },
        "& .InfoBtn": {
          color: "#0c8097",
        },
        "& .DelBtn": {
          color: "#5a0707",
        },
        "& .EditBtn": {
          color: "#005810",
        },
      }}>
      <DataGrid
        getRowId={(rows) => rows.UserAccount_id}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
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
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
    <ToastContainer />
    </>

  );
}
