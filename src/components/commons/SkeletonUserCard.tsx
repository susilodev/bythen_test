import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SkeletonUserCard() {
  return (
    <Card className="z-0 flex flex-col items-center border-none bg-slate-50 p-6">
      <CardContent className="mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="z-0 size-24 animate-pulse rounded-full bg-slate-200"></div>
        <div className="mx-auto flex flex-col items-center space-y-2 text-center">
          <div className="h-4 w-16 animate-pulse bg-slate-200 text-xl"></div>
          <div className="h-4 w-1/3 animate-pulse bg-slate-300 text-sm"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="-mt-1 h-8 w-28 animate-pulse rounded-md bg-slate-300"></div>
      </CardFooter>
    </Card>
  );
}
