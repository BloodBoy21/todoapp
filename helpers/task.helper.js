class Task {
  constructor(id, data) {
    this._id = id
    this.data = data
  }

  get id() {
    return this._id
  }
}

export default Task
