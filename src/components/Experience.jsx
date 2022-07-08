import star from "../images/star.png";

function Experience(props) {
  return (
    <div className="activity">
      <img
        src={require(`../images/${props.activity.coverImg}`)}
        alt=""
        className="activity-img"
      />
      <p className="badge">badge</p>

      <p>
        <img src={star} alt="" />
        {props.activity.stats.rating}
        <span>({props.activity.stats.reviewCount}) •</span>
        {props.activity.location}
      </p>
      <p>{props.activity.title}</p>
      <p>
        <strong>From ${props.activity.price}</strong> / person
      </p>
    </div>
  );
}

export default Experience;
