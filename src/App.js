import React, {Component} from "react";
import GameContainer from "./components/GameComps/GameContainer";
import NavBar from "./components/Nav/NavBar"
import images from "./components/images.json"
import GameImage from "./components/GameComps/GameImage"


class App extends Component{
  state = {
    images,
    order : [0,1,2,3],
    score : 0,
    topScore: 0,
    alreadyClicked: []
  }

  handleClickScore = event => {
    event.preventDefault()

    console.log(event.target.id)

    if (this.state.alreadyClicked.indexOf(event.target.id) < 0){
      this.state.alreadyClicked.push(event.target.id)
      this.setState({
        score:  this.state.score + 1
      })
      if (this.state.score === this.state.images.length){
        this.setState({
          score : 0,
          alreadyClicked: []
        })
        
      }

    } else {
      if (this.state.score > this.state.topScore) {
        this.setState({topScore: this.state.score})
      }
      this.setState({
        score : 0,
        alreadyClicked: []
      })
      
    }
   this.orderImages()
  }

  orderImages = () => {
    let newOrder = []
    while( this.state.images.length > newOrder.length){
      let x = Math.floor(Math.random() * this.state.images.length) ;
      if (newOrder.indexOf(x) < 0){
        newOrder.push(x)
      }
    }
    this.setState({
      order: newOrder
    })
    console.log(this.state.order)
  }



  render(){
    
    return (
    <div>
      <NavBar 
        score = {this.state.score} 
        topScore = {this.state.topScore}
      />
      <GameContainer>
        <div className = 'row'>

          {this.state.order.map(i =>(
          // console.log (this.state.images[i].id)
            <GameImage

              id = {this.state.images[i].id}
              source = {this.state.images[i].imageSource}
              key = {this.state.images[i].id}
              onClick = {this.handleClickScore}

            />
          ))}

        </div>
      </GameContainer>
    </div>
    );
  }
}

export default App;
