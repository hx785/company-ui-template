"use client"

import * as React from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  Bot,
  Check,
  CheckCircle2,
  Copy,
  Layers,
  Search,
  Sparkles,
  Terminal,
  User,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Trace,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"
import { ThemeToggle } from "@/components/theme-toggle"

type ComponentCategory =
  | "全部"
  | "基础与布局"
  | "表单与输入"
  | "导航与菜单"
  | "弹窗与反馈"
  | "数据展示"
  | "AI 与对话"

interface ComponentMeta {
  name: string
  file: string
  category: Exclude<ComponentCategory, "全部">
  description: string
  exports: string
}

const ALL_COMPONENTS: ComponentMeta[] = [
  // 1. 基础与布局 (11)
  {
    name: "Button",
    file: "button",
    category: "基础与布局",
    description: "按钮组件，支持 6 种视觉变体与图标尺寸",
    exports: "Button, buttonVariants",
  },
  {
    name: "ButtonGroup",
    file: "button-group",
    category: "基础与布局",
    description: "按钮组合容器，将多个关联按钮紧凑拼接",
    exports: "ButtonGroup",
  },
  {
    name: "Badge",
    file: "badge",
    category: "基础与布局",
    description: "状态徽章、分类标签与数量角标",
    exports: "Badge, badgeVariants",
  },
  {
    name: "Card",
    file: "card",
    category: "基础与布局",
    description: "通用卡片容器，含头部、内容区与底部操作栏",
    exports: "Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter",
  },
  {
    name: "Separator",
    file: "separator",
    category: "基础与布局",
    description: "水平或垂直视觉分割线",
    exports: "Separator",
  },
  {
    name: "AspectRatio",
    file: "aspect-ratio",
    category: "基础与布局",
    description: "固定宽高比媒体容器（如 16:9、4:3）",
    exports: "AspectRatio",
  },
  {
    name: "Resizable",
    file: "resizable",
    category: "基础与布局",
    description: "可拖拽调整宽高的分栏布局面板",
    exports: "ResizablePanelGroup, ResizablePanel, ResizableHandle",
  },
  {
    name: "ScrollArea",
    file: "scroll-area",
    category: "基础与布局",
    description: "跨平台自定义美化滚动条容器",
    exports: "ScrollArea, ScrollBar",
  },
  {
    name: "Sidebar",
    file: "sidebar",
    category: "基础与布局",
    description: "企业中后台可折叠侧边栏导航骨架",
    exports: "Sidebar, SidebarProvider, SidebarContent, SidebarTrigger...",
  },
  {
    name: "Direction",
    file: "direction",
    category: "基础与布局",
    description: "LTR / RTL 国际化排版方向上下文",
    exports: "DirectionProvider",
  },
  {
    name: "Toggle / ToggleGroup",
    file: "toggle",
    category: "基础与布局",
    description: "双态按下切换按钮及按钮组（另含 toggle-group.tsx）",
    exports: "Toggle, ToggleGroup, ToggleGroupItem",
  },

  // 2. 表单与输入 (14)
  {
    name: "Input",
    file: "input",
    category: "表单与输入",
    description: "标准单行文本输入框",
    exports: "Input",
  },
  {
    name: "InputGroup",
    file: "input-group",
    category: "表单与输入",
    description: "带前后缀图标、文字或按钮的复合输入框",
    exports: "InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton",
  },
  {
    name: "InputOTP",
    file: "input-otp",
    category: "表单与输入",
    description: "短信/双因素认证分格验证码输入框",
    exports: "InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator",
  },
  {
    name: "Textarea",
    file: "textarea",
    category: "表单与输入",
    description: "多行文本输入域",
    exports: "Textarea",
  },
  {
    name: "Select",
    file: "select",
    category: "表单与输入",
    description: "下拉选择器，支持分组、滚动与自定义渲染",
    exports: "Select, SelectTrigger, SelectValue, SelectContent, SelectItem",
  },
  {
    name: "NativeSelect",
    file: "native-select",
    category: "表单与输入",
    description: "原生 HTML select 样式封装，兼顾移动端原生体验",
    exports: "NativeSelect",
  },
  {
    name: "Combobox",
    file: "combobox",
    category: "表单与输入",
    description: "支持关键词检索过滤的自动补全下拉选择框",
    exports: "Combobox, ComboboxInput, ComboboxContent, ComboboxItem...",
  },
  {
    name: "Checkbox",
    file: "checkbox",
    category: "表单与输入",
    description: "多选复选框控件",
    exports: "Checkbox",
  },
  {
    name: "RadioGroup",
    file: "radio-group",
    category: "表单与输入",
    description: "互斥单选框组",
    exports: "RadioGroup, RadioGroupItem",
  },
  {
    name: "Switch",
    file: "switch",
    category: "表单与输入",
    description: "即时状态切换开关（支持 default 与 sm 尺寸）",
    exports: "Switch",
  },
  {
    name: "Slider",
    file: "slider",
    category: "表单与输入",
    description: "数值滑动条，支持单值或范围双滑块",
    exports: "Slider",
  },
  {
    name: "Calendar",
    file: "calendar",
    category: "表单与输入",
    description: "单日、多日或日期区间选择日历面板",
    exports: "Calendar",
  },
  {
    name: "Field",
    file: "field",
    category: "表单与输入",
    description: "结构化表单项容器，自动关联标签、辅助说明与报错提示",
    exports: "Field, FieldLabel, FieldDescription, FieldError",
  },
  {
    name: "Label",
    file: "label",
    category: "表单与输入",
    description: "无障碍表单控件标签",
    exports: "Label",
  },

  // 3. 导航与菜单 (8)
  {
    name: "Tabs",
    file: "tabs",
    category: "导航与菜单",
    description: "同级视图选项卡切换组件",
    exports: "Tabs, TabsList, TabsTrigger, TabsContent",
  },
  {
    name: "Breadcrumb",
    file: "breadcrumb",
    category: "导航与菜单",
    description: "页面层级路径面包屑导航",
    exports: "Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink...",
  },
  {
    name: "NavigationMenu",
    file: "navigation-menu",
    category: "导航与菜单",
    description: "网站顶部带下拉面板的主导航菜单",
    exports: "NavigationMenu, NavigationMenuList, NavigationMenuItem...",
  },
  {
    name: "Menubar",
    file: "menubar",
    category: "导航与菜单",
    description: "桌面端软件风格的顶部多级菜单栏",
    exports: "Menubar, MenubarMenu, MenubarTrigger, MenubarContent...",
  },
  {
    name: "DropdownMenu",
    file: "dropdown-menu",
    category: "导航与菜单",
    description: "点击触发的悬浮下拉操作菜单",
    exports: "DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem...",
  },
  {
    name: "ContextMenu",
    file: "context-menu",
    category: "导航与菜单",
    description: "鼠标右键触发的上下文快捷菜单",
    exports: "ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem...",
  },
  {
    name: "Pagination",
    file: "pagination",
    category: "导航与菜单",
    description: "数据列表页码分页器",
    exports: "Pagination, PaginationContent, PaginationItem, PaginationLink...",
  },
  {
    name: "Command",
    file: "command",
    category: "导航与菜单",
    description: "⌘K 全局命令面板与快捷键搜索列表",
    exports: "Command, CommandDialog, CommandInput, CommandList, CommandItem...",
  },

  // 4. 弹窗与反馈 (13)
  {
    name: "Dialog",
    file: "dialog",
    category: "弹窗与反馈",
    description: "居中模态弹窗对话框",
    exports: "Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter...",
  },
  {
    name: "AlertDialog",
    file: "alert-dialog",
    category: "弹窗与反馈",
    description: "高危操作二次确认阻断弹窗",
    exports: "AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction...",
  },
  {
    name: "Sheet",
    file: "sheet",
    category: "弹窗与反馈",
    description: "屏幕侧边（上下左右）滑出式抽屉面板",
    exports: "Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle...",
  },
  {
    name: "Drawer",
    file: "drawer",
    category: "弹窗与反馈",
    description: "支持手势拖拽关闭的底部抽屉组件",
    exports: "Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter...",
  },
  {
    name: "Popover",
    file: "popover",
    category: "弹窗与反馈",
    description: "点击触发的轻量级悬浮气泡面板",
    exports: "Popover, PopoverTrigger, PopoverContent",
  },
  {
    name: "Tooltip",
    file: "tooltip",
    category: "弹窗与反馈",
    description: "鼠标悬停或聚焦时的简短文字提示",
    exports: "TooltipProvider, Tooltip, TooltipTrigger, TooltipContent",
  },
  {
    name: "HoverCard",
    file: "hover-card",
    category: "弹窗与反馈",
    description: "鼠标悬停时展开的富内容预览卡片",
    exports: "HoverCard, HoverCardTrigger, HoverCardContent",
  },
  {
    name: "Alert",
    file: "alert",
    category: "弹窗与反馈",
    description: "页面内嵌静态提示框（支持 default 与 destructive）",
    exports: "Alert, AlertTitle, AlertDescription, AlertAction",
  },
  {
    name: "Toast",
    file: "toast",
    category: "弹窗与反馈",
    description: "非阻断式全局操作反馈通知条",
    exports: "Toast, ToastProvider, useToast...",
  },
  {
    name: "Progress",
    file: "progress",
    category: "弹窗与反馈",
    description: "任务完成度百分比进度条",
    exports: "Progress, ProgressTrack, ProgressIndicator",
  },
  {
    name: "Spinner",
    file: "spinner",
    category: "弹窗与反馈",
    description: "旋转加载状态指示图标",
    exports: "Spinner",
  },
  {
    name: "Skeleton",
    file: "skeleton",
    category: "弹窗与反馈",
    description: "数据加载过程中的脉冲占位骨架屏",
    exports: "Skeleton",
  },
  {
    name: "Empty",
    file: "empty",
    category: "弹窗与反馈",
    description: "列表无数据、无搜索结果时的缺省页状态",
    exports: "Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent",
  },

  // 5. 数据展示 (9)
  {
    name: "Table",
    file: "table",
    category: "数据展示",
    description: "响应式结构化数据表格",
    exports: "Table, TableHeader, TableBody, TableRow, TableHead, TableCell",
  },
  {
    name: "Accordion",
    file: "accordion",
    category: "数据展示",
    description: "可折叠手风琴列表（适用于 FAQ 与多维详情）",
    exports: "Accordion, AccordionItem, AccordionTrigger, AccordionContent",
  },
  {
    name: "Collapsible",
    file: "collapsible",
    category: "数据展示",
    description: "单一内容区域的展开/折叠容器",
    exports: "Collapsible, CollapsibleTrigger, CollapsibleContent",
  },
  {
    name: "Carousel",
    file: "carousel",
    category: "数据展示",
    description: "支持触摸滑动的轮播图与卡片滑块",
    exports: "Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext",
  },
  {
    name: "Chart",
    file: "chart",
    category: "数据展示",
    description: "基于 Recharts 封装的主题自适应数据可视化图表",
    exports: "ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend...",
  },
  {
    name: "Avatar",
    file: "avatar",
    category: "数据展示",
    description: "用户头像，支持文字回退、在线状态点与多人头像叠放",
    exports: "Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup",
  },
  {
    name: "Item",
    file: "item",
    category: "数据展示",
    description: "带图标、主副标题与右侧操作的通用列表项",
    exports: "Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions",
  },
  {
    name: "Kbd",
    file: "kbd",
    category: "数据展示",
    description: "键盘按键与快捷键组合语义标签",
    exports: "Kbd",
  },
  {
    name: "CodeBlock",
    file: "code-block",
    category: "数据展示",
    description: "支持行号、Diff 增删高亮与一键复制的代码展示容器",
    exports: "CodeBlock, CodeBlockHeader, CodeBlockTitle, CodeBlockContent, CodeBlockCopyButton",
  },

  // 6. AI 与对话 (7)
  {
    name: "Bubble",
    file: "bubble",
    category: "AI 与对话",
    description: "AI/IM 聊天气泡，支持 7 种色彩变体与底部表情回应",
    exports: "Bubble, BubbleGroup, BubbleContent, BubbleReactions",
  },
  {
    name: "Message",
    file: "message",
    category: "AI 与对话",
    description: "对话消息布局容器，统筹头像、昵称、气泡与时间戳对齐",
    exports: "Message, MessageGroup, MessageAvatar, MessageHeader, MessageContent, MessageFooter",
  },
  {
    name: "MessageScroller",
    file: "message-scroller",
    category: "AI 与对话",
    description: "流式输出对话列表自动平滑贴底滚动容器",
    exports: "MessageScroller",
  },
  {
    name: "Attachment",
    file: "attachment",
    category: "AI 与对话",
    description: "对话输入框或消息体中的文件、图片附件预览卡片",
    exports: "Attachment, AttachmentGroup, AttachmentPreview, AttachmentRemove",
  },
  {
    name: "Questionnaire",
    file: "questionnaire",
    category: "AI 与对话",
    description: "Agent 引导式多步交互问答与需求收集卡片",
    exports: "Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices...",
  },
  {
    name: "Trace",
    file: "trace",
    category: "AI 与对话",
    description: "Agent 推理思考步骤、MCP 工具调用状态追踪流（支持流光动画）",
    exports: "Trace, TraceLine, TraceIcon, TraceTitle, TraceDescription, TraceCollapsible",
  },
  {
    name: "Marker",
    file: "marker",
    category: "AI 与对话",
    description: "RAG 检索来源引用数字角标与高亮标记",
    exports: "Marker",
  },
]

