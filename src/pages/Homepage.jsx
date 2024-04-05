import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      {/* The prop isHome is a boolean check to see if you are on the JobListings home page then display all the listings. If false then display the reassigned variable that is sliced to 3 listings. */}
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;