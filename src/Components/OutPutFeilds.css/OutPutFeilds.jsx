import React, { Component } from "react";
import "./OutPutFeilds.css";

export class OutPutFeilds extends Component {
  render() {
    const {
      TodoRemover,
      VisibilityToggler,
      EditToggler,
      TitleEditHangler,
      DiscriptionEditHangler,
    } = this.props;

    return (
      <div className="Out-put-holder">
        {this.props.TodoStack.map((Todo) => {
          const { ID, Editable, Title, SubmitedDate, Important, Discription } =
            Todo;
          return (
            <div className="todo" key={ID}>
              <div className="header-section">
                {Editable ? (
                  <input
                    value={Title}
                    minLength="10"
                    required={true}
                    onChange={(event) =>
                      TitleEditHangler(event.target.value, ID)
                    }
                    className="title-feild-editor"
                  ></input>
                ) : (
                  <p className="title">{Title}</p>
                )}
                <div className="menu-holder">
                  <button
                    className="menu-btns"
                    onClick={() => VisibilityToggler(!Important, ID)}
                  >
                    <i
                      className={
                        Important
                          ? "fa-solid active-start fa-star"
                          : "fa-regular non-active-start fa-star"
                      }
                    ></i>
                  </button>
                  <button
                    className="exit-btn"
                    onClick={() => EditToggler(!Editable, ID)}
                  >
                    <i
                      className={
                        Todo.Editable
                          ? "fa-solid fa-xmark remove-btn-true"
                          : "fa-solid fa-pen remove-btn-false"
                      }
                    ></i>
                  </button>

                  <button className="menu-btns" onClick={() => TodoRemover(ID)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
              <div
                className={
                  Editable ? "body-section-for-editor" : "body-section"
                }
              >
                {Editable ? (
                  <textarea
                    minLength="20"
                    value={Discription}
                    required={true}
                    onChange={(event) =>
                      DiscriptionEditHangler(event.target.value, ID)
                    }
                    className="text-area-editor"
                  ></textarea>
                ) : (
                  <p className="paragraph" spellCheck="false">
                    {Discription}
                  </p>
                )}
              </div>
              <div className="date-holder">
                <p className="submiteddate-text">{SubmitedDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OutPutFeilds;
