import React from "react";
import { connect } from "react-redux";
import * as actions from '..//../actions';
import { bindActionCreators } from "redux";
import './counter.css';


const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="blockCounter">
      <h1 className="counter">{counter}</h1>
      <button 
      onClick={dec}
      className="btn btn-danger">
        DEC
      </button>
      <button 
      onClick={inc}
      className="btn btn-warning">
        INC
      </button>
      <button 
      onClick={rnd}
      className="btn btn-warning">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
