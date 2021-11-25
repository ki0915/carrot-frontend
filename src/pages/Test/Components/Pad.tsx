import { type } from "os";
import React from "react";
import { useState, ChangeEvent } from "react";

type keyName = {
  keyName: string;
  callback: (key: string) => void;
};

const Pad = (props: keyName) => {
  const { keyName, callback } = props;
  return <button onClick={() => callback(keyName)}>{keyName}</button>;
};

export default Pad;
