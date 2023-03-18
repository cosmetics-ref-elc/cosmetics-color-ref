// export default function ShadeList({ shades, activeShade, setActiveShade }) {

//     console.log(shades[0])

//     const shadesDropdown = shades.map((shade) => (
//         <option key={shade._id} value={shade._id}>
//             <div>
//                 <img src={shade.swatch_img} alt={shade.name} style={{ width: '30px', marginRight: '10px' }} />
//                 <p>{shade.name}</p>
//             </div>
//         </option>
//     ))

//     return (
//         <select
//             className="CategoryList"
//             value={activeShade?._id}
//             onChange={(e) => setActiveShade(shades.find((shade) => shade._id === e.target.value))}
//         >
//             {shadesDropdown}
//         </select>
//     );
// }

import React from 'react';
import Select from 'react-select';

export default function ShadeList({ shades, activeShade, setActiveShade }) {
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

