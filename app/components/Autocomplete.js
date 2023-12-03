"use client";

import { useRouter } from "next/navigation";
import Select from "react-select";

const Autocomplete = ({ data }) => {
  const router = useRouter();

  const options = data.map((option) => {
    return { value: option.fields.slug, label: option.fields.title };
  });

  const handleChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      router.push(`/${selectedOption.value}`);
    }
  };

  return (
    <div className="w-full text-start md:w-[600px]">
      <Select
        isClearable={true}
        isSearchable={true}
        options={options}
        onChange={handleChange}
        placeholder="Search for articles"
        styles={{
          control: (provided) => ({
            ...provided,
            paddingTop: "4px",
            paddingBottom: "4px",
            "*": {
              boxShadow: "none !important",
            },
          }),
        }}
      />
    </div>
  );
};

export default Autocomplete;
