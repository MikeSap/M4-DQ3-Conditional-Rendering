import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      menuBarSelection: "profile"
    }
  }


  changeMenuBarSelection = (e) => {
    this.setState({
      menuBarSelection: e.target.id
    })
  }

  render() {

    let sel 
    if (this.state.menuBarSelection === "pokemon"){
      sel = <Pokemon />
    } else if (this.state.menuBarSelection === "cocktail"){
      sel = <Cocktails/>
    } else if (this.state.menuBarSelection === "photo"){
      sel = <Photos/>
    } else if (this.state.menuBarSelection === "profile"){
      sel = <Profile />
    }


    const detailsToDisplay = <div>{sel}</div>

    return (
      <div>
        <MenuBar changeSel={this.changeMenuBarSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
