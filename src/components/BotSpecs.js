import React from "react"

const botData = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
}

function BotSpecs(props) {
  return (
    <div >
      <div >
        <div className="specsbox">
          <div >
            <img alt="try again" src={props.bot.avatar_url} />
          </div>
          <div >
            <h2>NAME: {props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class}
              <i className={botData[props.bot.bot_class]} />
            </strong>
            <br />
            <div >
              <div>
                <div >
                  <div >
                   <strong> Health:{props.bot.health}</strong>
                  </div>
                  <div>
                    <strong>Damage:{props.bot.damage}</strong>
                  </div>
                  <div>
                     <strong>Armour:{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button  onClick={() => props.back() } > BACK </button>
            <button  onClick={() => props.enlist(props.bot)} > ENLIST </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotSpecs