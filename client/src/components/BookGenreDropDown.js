import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setGenre, getNytBooks } from '../actions/bookActions'
import './BookGenreDropDown.css'

class BookGenreDropDown extends Component {

  componentDidMount() {
       this.props.getNytBooks(this.props.genre)
    }

  handleGenreChange = (event) => {
    this.props.setGenre(event.target.value)
    this.props.getNytBooks(event.target.value)
  }
  render() {
    return(
    <div >
      <form className="smallfont" >
          <select name="genre" onChange={this.handleGenreChange}>
            <option value="books">Choose a genre</option>
            <option value="books">Fiction</option>
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
    genre: state.user.genre
  };
};
export default connect(mapStateToProps,{setGenre, getNytBooks})(BookGenreDropDown);
