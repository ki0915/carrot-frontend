import React from "react";
import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [number_1, setNumber_1] = useState(0);
  const [number_2, setNumber_2] = useState(0);

  const updateNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber_1(newNumber);
  };
  const updateNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber_2(newNumber);
  };

  const calculated = number_1 + number_2;

  return (
    <section>
      <section>
        <article>계산 결과:{calculated}</article>
      </section>
      <input type="text" onChange={updateNumber1} />
      <input type="text" onChange={updateNumber2} />
    </section>
  );
};
