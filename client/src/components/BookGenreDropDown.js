import React, { Component } from 'react';
import BestSellers from '../container/BestSellers'
import { connect } from 'react-redux'
import { setGenre, getNytBooks } from '../actions/bookActions'



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
    <div>
      <form>
          <select name="genre" onChange={this.handleGenreChange}>
            <option value="books">Choose a genre</option>
            <option value="books">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
            <option value="science">Science</option>
          </select>
        </form>
        <BestSellers />
    </div>
    )
}
}
const mapStateToProps = state => {
  return {
    genre: state.genre
  };
};
export default connect(mapStateToProps,{setGenre, getNytBooks})(BookGenreDropDown);
