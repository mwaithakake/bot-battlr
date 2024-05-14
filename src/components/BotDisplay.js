import React from "react"


function BotDisplay({bot,action,removeCard}){
   
  function handleClick(event) {
    console.log("Button is clicked")
    action(bot)
  }

  function deleteButton(event) {
    console.log("Delete button has been clicked")
    event.stopPropagation()
    removeCard(bot)
  }


  return (
    <div >
      <div className="bot" key={bot.id} onClick={handleClick} >
        <div > <img alt="sorry try again" src={bot.avatar_url} />
        </div>
        <div> 
          <div >
            {bot.name}
          </div>
          <div>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div >
          <span> {bot.health} </span>

          <span> {bot.damage} </span>
          <span>  {bot.armor}  </span>
          <span>
            <div >
              <button className="deletebutton"
             
                onClick={deleteButton} >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div >
  )
}

export default BotDisplay