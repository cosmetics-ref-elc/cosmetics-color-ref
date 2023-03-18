export default function ShadeList({ shades, activeShade, setActiveShade }) {

    const shadesDropdown = shades.map((shade) => (
        <option key={shade._id} value={shade._id}>
            <div>
                <img src={shade.swatch_img} alt={shade.name} style={{ width: '30px', marginRight: '10px' }} />
                <p>{shade.name}</p>
            </div>
        </option>
    ))

    return (
        <select
            className="CategoryList"
            value={activeShade?._id}
            onChange={(e) => setActiveShade(shades.find((shade) => shade._id === e.target.value))}
        >
            {shadesDropdown}
        </select>
    );
}
