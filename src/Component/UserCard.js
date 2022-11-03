import "../Component/Styles/UserCard.css";

const UserCard = (props) => {
         
        const large =props.data.picture.large;
        const { email, gender, phone } = props.data;
        const { title, first, last } = props.data.name;
        const { age, date } = props.data.dob;
        return (
          <div className="card">
            <img src={large} alt ="user"/>
            <h1 className="username">Name:{title} {first} {last}</h1>
            <p className="cardContent">Email:{email}</p>
            <p className="cardContent">Gender:{gender}</p>
            <p className="cardContent">Phone No:{phone}</p>
            <p className="cardContent">Age:{age}</p>
            <p className="cardContent">DOB:{date}</p>
            
          </div>
        );
      }
      


export default UserCard;