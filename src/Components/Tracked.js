import React from "react";
import Icon from "./Icon";
import Button from "./Button";

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

            {/* REfractored */}
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
              onClick={() => props.move(val.id, "down")}
            >
              Move Down
            </button>

            {/* <Button
              cssClass={"Weather-item-button"}
              onclick={() => props.delete(val.id)}
              title={"Remove-test"}
            />
            <Button
              cssClass={"Weather-item-button"}
              onclick={() => props.move(val.id, "up")}
              title={"Move up-test"}
            />
            {/* <Button
              cssClass={"Weather-item-button"}
              onclick={() => props.move(val.id, "down")}
              title={"Move Down-test"}
            /> */}
          </div>
        </div>
      </div>
    );
  });
  return <div>{tracked}</div>;
}

export default Tracked;
