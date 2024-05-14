import React from 'react'
import BotDisplay from "../components/BotDisplay"

function YourBotArmy(props) {
const displayBots = props.bots.map(bot => {
return <BotDisplay key={bot.id}  bot={bot} action={props.action} removeCard={props.removeCard} />
  })
  return (
    <div className=" bot-army">
       {displayBots}
        </div>
  )}


export default YourBotArmy