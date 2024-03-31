const Card = ({ children, bg = 'bg-gray-100' }) => {
  // passing in tailwind styles as props and children as other components
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  );
};
export default Card;