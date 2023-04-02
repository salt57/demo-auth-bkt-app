import * as React from "react";
import { loadData, loadWeb3 } from "../Web3helpers";

import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secret, setSecret] = React.useState("");

  const root = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const input = {
    width: "30vw",
    padding: 10,
    margin: 10,
    border: "2px solid grey",
    fontSize: 17,
    borderRadius: 10,
  };

  const button = {
    width: "20vw",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "#343434",
    border: "none",
  };

  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadData();

    setAccounts(accounts);
    setAuth(auth);
  };

  const signUp = async () => {
    if (!username || !email || !password || !secret) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createUser(username, email, password, secret)
        .send({ from: accounts });
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  React.useEffect(() => {
    loadWeb3();
    loadAccounts();
  }, []);

  return (
    <div style={root}>
      <input
        style={input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
      />
      <input
        style={input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />
      <input
        style={input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input
        style={input}
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Secret"
        type="Secret"
      />
      <button style={button} onClick={signUp}>
        {" "}
        Sign Up
      </button>
    </div>
  );
}
