import React from "react";

const ArticleItem = ({ name, location, status, editedAt,dispatch }) => {
    const returnItem = () => {
        dispatch({type: 'RETURN', id: '555' })
    }
    const takeItem = () => {
        dispatch({type: 'TAKE', id: '555' })
    }
  return (
    <>
      <p>name is: {name}</p>
      <p>location is: {location}</p>
      <p>status is: {status}</p>
      <p>editedAt is: {editedAt}</p>
      <button onClick={()=>returnItem()} >Return item</button>
      <button onClick={()=>takeItem()} >Take item</button>
    </>
  );
};

export default ArticleItem;
