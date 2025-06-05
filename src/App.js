import React, { useEffect, useState } from 'react';
import './index.css';

const START_DEBT = 68000000000; // 68 Milliarden €
const BERLIN_POPULATION = 3685973;
const INCREASE_PER_SECOND = 12; // Schuldenzuwachs pro Sekunde

function App() {
  const [debt, setDebt] = useState(START_DEBT);

  useEffect(() => {
    const interval = setInterval(() => {
      setDebt(prev => prev + INCREASE_PER_SECOND);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const perCapitaDebt = debt / BERLIN_POPULATION;

  return (
    <>
      <div className="banner">
        official website of bullshit states government 🇮🇴
      </div>
      <main className="container">
        <h1>💸 Berliner Schuldenuhr</h1>
        <p className="debt">Gesamtschulden: € {debt.toLocaleString('de-DE')}</p>
        <p className="debt">Pro Kopf: € {perCapitaDebt.toFixed(2).toLocaleString('de-DE')}</p>
      </main>
    </>
  );
}

export default App;
