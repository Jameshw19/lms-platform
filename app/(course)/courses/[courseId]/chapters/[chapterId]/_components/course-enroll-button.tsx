"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonprops {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonprops) => {
  return (
    <Button size="sm" className="w-full md:w-auto">
      Enroll for {formatPrice(price)}
    </Button>
  );
};
