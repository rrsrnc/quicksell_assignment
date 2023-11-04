import React from "react";
import Card from "../../Card/Card";
import UserProfile from "./UserProfile";
import "./Users.css";
import ColHeaderIcon from "../../DashboardLayout/ColHeaderIcon";

const Users = (props) => {
  const { data, userName, sortingOption } = props;
  const noTicketsAvailable = Object.keys(data).length === 0;

  return (
    <>
      {noTicketsAvailable?(<div>no tickets available</div>):(
          Object.keys(data).map((userId) => {
            let tickets = data[userId];
    
            if (sortingOption === "title") {
              // Sort the tickets by title in ascending order
              tickets = tickets
                .slice()
                .sort((a, b) => (a.title < b.title ? -1 : 1));
            } else if (sortingOption === "priority") {
              // Sort the tickets by priority in descending order
              tickets = tickets.slice().sort((a, b) => b.priority - a.priority);
            }
    
            return (
              <div key={userId} className="items">
                <h3 className="colHeader">
                  <div className="colHeaderTitle">
                    <span>
                      <UserProfile userName={userName[userId]} />
                    </span>{" "}
                    {userName[userId].name}
                    <span className="length">{data[userId].length}</span>
                  </div>
                  <div className="colHeadericon">
                    <ColHeaderIcon />
                  </div>
                </h3>
                {tickets.map((ticket) => (
                  <Card
                    key={ticket.id}
                    ticket={ticket}
                    userName={userName}
                    section={"user"}
                  />
                ))}
              </div>
            );
          })
      )}
      
    </>
  );
};

export default Users;
