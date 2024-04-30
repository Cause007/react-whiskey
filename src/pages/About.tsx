import Background from '../assets/images/landing.jpeg'

const About = () => {
  return (
        <div
        style={{ backgroundImage: `url(${ Background })`}}
        className='flex flex-row justify-start mx-auto bg-blend-color h-screen bg-cover bg-fixed bg-black bg-opacity-20 -my-24'
          >
            <div className="m-36 flex place-items-start h-screen">
                <h3 className="p-5 bg-white bg-opacity-70 text-black rounded">Not much to talk about</h3>
            </div>
        </div>
      )
    }

export default About
