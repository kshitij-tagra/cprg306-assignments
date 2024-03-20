"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  sortBy === "name"
    ? items.sort((a, b) => a.name.localeCompare(b.name))
    : items.sort((a, b) => a.category.localeCompare(b.category));

  const nameClicked = () => {
    setSortBy("name");
  };

  const categoryClicked = () => {
    setSortBy("category");
  };

  return (
    <div className="m-4">
      <div>
        <label>Sort by:</label>
        <button
          onClick={nameClicked}
          className={
            sortBy === "name"
              ? "bg-orange-500 p-1 m-2 w-28"
              : "bg-orange-700 p-1 m-2 w-28"
          }
        >
          Name
        </button>
        <button
          onClick={categoryClicked}
          className={
            sortBy === "category"
              ? "bg-orange-500 p-1 m-2 w-28"
              : "bg-orange-700 p-1 m-2 w-28"
          }
        >
          Category
        </button>
      </div>
      <ul className="m-4">
        {items.map((item) => (
          <li key={item.id} className="w-96 bg-slate-900 text-sky-50">
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
