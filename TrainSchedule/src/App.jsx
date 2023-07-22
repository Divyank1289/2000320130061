import { useEffect, useState } from "react";
import "./App.css";
import TrainTable from "./TrainT";
import { Route, Routes } from "react-router-dom";
import Train from "./train";

const data1 = {
  clientID: "3c108fba-ab78-443a-ac65-587403bd33c0",
  clientSecret: "OGgxNQPpRiWmNuFO",
  companyName: "Train Central",
  ownerEmail: "Divyank.20B0131151@abes.ac.in",
  ownerName: "Divyank Trivedi",
  rollNo: "0061",
};

function App() {
  const [token, setToken] = useState();
  // console.log(token);

  const fetchData = async () => {
    const fetchedData = await fetch("http://20.244.56.144/train/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    const data = await fetchedData.json();
    setToken(data.access_token);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        {token && <Route path="/" element={<TrainTable token={token} />} />}
        {token && (
          <Route path="/train/:trainNumber" element={<Train token={token} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
