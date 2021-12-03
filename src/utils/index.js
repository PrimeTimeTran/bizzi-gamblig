import React from 'react'

import AH from "../../assets/cards/A-hearts.svg";
import KH from "../../assets/cards/K-hearts.svg";
import QH from "../../assets/cards/Q-hearts.svg";
import JH from "../../assets/cards/J-hearts.svg";
import H10 from "../../assets/cards/10-hearts.svg";
import H9 from "../../assets/cards/9-hearts.svg";
import H8 from "../../assets/cards/8-hearts.svg";
import H7 from "../../assets/cards/7-hearts.svg";
import H6 from "../../assets/cards/6-hearts.svg";
import H5 from "../../assets/cards/5-hearts.svg";
import H4 from "../../assets/cards/4-hearts.svg";
import H3 from "../../assets/cards/3-hearts.svg";
import H2 from "../../assets/cards/2-hearts.svg";

import AD from "../../assets/cards/A-diamonds.svg";
import KD from "../../assets/cards/K-diamonds.svg";
import QD from "../../assets/cards/Q-diamonds.svg";
import JD from "../../assets/cards/J-diamonds.svg";
import D10 from "../../assets/cards/10-diamonds.svg";
import D9 from "../../assets/cards/9-diamonds.svg";
import D8 from "../../assets/cards/8-diamonds.svg";
import D7 from "../../assets/cards/7-diamonds.svg";
import D6 from "../../assets/cards/6-diamonds.svg";
import D5 from "../../assets/cards/5-diamonds.svg";
import D4 from "../../assets/cards/4-diamonds.svg";
import D3 from "../../assets/cards/3-diamonds.svg";
import D2 from "../../assets/cards/2-diamonds.svg";

import AC from "../../assets/cards/A-clubs.svg";
import KC from "../../assets/cards/K-clubs.svg";
import QC from "../../assets/cards/Q-clubs.svg";
import JC from "../../assets/cards/J-clubs.svg";
import C10 from "../../assets/cards/10-clubs.svg";
import C9 from "../../assets/cards/9-clubs.svg";
import C8 from "../../assets/cards/8-clubs.svg";
import C7 from "../../assets/cards/7-clubs.svg";
import C6 from "../../assets/cards/6-clubs.svg";
import C5 from "../../assets/cards/5-clubs.svg";
import C4 from "../../assets/cards/4-clubs.svg";
import C3 from "../../assets/cards/3-clubs.svg";
import C2 from "../../assets/cards/2-clubs.svg";

import AS from "../../assets/cards/A-spades.svg";
import KS from "../../assets/cards/K-spades.svg";
import QS from "../../assets/cards/Q-spades.svg";
import JS from "../../assets/cards/J-spades.svg";
import S10 from "../../assets/cards/10-spades.svg";
import S9 from "../../assets/cards/9-spades.svg";
import S8 from "../../assets/cards/8-spades.svg";
import S7 from "../../assets/cards/7-spades.svg";
import S6 from "../../assets/cards/6-spades.svg";
import S5 from "../../assets/cards/5-spades.svg";
import S4 from "../../assets/cards/4-spades.svg";
import S3 from "../../assets/cards/3-spades.svg";
import S2 from "../../assets/cards/2-spades.svg";

