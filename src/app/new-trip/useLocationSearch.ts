import { countries } from "countries-list";

export default function useLocationSearch() {
  const locationSearch = (query: string): string[] => {
    if (!query) return [];

    return Object.values(countries)
      .filter(({ name }) => name.toLowerCase().startsWith(query.toLowerCase()))
      .map(({ name }) => name);
  };

  return locationSearch;
}
