
import { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  manual: string;
  automated: string;
  icon: LucideIcon;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  stats: Stat[];
  impacts?: string[];
  lossTypes?: { type: string; percentage: number }[];
  errorTypes?: { type: string; percentage: number }[];
  accuracyMetrics?: { metric: string; impact: string }[];
  solution: {
    title: string;
    features: string[];
  }
}
