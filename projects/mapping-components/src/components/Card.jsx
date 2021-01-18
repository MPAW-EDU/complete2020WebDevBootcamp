import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card({contact}) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{contact.name}</h2>
        <Avatar img={contact.imgURL} />
      </div>
      <div className="bottom">
        <Detail detailInfo={contact.phone} />
        <Detail detailInfo={contact.email} />
      </div>
    </div>
  );
}

export default Card;
