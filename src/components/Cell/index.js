import React from "react";

const Cell = props => {
  let cell = () => {
    if (props.data.isOpen) {
      if (props.data.hasMine) {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            <span>b</span>
          </div>
        );
      } else {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            {props.data.count}
          </div>
        );
      }
    } else if (props.data.hasFlag) {
      return (
        <div
          className="cell open"
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.mark(props.data);
          }}
          onClick={() => props.open(props.data)}
        >
          <span>f</span>
        </div>
      );
    } else {
      return (
        <div
          className="cell"
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.mark(props.data);
          }}
          onClick={() => props.open(props.data)}
        />
      );
    }
  };
  return cell();
};

export default Cell;