const DECK = [
  { value: "A", suit: "hearts", component: <AH width={200} height={300} /> },
  { value: "K", suit: "hearts", component: <KH width={200} height={300} /> },
  { value: "Q", suit: "hearts", component: <QH width={200} height={300} /> },
  { value: "J", suit: "hearts", component: <JH width={200} height={300} /> },
  { value: "10", suit: "hearts", component: <H10 width={200} height={300} /> },
  { value: "9", suit: "hearts", component: <H9 width={200} height={300} /> },
  { value: "8", suit: "hearts", component: <H8 width={200} height={300} /> },
  { value: "7", suit: "hearts", component: <H7 width={200} height={300} /> },
  { value: "6", suit: "hearts", component: <H6 width={200} height={300} /> },
  { value: "5", suit: "hearts", component: <H5 width={200} height={300} /> },
  { value: "4", suit: "hearts", component: <H4 width={200} height={300} /> },
  { value: "3", suit: "hearts", component: <H3 width={200} height={300} /> },
  { value: "2", suit: "hearts", component: <H2 width={200} height={300} /> },

  { value: "A", suit: "diamonds", component: <AD width={200} height={300} /> },
  { value: "K", suit: "diamonds", component: <KD width={200} height={300} /> },
  { value: "Q", suit: "diamonds", component: <QD width={200} height={300} /> },
  { value: "J", suit: "diamonds", component: <JD width={200} height={300} /> },
  { value: "10", suit: "diamonds", component: <D10 width={200} height={300} /> },
  { value: "9", suit: "diamonds", component: <D9 width={200} height={300} /> },
  { value: "8", suit: "diamonds", component: <D8 width={200} height={300} /> },
  { value: "7", suit: "diamonds", component: <D7 width={200} height={300} /> },
  { value: "6", suit: "diamonds", component: <D6 width={200} height={300} /> },
  { value: "5", suit: "diamonds", component: <D5 width={200} height={300} /> },
  { value: "4", suit: "diamonds", component: <D4 width={200} height={300} /> },
  { value: "3", suit: "diamonds", component: <D3 width={200} height={300} /> },
  { value: "2", suit: "diamonds", component: <D2 width={200} height={300} /> },

  { value: "A", suit: "clubs", component: <AC width={200} height={300} /> },
  { value: "K", suit: "clubs", component: <KC width={200} height={300} /> },
  { value: "Q", suit: "clubs", component: <QC width={200} height={300} /> },
  { value: "J", suit: "clubs", component: <JC width={200} height={300} /> },
  { value: "10", suit: "clubs", component: <C10 width={200} height={300} /> },
  { value: "9", suit: "clubs", component: <C9 width={200} height={300} /> },
  { value: "8", suit: "clubs", component: <C8 width={200} height={300} /> },
  { value: "7", suit: "clubs", component: <C7 width={200} height={300} /> },
  { value: "6", suit: "clubs", component: <C6 width={200} height={300} /> },
  { value: "5", suit: "clubs", component: <C5 width={200} height={300} /> },
  { value: "4", suit: "clubs", component: <C4 width={200} height={300} /> },
  { value: "3", suit: "clubs", component: <C3 width={200} height={300} /> },
  { value: "2", suit: "clubs", component: <C2 width={200} height={300} /> },

  { value: "A", suit: "spades", component: <AS width={200} height={300} /> },
  { value: "K", suit: "spades", component: <KS width={200} height={300} /> },
  { value: "Q", suit: "spades", component: <QS width={200} height={300} /> },
  { value: "J", suit: "spades", component: <JS width={200} height={300} /> },
  { value: "10", suit: "spades", component: <S10 width={200} height={300} /> },
  { value: "9", suit: "spades", component: <S9 width={200} height={300} /> },
  { value: "8", suit: "spades", component: <S8 width={200} height={300} /> },
  { value: "7", suit: "spades", component: <S7 width={200} height={300} /> },
  { value: "6", suit: "spades", component: <S6 width={200} height={300} /> },
  { value: "5", suit: "spades", component: <S5 width={200} height={300} /> },
  { value: "4", suit: "spades", component: <S4 width={200} height={300} /> },
  { value: "3", suit: "spades", component: <S3 width={200} height={300} /> },
  { value: "2", suit: "spades", component: <S2 width={200} height={300} /> },
];

const suits = ["spades", "diamonds", "clubs", "hearts"];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
  const deck = new Array();
  for (let idxSuit = 0; idxSuit < suits.length; idxSuit++) {
    for (let idxValue = 0; idxValue < values.length; idxValue++) {
      const name = `${values[idxValue]}-${suits[idxSuit]}.svg`
      console.log({ name });
      let card = {
        file: 1,
        value: values[idxValue],
        suit: suits[idxSuit],
        component: AS
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffledCards() {
  const deck = DECK;
  for (var i = 0; i < 100; i++) {
    var location1 = Math.floor(Math.random() * 52);
    var location2 = Math.floor(Math.random() * 52);
    var tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}


export {
  getDeck,
  DECK,
  shuffledCards
}


