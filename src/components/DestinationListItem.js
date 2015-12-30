import React from 'react';

export default function DestinationListItem(props) {
  const { id, isChecked, isDisabled, onChange, label } = props;
  const className = `checkbox checkbox-success ${isDisabled ? '' : 'destination-enabled'}`;

  return (
    <li>
      <div className={className}>
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