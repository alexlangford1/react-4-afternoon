import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`,
      )
      .then((res) => {
        this.setState({ students: res.data })
      })
    console.log("1111111", this.props)
  }

  render() {
    const student = this.state.students.map((e, i) => (
      <Link to={`/student/${e.id}`} key={i}>
        <h3>
          {e.first_name} {e.last_name}
        </h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1 style={{borderBottom: '3px solid black'}}>{this.props.match.params.class}</h1>
        <h2 >ClassList:</h2>
        {student}
        <button><Link to='/' style={{color: 'white'}}>Return</Link></button>
      </div>
    )
  }
}
