import "./InputFeilds.css";
import React, { Component } from "react";

export class InputFeilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoData: {
        Title: "",
        Discription: "",
        SubmitedDate: "",
      },
    };
    this.TitleInputChangeHandler = this.TitleInputChangeHandler.bind(this);
    this.DiscriptionInputChangeHandler =
      this.DiscriptionInputChangeHandler.bind(this);
    this.FormSubmitionHandler = this.FormSubmitionHandler.bind(this);
    this.setDateHandler = this.setDateHandler.bind(this);
  }
  TitleInputChangeHandler = (event) => {
    this.setState((prevState) => ({
      TodoData: {
        ...prevState.TodoData,
        Title: event.target.value,
      },
    }));
  };
  DiscriptionInputChangeHandler = (event) => {
    this.setState((prevState) => ({
      TodoData: {
        ...prevState.TodoData,
        Discription: event.target.value,
      },
    }));
  };
  FormSubmitionHandler = (event) => {
    event.preventDefault();
    this.setState({ TodoData: { Important: false, Editable: false } });
    const { TodoData } = this.state;
    this.props.GDFIF(TodoData);
    this.setState({ TodoData: { Title: "", Discription: "" } });
  };
  setDateHandler = () => {
    this.setState((prevState) => ({
      TodoData: {
        ...prevState.TodoData,
        ID: new Date().getMilliseconds(),
        SubmitedDate: `${new Date()}`,
      },
    }));
  };
  render() {
    const {
      TitleInputChangeHandler,
      DiscriptionInputChangeHandler,
      FormSubmitionHandler,
      setDateHandler,
    } = this;
    const { Title, Discription } = this.state.TodoData;
    return (
      <div className="input-feild-holder">
        <form className="form" onSubmit={FormSubmitionHandler}>
          <input
            minLength="10"
            placeholder="Todo Title..."
            className="title-feild"
            value={Title}
            autoComplete="off"
            onChange={TitleInputChangeHandler}
            type="text"
            required={true}
          />
          <textarea
            minLength="20"
            placeholder="Discription"
            className="text-area"
            autoComplete="off"
            value={Discription}
            onChange={DiscriptionInputChangeHandler}
            required={true}
          ></textarea>
          <input
            type="submit"
            className="submit-button"
            onClick={setDateHandler}
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default InputFeilds;
