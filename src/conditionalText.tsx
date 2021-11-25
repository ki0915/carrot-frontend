import React from "react";
import { useState, ChangeEvent } from "react";

const Nameprint = () => {
  const [Name, newName] = useState<string>();

  const updateame = (event: ChangeEvent<HTMLInputElement>) => {
    const newstring = event.currentTarget.value;
    newName(newstring);
  };

  const name2 = String(Name);

  return (
    <section>
      <input type="text" onChange={updateame} />
      <article>{name2.length > 5 && name2}</article>
    </section>
  );
};

export default Nameprint;
