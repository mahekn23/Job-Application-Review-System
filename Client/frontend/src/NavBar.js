import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-3" >
              <li class="nav-item">
                <Link to="" class="nav-link active me-5 text-white" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="add" class="nav-link active ms-5 text-white" aria-current="page">Add new candidate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar;