import { KeyboardEvent } from "react";
import SearchIcon from "../../assets/icons/Search.svg";
import Button from "../ui/Button";

interface SearchProps {
  onSearch: (query: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const Search = ({
  inputValue,
  setInputValue,
  onSearch,
  isLoading,
}: SearchProps) => {
  const handleSearch = () => {};

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full font-RobotoMono text-lg mb-8">
      <div className="relative w-[60%] max-[450px]:w-full">
        <img
          src={SearchIcon}
          className="absolute right-3 w-4 top-1/2 transform -translate-y-1/2 "
          alt="search-logo"
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search users by name or email"
          className="w-full bg-darkBlack py-2 pl-4 pr-10 focus:outline-none  focus:border-action rounded-l-2xl border-borderPrimary border-[1px] text-left text-xs px-2 placeholder:text-lightSecondary
       outline-none transition-all"
        />
      </div>
      <Button onClick={handleSearch} variant="search" disabled={isLoading}>
        Search
      </Button>
    </div>
  );
};

export default Search;
