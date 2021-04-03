import React, {Component} from "react";
import { Container } from './dnd-components/Container';

import './App.css';

import { TEXT_FILE_1, TEXT_FILE_2, TEXT_FILE_3} from "./Types/ItemTypes";
import fetchTextFile from "./word-processing/fetchTextFiles";
import findCommonWords from "./word-processing/findCommonWords";

import WordButton from "./components/WordButton";

class App extends Component {

  constructor() {
    super();

    this.state = {
      words: [],
      hideSourceOnDrag : true
    }
  }

  async componentDidMount () {
    const result = await fetchTextFile(TEXT_FILE_1, TEXT_FILE_2, TEXT_FILE_3);
    const words = await findCommonWords(result);
    this.setState({words: words})
  }

  setWordActive(word) {
     this.setState({ [word] : {isActive : true } }) 
     
     if (this.state[word] && this.state[word].isActive) {
       this.setState({ [word] : {isActive : false }})
     }
  }

  render() {
    const { words } = this.state;
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="container col-lg-4 col-sm-6 col-xs-12">
              <div 
                className="video-box"
              >
              <Container 
                hideSourceOnDrag={this.state.hideSourceOnDrag}
                words = {words}
                active = {words.map((word) => this.state[word] ? this.state[word].isActive : false)}
              />

              </div> 
            <div className="d-flex flex-row justify-content-between mt-2">
            {words.map((word, index) => 
              <WordButton
                index = {index}
                word = {word}
                isActive = {this.state[word] ? this.state[word].isActive : null}
                toggleWordActive = {() => this.setWordActive(word)} 
              />
              )}
            </div>
            </div>
          </div>
      </div>
      );
    }
}

export default App;
