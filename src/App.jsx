import "./Styles/App.css";
import React, { Component } from "react";
import InputFeilds from "./Components/InputFeilds/InputFeilds";
import OutPutFeilds from "./Components/OutPutFeilds.css/OutPutFeilds";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TodoStack: [
        {
          Discription: "This is just for testing ",
          ID: 238,
          Important: true,
          SubmitedDate:
            "Mon Sep 05 2022 12:33:50 GMT+0530 (India Standard Time)",
          Title: "Todo sample ",
          Editable: false,
        },
        {
          Discription:
            "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          ID: 4545,
          Important: true,
          SubmitedDate:
            "Mon Sep 05 2022 12:33:50 GMT+0530 (India Standard Time)",
          Title: "Why do we use it?",
          Editable: false,
        },
        {
          Discription:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
          ID: 454,
          Important: false,
          SubmitedDate:
            "Mon Sep 05 2022 12:33:50 GMT+0530 (India Standard Time)",
          Title: "Where does it come from?",
          Editable: false,
        },
      ],
    };
    this.GetDataFromInputFeilds = this.GetDataFromInputFeilds.bind(this);
    this.RemoveTodoHandler = this.RemoveTodoHandler.bind(this);
    this.ImportantBtnVisibilityToggler =
      this.ImportantBtnVisibilityToggler.bind(this);
    this.EditBtnToggleHandler = this.EditBtnToggleHandler.bind(this);
    this.TitleEditHangler = this.TitleEditHangler.bind(this);
    this.DiscriptionEditHangler = this.DiscriptionEditHangler.bind(this);
  }
  GetDataFromInputFeilds = (TodoData) => {
    this.setState({ TodoStack: [...this.state.TodoStack, TodoData] });
  };
  RemoveTodoHandler = (removeID) => {
    const { TodoStack } = this.state;
    for (let i = 0; i < this.state.TodoStack.length; i++) {
      if (removeID === TodoStack[i].ID) {
        TodoStack.splice(i, 1);
        this.setState({ TodoStack: [...TodoStack] });
        return;
      }
    }
  };

  ImportantBtnVisibilityToggler = (ToggleValue, TogglerID) => {
    const { TodoStack } = this.state;
    for (let i = 0; i < TodoStack.length; i++) {
      if (TogglerID === TodoStack[i].ID) {
        this.setState((prevState) => ({
          [prevState.TodoStack]: [
            ...TodoStack,
            (TodoStack[i].Important = ToggleValue),
          ],
        }));
        return;
      }
    }
  };

  EditBtnToggleHandler = (value, ID) => {
    const { TodoStack } = this.state;
    for (let i = 0; i < TodoStack.length; i++) {
      if (TodoStack[i].Editable === true) {
        this.setState((prevState) => ({
          [prevState.TodoStack]: [
            ...TodoStack,
            (TodoStack[i].Editable = false),
          ],
        }));
      }
    }
    for (let i = 0; i < TodoStack.length; i++) {
      if (ID === TodoStack[i].ID) {
        this.setState((prevState) => ({
          [prevState.TodoStack]: [
            ...TodoStack,
            (TodoStack[i].Editable = value),
          ],
        }));
        return;
      }
    }
  };

  TitleEditHangler = (TitleValue, FeildID) => {
    const { TodoStack } = this.state;
    for (let i = 0; i < TodoStack.length; i++) {
      if (FeildID === TodoStack[i].ID) {
        this.setState((prevState) => ({
          [prevState.TodoStack]: [
            ...TodoStack,
            (TodoStack[i].Title = TitleValue),
          ],
        }));
        return;
      }
    }
  };
  DiscriptionEditHangler = (DiscrValue, FeildID) => {
    const { TodoStack } = this.state;
    for (let i = 0; i < TodoStack.length; i++) {
      if (FeildID === TodoStack[i].ID) {
        this.setState((prevState) => ({
          [prevState.TodoStack]: [
            ...TodoStack,
            (TodoStack[i].Discription = DiscrValue),
          ],
        }));
        return;
      }
    }
  };
  render() {
    const { TodoStack } = this.state;
    const {
      GetDataFromInputFeilds,
      RemoveTodoHandler,
      ImportantBtnVisibilityToggler,
      EditBtnToggleHandler,
      TitleEditHangler,
      DiscriptionEditHangler,
    } = this;
    return (
      <div className="ToDoApp">
        <InputFeilds GDFIF={GetDataFromInputFeilds}></InputFeilds>
        <OutPutFeilds
          TodoStack={TodoStack}
          TodoRemover={RemoveTodoHandler}
          VisibilityToggler={ImportantBtnVisibilityToggler}
          EditToggler={EditBtnToggleHandler}
          TitleEditHangler={TitleEditHangler}
          DiscriptionEditHangler={DiscriptionEditHangler}
        ></OutPutFeilds>
      </div>
    );
  }
}

export default App;
