import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { View, Text, Image, StyleSheet } from 'react-native';
import database from './firebase';
// import './TinderCards.css'




function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => 
                setPeople(snapshot.docs.map(doc => doc.data()))
            );
            return () => {
                unsubscribe();
            };
    }, []);

    return (
        <div>
            <div className="tinderCards_cardContainter">
                {people.map(person => (
                    <TinderCard
                        className="swape"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    // preventSwipe={['left','right']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards;