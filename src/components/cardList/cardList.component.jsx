import React from "react";
import {NewRelease} from "../../utils/newStash";
import Card from "../card/card.component";
import {CardListWrapper} from "./cardList.style";

const CardList = () => {
    return <CardListWrapper id="cardList">{
        NewRelease.map((music, index) =>
        <Card key={music.index} image={music.image} songTitle={music.songTitle} genre={music.genre}
              price={music.price}/>)}
    </CardListWrapper>

};

export default CardList;