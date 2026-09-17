import {
  CalendarDays,
  Clock,
  Lock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sofa,
  Sparkles,
  UserRound,
  type LucideProps,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/types/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

type IconComponent = ComponentType<LucideProps> | ComponentType<SVGProps<SVGSVGElement>>;

/** Resolve nomes da camada de conteúdo em componentes de ícone. */
const icons: Record<IconName, IconComponent> = {
  lock: Lock,
  sofa: Sofa,
  sparkles: Sparkles,
  "map-pin": MapPin,
  clock: Clock,
  "shield-check": ShieldCheck,
  user: UserRound,
  message: MessageCircle,
  calendar: CalendarDays,
  whatsapp: WhatsAppIcon,
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

/** Ícone de linha fina (1.5px), cor herdada. */
export function Icon({ name, className, strokeWidth = 1.5 }: IconProps) {
  const Component = icons[name] as ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden />;
}

export { WhatsAppIcon };
