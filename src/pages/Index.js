import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <Nav title="CurrencyApp" />
      <div className="container">
        <h2>Title</h2>
        ... things
        <br/>
        <Link to="/about" className='btn btn-primary'> Go To About</Link>
      </div>
    </div>
  )
}
export default Index
