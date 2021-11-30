import React from 'react';
class TodoItem extends React.Component {

  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true
    })
  }

  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo;
    
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className="item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        <input type="text" style={editMode} className="text-input" value={title} onChange={(e) => this.props.setUpdate(e.target.value, id)} onKeyDown={this.handleUpdateDone}/>
      </li>
    )
}};

export default TodoItem;
