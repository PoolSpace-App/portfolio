import type { FC, SVGAttributes } from "react"
import type { Icon as IconsaxIcon } from "iconsax-react"
import * as Iconsax from "iconsax-react"
import { cn } from "@/lib/utils"

export type IconProps = SVGAttributes<SVGElement> & {
  size?: string | number
  color?: string
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone"
  strokeWidth?: number
}

function sizeFromClassName(className?: string, size?: string | number) {
  if (size !== undefined) {
    return typeof size === "number" ? size : Number.parseInt(size, 10) || 24
  }

  if (!className) return 24
  if (/(?:^|\s)h-3(?:\s|$)/.test(className)) return 12
  if (/(?:^|\s)h-4(?:\s|$)/.test(className)) return 16
  if (/(?:^|\s)h-5(?:\s|$)/.test(className)) return 20
  if (/(?:^|\s)h-6(?:\s|$)/.test(className)) return 24
  if (/(?:^|\s)h-8(?:\s|$)/.test(className)) return 32
  return 24
}

function createIcon(I: IconsaxIcon, defaultVariant: IconProps["variant"] = "Linear") {
  const IconComponent: FC<IconProps> = ({
    className,
    size,
    color = "currentColor",
    variant = defaultVariant,
    strokeWidth: _strokeWidth,
    ...props
  }) => (
    <I
      size={sizeFromClassName(className, size)}
      color={color}
      variant={variant}
      className={cn("inline-block shrink-0", className)}
      {...props}
    />
  )

  return IconComponent
}

export const Add = createIcon(Iconsax.Add)
export const ArrowDown = createIcon(Iconsax.ArrowDown2)
export const ArrowLeft = createIcon(Iconsax.ArrowLeft)
export const ArrowRight = createIcon(Iconsax.ArrowRight)
export const ArrowUp = createIcon(Iconsax.ArrowUp2)
export const ArrowUpRight = createIcon(Iconsax.ExportSquare)
export const Box = createIcon(Iconsax.Box)
export const Calendar = createIcon(Iconsax.Calendar)
export const Check = createIcon(Iconsax.TickSquare)
export const CheckCircle2 = createIcon(Iconsax.TickCircle)
export const ChevronDown = createIcon(Iconsax.ArrowDown2)
export const ChevronLeft = createIcon(Iconsax.ArrowLeft2)
export const ChevronRight = createIcon(Iconsax.ArrowRight2)
export const ChevronUp = createIcon(Iconsax.ArrowUp2)
export const Circle = createIcon(Iconsax.RecordCircle)
export const Clock = createIcon(Iconsax.Clock)
export const Code2 = createIcon(Iconsax.Code)
export const Database = createIcon(Iconsax.Data)
export const Dot = createIcon(Iconsax.Record)
export const ExternalLink = createIcon(Iconsax.ExportSquare)
export const FileSearch = createIcon(Iconsax.Document)
export const FormInput = createIcon(Iconsax.Clipboard)
export const GitBranch = createIcon(Iconsax.Hierarchy)
export const GripVertical = createIcon(Iconsax.RowVertical)
export const HelpCircle = createIcon(Iconsax.MessageQuestion)
export const Info = createIcon(Iconsax.InfoCircle)
export const Key = createIcon(Iconsax.Key)
export const Layers = createIcon(Iconsax.Layer)
export const Layout = createIcon(Iconsax.Element3)
export const Lightbulb = createIcon(Iconsax.Lamp)
export const Lock = createIcon(Iconsax.Lock)
export const Menu = createIcon(Iconsax.Menu)
export const MessageSquare = createIcon(Iconsax.MessageSquare)
export const MoreHorizontal = createIcon(Iconsax.More)
export const Network = createIcon(Iconsax.Hierarchy3)
export const PanelLeft = createIcon(Iconsax.SidebarLeft)
export const PencilRuler = createIcon(Iconsax.PenTool)
export const Presentation = createIcon(Iconsax.PresentionChart)
export const Rocket = createIcon(Iconsax.Send2)
export const Search = createIcon(Iconsax.SearchNormal1)
export const Server = createIcon(Iconsax.Driver)
export const Settings = createIcon(Iconsax.Setting2)
export const Share2 = createIcon(Iconsax.Share)
export const ShieldCheck = createIcon(Iconsax.ShieldTick)
export const Sparkles = createIcon(Iconsax.MagicStar)
export const Target = createIcon(Iconsax.Flag2)
export const TestTube2 = createIcon(Iconsax.Health)
export const Profile = createIcon(Iconsax.Profile)
export const UserPlus = createIcon(Iconsax.UserAdd)
export const Users = createIcon(Iconsax.People)
export const Webhook = createIcon(Iconsax.Link)
export const X = createIcon(Iconsax.CloseSquare)
export const XCircle = createIcon(Iconsax.CloseCircle)
export const Zap = createIcon(Iconsax.Flash)
export const AlertCircle = createIcon(Iconsax.Warning2)
export const AlertTriangle = createIcon(Iconsax.Warning2)

export const IconArrowRight = ArrowRight
export const IconCalendar = Calendar
export const IconClock = Clock
export const IconArrowWaveRightUp = createIcon(Iconsax.Export)
export const IconBoxAlignRightFilled = createIcon(Iconsax.Box)
export const IconBoxAlignTopLeft = createIcon(Iconsax.Box)
export const IconClipboardCopy = createIcon(Iconsax.Copy)
export const IconFileBroken = createIcon(Iconsax.Document)
export const IconSignature = createIcon(Iconsax.PenTool)
export const IconTableColumn = createIcon(Iconsax.Element3)

export { Dribbble, Linkedin as LinkedIn, Mail } from "lucide-react"
