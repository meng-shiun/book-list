import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Detail for:</h3>
        <div>Title: {this.props.book.title}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  book: state.activeBook
})

export default connect(mapStateToProps)(BookDetail)
