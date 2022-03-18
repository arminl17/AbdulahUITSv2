import "../styles/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className='error-wrapper'>
      <div className='error-spinner'>
        <div className='inner-spinner' />
      </div>
      <h2 className='error-text'>
        The page you requested is missing, please go <a href='/'>back!</a>
      </h2>
    </div>
  );
};

export default ErrorPage;
