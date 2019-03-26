import React, { Component } from "react"
import { Link, Switch, Route } from "react-router-dom"
import History from "../History/History"
import Contact from "../Contact/Contact"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam et blanditiis unde aut natus dicta, libero veniam
                    suscipit iusto iste omnis sit consequuntur voluptates, ipsum
                    animi a quibusdam, fuga beatae. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laborum nemo deleniti,
                    tempora, nobis dignissimos, similique ratione impedit
                    tenetur ea officiis enim? Quos molestiae dignissimos sit
                    ullam doloremque iste adipisci dolore. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officia, ex aliquam?
                    Pariatur reiciendis facilis nostrum quod doloremque ad
                    architecto ipsum. Facere a labore tempore iure illo soluta
                    rerum laboriosam ex.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}
