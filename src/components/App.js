import React, { Component } from 'react'
// import Items from './ItemList'
import styles from '../styles/screen.scss'

class App extends Component {

// After entering the layout. We 1st add an initial state
  constructor () {
    super()
    this.state = {
      items: [],
      value: ''
    }
  }
// 2nd we add items into the ul in the render
// 3rd we create a variable items and map function
// It'll take in two arguments. The item in the array and where it starts
// This returns a new item.
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat({
        label: this.state.value,
        done: false
      }),
      // concat is like push, but push modifies the array itself
      value: ''
    })
  }

  toggleComplete = (i) => {
    const items = this.state.items.slice()
    items[i].done = !items[i].done
    this.setState({
      items: items
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      const isDone = item.done ? styles.done : ''
      return <li className={isDone} key={i} onClick={() => this.toggleComplete(i)}> {item.label} </li>
    })

    return <main className={styles.root}>
      <header>
        <h1>One List&#8253;</h1>
      </header>
      <ul>
        {items}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value}
          onChange={this.handleChange}
          placeholder='What to do?' />
      </form>
      <footer>
        <p>&copy; 2016 | Miguel Malcolm. One List to Rule them All!</p>
      </footer>
    </main>
  }
}

export default App
