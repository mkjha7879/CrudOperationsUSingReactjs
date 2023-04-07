import React, { useState } from "react";

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleAdd = () => {
    if (editId) {
      const state = data.find((i) => i.id === editId);
      const updateData = data.map((i) =>
        i.id === state.id
          ? (i = { id: i.id, name: name, email: email })
          : { id: i.id, name: i.name, email: i.email }
      );
      setData(updateData);
      setName("");
      setEmail("");
      setEditId(0);
      return;
    }
    if (name != "" && email != "") {
      setData([...data, { id: data.length + 1, name, email }]);
      setName("");
      setEmail("");
    }
  };
  const handleDelete = (id) => {
    const newData = data.filter((i) => i.id != id);
    setData(newData);
    console.log(id);
  };
  const handleUpdate = (editId) => {
    const state = data.find((i) => i.id === editId);
    setName(state.name);
    setEmail(state.email);
    console.log(state.id);
    setEditId(state.id);
  };
  return (
    <div className=" ">
      <div className=" flex justify-evenly items-center py-10 mx-auto  bg-green-700">
        <input
          type="text"
          className="p-3 rounded-lg w-96 mt-4"
          placeholder="Enter name  "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="p-3 rounded-lg w-96 mt-4 "
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="p-3 bg-orange-800 rounded-lg w-96 mt-4"
          onClick={handleAdd}
        >
          {editId ? "Edit" : "Add"}
        </button>
      </div>
      <div></div>
      {data.map((i) => {
        return (
          <div key={i.id}>
            <div className="flex justify-around my-6 border-2 border-black shadow-2xl shadow-slate-200 bg-gray-500 py-3 ">
              <div className=" text-center  self-center">
                <h1 className="font-bold text-3xl"> {i.name}</h1>
              </div>
              <div className=" text-center  self-center">
                <h1 className="font-bold text-3xl"> {i.email}</h1>
              </div>
              <div className=" text-center  self-center ">
                <button
                  className="p-3 bg-orange-500 rounded-lg mx-4"
                  onClick={() => handleDelete(i.id)}
                >
                  Delete
                </button>
                <button
                  className="p-3 bg-green-500 rounded-lg"
                  onClick={() => handleUpdate(i.id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Crud;
