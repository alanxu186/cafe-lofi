import lofiabout3 from '../assets/lofiabout3.mp4'

const About = () => {

  return (
    <div>
        <div className="bg-[#78949f] h-100">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Enter the Lofi-Zone</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">A platform for you to connect with fellow lofi listeners that share your similar tastes</p>
            <div className="flex flex-wrap justify-center">
              <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
              <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
            </div>
          </div>
        </div>
        <video src={lofiabout3} alt="video-img" autoPlay loop muted className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
    </div>
  )
}

export default About