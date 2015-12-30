import React from 'react';

export default function DestinationListItem(props) {
  const { id, isChecked, isDisabled, onChange, label } = props;

  return (
    <li>
      <div className="checkbox checkbox-success">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </li>
  );
}