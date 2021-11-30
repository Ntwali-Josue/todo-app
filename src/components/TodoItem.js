import React from 'react';
class TodoItem extends React.Component {

  handleEditing = () => {
    console.log("editing");
  }
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo
    return (
      <li className="item">
        <div onDoubleClick={this.handleEditing}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
        {title}
        </span>
        </div>
      </li>
    )
}};

export default TodoItem;
