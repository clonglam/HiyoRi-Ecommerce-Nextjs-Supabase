"use client";
import React, { useState } from "react";
import { Reorder } from "framer-motion";

type Props = {};

function MultiImagesField({}: Props) {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default MultiImagesField;
