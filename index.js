import React, { useEffect, useState } from 'react';
import inputval from './inputval';

function InputBox({ color }) {
  // const Genrated = inputval({ currencyName: 'inr', currencyto: 'yr' });
  const [CurrencyList, setCurrencyList] = useState([]);
  const [currentCurrency, setcurrentCurrency] = useState('');
  const [toCurrency, settoCurrency] = useState('');

  const [finalout, setfinalout] = useState(0);

  useEffect(() => {
    CurrencyExchange();
  }, [CurrencyList, finalout]);

  async function CurrencyExchange() {
    await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`
    )
      .then(async (succ) => {
        const outCurrency = await succ.json();
        setCurrencyList(Object.keys(outCurrency.inr));
      })
      .catch((err) => {
        // console.error(err);
      });
  }

  async function CurrencyRate(currencyName, currencyto, val) {
    await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyName}.json`
    )
      .then(async (succ) => {
        const currencyVal = await succ.json();
        console.log(currencyVal);
        console.log(val * currencyVal[currencyName][currencyto]);
        setfinalout(val * currencyVal[currencyName][currencyto]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const triggerChange = async (val) => {
    const Generatedval = await CurrencyRate(currentCurrency, toCurrency, val);
    console.log(Generatedval);
    // setfinalout(Generatedval);
  };

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          triggerChange(e.target.value);
        }}
      />
      {finalout}
      <select
        onChange={(e) => {
          setcurrentCurrency(e.target.value);
        }}
      >
        {CurrencyList.map((e) => {
          return <option value={e}>{e}</option>;
        })}
      </select>
      <br />
      <input type="number" value={finalout} />
      <select
        onChange={(e) => {
          settoCurrency(e.target.value);
        }}
      >
        {CurrencyList.map((e) => {
          return <option value={e}>{e}</option>;
        })}
      </select>
    </>
  );
}

export default InputBox;
