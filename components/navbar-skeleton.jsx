import { Skeleton } from "@/components/ui/skeleton";

const NavbarSkeleton = () => {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div>
        <Skeleton className="w-[50px] h-[30px] rounded-sm bg-gray200" />
      </div>

      <div className="flex items-center w-[35%] justify-between">
        <Skeleton className="w-[370px] h-[30px] rounded-full bg-gray200" />
        <Skeleton className="w-[30px] h-[30px] rounded-full bg-gray200" />
      </div>
    </div>
  );
};

export default NavbarSkeleton;
