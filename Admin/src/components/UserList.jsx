import { useState, useEffect } from "react";
import axios from "axios";
import "../component-styles/styles.css";
function UserList() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/nni/get-users",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center">List of Users Registered</h2>
      </div>
      <div className="flex flex-col justify-center text-center w-3/4 overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userObj, index) => {
              return (
                <tr>
                  <td>{userObj.email}</td>
                  <td>{userObj.firstName} {userObj.lastName}</td>
                  <td>{userObj.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
