import React from "react";

import "./Rules.css"

export default function Rules() {
    return (
      <>
          <div className={"page-title"}>On Your Turn</div>
          <ol>Do the following in any order
              <li>Explore the house
                  <ul>
                      <li>Your speed at the start of your turn is how many squares you can travel</li>
                      <li>Moving up or down stairs does not cost movement</li>
                      <li>Using dumb waiters costs 2 movement and takes you to the staircase or a landing 1 floor above or below you</li>
                      <li>You may move and discover new rooms until you run out of movement or decide to stop moving</li>
                      <li>Your turn ends if you discover a new room with an event, omen, or item symbol. Stop moving, draw the appropriate card, and follow its instructions</li>
                  </ul>
              </li>
              <li>Once per turn after the haunt has started, you can attack another player.
                  <ul>
                      <li>The player must be in the same room unless you have an item which lets you attack from a distance</li>
                      <li>Use your might trait for attacking and defending unless you have an item or omen that lets you use a different trait</li>
                      <li>See rulebook page 13</li>
                  </ul>
              </li>
              <li>Use item cards and/or omen abilities</li>
              <li>Pick up or drop items and omens</li>
              <li>Trade items or omens with a player in the same room. After the haunt starts, heros may only trade with other heros </li>
          </ol>

          <div className={"page-title"}>Building the House</div>
          <ol>
              <li>You may not place a room tile on a floor if it leaves no open doors for exploring unless it is the last room tile for that floor.
                  Rearrange rooms or draw a new tile if necessary.</li>
          </ol>
      </>
    )
}
