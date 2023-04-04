import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import { editPost, updatePost } from "../feature/counterSlice";
// import { fetchPosts } from "../feature/counterSlice";

function Card() {
  const users = useSelector((state) => state);
  // let dataArr = users.reverse()
  const dispatch = useDispatch();


  function handleDelete(id){
   dispatch(updatePost(id))
  }
  function handleEdit(id){
    dispatch(editPost(id))
  }

  return (
    <>
      <Nav />

      <div className="card-group">
        
        { users.map((obj, index) => (
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
            <div style={{'display':"flex"}}>
              <p style={{'margin':'10px'}} onClick={()=>handleDelete(obj.id)}> 
                <i className="fa-solid fa-trash"></i>
              </p>
              <p style={{'margin':'10px'}} onClick={()=>handleEdit(obj.id)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </p>
            </div>
            <>
            </>
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
