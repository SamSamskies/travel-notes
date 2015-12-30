import React from 'react';

export default function DestinationListItem(props) {
  const { key, isChecked, isDisabled, onChange, label } = props;

  return (
    <li key={key}>
      <div className="checkbox checkbox-success">
        <input
          type="checkbox"
          id={"checkbox" + key}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange} />
        <label htmlFor={"checkbox" + key}>{label}</label>
      </div>
    </li>
  );
}