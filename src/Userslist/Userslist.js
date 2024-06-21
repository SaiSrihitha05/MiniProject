import './Userslist.css';
function Userslist(){
    const a=[
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3  justify-content-center ">
                    {
                        a.map((item,index)=>
                        <div key={index} className='card m-4 shadow-lg p-3 mb-5 bg-white rounded '>
                            <div className="card-body p-2 text-center">
                                <img className="d-block m-auto mb-2 rounded-circle" src={item.avatar} alt=' '/>
                                <p><b>Id : </b>{item.id}</p>
                                <p><b>FirstName : </b>{item.first_name}</p>
                                <p><b>LastName : </b>{item.last_name}</p>
                                <p><b>Email : </b>{item.email}</p>
                            </div>
                        </div>
                        )
                    }
            </div>
            <br></br>
        </div>
    );
}
export default Userslist;