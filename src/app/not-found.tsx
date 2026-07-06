import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-label-md text-muted-foreground">404</p>
      <h1 className="mt-4 font-serif text-display-md text-on-surface">Page Not Found</h1>
      <p className="mt-4 max-w-md text-body-lg text-on-surface-variant">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
