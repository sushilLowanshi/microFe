


import React from "react";
const Button = React.lazy(() => import("host/components/pages/Button"));
const Table = React.lazy(() => import("host/components/pages/Table"));
const useAppSelector = require("host/store/hooks").useAppSelector;
const useAppDispatch = require("host/store/hooks").useAppDispatch;
const addUser = require("host/host-slice/userSlice").addUser;
const deleteUser = require("host/host-slice/userSlice").deleteUser;
const selectUserList = require("host/host-slice/userSlice").selectUserList;
import AddUserModal from "../pages/AddUserModal";

type User = {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
};

const Users: React.FC = () => {
      const dispatch = useAppDispatch();
    const users = useAppSelector(selectUserList)
  const [modalOpen, setModalOpen] = React.useState(false);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "User Name" },
    { key: "email", label: "Email" },
    { key: "number", label: "Number" },
    { key: "createdAt", label: "Created At" },
  ];

  const handleDelete = (row: User) => {
    dispatch(deleteUser(row))
  };

  const handleAddUser = (user:any) => {
    const newUser: User = {
      id: users.length + 1,
      ...user,
    };
    dispatch(addUser(newUser));
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <h2 style={styles.title}>User Table</h2>
            <Button onClick={() => setModalOpen(true)}>Add User</Button>
          </div>

          <Table
            columns={columns}
            data={users}
            onAction={handleDelete}
            actionLabel="Delete"
          />

          <AddUserModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onAdd={handleAddUser}
          />
        </div>
      </div>
    </React.Suspense>
  );
};

export default Users;

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    maxWidth: "980px",
    margin: "40px auto",
    padding: "0 16px",
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    color: "#222",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: 10,
    boxShadow: "0 6px 20px rgba(16,24,40,0.06)",
  },
  title: {
    margin: 0,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: 600,
    color: "#1f2937",
  },
  tableWrap: {
    overflowX: "auto",
  },
  noData: {
    textAlign: "center",
    color: "#9ca3af",
    fontStyle: "italic",
    padding: "18px 16px",
  },
};
