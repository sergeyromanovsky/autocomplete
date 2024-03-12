import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "../shadcn/command";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover";
import { Button } from "../shadcn/button";
import { ChevronsUpDown } from "lucide-react";
import { Skeleton } from "../shadcn/skeleton";
import Loader from "../Loader";

type Props = {
  value: string;
  inputValue: string;
  onInputValueChange: (value: string) => void;
  onChange: (value: string) => void;
  isLoading: boolean;
  noFoundText: string;
  options?: Option[];
  placeholder: string;
  inputPlaceholder: string;
};

export type Option = {
  value: string;
  label: string;
};

const Autocomplete = ({
  onChange,
  onInputValueChange,
  value,
  inputValue,
  isLoading,
  noFoundText,
  options,
  placeholder,
  inputPlaceholder,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setOpen(false);
    onChange(value);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={inputPlaceholder}
            value={inputValue}
            onValueChange={onInputValueChange}
          />
          <CommandList>
            {options?.length === 0 && !isLoading && (
              <CommandEmpty>{noFoundText}</CommandEmpty>
            )}
            {isLoading ? (
              <Loader />
            ) : (
              options?.map(({ label, value }) => (
                <CommandItem key={value} value={value} onSelect={handleSelect}>
                  {label}
                </CommandItem>
              ))
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Autocomplete;
