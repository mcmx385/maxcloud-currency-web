import Nav from "../components/Nav"

const Users = () => {
  return (
    <div>
        <Nav title='Users Page'/>
      <ul>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((user, idx) => {
          return <li key={idx}>{user}</li>
        })}
      </ul>
      ...
    </div>
  )
}
export default Users
