import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-on-surface-variant selection:bg-primary selection:text-on-primary border border-outline-variant bg-surface-container-lowest flex h-12 w-full min-w-0 px-3 py-2 font-sans text-body-md text-on-surface transition-colors outline-none file:inline-flex file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
