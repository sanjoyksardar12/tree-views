import React, { useEffect, useState } from "react";
import "./style.css";

const url = "https://okrcentral.github.io/sample-okrs/db.json";

// id:{
//   ...selfDetails,
//   children:[]
// }
// others: {
//   title : "others"
//   children:[]
// }

export default function App() {
  return (
    <div className="App">
      <TreeView />
    </div>
  );
}
