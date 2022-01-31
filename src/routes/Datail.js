import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Detail({ toDo }) {
  return (
    <>
      <Link to={"/"}>Go to Home </Link>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);