import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import InputDate from "@/components/InputDate";
import { useState } from "react";

const Home: React.FC = () => {
  const [date, setDate] = useState<any>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <section className="w-full h-full grid md:justify-center">
          <div className="md:w-[75ch] w-full">
            <InputDate
              value={date}
              onChange={(e: any) => {
                setDate(e);
              }}
              label="Fecha inicial"
              klassCalendar="left-0"
            />
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
