import React, { useState } from 'react';
import './App.scss';
import { deal, draw } from './Util/Functions'

// CLASS IMPORTS
import Card from './Classes/Card'
import Player from './Classes/Player'
import Chip from './Classes/Chip'
import Wallet from './Classes/Wallet'
import Board from './Classes/Board'
import Dealer from './Classes/Dealer'

// COMPONENT IMPORTS


function App() {

 

  // ---- > INITIALIZE 
  // INIT CARDS
  const CA = new Card("clover ace", 1, "clover", "/images/AC.png", "ace")
  const C2 = new Card("clover two", 2, "clover", "/images/2C.png", null)
  const C3 = new Card("clover three", 3, "clover", "/images/3C.png", null)
  const C4 = new Card("clover four", 4, "clover", "/images/4C.png", null)
  const C5 = new Card("clover five", 5, "clover", "/images/5C.png", null)
  const C6 = new Card("clover six", 6, "clover", "/images/6C.png", null)
  const C7 = new Card("clover seven", 7, "clover", "/images/7C.png", null)
  const C8 = new Card("clover eight", 8, "clover", "/images/8C.png", null)
  const C9 = new Card("clover nine", 9, "clover", "/images/9C.png", null)
  const C10 = new Card("clover ten", 10, "clover", "/images/10C.png", null)
  const CJ = new Card("clover jack", 10, "clover", "/images/JC.png", "jack")
  const CQ = new Card("clover queen", 10, "clover", "/images/QC.png", "queen")
  const CK = new Card("clover king", 10, "clover", "/images/KC.png", "king")

  const clovers = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK]

  const SA = new Card("spade ace", 1, "spade", "/images/AS.png", "ace")
  const S2 = new Card("spade two", 2, "spade", "/images/2S.png", null)
  const S3 = new Card("spade three", 3, "spade", "/images/3S.png", null)
  const S4 = new Card("spade four", 4, "spade", "/images/4S.png", null)
  const S5 = new Card("spade five", 5, "spade", "/images/5S.png", null)
  const S6 = new Card("spade six", 6, "spade", "/images/6S.png", null)
  const S7 = new Card("spade seven", 7, "spade", "/images/7S.png", null)
  const S8 = new Card("spade eight", 8, "spade", "/images/8S.png", null)
  const S9 = new Card("spade nine", 9, "spade", "/images/9S.png", null)
  const S10 = new Card("spade ten", 10, "spade", "/images/10S.png", null)
  const SJ = new Card("spade jack", 10, "spade", "/images/JS.png", "jack")
  const SQ = new Card("spade queen", 10, "spade", "/images/QS.png", "queen")
  const SK = new Card("spade king", 10, "spade", "/images/KS.png", "king")

  const spades = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK]

  const DA = new Card("diamond ace", 1, "diamond", "/images/DA.png", "ace")
  const D2 = new Card("diamond two", 2, "diamond", "/images/2D.png", null)
  const D3 = new Card("diamond three", 3, "diamond", "/images/3D.png", null)
  const D4 = new Card("diamond four", 4, "diamond", "/images/4D.png", null)
  const D5 = new Card("diamond five", 5, "diamond", "/images/5D.png", null)
  const D6 = new Card("diamond six", 6, "diamond", "/images/6D.png", null)
  const D7 = new Card("diamond seven", 7, "diamond", "/images/7D.png", null)
  const D8 = new Card("diamond eight", 8, "diamond", "/images/8D.png", null)
  const D9 = new Card("diamond nine", 9, "diamond", "/images/9D.png", null)
  const D10 = new Card("diamond ten", 10, "diamond", "/images/10D.png", null)
  const DJ = new Card("diamond jack", 10, "diamond", "/images/JD.png", "jack")
  const DQ = new Card("diamond queen", 10, "diamond", "/images/QD.png", "queen")
  const DK = new Card("diamond king", 10, "diamond", "/images/KD.png", "king")

  const diamonds = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK]

  const HA = new Card("heart ace", 1, "heart", "/images/AH.png", "ace")
  const H2 = new Card("heart two", 2, "heart", "/images/2H.png", null)
  const H3 = new Card("heart three", 3, "heart", "/images/3H.png", null)
  const H4 = new Card("heart four", 4, "heart", "/images/4H.png", null)
  const H5 = new Card("heart five", 5, "heart", "/images/5H.png", null)
  const H6 = new Card("heart six", 6, "heart", "/images/6H.png", null)
  const H7 = new Card("heart seven", 7, "heart", "/images/7H.png", null)
  const H8 = new Card("heart eight", 8, "heart", "/images/8H.png", null)
  const H9 = new Card("heart nine", 9, "heart", "/images/9H.png", null)
  const H10 = new Card("heart ten", 10, "heart", "/images/10H.png", null)
  const HJ = new Card("heart jack", 10, "heart", "/images/JH.png", "jack")
  const HQ = new Card("heart queen", 10, "heart", "/images/QH.png", "queen")
  const HK = new Card("heart king", 10, "heart", "/images/KH.png", "king")

  const hearts = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK]

  const deck = [clovers, spades, diamonds, hearts]

  // INIT CHIPS
  const onechip = new Chip(1, "")
  const fivechip = new Chip(5, "")
  const tenchip = new Chip(10, "")
  const twentyfivechip = new Chip(25, "")
  const fiftychip = new Chip(50, "")
  const hundredchip = new Chip(100, "")

  const startingBalance = [hundredchip, hundredchip, hundredchip, hundredchip, hundredchip]
  // eslint-disable-next-line no-unused-vars
  const chips = [onechip, fivechip, tenchip, twentyfivechip, fiftychip, hundredchip]

  // INIT WALLET
  const walletP1 = new Wallet(startingBalance)

  // PLAYER
  // let name = prompt("Name:")
  const player1 = new Player("Erick", walletP1, [], "human")


  // BOARD
  const board = new Board()

  board.join(player1)
  deal(player1, deck)

  // console.log(player1)

  // Dealer
  const dealer = new Dealer("dealer", null, [], "dealer")
  draw(dealer, deck)
  draw(dealer, deck)
  draw(dealer, deck)
  draw(dealer, deck)
  draw(dealer, deck)

  // console.log(dealer);

   // STATE 
   const [dealerHand, setDealerHand] = useState(dealer.hand)
   const [playerHand, setPlayerHand] = useState(player1.hand)

   

  //  const dealerDraw = e => {
  //    e.preventDefault()

  //    const rtnCard = draw(dealer, deck)

  //    console.log(rtnCard)

  //    if (dealerHand.indexOf(rtnCard) !== -1){
  //      console.log("DUPLICATE");
  //     //  dealerDraw(e)
  //    }
  //    if (dealerHand.length === 5){
  //      return
  //    }
  //    else if (dealerHand.indexOf(rtnCard) === -1) {
       
  //     setDealerHand([...dealerHand, rtnCard])
  //     console.log(dealerHand);
  //    }
  //  }


  return (
    <div className="App">
      <div className="board">
        <div className="dealer">
          <div className="cards">
            {dealerHand.map( card => {
              return <img className="card" src={card.image} alt={card.name} key={`${dealer.name}${card.name}`} />
            })}
          </div>

          
        </div>

        <div className="player">
          <div className="cards">
            {playerHand.map(card => {
              return <img className="card" src={card.image} alt={card.name} key={`${player1.name}${card.name}`} />
            })}
          </div>
          {/* <button onClick={dealerDraw}>Check</button> */}
        </div>

        <div className="seats">
          <div className="s1">

          </div>
          <div className="s2">
            
          </div>
          <div className="s3">
            
          </div>
          <div className="s4">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
