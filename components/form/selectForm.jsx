import { Select, SelectItem, SelectSection } from "@heroui/select";
// import { useEffect } from "react";

function CaretDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20" />
    </svg>
  );
}
export default function SelectForm({ 
  options, 
  value, 
  onChange, 
  name, 
  label, 
  ...rest 
}) {
  const handleSelectChange = (selectedValue) => {
    onChange(selectedValue); // This calls onChange from react-hook-form
  };

  return (
    <div className="flex flex-col">
      <Select
      {...rest}
      value={value} 
      onChange={handleSelectChange} 
      className="bg-white border-borderStroke border-2 p-3 rounded-md  focus:border-blue-500 focus:outline-none hover:shadow-md w-[100%]"
      placeholder="Select Department"
      selectorIcon={<CaretDownIcon />}
      >
        <SelectSection className="bg-white space-y-1 py-2 rounded-md shadow-md w-full">
          {options.map((dpt) => (
            <SelectItem 
              key={dpt.key} 
              value={dpt.key}
              className="p-2 hover:bg-gray200/10"
              >
              {dpt.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>
    </div>
  );
}
