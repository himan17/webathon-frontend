import React, { useEffect, useState } from "react";
import data from "../../cp.json";
import ContestCard from "../../Components/ContestCard/ContestCard";
import axios from "axios";

const url = "https://webathon-backend.onrender.com/";

const Home = () => {
  const [cps, setCps] = useState([]);
  const [query, setQuery] = useState("");
  const curUser = JSON.parse(localStorage.getItem("curUser"));

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}api/comp/getAllCompetitions`)
        .then(function (res) {
          setCps(res.data.Competitions);
          console.log(res.data.Competitions);
        })
        .catch(function (err) {
          // console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="pc-container"
        style={{ margin: "1rem auto", padding: "10px 1rem" }}
      >
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      {cps
        .filter((cp) => {
          const { name } = cp;
          if (query == "") {
            return cp;
          } else if (name.toLowerCase().includes(query.toLowerCase())) {
            return cp;
          }
        })
        .map((cp) => {
          let already = false;
          for (const user of cp.applied_users) {
            // console.log(user, curUser._id)
            if (user.userApplied === curUser._id) {
              already = true;
            }
          }
          if (cp.creator?._id != curUser._id) {
            return (
              <ContestCard
                key={cp._id}
                {...cp}
                already={already}
                apply="true"
                posted="true"
              />
            );
          }
        })}
    </div>
  );
};

export default Home;

/*
 const [query, setQuery] = useState("");
  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search......."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      {JSONDATA.links
        .filter((val) => {
          if (query == "") {
            return val;
          } else if (val.toLowerCase().includes(query.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          return <p key={key}>{val}</p>;
        })}
    </div>
*/
