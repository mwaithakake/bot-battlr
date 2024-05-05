import React from "react"

const botData = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
}
function BotCard({bot,action,removeCard}){
   
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

export default BotCard