import Background from '../assets/images/landing.jpeg'
import DataTable from '../components/DataTable'

function Dashboard() {
  return (
    <div
    style={{ backgroundImage: `url(${ Background })`}}
    className='bg-cover bg-fixed h-screen'>
      <DataTable />
    </div>
  )
}

export default Dashboard
