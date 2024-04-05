import ClipLoader from 'react-spinners/ClipLoader';

// These are the custom styles.
const override = {
  display: 'block',
  margin: '100px auto',
};

// Spinner takes in the loading prop destructured as seen below.
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      // cssOverride is used here to create custom styles with the variable name override.
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;