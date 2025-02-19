
import { LucideIcon } from "lucide-react";

export interface ErrorType {
  type: string;
  percentage: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  stats: Array<{
    label: string;
    manual: string;
    automated: string;
    icon: LucideIcon;
  }>;
  errorTypes?: ErrorType[];
}
