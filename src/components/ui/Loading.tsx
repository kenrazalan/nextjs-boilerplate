import { cn } from "@/utils/cn";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Loading({ size = "md", className, ...props }: LoadingProps) {
  return (
    <div role="status" className={cn("animate-spin", className)} {...props}>
      <div
        className={cn(
          "rounded-full border-4 border-gray-200",
          "border-t-primary",
          {
            "h-6 w-6": size === "sm",
            "h-8 w-8": size === "md",
            "h-12 w-12": size === "lg",
          },
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
