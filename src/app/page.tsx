"use client";
import Command, { Option } from "@/components/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const debouncedSearchQuery = useDebounce(inputValue, 300);

  const { data, isFetching } = useQuery<Option[]>({
    queryKey: [`/products?q=${debouncedSearchQuery}`],
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Command
        value={value}
        options={data}
        onChange={setValue}
        inputValue={inputValue}
        onInputValueChange={setInputValue}
        isLoading={isFetching}
        noFoundText="No products were found"
        placeholder="Select product"
        inputPlaceholder="Search for products"
      />
    </main>
  );
}
