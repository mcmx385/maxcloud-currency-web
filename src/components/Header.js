import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <h2>
        {title}
        <Button
          text={showAdd ? 'X' : 'Add'}
          bgcolor={showAdd ? 'danger' : 'info'}
          float="right"
          onClick={onAdd}
        />
      </h2>
    </div>
  )
}
export default Header
