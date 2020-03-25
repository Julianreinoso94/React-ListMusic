import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const arr =[
  {
   name:'Finn',
   desc:'this guy rocks!' 
  },
  {
    name:'Han',
    desc:'Trust me, I am programmer'
  },
  {
    name: 'Rey',
    desc:'i am done with it'
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello how are you</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="">pararapa
       <IonList>
          {arr
          .map(element=>(
            <IonItem key={element.name}>
              <IonText>List Item {element.desc}</IonText>
            </IonItem>
          )) }
       </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
