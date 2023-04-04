// import axios from "axios";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setpost } from "../feature/counterSlice";

export default function Album() {
  let obj = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    obj = {
      title: e.target.querySelector("#title").value,
      userId: e.target.querySelector("#userId").value,
      Id: e.target.querySelector("#id").value,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/albums",
      obj
    );

    console.log(response.data, "this is data");
    dispatch(setpost(response.data));
    navigate("/");
  };

  // useEffect(() => {
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="card text-white bg-warning mb-3 container text-center d-flex align-items-center justify-content-center mt-5 "
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Add Album</div>
        <div className="card-body">
          <p className="card-text">
            you can add information for adding an album.
          </p>
          <input
            id="title"
            placeholder="enter title here "
          />
          <input id="userId" placeholder="enter userId here"  />
          <input id="id" placeholder="enter Id here"  />
          <input type="submit" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
