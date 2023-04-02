import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const email = localStorage.getItem("email");
  const account = localStorage.getItem("account");
  const secret = localStorage.getItem("secret");

  const navigate = useNavigate();
  return (
    <div>
      <h3>Your account: {account} </h3>
      <h3>Your email: {email} </h3>
      <h3>Your Secret Message: {secret} </h3>
      <button
        style={button}
        onClick={() => {
          localStorage.removeItem("email");
          localStorage.removeItem("account");
          localStorage.removeItem("secret");
          localStorage.removeItem("username");
          window.location.reload();
        }}
      >
        {" "}
        Log out
      </button>
    </div>
  );
}
const button = {
  width: "10vw",
  minWidth: 150,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#343434",
  border: "none",
};
