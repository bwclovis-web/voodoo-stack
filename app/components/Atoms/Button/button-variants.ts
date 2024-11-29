import { VariantProps, cva } from "class-variance-authority"

export type ButtonVariants = VariantProps<typeof buttonVariants>
export const buttonVariants = cva(["rounded-sm border uppercase font-medium"], {
  compoundVariants: [
    {
      class: "uppercase",
      size: "md",
      variant: "primary"
    }
  ],
  defaultVariants: {
    size: "md",
    variant: "primary"
  },
  variants: {
    size: {
      md: ["text-base", "py-2", "px-4"],
      sm: ["text-sm", "py-1", "px-2"]
    },
    variant: {
      home: "bg-pink-600/10  max-w-max items-center text-slate-800 gap-2 p-2 border-transparent hover:bg-pink-600/30 border border-white transition-colors",
      link: "text-blue-500 hover:text-blue-600 underline border-0",
      primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
    }
  }
})
