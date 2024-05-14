import React, { useState, useEffect } from "react";
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy';
import BotDetails from '../components/BotDetails';

function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [botSpecs, setBotSpecs] = useState({});

  useEffect(function fetchData() {
    fetch('https://json-server-3-dp5g.onrender.com/bots')
      .then(response => response.json())
      .then(function(bots) {
        setBotCollection(bots);
        setFilteredCollection(bots);
      })
      .then(function() {
        console.log("Bots Fetched!");
      });
  }, []);

  function addToArmy(bot) {
    const newCollection = filteredCollection.filter(function(card) {
      return card.bot_class !== bot.bot_class;
    });
    setFilteredCollection(newCollection);
    setBotArmy([...botArmy, bot]);
    setCollectionVisible(true);
  }

  function removeFromArmy(bot) {
    const newArmy = botArmy.filter(function(card) {
      return card.id !== bot.id;
    });
    const armyClasses = newArmy.map(function(bot) {
      return bot.bot_class;
    });
    const newCollection = botCollection.filter(function(bot) {
      return !armyClasses.includes(bot.bot_class);
    });
    setBotArmy(newArmy);
    setFilteredCollection(newCollection);
  }

  function removeBotPermanently(bot) {
    const newCollection = botCollection.filter(function(card) {
      return card !== bot;
    });
    const newFilteredCollection = filteredCollection.filter(function(card) {
      return card !== bot;
    });
    const newArmy = botArmy.filter(function(card) {
      return card !== bot;
    });
    setBotCollection(newCollection);
    setFilteredCollection(newFilteredCollection);
    setBotArmy(newArmy);

    fetch(`https://json-server-3-dp5g.onrender.com/bots/${bot.id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(result => console.log(result));
  }

  function displayBotSpecs(bot) {
    setCollectionVisible(false);
    setBotSpecs(bot);
  }

  function displayBotCollection() {
    setCollectionVisible(true);
  }

  return (
    <div>
      <BotArmy
        bots={botArmy}
        action={removeFromArmy}
        removeCard={removeBotPermanently} />
      {collectionVisible
        ? <BotCollection
          botCollection={filteredCollection}
          action={displayBotSpecs}
          removeCard={removeBotPermanently} />
        : <BotDetails
          bot={botSpecs}
          back={displayBotCollection}
          enlist={addToArmy} />
      }
    </div>
  );
}

export default BotsPage;
