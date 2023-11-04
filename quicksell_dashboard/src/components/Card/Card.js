import "./Card.css";
import PriorityLevel from "../DashBoardSections/PrioritySection/PriorityLevel";
import StatusState from "../DashBoardSections/StatusSection/StatusState";
import UserProfile from "../DashBoardSections/UserSection/UserProfile";
import { BsFillCircleFill } from "react-icons/bs";
const Card = (props) => {
  const { ticket, userName, section } = props;

  // console.log(userName);
  return (
    <>
      <div className="card">
        <div className="id">
          {ticket.id}
          <span className="user_profile">
            {section !== "user" ? (
              <UserProfile userName={userName[ticket.userId]} />
            ) : (
              <div />
            )}
          </span>
        </div>
        <div className="title">
          {section !== "status" ? (
            <StatusState status={ticket.status} />
          ) : (
            <span />
          )}
          <span> {ticket.title}</span>
        </div>
        <div className="card_priority_tag">
          {section !== "priorities" ? (
            <div className="">
              <div className="priority">
                <PriorityLevel priority={ticket.priority} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="tags">
            {ticket.tag.map((tag) => (
              <div className="tag" key={tag}>
                <BsFillCircleFill size={5} /> <span>{tag}</span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
