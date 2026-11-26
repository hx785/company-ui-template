"use client"

import * as React from "react"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Bot,
  Boxes,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  Database,
  Download,
  FileCode2,
  Filter,
  FolderGit2,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  KeyRound,
  Layers,
  MoreHorizontal,
  Play,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Trash2,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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

type WorkspaceEnv = "prod-cn-east" | "staging-sh" | "dev-sandbox"
type PipelineStatus = "运行中" | "构建中" | "异常告警" | "已休眠"
type PipelineCategory = "全部" | "具身智能 VLA" | "3D 空间资产" | "知识库 RAG" | "多模态推理"

interface PipelineService {
  id: string
  name: string
  code: string
  category: Exclude<PipelineCategory, "全部">
  status: PipelineStatus
  region: string
  gpuCluster: string
  qps: number
  latencyMs: number
  accuracy: string
  gpuLoad: number
  deliverable: string
  owner: string
  updatedAt: string
  autoScale: boolean
}

interface ChatMessageItem {
  id: string
  role: "user" | "assistant"
  author: string
  time: string
  text: string
  traces?: { title: string; duration: string; status?: "running" | "pending" | "error" }[]
}

const INITIAL_PIPELINES: PipelineService[] = [
  {
    id: "pipe-01",
    name: "双臂协同 VLA 视觉动作控制流",
    code: "vla-bimanual-v4.2",
    category: "具身智能 VLA",
    status: "运行中",
    region: "上海智算中心 · AZ1",
    gpuCluster: "8 × H800 (NVLink)",
    qps: 1420,
    latencyMs: 8.4,
    accuracy: "99.4%",
    gpuLoad: 78,
    deliverable: "控制策略与验证记录",
    owner: "林工",
    updatedAt: "12 分钟前",
    autoScale: true,
  },
  {
    id: "pipe-02",
    name: "4D 动态高斯点云重建管线",
    code: "spatial-4dgs-recon",
    category: "3D 空间资产",
    status: "运行中",
    region: "上海智算中心 · AZ2",
    gpuCluster: "4 × H800",
    qps: 680,
    latencyMs: 14.2,
    accuracy: "R4 保真度 (<1.5mm)",
    gpuLoad: 64,
    deliverable: "3D 可信空间资产",
    owner: "陈博",
    updatedAt: "35 分钟前",
    autoScale: true,
  },
  {
    id: "pipe-03",
    name: "企业研发技术文档 GraphRAG 引擎",
    code: "enterprise-graph-rag",
    category: "知识库 RAG",
    status: "运行中",
    region: "北京可用区 · AZ1",
    gpuCluster: "2 × A100 (80GB)",
    qps: 3290,
    latencyMs: 11.8,
    accuracy: "98.7%",
    gpuLoad: 52,
    deliverable: "高置信度检索图谱",
    owner: "张工",
    updatedAt: "1 小时前",
    autoScale: true,
  },
  {
    id: "pipe-04",
    name: "工业质检难例切片自动挖掘节点",
    code: "hard-case-miner-v2",
    category: "多模态推理",
    status: "构建中",
    region: "深圳边缘节点 · SZ1",
    gpuCluster: "4 × L40S",
    qps: 410,
    latencyMs: 19.5,
    accuracy: "97.9%",
    gpuLoad: 88,
    deliverable: "难例数据集与评测报告",
    owner: "王工",
    updatedAt: "刚刚",
    autoScale: false,
  },
  {
    id: "pipe-05",
    name: "仿真训练物理碰撞可微渲染器",
    code: "sim-physx-differentiable",
    category: "3D 空间资产",
    status: "异常告警",
    region: "上海智算中心 · AZ1",
    gpuCluster: "4 × H800",
    qps: 195,
    latencyMs: 42.0,
    accuracy: "96.2%",
    gpuLoad: 96,
    deliverable: "物理仿真轨迹资产流",
    owner: "周工",
    updatedAt: "5 分钟前",
    autoScale: true,
  },
  {
    id: "pipe-06",
    name: "多语种客服语音实时流式合成",
    code: "omni-voice-stream",
    category: "多模态推理",
    status: "运行中",
    region: "北京可用区 · AZ2",
    gpuCluster: "2 × L40S",
    qps: 2150,
    latencyMs: 9.1,
    accuracy: "99.1%",
    gpuLoad: 45,
    deliverable: "低时延多模态音频流",
    owner: "赵工",
    updatedAt: "3 小时前",
    autoScale: false,
  },
]

const CATEGORIES: PipelineCategory[] = [
  "全部",
  "具身智能 VLA",
  "3D 空间资产",
  "知识库 RAG",
  "多模态推理",
]

const SDK_INTEGRATION_SNIPPET = `import { YuanQeeClient } from "@yuanqee/enterprise-sdk"

const client = new YuanQeeClient({
  endpoint: "https://api.yuanqee.ai/v1/pipelines",
  clusterRegion: "prod-cn-east",
  timeoutMs: 5000,
})

// 调用双臂协同 VLA 视觉动作控制流
const result = await client.invoke("vla-bimanual-v4.2", {
  pointCloudStream: "s3://spatial-assets/scene-402.ply",
  precisionTarget: "R4",
})`

