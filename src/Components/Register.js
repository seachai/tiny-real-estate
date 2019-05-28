import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="bg">
            <section id="orderModal">
              <div className="left-modal">
                <h1 className="title">Order Online</h1>
                <p>Be the first to know when online ordering is available!</p>
    
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
    
                <button className="input-button">Sign Up</button>
              </div>
              <div className="right-modal">
                <button onClick={this.props.trigger}>
                  <i className="far fa-times-circle" />
                </button>
              </div>
            </section>
          </div>
        )
    }
}
