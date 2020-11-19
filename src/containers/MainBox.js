import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      menuBarSelection: ""
    }
  }


  changeMenuBarSelection = (e) => {
    let sel 
    if (e.target.id === "pokemon"){
      sel = <Pokemon />
    } else if (e.target.id === "cocktail"){
      sel = <Cocktails/>
    } else if (e.target.id === "photo"){
      sel = <Photos/>
    } else if (e.target.id === "profile"){
      sel = <Profile />
    }
    this.setState({
      menuBarSelection: sel
    })
  }

  render() {



    const detailsToDisplay = <div>{this.state.menuBarSelection}</div>

    return (
      <div>
        <MenuBar changeSel={this.changeMenuBarSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