export default function EnterpriseConsolePage() {
  // 顶部环境与筛选状态
  const [workspaceEnv, setWorkspaceEnv] = React.useState<WorkspaceEnv>("prod-cn-east")
  const [pipelines, setPipelines] = React.useState<PipelineService[]>(INITIAL_PIPELINES)
  const [selectedCategory, setSelectedCategory] = React.useState<PipelineCategory>("全部")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [onlyHealthy, setOnlyHealthy] = React.useState(false)
  const [activePipeline, setActivePipeline] = React.useState<PipelineService>(INITIAL_PIPELINES[0])
  const [detailSheetOpen, setDetailSheetOpen] = React.useState(false)

  // 新建部署弹窗状态
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [newServiceName, setNewServiceName] = React.useState("")
  const [newServiceCode, setNewServiceCode] = React.useState("")
  const [newServiceCategory, setNewServiceCategory] =
    React.useState<Exclude<PipelineCategory, "全部">>("具身智能 VLA")
  const [newServiceDeliverable, setNewServiceDeliverable] =
    React.useState("端到端自适应策略闭环")

  // 集群策略参数状态
  const [gpuThreshold, setGpuThreshold] = React.useState<number[]>([82])
  const [latencyBudget, setLatencyBudget] = React.useState<number[]>([15])
  const [autoFailover, setAutoFailover] = React.useState(true)
  const [strictTokenAudit, setStrictTokenAudit] = React.useState(true)
  const [zeroDowntimeDeploy, setZeroDowntimeDeploy] = React.useState(true)

  // 右侧 AI Copilot 对话抽屉与内嵌控制台状态
  const [chatInput, setChatInput] = React.useState("")
  const [isCopilotGenerating, setIsCopilotGenerating] = React.useState(false)
  const [chatMessages, setChatMessages] = React.useState<ChatMessageItem[]>([
    {
      id: "msg-1",
      role: "user",
      author: "架构师 林工",
      time: "10:42",
      text: "帮我巡检当前上海智算集群的管线健康度，并重点排查延迟超过 30ms 的节点。",
    },
    {
      id: "msg-2",
      role: "assistant",
      author: "YuanQee 运维 Copilot",
      time: "10:42",
      text: "已完成全量 6 条生产管线扫描：其中 4 条核心管线时延稳定在 < 15ms（R4 级 SLA）；发现「仿真训练物理碰撞可微渲染器 (sim-physx-differentiable)」GPU 负载达 96%，当前时延 42.0ms，建议立即扩容 2 张 H800 算力卡或开启自动弹性分流。",
      traces: [
        { title: "拉取上海 AZ1/AZ2 节点 Prometheus 实时遥测流", duration: "0.32s" },
        { title: "定位高负载节点 sim-physx-differentiable 并生成扩容预案", duration: "0.54s" },
      ],
    },
  ])

  const filteredPipelines = React.useMemo(() => {
    return pipelines.filter((item) => {
      const matchCategory =
        selectedCategory === "全部" || item.category === selectedCategory
      const matchHealth = !onlyHealthy || item.status === "运行中"
      const q = searchQuery.trim().toLowerCase()
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.deliverable.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q)
      return matchCategory && matchHealth && matchSearch
    })
  }, [pipelines, selectedCategory, onlyHealthy, searchQuery])

  // 统计核心指标
  const totalQps = React.useMemo(
    () => pipelines.reduce((sum, item) => sum + item.qps, 0),
    [pipelines]
  )
  const runningCount = React.useMemo(
    () => pipelines.filter((item) => item.status === "运行中").length,
    [pipelines]
  )
  const alertCount = React.useMemo(
    () => pipelines.filter((item) => item.status === "异常告警").length,
    [pipelines]
  )

  function handleCreatePipeline() {
    if (!newServiceName.trim()) return
    const created: PipelineService = {
      id: `pipe-${Date.now()}`,
      name: newServiceName.trim(),
      code:
        newServiceCode.trim() ||
        `custom-node-v${pipelines.length + 1}.0`,
      category: newServiceCategory,
      status: "运行中",
      region: "上海智算中心 · AZ1",
      gpuCluster: "4 × H800 (NVLink)",
      qps: 960,
      latencyMs: 9.6,
      accuracy: "99.2%",
      gpuLoad: 58,
      deliverable: newServiceDeliverable.trim() || "可信空间资产",
      owner: "当前管理员",
      updatedAt: "刚刚",
      autoScale: true,
    }
    setPipelines((prev) => [created, ...prev])
    setNewServiceName("")
    setNewServiceCode("")
    setCreateDialogOpen(false)
  }

  function handleToggleAutoScale(id: string) {
    setPipelines((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, autoScale: !item.autoScale } : item
      )
    )
  }

  function handleHealPipeline(id: string) {
    setPipelines((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "运行中",
              latencyMs: 12.4,
              gpuLoad: 65,
              updatedAt: "刚刚自动扩容修复",
            }
          : item
      )
    )
  }

  function handleDeletePipeline(id: string) {
    setPipelines((prev) => prev.filter((item) => item.id !== id))
  }

  function handleSendCopilotMessage(promptText?: string) {
    const content = (promptText ?? chatInput).trim()
    if (!content || isCopilotGenerating) return
    const userMsg: ChatMessageItem = {
      id: `u-${Date.now()}`,
      role: "user",
      author: "架构师 林工",
      time: "刚刚",
      text: content,
    }
    setChatMessages((prev) => [...prev, userMsg])
    if (!promptText) setChatInput("")
    setIsCopilotGenerating(true)

    setTimeout(() => {
      const assistantMsg: ChatMessageItem = {
        id: `a-${Date.now()}`,
        role: "assistant",
        author: "YuanQee 运维 Copilot",
        time: "刚刚",
        text: `已执行指令「${content}」：当前集群总吞吐量 ${totalQps.toLocaleString()} QPS，核心 VLA 与 3D 空间资产管线端到端 P99 时延已收敛至 11.2ms，全部阶段产出物均已同步至高可用对象存储。`,
        traces: [
          { title: "校验集群 RBAC 权限与算力配额策略", duration: "0.21s" },
          { title: "调度 H800 算力池并校验产出物完整性哈希", duration: "0.48s" },
        ],
      }
      setChatMessages((prev) => [...prev, assistantMsg])
      setIsCopilotGenerating(false)
    }, 650)
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* 顶部企业级全局导航栏 */}
        <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
            {/* 左侧品牌标识与面包屑 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                  <Cpu className="size-5 text-brand-orange" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold tracking-tight">
                      元企智算云 YuanQee Cloud
                    </span>
                    <Badge variant="secondary">Enterprise v4.2</Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    具身智能与 3D 空间资产中枢控制台
                  </span>
                </div>
              </div>

              <Separator orientation="vertical" className="hidden h-6 lg:block" />

              <Breadcrumb className="hidden lg:block">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">智算工作台</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>生产管线与 Agent 编排</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* 右侧环境选择器、通知中心、组件库入口与用户菜单 */}
            <div className="flex items-center gap-2.5">
              {/* 集群环境切换 Select */}
              <div className="hidden sm:block">
                <Select
                  value={workspaceEnv}
                  onValueChange={(v) => setWorkspaceEnv(v as WorkspaceEnv)}
                >
                  <SelectTrigger className="w-44">
                    <Globe className="size-3.5 text-brand-orange" />
                    <SelectValue placeholder="选择运行集群" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="prod-cn-east">
                        华东生产集群 (上海 AZ1)
                      </SelectItem>
                      <SelectItem value="staging-sh">
                        预发布仿真集群 (Staging)
                      </SelectItem>
                      <SelectItem value="dev-sandbox">
                        算法研发沙箱 (Dev)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* 实时告警通知 Popover */}
              <Popover>
                <PopoverTrigger
                  render={
                    <Button variant="outline" size="icon" aria-label="系统通知">
                      <Bell className="size-4 text-brand-orange" />
                    </Button>
                  }
                />
                <PopoverContent align="end" className="w-80">
                  <PopoverHeader>
                    <div className="flex items-center justify-between">
                      <PopoverTitle>集群实时事件流</PopoverTitle>
                      <Badge variant="secondary">3 条新动态</Badge>
                    </div>
                    <PopoverDescription>
                      最近 1 小时内的算力调度与交付物通知
                    </PopoverDescription>
                  </PopoverHeader>
                  <Separator />
                  <div className="flex flex-col gap-2.5 text-xs">
                    <div className="flex items-start gap-2 rounded-md bg-muted/50 p-2">
                      <Zap className="mt-0.5 size-3.5 shrink-0 text-brand-orange" />
                      <div>
                        <div className="font-medium text-foreground">
                          4D 高斯点云资产构建完成
                        </div>
                        <div className="text-muted-foreground">
                          产出物：3D 可信空间资产 (#scene-402) · 12 分钟前
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-md bg-muted/50 p-2">
                      <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-brand-orange" />
                      <div>
                        <div className="font-medium text-foreground">
                          物理碰撞渲染器算力水位预警
                        </div>
                        <div className="text-muted-foreground">
                          H800 显存占用达 96%，建议一键弹性扩容 · 5 分钟前
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* 组件库画廊跳转按钮 */}
              <Button
                variant="secondary"
                className="gap-1.5"
                nativeButton={false}
                render={<Link href="/components" />}
              >
                <Layers className="size-4 text-brand-orange" />
                <span>组件库画廊 (63)</span>
              </Button>

              {/* 用户中心下拉菜单 DropdownMenu */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" className="gap-2 pl-2">
                      <Avatar size="sm">
                        <AvatarFallback>林</AvatarFallback>
                        <AvatarBadge />
                      </Avatar>
                      <span className="hidden text-xs font-medium md:inline">
                        林工 (首席架构师)
                      </span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>账号与企业组织</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setCreateDialogOpen(true)}>
                      <Plus className="size-4" />
                      <span>发布新推理管线</span>
                      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setActivePipeline(pipelines[0])
                        setDetailSheetOpen(true)
                      }}
                    >
                      <Activity className="size-4" />
                      <span>查看主控节点遥测</span>
                      <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem render={<Link href="/components" />}>
                      <Layers className="size-4" />
                      <span>浏览 63 个 UI 组件文档</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* 主体内容区 */}
        <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
          {/* 1. 顶部业务状态横幅 + 快速新建弹窗 */}
          <section className="flex flex-col justify-between gap-6 rounded-2xl border bg-gradient-to-br from-primary/[0.04] via-background to-secondary/50 p-6 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="size-3 text-brand-orange" />
                  R4 空间保真度认证
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Zap className="size-3 text-brand-orange" />
                  4D 动态流实时同步
                </Badge>
                <span className="text-xs text-muted-foreground">
                  集群标识：<code className="font-mono text-foreground">{workspaceEnv}</code>
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                具身智能研发与{" "}
                <span className="text-brand-orange">3D 可信空间资产</span>{" "}
                生产调度平台
              </h1>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                统一管理多模态采集管线、VLA 动作策略训练与企业 GraphRAG 知识引擎。支持{" "}
                <span className="font-medium text-brand-orange">
                  端到端自适应策略闭环
                </span>{" "}
                监控、算力弹性扩缩容及 Agent 协同运维。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* 查看节点实时抽屉 Sheet */}
              <Sheet open={detailSheetOpen} onOpenChange={setDetailSheetOpen}>
                <SheetTrigger
                  render={
                    <Button variant="outline" className="gap-2">
                      <Terminal className="size-4 text-brand-orange" />
                      <span>节点实时遥测抽屉</span>
                    </Button>
                  }
                />
                <SheetContent side="right" className="sm:max-w-md">
                  <SheetHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{activePipeline.category}</Badge>
                      <code className="font-mono text-xs text-muted-foreground">
                        {activePipeline.code}
                      </code>
                    </div>
                    <SheetTitle className="pt-1">
                      {activePipeline.name}
                    </SheetTitle>
                    <SheetDescription>
                      部署区域：{activePipeline.region} · 算力规格：{activePipeline.gpuCluster}
                    </SheetDescription>
                  </SheetHeader>

                  <div className="flex flex-col gap-4 px-4">
                    <div className="grid grid-cols-2 gap-3 rounded-xl border bg-muted/30 p-3">
                      <div>
                        <div className="text-xs text-muted-foreground">
                          端到端 P99 时延
                        </div>
                        <div className="mt-1 font-mono text-lg font-bold text-brand-orange tabular-nums">
                          {activePipeline.latencyMs} ms
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          实时吞吐量 (QPS)
                        </div>
                        <div className="mt-1 font-mono text-lg font-bold text-brand-orange tabular-nums">
                          {activePipeline.qps.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          阶段核心产出物
                        </div>
                        <div className="mt-1 text-xs font-semibold text-brand-orange">
                          {activePipeline.deliverable}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          精度与保真指标
                        </div>
                        <div className="mt-1 font-mono text-xs font-semibold text-foreground tabular-nums">
                          {activePipeline.accuracy}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">
                          GPU 显存与算力水位
                        </span>
                        <span className="font-mono font-semibold text-brand-orange tabular-nums">
                          {activePipeline.gpuLoad}%
                        </span>
                      </div>
                      <Progress value={activePipeline.gpuLoad} />
                    </div>

                    <CodeBlock size="sm">
                      <CodeBlockHeader>
                        <CodeBlockTitle>
                          <FileCode2 className="size-3.5" />
                          SDK 远程调用示例
                        </CodeBlockTitle>
                        <CodeBlockActions>
                          <CodeBlockCopyButton value={SDK_INTEGRATION_SNIPPET} />
                        </CodeBlockActions>
                      </CodeBlockHeader>
                      <CodeBlockContent lineNumbers>
                        {SDK_INTEGRATION_SNIPPET}
                      </CodeBlockContent>
                    </CodeBlock>
                  </div>

                  <SheetFooter>
                    <SheetClose
                      render={
                        <Button variant="outline" className="w-full">
                          关闭遥测面板
                        </Button>
                      }
                    />
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* 新建 AI 管线弹窗 Dialog */}
              <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                <DialogTrigger
                  render={
                    <Button className="gap-2">
                      <Plus className="size-4" />
                      <span>发布新推理管线</span>
                    </Button>
                  }
                />
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>部署新 AI 生产管线</DialogTitle>
                    <DialogDescription>
                      配置模型服务标识、管线类别与最终交付产出物，一键挂载至上海 H800 算力集群。
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col gap-3.5 py-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="service-name">管线中文名称</Label>
                      <Input
                        id="service-name"
                        value={newServiceName}
                        onChange={(e) => setNewServiceName(e.target.value)}
                        placeholder="例如：灵巧手触觉反馈闭环控制流"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="service-code">服务代号 (Slug)</Label>
                        <Input
                          id="service-code"
                          value={newServiceCode}
                          onChange={(e) => setNewServiceCode(e.target.value)}
                          placeholder="dexterous-tactile-v1"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <Label>技术领域分类</Label>
                        <Select
                          value={newServiceCategory}
                          onValueChange={(v) =>
                            setNewServiceCategory(
                              v as Exclude<PipelineCategory, "全部">
                            )
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="具身智能 VLA">
                                具身智能 VLA
                              </SelectItem>
                              <SelectItem value="3D 空间资产">
                                3D 空间资产
                              </SelectItem>
                              <SelectItem value="知识库 RAG">
                                知识库 RAG
                              </SelectItem>
                              <SelectItem value="多模态推理">
                                多模态推理
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="service-deliverable">
                        阶段核心产出物 (Stage Deliverable)
                      </Label>
                      <Input
                        id="service-deliverable"
                        value={newServiceDeliverable}
                        onChange={(e) => setNewServiceDeliverable(e.target.value)}
                        placeholder="例如：控制策略与验证记录"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose
                      render={<Button variant="outline">取消</Button>}
                    />
                    <Button
                      onClick={handleCreatePipeline}
                      disabled={!newServiceName.trim()}
                    >
                      <Rocket className="size-4" />
                      立即部署上线
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* 2. 四大核心 KPI 实时量化指标看板（橙色黄金比例高亮数字） */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card size="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    集群实时总吞吐 (QPS)
                  </span>
                  <div className="flex size-7 items-center justify-center rounded-md bg-secondary text-brand-orange">
                    <Activity className="size-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-mono text-2xl font-bold text-brand-orange tabular-nums">
                    {totalQps.toLocaleString()}
                  </span>
                  <Badge variant="secondary" className="text-[11px]">
                    <TrendingUp className="size-3" />
                    +18.4%
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  峰值并发承载能力 15,000 req/s
                </CardDescription>
              </CardHeader>
            </Card>

            <Card size="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    端到端推理时延 (P99)
                  </span>
                  <div className="flex size-7 items-center justify-center rounded-md bg-secondary text-brand-orange">
                    <Gauge className="size-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-mono text-2xl font-bold text-brand-orange tabular-nums">
                    &lt; 11.4 ms
                  </span>
                  <Badge variant="outline" className="text-[11px]">
                    达标 SLA
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  空间点云重构精度误差{" "}
                  <span className="font-mono font-semibold text-brand-orange tabular-nums">
                    &lt; 1.5mm
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card size="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    在线生产管线 / 节点健康度
                  </span>
                  <div className="flex size-7 items-center justify-center rounded-md bg-secondary text-brand-orange">
                    <Server className="size-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-mono text-2xl font-bold text-brand-orange tabular-nums">
                    {runningCount} / {pipelines.length}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    可用率{" "}
                    <strong className="font-mono text-brand-orange tabular-nums">
                      99.98%
                    </strong>
                  </span>
                </div>
                <CardDescription className="text-xs">
                  跨上海、北京、深圳 3 大智算可用区
                </CardDescription>
              </CardHeader>
            </Card>

            <Card size="sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    累计交付可信空间资产
                  </span>
                  <div className="flex size-7 items-center justify-center rounded-md bg-secondary text-brand-orange">
                    <Database className="size-4" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-mono text-2xl font-bold text-brand-orange tabular-nums">
                    12,840
                  </span>
                  <Badge variant="secondary">R4 级母版</Badge>
                </div>
                <CardDescription className="text-xs">
                  今日新增{" "}
                  <span className="font-mono font-semibold text-brand-orange tabular-nums">
                    +342
                  </span>{" "}
                  组 4D 动态点云切片
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          {/* 告警横幅提示（当存在异常管线时展示，支持一键自愈） */}
          {alertCount > 0 && (
            <Alert className="border-brand-orange/30 bg-secondary/40">
              <AlertTriangle className="size-4 text-brand-orange" />
              <AlertTitle className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  检测到{" "}
                  <strong className="font-mono text-brand-orange tabular-nums">
                    {alertCount}
                  </strong>{" "}
                  条生产管线处于高负载告警状态（sim-physx-differentiable 显存占用 96%）
                </span>
                <Button
                  size="xs"
                  variant="secondary"
                  onClick={() => handleHealPipeline("pipe-05")}
                >
                  <RefreshCw className="size-3" />
                  一键弹性扩容修复
                </Button>
              </AlertTitle>
              <AlertDescription>
                系统已准备好 2 张备用 H800 算力节点，点击右侧按钮可在不中断推流的前提下完成热迁移。
              </AlertDescription>
            </Alert>
          )}

          {/* 3. 核心业务多视图工作区 Tabs */}
          <Tabs defaultValue="pipelines" className="gap-6">
            <div className="flex flex-col justify-between gap-4 border-b pb-3 sm:flex-row sm:items-center">
              <TabsList>
                <TabsTrigger value="pipelines">
                  <Boxes className="size-4" />
                  AI 管线与服务矩阵 ({pipelines.length})
                </TabsTrigger>
                <TabsTrigger value="copilot">
                  <Bot className="size-4" />
                  Agent 协同运维与交付流
                </TabsTrigger>
                <TabsTrigger value="governance">
                  <SlidersHorizontal className="size-4" />
                  算力调度策略与安全审计
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>值班研发团队：</span>
                <AvatarGroup>
                  <Avatar size="sm">
                    <AvatarFallback>林</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>陈</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>张</AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount>+5</AvatarGroupCount>
                </AvatarGroup>
              </div>
            </div>

            {/* ==================== 标签页 1：AI 管线与服务矩阵 ==================== */}
            <TabsContent value="pipelines" className="flex flex-col gap-6">
              {/* 筛选与搜索工具栏 */}
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      size="sm"
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground select-none">
                    <Checkbox
                      checked={onlyHealthy}
                      onCheckedChange={(v) => setOnlyHealthy(Boolean(v))}
                    />
                    <span>仅看运行中节点</span>
                  </label>

                  <div className="relative w-full sm:w-64">
                    <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-brand-orange" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="搜索管线名称、代号、产出物..."
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>

              {/* 生产管线数据表格 Card */}
              <Card>
                <CardHeader className="flex flex-col justify-between gap-2 border-b pb-4 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>在役推理管线与空间资产节点明细</CardTitle>
                    <CardDescription>
                      点击任意行的「遥测详情」可唤出右侧实时监控抽屉，所有阶段产出物均已通过橙色高亮标注
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      匹配结果：{filteredPipelines.length} 条
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>管线名称与代号</TableHead>
                        <TableHead>技术领域</TableHead>
                        <TableHead>运行状态</TableHead>
                        <TableHead>阶段核心产出物 (Output)</TableHead>
                        <TableHead className="text-right">吞吐 / 时延</TableHead>
                        <TableHead>GPU 水位</TableHead>
                        <TableHead>弹性扩缩</TableHead>
                        <TableHead className="text-right">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPipelines.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-medium text-foreground">
                                {item.name}
                              </span>
                              <span className="font-mono text-xs text-muted-foreground">
                                {item.code} · {item.region}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell>
                            <Badge variant="outline">{item.category}</Badge>
                          </TableCell>

                          <TableCell>
                            {item.status === "运行中" && (
                              <Badge>运行中</Badge>
                            )}
                            {item.status === "构建中" && (
                              <Badge variant="secondary">构建中</Badge>
                            )}
                            {item.status === "异常告警" && (
                              <Badge variant="destructive">异常告警</Badge>
                            )}
                          </TableCell>

                          <TableCell>
                            <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-brand-orange">
                              <Sparkles className="size-3" />
                              {item.deliverable}
                            </span>
                          </TableCell>

                          <TableCell className="text-right font-mono tabular-nums">
                            <div className="font-semibold text-brand-orange">
                              {item.qps.toLocaleString()} QPS
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.latencyMs} ms · {item.accuracy}
                            </div>
                          </TableCell>

                          <TableCell className="w-36">
                            <div className="flex flex-col gap-1">
                              <div className="flex justify-between font-mono text-xs tabular-nums">
                                <span className="text-muted-foreground">
                                  {item.gpuCluster.split(" ")[0]} 卡
                                </span>
                                <span className="font-semibold text-brand-orange">
                                  {item.gpuLoad}%
                                </span>
                              </div>
                              <Progress value={item.gpuLoad} />
                            </div>
                          </TableCell>

                          <TableCell>
                            <Switch
                              size="sm"
                              checked={item.autoScale}
                              onCheckedChange={() =>
                                handleToggleAutoScale(item.id)
                              }
                            />
                          </TableCell>

                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Button
                                variant="outline"
                                size="xs"
                                onClick={() => {
                                  setActivePipeline(item)
                                  setDetailSheetOpen(true)
                                }}
                              >
                                <ArrowUpRight className="size-3.5" />
                                遥测详情
                              </Button>

                              {/* 下拉快捷操作与危险删除确认 AlertDialog */}
                              <AlertDialog>
                                <AlertDialogTrigger
                                  render={
                                    <Button
                                      variant="ghost"
                                      size="icon-xs"
                                      aria-label="下线管线"
                                    >
                                      <Trash2 className="size-3.5" />
                                    </Button>
                                  }
                                />
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      确认下线并移除该生产管线？
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      您即将移除「{item.name} ({item.code})」，移除后将释放其挂载的{" "}
                                      {item.gpuCluster} 算力资源，历史空间资产快照仍会保留。
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>取消</AlertDialogCancel>
                                    <AlertDialogAction
                                      variant="destructive"
                                      onClick={() =>
                                        handleDeletePipeline(item.id)
                                      }
                                    >
                                      确认下线
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* 四阶段闭环交付架构卡片网格 */}
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  {
                    step: "STAGE 01 · 多源感知采集",
                    title: "多传感器时空同步接入",
                    metric: "120 FPS 高帧率点云",
                    output: "影像与点云原始流",
                    icon: HardDrive,
                  },
                  {
                    step: "STAGE 02 · 4D 空间重建",
                    title: "连续曲率物理几何重建",
                    metric: "精度误差 < 1.5mm",
                    output: "3D 可信空间资产",
                    icon: Boxes,
                  },
                  {
                    step: "STAGE 03 · 策略闭环训练",
                    title: "VLA 跨模态动作强化学习",
                    metric: "收敛加速 4.2×",
                    output: "控制策略与验证记录",
                    icon: Cpu,
                  },
                  {
                    step: "STAGE 04 · 边缘真机部署",
                    title: "零停机 OTA 算力下发",
                    metric: "推理时延 < 10ms",
                    output: "部署与运行记录",
                    icon: Rocket,
                  },
                ].map((stage) => {
                  const IconComp = stage.icon
                  return (
                    <Card key={stage.step} size="sm" className="justify-between">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-medium text-muted-foreground">
                            {stage.step}
                          </span>
                          <IconComp className="size-4 text-brand-orange" />
                        </div>
                        <CardTitle className="pt-1 text-sm">
                          {stage.title}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          关键指标：
                          <span className="font-mono font-semibold text-brand-orange tabular-nums">
                            {stage.metric}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-2.5 text-xs">
                        <span className="text-muted-foreground">阶段产出物：</span>
                        <span className="ml-1 font-semibold text-brand-orange">
                          {stage.output}
                        </span>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* ==================== 标签页 2：Agent 协同运维与交付流 ==================== */}
            <TabsContent value="copilot">
              <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                {/* 左侧：内置 AI 运维 Copilot 对话工作台 */}
                <Card className="flex flex-col justify-between">
                  <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-secondary text-brand-orange">
                          <Bot className="size-4" />
                        </div>
                        <div>
                          <CardTitle>YuanQee 智算运维 Copilot</CardTitle>
                          <CardDescription>
                            基于内置 Message + Bubble + Trace 组件构建的实时 Agent 诊断台
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">MCP 工具链已连接</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex max-h-[420px] flex-col gap-4 overflow-y-auto py-4">
                    {chatMessages.map((msg) => (
                      <Message
                        key={msg.id}
                        align={msg.role === "user" ? "end" : "start"}
                      >
                        <MessageAvatar
                          className={
                            msg.role === "assistant"
                              ? "bg-primary text-primary-foreground"
                              : ""
                          }
                        >
                          {msg.role === "user" ? (
                            <User className="size-4 text-brand-orange" />
                          ) : (
                            <Bot className="size-4 text-brand-orange" />
                          )}
                        </MessageAvatar>

                        <MessageContent>
                          <MessageHeader>
                            {msg.author} · {msg.time}
                          </MessageHeader>

                          {msg.traces && msg.traces.length > 0 && (
                            <Trace className="rounded-lg border bg-muted/30 px-3 py-2">
                              {msg.traces.map((t, idx) => (
                                <TraceLine key={idx} status={t.status}>
                                  <TraceIcon>
                                    <CheckCircle2 className="size-3.5 text-brand-orange" />
                                  </TraceIcon>
                                  <TraceTitle>{t.title}</TraceTitle>
                                  <TraceDescription>
                                    {t.duration}
                                  </TraceDescription>
                                </TraceLine>
                              ))}
                            </Trace>
                          )}

                          <Bubble
                            align={msg.role === "user" ? "end" : "start"}
                            variant={
                              msg.role === "user" ? "default" : "outline"
                            }
                          >
                            <BubbleContent>{msg.text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    ))}

                    {isCopilotGenerating && (
                      <Message align="start">
                        <MessageAvatar className="bg-primary text-primary-foreground">
                          <Bot className="size-4 text-brand-orange" />
                        </MessageAvatar>
                        <MessageContent>
                          <Trace className="rounded-lg border bg-muted/30 px-3 py-2">
                            <TraceLine status="running">
                              <TraceIcon>
                                <Spinner className="size-3.5" />
                              </TraceIcon>
                              <TraceTitle>
                                正在调度集群遥测 API 并执行策略分析...
                              </TraceTitle>
                              <TraceDescription>running</TraceDescription>
                            </TraceLine>
                          </Trace>
                        </MessageContent>
                      </Message>
                    )}
                  </CardContent>

                  <CardFooter className="flex-col items-stretch gap-3 border-t pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "生成今日 R4 空间资产交付报告",
                        "均衡上海 AZ1 与 AZ2 算力负载",
                        "导出 VLA 管线延迟 P99 诊断快照",
                      ].map((quickPrompt) => (
                        <Button
                          key={quickPrompt}
                          variant="secondary"
                          size="xs"
                          onClick={() => handleSendCopilotMessage(quickPrompt)}
                        >
                          <Sparkles className="size-3" />
                          {quickPrompt}
                        </Button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSendCopilotMessage()
                        }}
                        placeholder="输入运维指令或询问集群状态（回车发送）..."
                      />
                      <Button
                        onClick={() => handleSendCopilotMessage()}
                        disabled={!chatInput.trim() || isCopilotGenerating}
                      >
                        <Send className="size-4" />
                        发送指令
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* 右侧：SDK 代码集成与常见问题折叠面板 */}
                <div className="flex flex-col gap-6">
                  <CodeBlock>
                    <CodeBlockHeader>
                      <CodeBlockTitle>
                        <Terminal className="size-3.5" />
                        生产管线 TypeScript SDK 接入示例
                      </CodeBlockTitle>
                      <CodeBlockActions>
                        <CodeBlockCopyButton value={SDK_INTEGRATION_SNIPPET} />
                      </CodeBlockActions>
                    </CodeBlockHeader>
                    <CodeBlockContent lineNumbers>
                      {SDK_INTEGRATION_SNIPPET}
                    </CodeBlockContent>
                  </CodeBlock>

                  <Card>
                    <CardHeader>
                      <CardTitle>架构规范与运维 FAQ (Accordion)</CardTitle>
                      <CardDescription>
                        团队成员快速了解本控制台与 UI 组件库的设计准则
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion className="w-full">
                        <AccordionItem value="faq-1">
                          <AccordionTrigger>
                            为什么关键指标与阶段产出物使用橙色 (#EA5B18)？
                          </AccordionTrigger>
                          <AccordionContent>
                            遵循企业 60-30-10 黄金比例色彩规范：60% 中性背景与卡片、30% 科技深蓝主色（<code className="font-mono">#0E3183</code>）、10% 活力橙（<code className="font-mono">#EA5B18</code>）专门用于高亮核心量化指标、组件图标与阶段交付产出物，帮助用户在复杂控制台中第一眼捕捉核心价值。
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                          <AccordionTrigger>
                            如何在新业务页面中复用本页面的 UI 组件？
                          </AccordionTrigger>
                          <AccordionContent>
                            点击右上角「组件库画廊 (63)」进入 <code className="font-mono">/components</code> 页面，即可按分类检索全部 63 个预装组件并一键复制 <code className="font-mono">import</code> 代码。
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* ==================== 标签页 3：算力调度策略与安全审计 ==================== */}
            <TabsContent value="governance">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>H800 算力池弹性伸缩阈值配置</CardTitle>
                    <CardDescription>
                      通过 Slider 与 Switch 实时调整集群自动扩容水位与时延预算
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          GPU 显存自动扩容触发水位
                        </span>
                        <span className="font-mono font-bold text-brand-orange tabular-nums">
                          {gpuThreshold[0]}%
                        </span>
                      </div>
                      <Slider
                        value={gpuThreshold}
                        onValueChange={(v) =>
                          setGpuThreshold(Array.isArray(v) ? [...v] : [v])
                        }
                        min={50}
                        max={95}
                      />
                      <span className="text-xs text-muted-foreground">
                        当单节点持续 30 秒超过该阈值时，自动从冷备池挂载算力卡。
                      </span>
                    </div>

                    <Separator />

                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          VLA 控制流最大容忍时延预算 (SLA)
                        </span>
                        <span className="font-mono font-bold text-brand-orange tabular-nums">
                          &lt; {latencyBudget[0]} ms
                        </span>
                      </div>
                      <Slider
                        value={latencyBudget}
                        onValueChange={(v) =>
                          setLatencyBudget(Array.isArray(v) ? [...v] : [v])
                        }
                        min={5}
                        max={50}
                      />
                      <span className="text-xs text-muted-foreground">
                        超出该时延预算的请求将自动降级至边缘轻量化蒸馏模型。
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>企业级高可用与安全合规策略</CardTitle>
                    <CardDescription>
                      跨可用区容灾、Token 审计与零停机发布开关
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between rounded-xl border p-3.5">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 size-5 text-brand-orange" />
                        <div>
                          <div className="text-sm font-medium">
                            跨可用区秒级自动故障转移 (Auto-Failover)
                          </div>
                          <div className="text-xs text-muted-foreground">
                            主可用区网络抖动时，150ms 内无感切换至同城备份集群
                          </div>
                        </div>
                      </div>
                      <Switch
                        checked={autoFailover}
                        onCheckedChange={setAutoFailover}
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-3.5">
                      <div className="flex items-start gap-3">
                        <KeyRound className="mt-0.5 size-5 text-brand-orange" />
                        <div>
                          <div className="text-sm font-medium">
                            空间资产全链路哈希防篡改审计
                          </div>
                          <div className="text-xs text-muted-foreground">
                            对所有导出的 3D 可信空间资产自动写入数字签名水印
                          </div>
                        </div>
                      </div>
                      <Switch
                        checked={strictTokenAudit}
                        onCheckedChange={setStrictTokenAudit}
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-3.5">
                      <div className="flex items-start gap-3">
                        <GitBranch className="mt-0.5 size-5 text-brand-orange" />
                        <div>
                          <div className="text-sm font-medium">
                            蓝绿金丝雀零停机滚动发布
                          </div>
                          <div className="text-xs text-muted-foreground">
                            新模型上线默认先切流 10% 灰度验证，达标后全量放行
                          </div>
                        </div>
                      </div>
                      <Switch
                        checked={zeroDowntimeDeploy}
                        onCheckedChange={setZeroDowntimeDeploy}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        {/* 底部企业级版权与状态栏 */}
        <footer className="mt-12 border-t bg-muted/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-brand-orange" />
              <span>
                © 2026 元企科技 YuanQi Tech · 企业级 Next.js 16 + shadcn/ui (base-nova) 综合业务模板
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>品牌主色：#0E3183 (科技蓝)</span>
              <span>辅助色与组件图标：#EA5B18 (活力橙)</span>
              <Link
                href="/components"
                className="font-medium text-brand-orange hover:underline"
              >
                浏览全部 63 个组件文档 →
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
