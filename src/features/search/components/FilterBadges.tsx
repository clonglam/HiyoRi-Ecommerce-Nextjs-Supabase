"use client";
import { SearchQuery } from "@/features/search";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "@/components/layouts/icons";
import { Badge } from "@/components/ui/badge";

type FilterBadgesProps = {
  query: SearchQuery;
  collections?: { label: string; id: string }[];
  onDeleteHandler: (key: string, value?: string) => void;
};

function FilterBadges({
  query,
  collections,
  onDeleteHandler,
}: FilterBadgesProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="gap-x-10 md:flex hidden">
      {query.search && (
        <Badge className="px-3 py-2 gap-x-3">
          {`Search: ${query.search}`}
          <button
            onClick={() =>
              router.push(pathname + "?" + onDeleteHandler("search"))
            }
            className={cn("rounded-full")}
          >
            <Icons.close width={15} height={15} />
          </button>
        </Badge>
      )}
      {query.priceRange && (
        <Badge className="px-3 py-2 gap-x-3">
          {`Price Range: $${query.priceRange[0]} - $${query.priceRange[1]}`}
          <button
            onClick={() =>
              router.push(pathname + "?" + onDeleteHandler("price_range"))
            }
            className={cn("rounded-full")}
          >
            <Icons.close width={15} height={15} />
          </button>
        </Badge>
      )}

      {collections &&
        collections.map((collection, index) =>
          query.collections.includes(collection.id) ? (
            <Badge key={index} className="px-3 py-2 gap-x-3">
              {`${collection.label}`}
              <button
                onClick={() => {
                  const deletedcollections = query.collections.filter(
                    (c) => c !== collection.id,
                  );
                  router.push(
                    pathname +
                      "?" +
                      onDeleteHandler(
                        "collections",
                        deletedcollections.length > 0
                          ? JSON.stringify(
                              query.collections.filter(
                                (c) => c !== collection.id,
                              ),
                            )
                          : undefined,
                      ),
                  );
                }}
                className={cn("rounded-full")}
              >
                <Icons.close width={15} height={15} />
              </button>
            </Badge>
          ) : null,
        )}
    </section>
  );
}

export default FilterBadges;
