import { Navigation } from "./About";
import { Link } from "react-router-dom";

const BlogMain = () => {
    return (
        <div id="container" className="container">
      <div className="row justify-content-center">
        <div className="col-6"> {/* Adjust the column width as needed */}
          <Navigation />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6"> {/* Adjust the column width as needed */}
          <div className="text-center p-5">
            <Link id="icon" to='/sprint-3'>Sprint 3</Link>
          </div>
          <div className="text-center p-5">
            <Link id="icon" to='/sprint-4'>Sprint 4</Link>
          </div>
          <div className="text-center p-5">
            <Link id="icon" to='/sprint-5'>Sprint 5</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogMain;