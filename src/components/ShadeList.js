import React from 'react';
import Select from 'react-select';

const ShadeList = ({ shades, activeShade, setActiveShade }) => {
  const options = shades.map(shade => ({
    value: shade._id,
    label: (
      <div>
        <img src={shade.swatch_img} alt={shade.name} style={{ width: '30px', marginRight: '10px' }} />
        <span>{shade.name}</span>
      </div>
    ),
  }));

  return (
    <Select
      value={{ value: activeShade._id, label: activeShade.name }}
      options={options}
      onChange={selected => setActiveShade(shades.find(shade => shade._id === selected.value))}
    />
  );
}

export default ShadeList;