import { DEFAULT_PAGE } from "@/lib/constant";
import { useQueryStates, parseAsInteger, parseAsString } from "nuqs";

export const useAgentsFilter = () => {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
  });
};
