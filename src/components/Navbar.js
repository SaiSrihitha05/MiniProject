import './Navbar.css';
function Navbar(){
    return(
        <div className="m-4 d-flex justify-content-between">
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsOl2khoUGBkWl2QYV3EUnwUNPd-D0THQnA&usqp=CAU' alt=''/>
            </div>
            <div className='display-6 text-dark align-items-center d-flex'>
                <p>Home</p>
                <p>Sign Up</p>
                <p>Login</p>
            </div>
        </div>
    );
}
export default Navbar;