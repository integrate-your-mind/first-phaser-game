import React from 'react';
import Phaser from 'phaser';
import { IonPage } from '@ionic/react';
import MainScene from '../scenes/MainScene';
import './Tab1.css';

// eslint-disable-next-line
const game = new Phaser.Game({
    parent: 'game-root',
    width: 250,
    height: 300,
    type: Phaser.AUTO,
    scene: [MainScene],
});

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <div id="game-root"></div>
        </IonPage>
    );
};

export default Tab1;
