import React from "react";
import "./styles.css";
const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  }
};

const start = async () => {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const db = await orbitdb.create("test", "keyvalue", {
    overwrite: true,
    replicate: true,
    accessController: {
      // type: "ipfs",
      // admin: ["*"],
      write: ["*"]
    }
  });
  await db.set("hello", "world");
  console.log(db.all);
};

start();

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
