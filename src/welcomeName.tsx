import React from "react";
import { useState, ChangeEvent } from "react";

const Nameprint = () => {
  const [Name, newName] = useState<string>();

  const updateame = (event: ChangeEvent<HTMLInputElement>) => {
    const newstring = event.currentTarget.value;
    newName(newstring);
  };

  const finalName = Name;

  return (
    <section>
      <input type="text" onChange={updateame} />
      <h1>반갑습니다 {Name} 님 </h1>
    </section>
  );
};

export default Nameprint;
