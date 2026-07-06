import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-outline-variant bg-surface-container-lowest text-foreground placeholder:text-on-surface-variant selection:bg-primary selection:text-on-primary flex field-sizing-content min-h-[120px] w-full border px-3 py-2 font-sans text-body-md text-on-surface outline-none focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
