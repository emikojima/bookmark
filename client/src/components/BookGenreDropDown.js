import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setGenre, getNytBooks } from '../actions/bookActions'
import './BookGenreDropDown.css'

class BookGenreDropDown extends Component {

  handleGenreChange = (event) => {
    const { value } = event.target
    this.props.setGenre(value)
    this.props.getNytBooks(value)
  }
  render() {
    return(
    <div >
      <form className="smallfont" >
          <select name="genre" onChange={this.handleGenreChange}>
            <option value="books">Choose a genre</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
            <option value="science">Science</option>
          </select>
        </form>
        <hr/>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    nyt: state.user.nytbooks,
    genre: state.user.genre
  };
};
export default connect(mapStateToProps,{setGenre, getNytBooks})(BookGenreDropDown);
