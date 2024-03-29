
// title and subtitle have default props being set in as 'Become a React Dev' and 'Find the React job that fits your skill set' Also, they can be overwritten if props.title or props.subtitle is being reassigned.
const Hero = ({
    title = 'Become a React Dev',
    subtitle = 'Find the React job that fits your skill set',
  }) => {
    return (
      <section className='bg-indigo-700 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            {/* passing in the prop title */}
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            {/* passing in the prop subtitle */}
            <p className='my-4 text-xl text-white'>{subtitle}</p>
          </div>
        </div>
      </section>
    );
  };
  export default Hero;