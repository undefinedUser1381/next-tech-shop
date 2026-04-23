import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function useSearchParam() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setParam = (key: string, value: string): void => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const setParams = (map: Map<string, string>) => {
    const params = new URLSearchParams(searchParams);

    map.forEach((value, key) => {
      params.set(key, value);
    });

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const deleteParam = (keyToRemove: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(keyToRemove);

    router.push(`${pathname}?${params.toString()}`);
  };

  const resetParams = () => {
    router.replace(pathname, { scroll: false });
  };

  const getAllParams = () => {
    // means object has one string key and one string value
    const params: Record<string, string> = {};
    // search param iterator with entries
    // returns ["key" , "value"] and we get it as [key , value] in loop
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    return params;
  };

  return {
    setParam,
    setParams,
    resetParams,
    getAllParams,
    deleteParam,
  };
}
