import Card from "../../Card/Card";
import ColHeaderIcon from "../../DashboardLayout/ColHeaderIcon";
import PriorityLevel from "./PriorityLevel";

const Priorities = (props) => {
  const { data, sortingOption, userName } = props;
  const priorities = ["No Priority", "Low", "Medium", "High", "Urgent"];
  const noTicketsAvailable = Object.keys(data).length === 0;

  return (
    <>
    {noTicketsAvailable?(<div>no tickets available</div>):(
      Object.keys(data).map((priority) => {
        let tickets = data[priority];
        if (sortingOption === "title") {
          // Sort the tickets by title in ascending order
          tickets = tickets
            .slice()
            .sort((a, b) => (a.title < b.title ? -1 : 1));
        }

        return (
          <div key={priorities[priority]} className="items">
            <h3 className="colHeader">
              <div className="colHeaderTitle">
                <PriorityLevel priority={priority} />
                {priorities[priority]}
                <span className="length"> {data[priority].length}</span>
              </div>
              <div className="colHeaderIcon">
                <ColHeaderIcon />
              </div>
            </h3>
            {tickets.map((ticket) => (
              <Card
                key={ticket.id}
                ticket={ticket}
                userName={userName}
                section={"priorities"}
              />
            ))}
          </div>
        );
      }))}
    </>
  );
};

export default Priorities;
