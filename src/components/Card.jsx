import star from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.activity.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.activity.location.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.activity.coverImg}`)}
        alt=""
        className="card__img"
      />

      <div className="card__stats">
        <img src={star} alt="" className="star-icon" />
        <span className="rating">{props.activity.stats.rating} </span>
        <span className="review-count">
          ({props.activity.stats.reviewCount})
        </span>
        •<span className="location">{props.activity.location}</span>
      </div>

      <p>{props.activity.title}</p>
      <p>
        <span className="card__price">From ${props.activity.price}</span> /
        person
      </p>
    </div>
  );
}

export default Card;
