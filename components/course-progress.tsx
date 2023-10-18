import { Progress } from "./ui/progress";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colourByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};
const sizeByVariant = {
  default: "text-sm",
  success: "text-xs",
};

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress className="h-2 " value={value} variant={variant} />
    </div>
  );
};
