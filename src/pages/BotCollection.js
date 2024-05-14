import React from 'react';
import BotDisplay from "../components/BotDisplay";

function BotCollection({ botCollection, action, removeCard }) {
  const showBots = botCollection.map(bot => {
    return <BotDisplay key={bot.id} bot={bot} action={action} removeCard={removeCard} />;
    
  });

  return (
    <div className='column'>
      {showBots}
      <p>You have completed your Bot Army. There are no more bots to collect.</p>
    </div>
  );
}

export default BotCollection;
