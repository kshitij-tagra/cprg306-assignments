"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    newItem.id = itemId;
    setItems([...items, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    const itemName = selectedItem.name.split(",")[0].trim();
    const cleanName = itemName.replace(/[^a-zA-Z\s]+$/, "");
    setSelectedItemName(cleanName);
  };

  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) {
    return <p>Your need to be signed in to view this page.</p>;
  }

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl m-4 font-bold">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
