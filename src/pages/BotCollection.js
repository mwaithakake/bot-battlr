import React from 'react';
import BotDisplay from "../components/BotDisplay";
import '../App.css'; // Import CSS file

function BotCollection({ botCollection, action, removeCard }) {
  return (
    <div className="bot-collection"> {/* Apply grid styling */}
      {botCollection.map(bot => (
        <div key={bot.id} className="bot-card"> {/* Apply individual card styling */}
          <BotDisplay bot={bot} action={action} removeCard={removeCard} />
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
