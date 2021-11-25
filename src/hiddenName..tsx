import React from "react";
import { useState, ChangeEvent } from "react";

const Nameprint = () => {
  const [Name, newName] = useState<string>();

  const updateame = (event: ChangeEvent<HTMLInputElement>) => {
    const newstring = event.currentTarget.value;
    if (newstring.length > 2) {
      const startName = newstring.substring(0, 1);
      const hiddenPart = "*".repeat(newstring.length - 2);
      const endName = newstring.substring(
        newstring.length - 1,
        newstring.length
      );
      newName(startName + hiddenPart + endName);
    }
  };

  return (
    <section>
      <input type="text" onChange={updateame} />
      <article>{Name}</article>
    </section>
  );
};

export default Nameprint;
