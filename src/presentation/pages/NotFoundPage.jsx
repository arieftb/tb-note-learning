import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="not-found-page">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="button">Back to Home</Link>
      </div>
    </div>
  );
};