import React from "react";
import Icon from "./Icon";

function Tracked(props) {
  let tracked = props.tracked.map((val, index) => {
    return (
      <div key={val.id} className="weather-tracked">
        <div className="weather-item-info">
          <p>{val.currentLocation}</p>
          <p>{props.convert(val.date)}</p>
          <Icon icon={val.icon} />
          <p className="weather-description">{val.description}</p>
          <p>{`Temperature: ${val.temp}`} &#8457;</p>
          <div className="weather-item-buttons">
            <button
              className="Weather-item-button"
              onClick={() => props.delete(val.id)}
            >
              Remove
            </button>
            <button
              className="Weather-item-button"
              onClick={() => props.move(val.id, "up")}
            >
              Move Up
            </button>
            <button
              className="Weather-item-button"
              onClick={() => props.move(val.id, "up")}
            >
              Move Down
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div>{tracked}</div>;
}

export default Tracked;
