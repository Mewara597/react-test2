import { memo } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";
// import { fetchPosts } from "../feature/counterSlice";

function Card() {
  // console.log(props);
  const users = useSelector((state) => state);

  console.log(users);

  return (
    <>
      <Nav />

      <div className="card-group">
        {users.map((obj, index) => (
          <div
            className="card m-5 hover-overlay shadow-lg p-3 mb-5 bg-body rounded "
            style={{ minWidth: "250px", cursor: "pointer" }}
            key={index}
          >
            <div className="bg-image view overlay zoom">
              <img
                src={`https://picsum.photos/200/300?image=${index + 11}`}
                className="card-img-top img-fluid "
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{obj.title}</h5>
              {/* <p className="card-text mask flex-center">
              {"this is random string"}
            </p> */}
              <div className="bg-info">
                <p className="text-primary">
                  <span>id </span>
                  {obj.id}
                </p>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Recently</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// export default Card;
export default memo(Card);
