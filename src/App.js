import React, { Component } from "react";
// import "./styles.css";
import { connect } from "react-redux";
// import store from "./redux/store/store";
import { addUserData } from "./redux/actions/UserAction";
import CustomForm from "./components/CustomForm";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <CustomForm onSaveData={this.props.createUserData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    createUserData: formData => dispatch(addUserData(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
