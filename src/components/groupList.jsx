import React from "react";
import PropTypes from "prop-types";

const GroupList = ({items, valueProperty, contentProperty, onItemSelect, selectedItem}) => {

  
  const isActiveItem = (item) => item === selectedItem ? " active " : "";

  return (
    <ul className="list-group">
      {Object.values(items)
        .map(item =>  (
          <li key={item[valueProperty]} role="button" onClick={() => onItemSelect(item)} className={"list-group-item" + isActiveItem(item)} >
            {item[contentProperty]}
          </li>
        ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
};

export default GroupList;