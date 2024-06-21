import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Technologies() {
  return (
    <div className="text-center">
      <h1 className="display-2 text-info bg-dark p-2">Technologies</h1>
      <ul className='nav justify-content-center mt-2'>
        <li className="nav-item">
          <Link className="nav-link active" to="Rjs"><b><p style={{fontSize:'30px'}} className='text-secondary'>ReactJS</p></b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Angular"><b><p style={{fontSize:'30px'}} className=' text-secondary'>Angular</p></b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="Vue"><b><p style={{fontSize:'30px'}} className=' text-secondary'>Vue</p></b></Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Technologies;
