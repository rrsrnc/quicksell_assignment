import "./DashBoard.css";
import Priorities from "../DashBoardSections/PrioritySection/Priorities";
import Status from "../DashBoardSections/StatusSection/Status";
import Users from "../DashBoardSections/UserSection/Users";

const DashBoard = (props) => {
  
  // Create objects to store data based on user IDs, priorities, and statuses
  const statusName = ["Todo", "In progress", "Cancelled", "Backlog", "Done"];
  const { groupingOption, sortingOption } = props;
  const userIdObjects = {};
  const priorityObjects = {};
  var statusObjects = {};
  const userName = {};
  statusName.forEach((status) => {
    statusObjects[status] = [];
  });
  
  // Initialize user ID, priority, and status arrays
  if (props.data !== null) {
    props.data.users.forEach(({ id, name, available }) => {
      userName[id] = { name, available };
    });
    props.data.tickets.forEach((ticket) => {
      const userId = ticket.userId;
      const priority = ticket.priority;
      const status = ticket.status;

      // Initialize user ID, priority, and status arrays if they don't exist
      if (!userIdObjects[userId]) {
        userIdObjects[userId] = [];
      }
      if (!priorityObjects[priority]) {
        priorityObjects[priority] = [];
      }
      if (!statusObjects[status]) {
        statusObjects[status] = [];
      }

      // Push the ticket to the corresponding user ID, priority, and status arrays
      userIdObjects[userId].push(ticket);
      priorityObjects[priority].push(ticket);
      statusObjects[status].push(ticket);
    });
    statusObjects = Object.entries(statusObjects)
      .sort(([, a], [, b]) => b.length - a.length)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  }
  function Grouping() {
    if (groupingOption === "status") {
      // console.log(statusObjects);
      return (
        <Status
          data={statusObjects}
          userName={userName}
          sortingOption={sortingOption}
        ></Status>
      );
    } else if (groupingOption === "user") {
      // console.log(userIdObjects);
      return (
        <Users
          data={userIdObjects}
          userName={userName}
          sortingOption={sortingOption}
        ></Users>
      );
    } else {
      // console.log(priorityObjects);
      return (
        <Priorities
          data={priorityObjects}
          userName={userName}
          sortingOption={sortingOption}
        />
      );
    }
  }

  return <div className="container">{Grouping()}</div>;
};

export default DashBoard;
