import SearchIcon from "../../assets/icons/Search.svg";
interface SearchProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const Search = ({ inputValue, setInputValue, isLoading }: SearchProps) => {
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
          placeholder="Search users by name or email"
          className="w-full bg-darkBlack py-2 pl-4 pr-10 focus:outline-none focus:border-action rounded-2xl border-borderPrimary border-[1px] text-left text-xs px-2 placeholder:text-lightSecondary outline-none transition-all"
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default Search;
