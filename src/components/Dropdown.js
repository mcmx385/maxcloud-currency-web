const Dropdown = ({ name, selected, onChange, id, data }) => {
  const options = () => {
    return Object.keys(data).map((key, idx) => {
      return (
        <option value={key} key={idx}>
          {key} ({data[key]})
        </option>
      )
    })
  }
  return (
    <select
      name={name}
      id={id}
      className="form-control"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {options()}
    </select>
  )
}
export default Dropdown
