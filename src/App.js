import React, { useEffect, useState } from 'react';
import './App.scss';
import { checkResults, clearAll, deal, draw, getPotBal, setWagersState } from './Util/Functions'

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
  const cardBack = new Card("card back", 0, "card back", "/images/cardback.png", "card back")

  const CA = new Card("clover ace", 1, "clover", "/images/AC.png", "ace", 14)
  const C2 = new Card("clover two", 2, "clover", "/images/2C.png", null, 2)
  const C3 = new Card("clover three", 3, "clover", "/images/3C.png", null, 3)
  const C4 = new Card("clover four", 4, "clover", "/images/4C.png", null, 4)
  const C5 = new Card("clover five", 5, "clover", "/images/5C.png", null, 5)
  const C6 = new Card("clover six", 6, "clover", "/images/6C.png", null, 6)
  const C7 = new Card("clover seven", 7, "clover", "/images/7C.png", null, 7)
  const C8 = new Card("clover eight", 8, "clover", "/images/8C.png", null, 8)
  const C9 = new Card("clover nine", 9, "clover", "/images/9C.png", null, 9)
  const C10 = new Card("clover ten", 10, "clover", "/images/10C.png", null, 10)
  const CJ = new Card("clover jack", 11, "clover", "/images/JC.png", "jack", 11)
  const CQ = new Card("clover queen", 12, "clover", "/images/QC.png", "queen", 12)
  const CK = new Card("clover king", 13, "clover", "/images/KC.png", "king", 13)

  const clovers = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK]

  const SA = new Card("spade ace", 1, "spade", "/images/AS.png", "ace", 14)
  const S2 = new Card("spade two", 2, "spade", "/images/2S.png", null, 2)
  const S3 = new Card("spade three", 3, "spade", "/images/3S.png", null, 3)
  const S4 = new Card("spade four", 4, "spade", "/images/4S.png", null, 4)
  const S5 = new Card("spade five", 5, "spade", "/images/5S.png", null, 5)
  const S6 = new Card("spade six", 6, "spade", "/images/6S.png", null, 6)
  const S7 = new Card("spade seven", 7, "spade", "/images/7S.png", null, 7)
  const S8 = new Card("spade eight", 8, "spade", "/images/8S.png", null, 8)
  const S9 = new Card("spade nine", 9, "spade", "/images/9S.png", null, 9)
  const S10 = new Card("spade ten", 10, "spade", "/images/10S.png", null, 10)
  const SJ = new Card("spade jack", 11, "spade", "/images/JS.png", "jack", 11)
  const SQ = new Card("spade queen", 12, "spade", "/images/QS.png", "queen", 12)
  const SK = new Card("spade king", 13, "spade", "/images/KS.png", "king", 13)

  const spades = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK]

  const DA = new Card("diamond ace", 1, "diamond", "/images/DA.png", "ace", 14)
  const D2 = new Card("diamond two", 2, "diamond", "/images/2D.png", null, 2)
  const D3 = new Card("diamond three", 3, "diamond", "/images/3D.png", null, 3)
  const D4 = new Card("diamond four", 4, "diamond", "/images/4D.png", null, 4)
  const D5 = new Card("diamond five", 5, "diamond", "/images/5D.png", null, 5)
  const D6 = new Card("diamond six", 6, "diamond", "/images/6D.png", null, 6)
  const D7 = new Card("diamond seven", 7, "diamond", "/images/7D.png", null, 7)
  const D8 = new Card("diamond eight", 8, "diamond", "/images/8D.png", null, 8)
  const D9 = new Card("diamond nine", 9, "diamond", "/images/9D.png", null, 9)
  const D10 = new Card("diamond ten", 10, "diamond", "/images/10D.png", null, 10)
  const DJ = new Card("diamond jack", 11, "diamond", "/images/JD.png", "jack", 11)
  const DQ = new Card("diamond queen", 12, "diamond", "/images/QD.png", "queen", 12)
  const DK = new Card("diamond king", 13, "diamond", "/images/KD.png", "king", 13)

  const diamonds = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK]

  const HA = new Card("heart ace", 1, "heart", "/images/AH.png", "ace", 14)
  const H2 = new Card("heart two", 2, "heart", "/images/2H.png", null, 2)
  const H3 = new Card("heart three", 3, "heart", "/images/3H.png", null, 3)
  const H4 = new Card("heart four", 4, "heart", "/images/4H.png", null, 4)
  const H5 = new Card("heart five", 5, "heart", "/images/5H.png", null, 5)
  const H6 = new Card("heart six", 6, "heart", "/images/6H.png", null, 6)
  const H7 = new Card("heart seven", 7, "heart", "/images/7H.png", null, 7)
  const H8 = new Card("heart eight", 8, "heart", "/images/8H.png", null, 8)
  const H9 = new Card("heart nine", 9, "heart", "/images/9H.png", null, 9)
  const H10 = new Card("heart ten", 10, "heart", "/images/10H.png", null, 10)
  const HJ = new Card("heart jack", 11, "heart", "/images/JH.png", "jack", 11)
  const HQ = new Card("heart queen", 12, "heart", "/images/QH.png", "queen", 12)
  const HK = new Card("heart king", 13, "heart", "/images/KH.png", "king", 13)

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

  const initDealer = new Dealer("dealer", [], [], "dealer")
  const initPlayer1 = new Player("Erick", new Wallet(startingBalance), [], "human")
  const initPlayer2 = new Player("Bob", new Wallet(startingBalance), [], "npc")
  const initBoard = new Board()

  // STATE 
  const [dealer, setDealer] = useState(initDealer)
  const [player1] = useState(initPlayer1)
  const [player2] = useState(initPlayer2)
  const [board] = useState(initBoard)
  const [activePlayers, setActivePlayers] = useState([])

  const [pot, setPot] = useState(board.potbalance)
  const [wager, setWager] = useState([])
  const [currentWager, setCurrentWager] = useState([])
  const [seated, setSeated] = useState(false)

  useEffect(() => {
    board.join(player1)
    board.join(player2)
    deal(player1, deck)
    deal(player2, deck)
    draw(dealer, deck)
    draw(dealer, deck)
    draw(dealer, deck)
    draw(dealer, deck)
    draw(dealer, deck)
    setActivePlayers([dealer, player1, player2])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <div className="board">
        <div className="dealer">
          <div className="cards">
            {seated ? dealer.hand.map(card => {
              return <img className="card" src={card.image} alt={card.name} key={`${dealer.name}${card.name}`} />
            }) : dealer.hand.map(card => {
              return <img className="card" src={cardBack.image} alt={card.name} key={`${dealer.name}${card.name}`} />
            })}
          </div>


        </div>

        <div className="middle">
          <div className="pot">
            <h6>${pot}</h6>
          </div>
        </div>

        <div className="seats">
          <div className="s1">
            <div className="player">
              <div className="cards">
                {seated ? player1.hand.map(card => {
                  return <img className="card" src={card.image} alt={card.name} key={`${player1.name}${card.name}`} />
                }) : player1.hand.map(card => {
                  return <img className="card" src={cardBack.image} alt={card.name} key={`${player1.name}${card.name}`} />
                })}
              </div>
              <div className="tools">
                <div className="actions">
                  <button onClick={() => setSeated(!seated)}>{seated ? "Stand" : "Play"}</button>
                  <button onClick={e => {
                    e.preventDefault()
                    wager.forEach(wage => { board.wager(wage, player1) })
                    setPot(board.potbalance)
                    setCurrentWager([])
                    setWager([])
                    draw(dealer, deck)
                  }}
                    disabled={seated && currentWager.length > 0 ? false : true}>Bet</button>
                  <button disabled={seated ? false : true} onClick={e => {
                    e.preventDefault()
                    draw(dealer, deck)
                    setDealer({...dealer})
                  }}>Check</button>
                  <button disabled={seated ? false : true} onClick={() => {
                    board.payout(player2, setPot)
                    clearAll(activePlayers, deck)
                    setSeated(false)
                    setCurrentWager([])
                    setWager([])
                  }}>Fold</button>
                  <button onClick={() => {
                    checkResults(activePlayers)
                  }}>Results</button>
                </div>

                <div className="chips">
                  <div className="balance">
                    <h5>{player1.wallet.balance}</h5>
                    <h5>{getPotBal(currentWager)}</h5>
                  </div>
                  <div className="denominations">
                    <div onClick={() => setWagersState(setWager, wager, onechip, setCurrentWager, currentWager)} className="chip"><h4>1</h4></div>
                    <div onClick={() => setWagersState(setWager, wager, fivechip, setCurrentWager, currentWager)} className="chip"><h4>5</h4></div>
                    <div onClick={() => setWagersState(setWager, wager, tenchip, setCurrentWager, currentWager)} className="chip"><h4>10</h4></div>
                    <div onClick={() => setWagersState(setWager, wager, twentyfivechip, setCurrentWager, currentWager)} className="chip"><h4>25</h4></div>
                    <div onClick={() => setWagersState(setWager, wager, fiftychip, setCurrentWager, currentWager)} className="chip"><h4>50</h4></div>
                    <div onClick={() => setWagersState(setWager, wager, hundredchip, setCurrentWager, currentWager)} className="chip"><h4>100</h4></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s2">
            <div className="player">
              <div className="cards">
                <h5>{player2.wallet.balance}</h5>
                {seated ? player2.hand.map(card => {
                  return <img className="card" src={card.image} alt={card.name} key={`${player2.name}${card.name}`} />
                }) : player2.hand.map(card => {
                  return <img className="card" src={cardBack.image} alt={card.name} key={`${player2.name}${card.name}`} />
                })}
              </div>
            </div>
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
