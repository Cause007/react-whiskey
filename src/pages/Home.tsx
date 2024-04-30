import Background from '../assets/images/landing.jpeg'

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-blend-color bg-cover bg-fixed'
      >
        <div className="flex place-items-center h-screen">
            <h3 className="p-5 bg-white bg-opacity-50 text-black rounded">Welcome! Enjoy a drink!</h3>
        </div>
    </div>
  )
}

export default Home

