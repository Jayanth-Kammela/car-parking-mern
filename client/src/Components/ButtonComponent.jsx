import React from 'react';

const ButtonComponent = ({ button, bookedData }) => {
  const forDisable = bookedData.some((data) => data.buttonId === button.id);

  return (
    <React.Fragment>
      <button disabled={forDisable} className={forDisable ? 'not-avail' : 'avail'}>
        {forDisable ? `${button.name}-B` : button.name}
      </button>
    </React.Fragment>
  );
};

export default ButtonComponent;