const CATEGORIES: ComponentCategory[] = [
  "全部",
  "基础与布局",
  "表单与输入",
  "导航与菜单",
  "弹窗与反馈",
  "数据展示",
  "AI 与对话",
]

const QUICK_IMPORT_CODE = `import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"`

export default function ComponentsGalleryPage() {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] =
    React.useState<ComponentCategory>("全部")
  const [copiedFile, setCopiedFile] = React.useState<string | null>(null)

  // 交互演练场状态
  const [switchEnabled, setSwitchEnabled] = React.useState(true)
  const [sliderValue, setSliderValue] = React.useState<number[]>([68])
  const [progressValue, setProgressValue] = React.useState(72)
  const [checkedDemo, setCheckedDemo] = React.useState(true)

  const filteredComponents = React.useMemo(() => {
    return ALL_COMPONENTS.filter((item) => {
      const matchCategory =
        selectedCategory === "全部" || item.category === selectedCategory
      const query = search.trim().toLowerCase()
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.file.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.exports.toLowerCase().includes(query)
      return matchCategory && matchQuery
    })
  }, [search, selectedCategory])

  function handleCopyImport(item: ComponentMeta) {
    const firstExport = item.exports.split(",")[0].trim()
    const snippet = `import { ${firstExport} } from "@/components/ui/${item.file}"`
    navigator.clipboard
      .writeText(snippet)
      .then(() => {
        setCopiedFile(item.file)
        setTimeout(() => setCopiedFile(null), 1800)
      })
      .catch(() => {})
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* 顶部导航栏 */}
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Layers className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold tracking-tight">
                    Company UI 组件库画廊
                  </span>
                  <Badge variant="secondary">63 Components</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Next.js 16 · React 19 · Tailwind v4 · Base UI (base-nova)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href="/" />}
              >
                <ArrowLeft className="size-4" />
                返回业务示例首页
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-8">
          {/* 顶部快速上手说明卡片 */}
          <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <Card className="justify-between">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge>开箱即用</Badge>
                  <Badge variant="secondary">辅助色 & 图标 #EA5B18</Badge>
                  <span className="text-xs text-muted-foreground">
                    品牌主色 #0E3183 · 适中圆角 0.5rem
                  </span>
                </div>
                <CardTitle className="pt-1 text-2xl font-bold">
                  如何使用本模板与组件库？
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  本仓库已在 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">components/ui/</code> 目录下预置了全部 63 个企业级 UI 组件（包含通用表单、数据表格、浮层弹窗以及 AI 智能体对话组件）。开发者无需重复执行安装命令，直接按路径 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">@/components/ui/*</code> 引入即可构建业务页面。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border bg-muted/30 p-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    第一步：安装依赖
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold">
                    npm install
                  </div>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    第二步：启动开发服务
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold">
                    npm run dev
                  </div>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    第三步：修改主题色
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold">
                    app/globals.css
                  </div>
                </div>
              </CardContent>
            </Card>

            <CodeBlock>
              <CodeBlockHeader>
                <CodeBlockTitle>
                  <Terminal className="size-3.5" />
                  组件标准引入示例 (app/page.tsx)
                </CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton value={QUICK_IMPORT_CODE} />
                </CodeBlockActions>
              </CodeBlockHeader>
              <CodeBlockContent lineNumbers>
                {QUICK_IMPORT_CODE}
              </CodeBlockContent>
            </CodeBlock>
          </section>

          {/* 核心高频组件实时交互演练场 */}
          <section className="mb-12">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  1. 核心组件实时交互预览 (Live Playground)
                </h2>
                <p className="text-sm text-muted-foreground">
                  以下为模板内最具代表性的 4 大高频场景组件实时渲染效果，可直接点击交互
                </p>
              </div>
            </div>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="general">基础与表单控件</TabsTrigger>
                <TabsTrigger value="ai">AI 对话与 Agent 追踪</TabsTrigger>
                <TabsTrigger value="data">数据表格与折叠面板</TabsTrigger>
                <TabsTrigger value="feedback">弹窗、提示与反馈</TabsTrigger>
              </TabsList>

              {/* 演练场 1：基础与表单控件 */}
              <TabsContent value="general">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>按钮与徽章变体 (Button & Badge)</CardTitle>
                      <CardDescription>
                        支持 default / secondary / outline / ghost / destructive / link
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Button>主按钮 Primary</Button>
                        <Button variant="secondary">次要 Secondary</Button>
                        <Button variant="outline">描边 Outline</Button>
                        <Button variant="ghost">幽灵 Ghost</Button>
                        <Button variant="destructive">危险 Destructive</Button>
                      </div>
                      <Separator />
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge>默认主色徽章</Badge>
                        <Badge variant="secondary">次要状态</Badge>
                        <Badge variant="outline">边框标签</Badge>
                        <Badge variant="destructive">告警标签</Badge>
                        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                          快捷键 <Kbd>⌘</Kbd> <Kbd>K</Kbd>
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>表单交互控件 (Input / Switch / Slider)</CardTitle>
                      <CardDescription>
                        基于 @base-ui/react 构建的无障碍表单原语
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <Input placeholder="请输入项目名称..." />
                        <Select defaultValue="nextjs">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="选择技术栈" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="nextjs">
                                Next.js 16 + React 19
                              </SelectItem>
                              <SelectItem value="tailwind">
                                Tailwind CSS v4
                              </SelectItem>
                              <SelectItem value="baseui">
                                Base UI + shadcn
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={switchEnabled}
                            onCheckedChange={setSwitchEnabled}
                          />
                          <span className="text-sm font-medium">
                            启用企业深色主题自适应 ({switchEnabled ? "已开启" : "已关闭"})
                          </span>
                        </div>
                        <label className="flex cursor-pointer items-center gap-2 text-sm">
                          <Checkbox
                            checked={checkedDemo}
                            onCheckedChange={(v) => setCheckedDemo(Boolean(v))}
                          />
                          自动保存
                        </label>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>并发请求阈值调节 (Slider)</span>
                          <span className="font-mono font-medium text-foreground">
                            {sliderValue[0]}%
                          </span>
                        </div>
                        <Slider
                          value={sliderValue}
                          onValueChange={(val) =>
                            setSliderValue(Array.isArray(val) ? [...val] : [val])
                          }
                          max={100}
                          min={0}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 演练场 2：AI 对话与 Agent 追踪 */}
              <TabsContent value="ai">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>
                          AI 智能体对话套件 (Message + Bubble + Trace)
                        </CardTitle>
                        <CardDescription>
                          专为大模型对话、Copilot 助手、Agent 工具调用链路设计的高阶组件
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Sparkles className="size-3" />
                        AI Native UI
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5 rounded-lg border bg-muted/20 p-4">
                    {/* 用户提问 */}
                    <Message align="end">
                      <MessageAvatar>
                        <User className="size-4" />
                      </MessageAvatar>
                      <MessageContent>
                        <MessageHeader>产品经理 · 刚刚</MessageHeader>
                        <Bubble align="end" variant="default">
                          <BubbleContent>
                            帮我检查当前仓库安装了哪些 AI 专属组件，并给出调用建议。
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>

                    {/* AI 回复与思考链路 */}
                    <Message align="start">
                      <MessageAvatar className="bg-primary text-primary-foreground">
                        <Bot className="size-4" />
                      </MessageAvatar>
                      <MessageContent>
                        <MessageHeader>企业研发 Copilot</MessageHeader>
                        <Trace className="rounded-md border bg-background px-3 py-2">
                          <TraceLine>
                            <TraceIcon>
                              <CheckCircle2 className="size-4 text-brand-orange" />
                            </TraceIcon>
                            <TraceTitle>
                              已扫描 components/ui 目录下的 63 个组件模块
                            </TraceTitle>
                            <TraceDescription>0.4s</TraceDescription>
                          </TraceLine>
                          <TraceLine status="running">
                            <TraceIcon>
                              <Spinner className="size-3.5 text-brand-orange" />
                            </TraceIcon>
                            <TraceTitle>
                              正在生成 Bubble、Message、Trace 与 Questionnaire 组合示例...
                            </TraceTitle>
                            <TraceDescription>running</TraceDescription>
                          </TraceLine>
                        </Trace>

                        <Bubble variant="outline">
                          <BubbleContent>
                            当前模板已内置 7 个 AI 专属组件：使用{" "}
                            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                              Message
                            </code>{" "}
                            与{" "}
                            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                              Bubble
                            </code>{" "}
                            渲染多轮对话气泡，配合{" "}
                            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                              Trace
                            </code>{" "}
                            展示 Agent 的工具调用状态与耗时。
                          </BubbleContent>
                        </Bubble>
                        <MessageFooter>已生成回答 · Token 消耗 128</MessageFooter>
                      </MessageContent>
                    </Message>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 演练场 3：数据表格与折叠面板 */}
              <TabsContent value="data">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>结构化数据表格 (Table & AvatarGroup)</CardTitle>
                      <CardDescription>
                        适用于中后台列表、成员管理与订单报表
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>模块名称</TableHead>
                            <TableHead>负责人</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead className="text-right">覆盖率</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              核心设计规范 Tokens
                            </TableCell>
                            <TableCell>
                              <AvatarGroup>
                                <Avatar size="sm">
                                  <AvatarFallback>李</AvatarFallback>
                                </Avatar>
                                <Avatar size="sm">
                                  <AvatarFallback>王</AvatarFallback>
                                </Avatar>
                                <AvatarGroupCount>+2</AvatarGroupCount>
                              </AvatarGroup>
                            </TableCell>
                            <TableCell>
                              <Badge>已发布</Badge>
                            </TableCell>
                            <TableCell className="text-right font-mono">
                              98.5%
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              AI 对话流组件包
                            </TableCell>
                            <TableCell>
                              <Avatar size="sm">
                                <AvatarFallback>张</AvatarFallback>
                              </Avatar>
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">维护中</Badge>
                            </TableCell>
                            <TableCell className="text-right font-mono">
                              94.0%
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>手风琴折叠面板 (Accordion)</CardTitle>
                      <CardDescription>
                        常见问题说明与分组详情展开
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            为什么触发器使用 render 属性而不是 asChild？
                          </AccordionTrigger>
                          <AccordionContent>
                            本模板采用 shadcn/ui 最新的 <code className="font-mono">base-nova</code> 架构，底层基于 <code className="font-mono">@base-ui/react</code>。使用 <code className="font-mono">{`render={<Button />}`}</code> 可以获得更严格的类型推导与更稳定的引用转发。
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>
                            如何修改默认的企业品牌色 (#0E3183)？
                          </AccordionTrigger>
                          <AccordionContent>
                            打开 <code className="font-mono">app/globals.css</code>，修改 <code className="font-mono">:root</code> 与 <code className="font-mono">.dark</code> 中的 <code className="font-mono">--primary</code> 和 <code className="font-mono">--ring</code> 变量即可全局生效。
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>
                            可以修改 components/ui 下的组件源码吗？
                          </AccordionTrigger>
                          <AccordionContent>
                            完全可以！所有 63 个组件的源码都直接保存在仓库内，非黑盒 npm 包，团队可以根据业务需求自由定制样式或扩展属性。
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 演练场 4：弹窗、提示与反馈 */}
              <TabsContent value="feedback">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>警告横幅与进度反馈 (Alert & Progress)</CardTitle>
                      <CardDescription>
                        页面内嵌通知提示与异步任务进度展示
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <Alert>
                        <CheckCircle2 className="size-4" />
                        <AlertTitle>组件库已就绪</AlertTitle>
                        <AlertDescription>
                          全部 63 个 UI 组件均已通过 TypeScript 类型校验。
                        </AlertDescription>
                      </Alert>

                      <Alert variant="destructive">
                        <AlertCircle className="size-4" />
                        <AlertTitle>构建提醒</AlertTitle>
                        <AlertDescription>
                          生产部署前请执行 npm run build 验证静态资源打包。
                        </AlertDescription>
                      </Alert>

                      <div className="flex flex-col gap-2 pt-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            资源预加载进度 (Progress)
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-medium">
                              {progressValue}%
                            </span>
                            <Button
                              variant="outline"
                              size="xs"
                              onClick={() =>
                                setProgressValue((v) => (v >= 100 ? 25 : v + 25))
                              }
                            >
                              +25%
                            </Button>
                          </div>
                        </div>
                        <Progress value={progressValue} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>
                        模态弹窗、悬浮提示与骨架屏 (Dialog / Tooltip / Skeleton)
                      </CardTitle>
                      <CardDescription>
                        点击下方按钮体验模态框与悬停气泡
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Dialog>
                          <DialogTrigger
                            render={<Button>点击打开 Dialog 弹窗</Button>}
                          />
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>新建企业项目模块</DialogTitle>
                              <DialogDescription>
                                此弹窗由 @/components/ui/dialog 驱动，支持键盘 Esc 关闭与焦点锁定。
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-3 py-2">
                              <Label htmlFor="demo-name">模块名称</Label>
                              <Input
                                id="demo-name"
                                defaultValue="企业客户关系管理台"
                              />
                              <Label htmlFor="demo-desc">模块描述</Label>
                              <Textarea
                                id="demo-desc"
                                placeholder="请输入模块职能描述..."
                              />
                            </div>
                            <DialogFooter>
                              <DialogClose
                                render={<Button variant="outline">取消</Button>}
                              />
                              <DialogClose
                                render={<Button>确认创建</Button>}
                              />
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Tooltip>
                          <TooltipTrigger
                            render={
                              <Button variant="outline">
                                鼠标悬停查看 Tooltip
                              </Button>
                            }
                          />
                          <TooltipContent>
                            这是 Tooltip 悬浮提示组件
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      <Separator />

                      <div className="flex flex-col gap-2">
                        <span className="text-xs text-muted-foreground">
                          加载占位骨架屏 (Skeleton & Spinner)
                        </span>
                        <div className="flex items-center gap-3 rounded-lg border p-3">
                          <Skeleton className="size-10 rounded-full" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-3.5 w-1/2" />
                            <Skeleton className="h-3 w-4/5" />
                          </div>
                          <Spinner className="size-4 text-brand-orange" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 全部 63 个组件完整检索目录 */}
          <section>
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  2. 全部 63 个内置组件检索目录 (Component Directory)
                </h2>
                <p className="text-sm text-muted-foreground">
                  按分类浏览或搜索组件名称，点击卡片右侧按钮即可一键复制{" "}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                    import
                  </code>{" "}
                  语句
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-brand-orange" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜索组件名、文件名或功能..."
                  className="pl-8"
                />
              </div>
            </div>

            {/* 分类过滤按钮 */}
            <div className="mb-6 flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const count =
                  category === "全部"
                    ? ALL_COMPONENTS.length
                    : ALL_COMPONENTS.filter((c) => c.category === category)
                        .length
                return (
                  <Button
                    key={category}
                    size="sm"
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category} ({count})
                  </Button>
                )
              })}
            </div>

            {/* 组件卡片网格 */}
            {filteredComponents.length === 0 ? (
              <Card className="py-12 text-center">
                <CardContent className="flex flex-col items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    未找到匹配「{search}」的组件
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearch("")
                      setSelectedCategory("全部")
                    }}
                  >
                    重置筛选
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredComponents.map((item) => {
                  const isCopied = copiedFile === item.file
                  return (
                    <Card
                      key={item.file}
                      size="sm"
                      className="justify-between transition-shadow hover:shadow-sm"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between gap-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                            {item.file}.tsx
                          </code>
                        </div>
                        <CardTitle className="pt-1 text-base">
                          {item.name}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="rounded-md bg-muted/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground">
                          <span className="text-foreground">导出：</span>
                          {item.exports}
                        </div>
                      </CardContent>

                      <CardFooter className="justify-between border-t pt-3">
                        <code className="truncate font-mono text-xs text-muted-foreground">
                          @/components/ui/{item.file}
                        </code>
                        <Button
                          size="xs"
                          variant={isCopied ? "default" : "outline"}
                          onClick={() => handleCopyImport(item)}
                        >
                          {isCopied ? (
                            <>
                              <Check className="size-3" />
                              已复制
                            </>
                          ) : (
                            <>
                              <Copy className="size-3" />
                              复制引入
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            )}
          </section>
        </main>

        <footer className="mt-16 border-t bg-muted/20">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
            <span>Company UI Template · 内置 63 个企业级 React 19 组件</span>
            <span>文件路径：components/ui/*.tsx · 文档页：/components</span>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
