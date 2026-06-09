import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-center animate-fade-in">
      <div className="card text-center" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="mb-2">AI Study Assistant</h1>
        <p className="subheading mb-6">Your intelligent companion for smarter, faster learning.</p>
        
        <div className="d-flex justify-center gap-4">
          <Link to="/login" className="btn btn-outline btn-lg w-full">Login</Link>
          <Link to="/register" className="btn btn-primary btn-lg w-full">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;