import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Souptik", age: 22 },
    { id: 2, name: "Riya", age: 21 },
    { id: 3, name: "Suman", age: 23 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
