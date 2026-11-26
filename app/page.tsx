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
  Command as CommandIcon,
  Copy,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  HardDrive,
  KeyRound,
  Layers,
  Play,
  Plus,
  RefreshCw,
  Rocket,
  RotateCcw,
  Search,
  Send,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Trash2,
  User,
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
import { ButtonGroup } from "@/components/ui/button-group"
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
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Message,
  MessageAvatar,
  MessageContent,
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
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
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

type WorkspaceEnv = "prod-cn-east" | "staging-sh" | "dev-sandbox"
type PipelineStatus = "运行中" | "构建中" | "异常告警"
type PipelineCategory =
  | "全部"
  | "具身智能 VLA"
  | "3D 空间资产"
  | "知识库 RAG"
  | "多模态推理"

interface PipelineNodeStep {
  id: string
  stage: string
  name: string
  latency: string
  output: string
  fps: string
  description: string
}

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
  ownerRole: string
  updatedAt: string
  autoScale: boolean
  steps: PipelineNodeStep[]
}

interface ChatMessageItem {
  id: string
  role: "user" | "assistant"
  author: string
  time: string
  text: string
  traces?: {
    title: string
    duration: string
    status?: "running" | "pending" | "error"
  }[]
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
    ownerRole: "具身算法首席架构师",
    updatedAt: "12 分钟前",
    autoScale: true,
    steps: [
      {
        id: "s1",
        stage: "INPUT",
        name: "双目 RGB-D 传感器同步流",
        latency: "1.2 ms",
        output: "影像与点云原始流",
        fps: "120 Hz",
        description: "采集腕部与头戴双视角深度帧并完成硬件级时间戳对齐",
      },
      {
        id: "s2",
        stage: "WORLD MODEL",
        name: "4D 高斯空间编码器",
        latency: "3.1 ms",
        output: "3D 可信空间资产",
        fps: "90 Hz",
        description: "提取工作台碰撞体素与物体 6DoF 位姿特征向量",
      },
      {
        id: "s3",
        stage: "POLICY",
        name: "VLA Diffusion 动作解码器",
        latency: "4.1 ms",
        output: "控制策略与验证记录",
        fps: "500 Hz",
        description: "输出 14 自由度机械臂关节力矩轨迹与夹爪闭合阈值",
      },
    ],
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
    ownerRole: "三维视觉研发负责人",
    updatedAt: "35 分钟前",
    autoScale: true,
    steps: [
      {
        id: "s1",
        stage: "CAPTURE",
        name: "多机位阵列视频流解复用",
        latency: "2.4 ms",
        output: "多视角标定帧序列",
        fps: "60 Hz",
        description: "支持 16 路 4K 工业相机硬同步解码与畸变校正",
      },
      {
        id: "s2",
        stage: "RECON",
        name: "连续曲率时空高斯溅射",
        latency: "8.6 ms",
        output: "4D 动态点云切片",
        fps: "60 Hz",
        description: "亚毫米级几何表面重建与动态光照反射参数拟合",
      },
      {
        id: "s3",
        stage: "EXPORT",
        name: "USDZ / SimReady 资产封装",
        latency: "3.2 ms",
        output: "3D 可信空间资产",
        fps: "60 Hz",
        description: "自动绑定物理摩擦系数与碰撞网格，直通 Isaac 仿真器",
      },
    ],
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
    ownerRole: "知识工程高级专家",
    updatedAt: "1 小时前",
    autoScale: true,
    steps: [
      {
        id: "s1",
        stage: "PARSER",
        name: "多模态文档版面结构化解析",
        latency: "2.1 ms",
        output: "语义切片与公式 AST",
        fps: "240 docs/s",
        description: "精准提取 PDF 架构图、跨页表格与代码块上下文",
      },
      {
        id: "s2",
        stage: "GRAPH",
        name: "实体关系知识图谱混合检索",
        latency: "5.4 ms",
        output: "多跳子图与向量召回",
        fps: "3200 qps",
        description: "结合稠密向量与 Neo4j 拓扑图谱执行二级重排序",
      },
      {
        id: "s3",
        stage: "SYNTH",
        name: "事实溯源角标校验器",
        latency: "4.3 ms",
        output: "高置信度检索图谱",
        fps: "1800 tok/s",
        description: "强制绑定原文段落引用哈希，消除幻觉输出",
      },
    ],
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
    gpuLoad: 84,
    deliverable: "难例数据集与评测报告",
    owner: "王工",
    ownerRole: "边缘计算架构师",
    updatedAt: "刚刚",
    autoScale: false,
    steps: [
      {
        id: "s1",
        stage: "STREAM",
        name: "产线高帧率工业相机接入",
        latency: "1.8 ms",
        output: "RAW 缺陷候选帧",
        fps: "200 Hz",
        description: "边缘端实时过滤正常样本，仅上传高熵疑似缺陷区域",
      },
      {
        id: "s2",
        stage: "MINING",
        name: "不确定性主动学习聚类",
        latency: "12.4 ms",
        output: "长尾难例特征簇",
        fps: "45 Hz",
        description: "自动识别模型置信度边界样本并触发增量微调队列",
      },
      {
        id: "s3",
        stage: "REPORT",
        name: "回归基准集自动对比",
        latency: "5.3 ms",
        output: "难例数据集与评测报告",
        fps: "30 Hz",
        description: "生成版本间召回率对比矩阵与 Badcase 可视化面板",
      },
    ],
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
    ownerRole: "物理仿真引擎专家",
    updatedAt: "5 分钟前",
    autoScale: true,
    steps: [
      {
        id: "s1",
        stage: "MESH",
        name: "高密度四面体网格体素化",
        latency: "14.2 ms",
        output: "刚体与柔性体拓扑",
        fps: "24 Hz",
        description: "当前批次包含超 400 万面片复杂装配体，显存压力较高",
      },
      {
        id: "s2",
        stage: "SOLVER",
        name: "XPBD 可微接触力学求解器",
        latency: "21.8 ms",
        output: "接触力梯度张量",
        fps: "24 Hz",
        description: "计算多指灵巧手抓取非刚性物体的形变反作用力",
      },
      {
        id: "s3",
        stage: "TRACE",
        name: "强化学习奖励轨迹落盘",
        latency: "6.0 ms",
        output: "物理仿真轨迹资产流",
        fps: "24 Hz",
        description: "打包写入分布式高速缓存供 PPO 策略网络消费",
      },
    ],
  },
]

const CATEGORIES: PipelineCategory[] = [
  "全部",
  "具身智能 VLA",
  "3D 空间资产",
  "知识库 RAG",
  "多模态推理",
]

export default function EnterpriseWorkbenchPage() {
  // 全局集群与命令面板状态
  const [workspaceEnv, setWorkspaceEnv] =
    React.useState<WorkspaceEnv>("prod-cn-east")
  const [commandOpen, setCommandOpen] = React.useState(false)
  const [pipelines, setPipelines] =
    React.useState<PipelineService[]>(INITIAL_PIPELINES)
  const [selectedCategory, setSelectedCategory] =
    React.useState<PipelineCategory>("全部")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [onlyHealthy, setOnlyHealthy] = React.useState(false)

  // 当前在交互拓扑画布中选中的管线 & 算子节点
  const [selectedPipelineId, setSelectedPipelineId] =
    React.useState<string>("pipe-01")
  const [selectedStepIndex, setSelectedStepIndex] = React.useState<number>(1)
  const [detailSheetOpen, setDetailSheetOpen] = React.useState(false)

  // 实时仿真推演动画与交互调参状态
  const [isSimulating, setIsSimulating] = React.useState(false)
  const [simProgress, setSimProgress] = React.useState(100)
  const [precisionGain, setPrecisionGain] = React.useState<number[]>([92])
  const [batchConcurrency, setBatchConcurrency] = React.useState<number[]>([64])
  const [liveLogLines, setLiveLogLines] = React.useState<string[]>([
    "[11:24:02.104] INFO  vla-bimanual-v4.2 | 已挂载 8×H800 NVLink 拓扑，显存池就绪",
    "[11:24:03.418] INFO  spatial-4dgs-recon | 4D 高斯点云帧同步完成，误差 1.12mm (< 1.5mm SLA)",
    "[11:24:05.890] WARN  sim-physx-differentiable | 节点 AZ1-GPU-04 显存水位达 96%，等待弹性分流",
  ])

  // 新建部署弹窗 & OTP 安全授权弹窗状态
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [otpDialogOpen, setOtpDialogOpen] = React.useState(false)
  const [otpValue, setOtpValue] = React.useState("")
  const [newServiceName, setNewServiceName] = React.useState("")
  const [newServiceCode, setNewServiceCode] = React.useState("")
  const [newServiceCategory, setNewServiceCategory] =
    React.useState<Exclude<PipelineCategory, "全部">>("具身智能 VLA")
  const [newServiceDeliverable, setNewServiceDeliverable] =
    React.useState("端到端自适应策略闭环")

  // 右侧 AI Copilot 对话与策略状态
  const [chatInput, setChatInput] = React.useState("")
  const [isCopilotGenerating, setIsCopilotGenerating] = React.useState(false)
  const [chatMessages, setChatMessages] = React.useState<ChatMessageItem[]>([
    {
      id: "msg-1",
      role: "user",
      author: "林工",
      time: "11:20",
      text: "排查一下为什么 sim-physx-differentiable 节点延迟飙升到了 42ms？",
    },
    {
      id: "msg-2",
      role: "assistant",
      author: "YuanQee Copilot",
      time: "11:20",
      text: "已定位根因：该节点正在求解 400 万面片的柔性体接触力学梯度，单卡显存达 96%。您可以直接点击上方横幅的「一键弹性扩容修复」，或在左侧画布中拖动并发滑块动态降载。",
      traces: [
        { title: "读取 AZ1 H800 NVLink 显存火焰图", duration: "0.28s" },
        { title: "生成热迁移分流预案 (+2 × H800)", duration: "0.41s" },
      ],
    },
  ])

  // 监听全局 Ctrl+K / Cmd+K 唤起 CommandDialog
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const activePipeline = React.useMemo(
    () =>
      pipelines.find((p) => p.id === selectedPipelineId) ??
      pipelines[0] ??
      INITIAL_PIPELINES[0],
    [pipelines, selectedPipelineId]
  )

  const activeStep =
    activePipeline.steps[selectedStepIndex] ?? activePipeline.steps[0]

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

  // 根据右侧滑块实时联动计算当前选中管线的动态时延与吞吐
  const simulatedLatency = React.useMemo(() => {
    const factor = 1 + (precisionGain[0] - 85) * 0.012 - (batchConcurrency[0] - 50) * 0.004
    return Math.max(4.2, +(activePipeline.latencyMs * factor).toFixed(1))
  }, [activePipeline.latencyMs, precisionGain, batchConcurrency])

  const simulatedQps = React.useMemo(() => {
    const factor = 1 + (batchConcurrency[0] - 50) * 0.015
    return Math.round(activePipeline.qps * factor)
  }, [activePipeline.qps, batchConcurrency])

  const totalQps = React.useMemo(
    () => pipelines.reduce((sum, item) => sum + item.qps, 0),
    [pipelines]
  )
  const alertCount = React.useMemo(
    () => pipelines.filter((item) => item.status === "异常告警").length,
    [pipelines]
  )

  function appendLog(line: string) {
    const now = new Date()
    const stamp = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0")
    setLiveLogLines((prev) => [`[${stamp}] ${line}`, ...prev.slice(0, 7)])
  }

  function handleRunBenchmark() {
    if (isSimulating) return
    setIsSimulating(true)
    setSimProgress(18)
    appendLog(`EXEC  ${activePipeline.code} | 启动端到端闭环压测 (Batch=${batchConcurrency[0]}, Gain=${precisionGain[0]}%)`)

    setTimeout(() => setSimProgress(56), 220)
    setTimeout(() => setSimProgress(88), 460)
    setTimeout(() => {
      setSimProgress(100)
      setIsSimulating(false)
      appendLog(
        `DONE  ${activePipeline.code} | 产出物「${activePipeline.deliverable}」校验通过，实测 P99=${simulatedLatency}ms, 吞吐=${simulatedQps} QPS`
      )
    }, 750)
  }

  function handleHealPipeline(id: string) {
    setPipelines((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "运行中",
              latencyMs: 11.6,
              gpuLoad: 62,
              updatedAt: "刚刚热迁移扩容",
            }
          : item
      )
    )
    appendLog("HEAL  sim-physx-differentiable | 已挂载 2 张备用 H800，显存水位回落至 62%，延迟恢复 11.6ms")
  }

  function handleToggleAutoScale(id: string) {
    setPipelines((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        const next = !item.autoScale
        appendLog(
          `CONF  ${item.code} | 自动弹性扩缩容已切换为 ${next ? "ENABLED" : "DISABLED"}`
        )
        return { ...item, autoScale: next }
      })
    )
  }

  function handleDuplicatePipeline(item: PipelineService) {
    const copy: PipelineService = {
      ...item,
      id: `pipe-${Date.now()}`,
      name: `${item.name} (副本)`,
      code: `${item.code}-replica`,
      updatedAt: "刚刚克隆",
    }
    setPipelines((prev) => [copy, ...prev])
    appendLog(`CLONE ${copy.code} | 已从母版克隆生产管线节点`)
  }

  function handleDeletePipeline(id: string) {
    const target = pipelines.find((p) => p.id === id)
    setPipelines((prev) => prev.filter((item) => item.id !== id))
    if (target) {
      appendLog(`DROP  ${target.code} | 管线已安全下线并释放算力资源`)
    }
  }

  function handleCreatePipeline() {
    if (!newServiceName.trim()) return
    const created: PipelineService = {
      id: `pipe-${Date.now()}`,
      name: newServiceName.trim(),
      code: newServiceCode.trim() || `vla-node-v${pipelines.length + 1}.0`,
      category: newServiceCategory,
      status: "运行中",
      region: "上海智算中心 · AZ1",
      gpuCluster: "4 × H800 (NVLink)",
      qps: 1120,
      latencyMs: 9.2,
      accuracy: "99.3%",
      gpuLoad: 54,
      deliverable: newServiceDeliverable.trim() || "3D 可信空间资产",
      owner: "林工",
      ownerRole: "具身算法首席架构师",
      updatedAt: "刚刚发布",
      autoScale: true,
      steps: INITIAL_PIPELINES[0].steps,
    }
    setPipelines((prev) => [created, ...prev])
    setSelectedPipelineId(created.id)
    setNewServiceName("")
    setNewServiceCode("")
    setCreateDialogOpen(false)
    appendLog(`DEPLOY ${created.code} | 新管线已上线并输出「${created.deliverable}」`)
  }

  function handleSendCopilotMessage(promptText?: string) {
    const content = (promptText ?? chatInput).trim()
    if (!content || isCopilotGenerating) return
    const userMsg: ChatMessageItem = {
      id: `u-${Date.now()}`,
      role: "user",
      author: "林工",
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
        author: "YuanQee Copilot",
        time: "刚刚",
        text: `已针对「${activePipeline.name}」执行指令：当前实测 P99 时延 ${simulatedLatency}ms，吞吐量 ${simulatedQps.toLocaleString()} QPS，阶段交付物「${activePipeline.deliverable}」已写入高可用存储池。`,
        traces: [
          { title: `连接 ${activePipeline.code} 遥测信道`, duration: "0.19s" },
          { title: "校验产出物哈希签名与 SLA 阈值", duration: "0.34s" },
        ],
      }
      setChatMessages((prev) => [...prev, assistantMsg])
      setIsCopilotGenerating(false)
    }, 550)
  }

  const dynamicSdkCode = `import { YuanQeeClient } from "@yuanqee/enterprise-sdk"

const client = new YuanQeeClient({
  region: "${workspaceEnv}",
  pipeline: "${activePipeline.code}",
})

// 实时调用算子：${activeStep.name}
const output = await client.runStage("${activeStep.stage}", {
  concurrency: ${batchConcurrency[0]},
  precisionGain: ${precisionGain[0]} / 100,
  expectedDeliverable: "${activePipeline.deliverable}",
})`

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* ==================== 全局 ⌘K 命令面板 (CommandDialog) ==================== */}
        <CommandDialog
          open={commandOpen}
          onOpenChange={setCommandOpen}
          title="全局快捷命令与组件跳转"
          description="输入管线名称、运维动作或跳转到组件画廊"
        >
          <Command>
            <CommandInput placeholder="输入命令、管线代号或搜索 63 个 UI 组件..." />
            <CommandList>
              <CommandEmpty>未找到匹配的指令或节点</CommandEmpty>
              <CommandGroup heading="高频生产运维指令">
                <CommandItem
                  onSelect={() => {
                    setCommandOpen(false)
                    handleRunBenchmark()
                  }}
                >
                  <Play className="size-4 text-brand-orange" />
                  <span>对当前选中管线执行端到端压测推演</span>
                  <CommandShortcut>⌘R</CommandShortcut>
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setCommandOpen(false)
                    setCreateDialogOpen(true)
                  }}
                >
                  <Plus className="size-4 text-brand-orange" />
                  <span>发布新 AI 推理与空间资产管线</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setCommandOpen(false)
                    setOtpDialogOpen(true)
                  }}
                >
                  <KeyRound className="size-4 text-brand-orange" />
                  <span>打开双因素 OTP 生产算力解锁验证</span>
                  <CommandShortcut>⌘U</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="快速切换在役管线拓扑">
                {pipelines.map((p) => (
                  <CommandItem
                    key={p.id}
                    onSelect={() => {
                      setSelectedPipelineId(p.id)
                      setSelectedStepIndex(0)
                      setCommandOpen(false)
                      appendLog(`FOCUS ${p.code} | 已通过 ⌘K 切换画布焦点至「${p.name}」`)
                    }}
                  >
                    <Cpu className="size-4 text-brand-orange" />
                    <span>{p.name}</span>
                    <CommandShortcut>{p.code}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>

        {/* ==================== 顶部紧凑工业级工具栏 ==================== */}
        <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-2.5">
            {/* 左侧：品牌标识 + 面包屑 + 实时集群脉搏 */}
            <div className="flex items-center gap-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                  <Cpu className="size-4 text-brand-orange" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold tracking-tight">
                    YuanQee Studio
                  </span>
                  <Badge variant="secondary" className="font-mono text-[11px]">
                    v4.2
                  </Badge>
                </div>
              </div>

              <Separator orientation="vertical" className="hidden h-4 md:block" />

              <Breadcrumb className="hidden md:block">
                <BreadcrumbList className="text-xs">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">智算拓扑台</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-mono text-xs">
                      {activePipeline.code}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* 中部：⌘K 全局命令唤起器 (消除传统营销首屏，像 Linear / Raycast 一样直接操作) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCommandOpen(true)}
              className="hidden w-72 justify-between text-xs text-muted-foreground lg:flex"
            >
              <span className="flex items-center gap-2">
                <Search className="size-3.5 text-brand-orange" />
                <span>搜索管线、执行压测或跳转命令...</span>
              </span>
              <span className="flex items-center gap-0.5">
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </span>
            </Button>

            {/* 右侧：主题切换 + 环境切换 + OTP 授权 + 组件画廊 + 用户 */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <div className="hidden sm:block">
                <Select
                  value={workspaceEnv}
                  onValueChange={(v) => {
                    setWorkspaceEnv(v as WorkspaceEnv)
                    appendLog(`ENV   切换目标集群环境至 ${v}`)
                  }}
                >
                  <SelectTrigger size="sm" className="w-40 text-xs">
                    <Globe className="size-3.5 text-brand-orange" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="prod-cn-east">
                        上海生产集群 AZ1
                      </SelectItem>
                      <SelectItem value="staging-sh">
                        预发布仿真集群
                      </SelectItem>
                      <SelectItem value="dev-sandbox">
                        算法研发沙箱
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* 双因素安全验证弹窗 (展示 InputOTP 组件真实交互) */}
              <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
                <DialogTrigger
                  render={
                    <Button variant="outline" size="sm" className="hidden xl:inline-flex">
                      <KeyRound className="size-3.5 text-brand-orange" />
                      <span>算力解锁</span>
                    </Button>
                  }
                />
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>生产集群高危算力授权 (InputOTP)</DialogTitle>
                    <DialogDescription>
                      请输入 6 位动态安全令牌以解锁 H800 跨区特权调度（随便输入 6 位数字即可体验交互）：
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center gap-3 py-3">
                    <InputOTP
                      maxLength={6}
                      value={otpValue}
                      onChange={setOtpValue}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <span className="font-mono text-xs text-muted-foreground">
                      {otpValue.length === 6
                        ? "✓ 令牌格式校验通过，可提交授权"
                        : `已输入 ${otpValue.length} / 6 位安全码`}
                    </span>
                  </div>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline">取消</Button>} />
                    <Button
                      disabled={otpValue.length < 6}
                      onClick={() => {
                        setOtpDialogOpen(false)
                        setOtpValue("")
                        appendLog("AUTH  已通过 6 位 OTP 双因素认证解锁 H800 特权算力池")
                      }}
                    >
                      确认授权
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5"
                nativeButton={false}
                render={<Link href="/components" />}
              >
                <Layers className="size-3.5 text-brand-orange" />
                <span>组件库画廊 (63)</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" size="sm" className="gap-1.5 pl-1.5">
                      <Avatar size="sm" className="size-5">
                        <AvatarFallback className="text-[10px]">林</AvatarFallback>
                      </Avatar>
                      <span className="hidden text-xs md:inline">林工</span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>工作台快捷入口</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setCommandOpen(true)}>
                      <CommandIcon className="size-4" />
                      <span>全局命令面板</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCreateDialogOpen(true)}>
                      <Plus className="size-4" />
                      <span>发布新推理管线</span>
                      <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOtpDialogOpen(true)}>
                      <KeyRound className="size-4" />
                      <span>OTP 算力特权认证</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem render={<Link href="/components" />}>
                      <Layers className="size-4" />
                      <span>查看全部 63 个组件</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* 次级紧凑遥测状态条 (替代呆板的 4 张等大 KPI 卡片，真正像专业 IDE/控制台) */}
          <div className="border-t bg-muted/35">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-2 text-xs">
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">实时总吞吐</span>
                  <span className="font-mono text-sm font-bold text-brand-orange tabular-nums">
                    {totalQps.toLocaleString()} QPS
                  </span>
                </div>
                <Separator orientation="vertical" className="h-3.5" />
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">当前管线实测时延</span>
                  <span className="font-mono text-sm font-bold text-brand-orange tabular-nums">
                    {simulatedLatency} ms
                  </span>
                </div>
                <Separator orientation="vertical" className="h-3.5" />
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">空间重建精度</span>
                  <span className="font-mono text-sm font-bold text-brand-orange tabular-nums">
                    &lt; 1.5 mm (R4)
                  </span>
                </div>
                <Separator orientation="vertical" className="hidden h-3.5 sm:block" />
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="text-muted-foreground">阶段核心产出物</span>
                  <Badge variant="secondary" className="font-medium">
                    <Sparkles className="size-3" />
                    {activePipeline.deliverable}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {alertCount > 0 ? (
                  <button
                    type="button"
                    onClick={() => handleHealPipeline("pipe-05")}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-brand-orange transition-opacity hover:opacity-85"
                  >
                    <AlertTriangle className="size-3.5" />
                    <span>1 个节点高负载 (96%) · 点击一键热迁移修复</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-orange">
                    <CheckCircle2 className="size-3.5" />
                    全部生产节点健康运行中
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ==================== 主工作台区域 ==================== */}
        <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
          {/* 第一部分：可拖拽分栏交互拓扑与实时调参工作台 (ResizablePanelGroup + ContextMenu) */}
          <section className="flex flex-col gap-3">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-semibold tracking-tight">
                  交互式管线拓扑与算子调参工作台
                </h1>
                <Badge variant="outline" className="gap-1 text-xs">
                  <Zap className="size-3 text-brand-orange" />
                  可拖拽分栏 · 右键节点菜单 · 滑块实时联动
                </Badge>
              </div>

              {/* 按钮组 ButtonGroup + 新建管线 Dialog */}
              <div className="flex flex-wrap items-center gap-2">
                <ButtonGroup>
                  <Button
                    size="sm"
                    onClick={handleRunBenchmark}
                    disabled={isSimulating}
                  >
                    {isSimulating ? (
                      <>
                        <Spinner className="size-3.5 text-primary-foreground" />
                        <span>推演压测中 ({simProgress}%)</span>
                      </>
                    ) : (
                      <>
                        <Play className="size-3.5" />
                        <span>运行闭环推演</span>
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setPrecisionGain([92])
                      setBatchConcurrency([64])
                      appendLog(`RESET ${activePipeline.code} | 已重置算子参数至默认基准值`)
                    }}
                  >
                    <RotateCcw className="size-3.5" />
                    <span>重置参数</span>
                  </Button>
                </ButtonGroup>

                <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                  <DialogTrigger
                    render={
                      <Button variant="secondary" size="sm">
                        <Plus className="size-3.5" />
                        <span>部署新管线</span>
                      </Button>
                    }
                  />
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>部署新 AI 生产管线</DialogTitle>
                      <DialogDescription>
                        配置模型服务标识与阶段交付产出物，挂载至上海 H800 算力集群。
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
                          onChange={(e) =>
                            setNewServiceDeliverable(e.target.value)
                          }
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
                        立即上线
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* 可拖拽双栏工作台 (ResizablePanelGroup)：左侧交互式节点画布 + 右侧实时检查器 */}
            <div className="overflow-hidden rounded-xl border bg-card shadow-xs">
              <ResizablePanelGroup orientation="horizontal" className="min-h-[380px]">
                {/* 左栏：可视化 DAG 节点拓扑画布 (支持点击选中算子、右键 ContextMenu) */}
                <ResizablePanel defaultSize={62} minSize={40}>
                  <div className="flex h-full flex-col justify-between bg-[radial-gradient(rgba(14,49,131,0.08)_1px,transparent_1px)] [background-size:16px_16px] p-5 dark:bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]">
                    {/* 画布顶栏：快速切换当前检视的管线 */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {pipelines.map((p) => {
                          const isCurrent = p.id === activePipeline.id
                          return (
                            <Button
                              key={p.id}
                              size="xs"
                              variant={isCurrent ? "default" : "outline"}
                              onClick={() => {
                                setSelectedPipelineId(p.id)
                                setSelectedStepIndex(1)
                              }}
                            >
                              <span>{p.name.slice(0, 10)}</span>
                            </Button>
                          )
                        })}
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        提示：点击下方算子节点切换上下文，或对节点<strong>点击鼠标右键</strong>
                      </span>
                    </div>

                    {/* 画布中央：三阶段有向图算子节点链 (支持 ContextMenu 右键操作) */}
                    <div className="my-6 grid gap-3 md:grid-cols-3">
                      {activePipeline.steps.map((step, idx) => {
                        const isSelected = idx === selectedStepIndex
                        return (
                          <ContextMenu key={step.id}>
                            <ContextMenuTrigger>
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedStepIndex(idx)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    setSelectedStepIndex(idx)
                                  }
                                }}
                                className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-3.5 text-left transition-all duration-150 select-none ${
                                  isSelected
                                    ? "border-brand-orange bg-background shadow-[0_4px_16px_rgba(234,91,24,0.12)] ring-2 ring-brand-orange/30"
                                    : "border-border bg-background/90 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-sm"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <Badge
                                    variant={isSelected ? "secondary" : "outline"}
                                    className="font-mono text-[10px]"
                                  >
                                    0{idx + 1} · {step.stage}
                                  </Badge>
                                  <span className="font-mono text-xs font-semibold text-brand-orange tabular-nums">
                                    {step.latency}
                                  </span>
                                </div>

                                <div className="my-2.5">
                                  <div className="text-sm font-semibold text-foreground">
                                    {step.name}
                                  </div>
                                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                    {step.description}
                                  </p>
                                </div>

                                <div className="flex items-center justify-between border-t pt-2 text-[11px]">
                                  <span className="font-medium text-brand-orange">
                                    → {step.output}
                                  </span>
                                  <span className="font-mono text-muted-foreground tabular-nums">
                                    {step.fps}
                                  </span>
                                </div>
                              </div>
                            </ContextMenuTrigger>

                            <ContextMenuContent className="w-48">
                              <ContextMenuItem
                                onClick={() => {
                                  setSelectedStepIndex(idx)
                                  handleRunBenchmark()
                                }}
                              >
                                <Play className="size-4 text-brand-orange" />
                                <span>单步重放该算子</span>
                                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                              </ContextMenuItem>
                              <ContextMenuItem
                                onClick={() => {
                                  navigator.clipboard?.writeText(dynamicSdkCode)
                                  appendLog(`COPY  已复制算子「${step.name}」的 SDK 调用代码`)
                                }}
                              >
                                <Copy className="size-4 text-brand-orange" />
                                <span>复制算子 SDK 代码</span>
                                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                              </ContextMenuItem>
                              <ContextMenuSeparator />
                              <ContextMenuItem
                                onClick={() => setDetailSheetOpen(true)}
                              >
                                <Terminal className="size-4 text-brand-orange" />
                                <span>在侧边抽屉打开遥测</span>
                              </ContextMenuItem>
                            </ContextMenuContent>
                          </ContextMenu>
                        )
                      })}
                    </div>

                    {/* 画布底栏：实时推演进度条与实时标准输出日志流 */}
                    <div className="flex flex-col gap-2 rounded-lg border bg-background/95 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Terminal className="size-3.5 text-brand-orange" />
                          <span>实时遥测事件流 (Live Telemetry Stream)</span>
                        </span>
                        <span className="font-mono text-[11px] text-brand-orange tabular-nums">
                          推演完成度 {simProgress}%
                        </span>
                      </div>
                      <Progress value={simProgress} />
                      <div className="mt-1 flex max-h-16 flex-col gap-0.5 overflow-y-auto font-mono text-[11px] text-muted-foreground">
                        {liveLogLines.slice(0, 3).map((line, i) => (
                          <div key={i} className="truncate">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ResizablePanel>

                <ResizableHandle withHandle />

                {/* 右栏：选中算子实时参数调优器与动态代码生成器 */}
                <ResizablePanel defaultSize={38} minSize={28}>
                  <div className="flex h-full flex-col justify-between gap-4 p-5">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-2 border-b pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">{activeStep.stage}</Badge>
                            <span className="font-mono text-xs text-muted-foreground">
                              {activePipeline.gpuCluster}
                            </span>
                          </div>
                          <h2 className="mt-1 text-base font-semibold">
                            {activeStep.name}
                          </h2>
                        </div>
                        <Tooltip>
                          <TooltipTrigger
                            render={
                              <Button
                                variant="outline"
                                size="icon-xs"
                                onClick={() => setDetailSheetOpen(true)}
                              >
                                <ArrowUpRight className="size-3.5" />
                              </Button>
                            }
                          />
                          <TooltipContent>打开完整遥测抽屉 (Sheet)</TooltipContent>
                        </Tooltip>
                      </div>

                      {/* 两个实时联动滑块：拖动立即改变顶部时延、QPS 与下方代码块 */}
                      <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">
                              空间几何置信增益 (Precision Gain)
                            </span>
                            <span className="font-mono font-semibold text-brand-orange tabular-nums">
                              {precisionGain[0]}%
                            </span>
                          </div>
                          <Slider
                            value={precisionGain}
                            onValueChange={(v) =>
                              setPrecisionGain(Array.isArray(v) ? [...v] : [v])
                            }
                            min={60}
                            max={100}
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">
                              算子微批并发度 (Batch Concurrency)
                            </span>
                            <span className="font-mono font-semibold text-brand-orange tabular-nums">
                              {batchConcurrency[0]} 线程 → 预估{" "}
                              {simulatedQps.toLocaleString()} QPS
                            </span>
                          </div>
                          <Slider
                            value={batchConcurrency}
                            onValueChange={(v) =>
                              setBatchConcurrency(
                                Array.isArray(v) ? [...v] : [v]
                              )
                            }
                            min={16}
                            max={128}
                          />
                        </div>
                      </div>
                    </div>

                    {/* 随选中节点与滑块参数实时变化的 CodeBlock */}
                    <CodeBlock size="sm">
                      <CodeBlockHeader>
                        <CodeBlockTitle>
                          <FileCode2 className="size-3.5" />
                          实时生成 SDK 调用代码
                        </CodeBlockTitle>
                        <CodeBlockActions>
                          <CodeBlockCopyButton value={dynamicSdkCode} />
                        </CodeBlockActions>
                      </CodeBlockHeader>
                      <CodeBlockContent lineNumbers>
                        {dynamicSdkCode}
                      </CodeBlockContent>
                    </CodeBlock>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </section>

          {/* 第二部分：底部多视图业务管理台 (管线矩阵 Table / Agent 运维 Copilot) */}
          <Tabs defaultValue="matrix" className="gap-5">
            <div className="flex flex-col justify-between gap-3 border-b pb-2.5 sm:flex-row sm:items-center">
              <TabsList>
                <TabsTrigger value="matrix">
                  <Boxes className="size-4" />
                  在役管线与空间资产矩阵 ({pipelines.length})
                </TabsTrigger>
                <TabsTrigger value="copilot">
                  <Bot className="size-4" />
                  Agent 协同诊断与日志控制台
                </TabsTrigger>
              </TabsList>

              {/* 悬停预览卡片 HoverCard：鼠标悬停查看值班架构师详情 */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>值班架构师（悬停头像查看）：</span>
                <HoverCard>
                  <HoverCardTrigger
                    render={
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border bg-muted/40 px-2 py-0.5 text-xs font-medium text-foreground transition-colors hover:border-brand-orange/40"
                      >
                        <Avatar size="sm" className="size-4">
                          <AvatarFallback className="text-[10px]">
                            {activePipeline.owner.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{activePipeline.owner}</span>
                      </button>
                    }
                  />
                  <HoverCardContent align="end" className="w-72">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {activePipeline.owner.slice(0, 1)}
                        </AvatarFallback>
                        <AvatarBadge />
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-semibold">
                          {activePipeline.owner}
                        </div>
                        <div className="text-xs text-brand-orange">
                          {activePipeline.ownerRole}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          负责「{activePipeline.name}」的 SLA 保障与算力扩缩容审批。
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            {/* 标签页 1：管线矩阵 Table */}
            <TabsContent value="matrix" className="flex flex-col gap-4">
              <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
                <div className="flex flex-wrap gap-1.5">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      size="xs"
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground select-none">
                    <Checkbox
                      checked={onlyHealthy}
                      onCheckedChange={(v) => setOnlyHealthy(Boolean(v))}
                    />
                    <span>仅看运行中节点</span>
                  </label>

                  <div className="relative w-full sm:w-60">
                    <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-brand-orange" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="过滤管线、代号或产出物..."
                      className="h-7 pl-8 text-xs"
                    />
                  </div>
                </div>
              </div>

              <Card size="sm">
                <CardContent className="pt-1">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>管线名称与集群代号</TableHead>
                        <TableHead>领域</TableHead>
                        <TableHead>状态</TableHead>
                        <TableHead>阶段核心产出物 (Output)</TableHead>
                        <TableHead className="text-right">吞吐 / 时延</TableHead>
                        <TableHead>GPU 显存水位</TableHead>
                        <TableHead>自动扩缩</TableHead>
                        <TableHead className="text-right">操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPipelines.map((item) => {
                        const isSelected = item.id === activePipeline.id
                        return (
                          <TableRow
                            key={item.id}
                            data-state={isSelected ? "selected" : undefined}
                            onClick={() => {
                              setSelectedPipelineId(item.id)
                              setSelectedStepIndex(0)
                            }}
                            className="cursor-pointer"
                          >
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
                              <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-brand-orange">
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
                            <TableCell className="w-32">
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
                            <TableCell
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Switch
                                size="sm"
                                checked={item.autoScale}
                                onCheckedChange={() =>
                                  handleToggleAutoScale(item.id)
                                }
                              />
                            </TableCell>
                            <TableCell
                              className="text-right"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center justify-end gap-1">
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() =>
                                    handleDuplicatePipeline(item)
                                  }
                                >
                                  <Copy className="size-3" />
                                  克隆
                                </Button>

                                <AlertDialog>
                                  <AlertDialogTrigger
                                    render={
                                      <Button
                                        variant="ghost"
                                        size="icon-xs"
                                        aria-label="删除管线"
                                      >
                                        <Trash2 className="size-3.5" />
                                      </Button>
                                    }
                                  />
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        确认下线「{item.name}」？
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        下线后将立即释放其占用的 {item.gpuCluster} 算力池，已归档的空间资产不受影响。
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
                        )
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 标签页 2：Agent 协同诊断与日志控制台 */}
            <TabsContent value="copilot">
              <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                <Card className="flex flex-col justify-between">
                  <CardHeader className="border-b pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="size-4 text-brand-orange" />
                        <CardTitle>YuanQee 运维 Copilot</CardTitle>
                      </div>
                      <Badge variant="secondary">
                        当前绑定：{activePipeline.code}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex max-h-80 flex-col gap-4 overflow-y-auto py-4">
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
                          {msg.traces && (
                            <Trace className="rounded-lg border bg-muted/30 px-3 py-2">
                              {msg.traces.map((t, i) => (
                                <TraceLine key={i} status={t.status}>
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
                  </CardContent>

                  <CardFooter className="flex-col items-stretch gap-2.5 border-t pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "生成当前管线 R4 空间资产校验报告",
                        "压测双臂 VLA 节点极限并发吞吐",
                      ].map((p) => (
                        <Button
                          key={p}
                          variant="secondary"
                          size="xs"
                          onClick={() => handleSendCopilotMessage(p)}
                        >
                          <Sparkles className="size-3" />
                          {p}
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSendCopilotMessage()
                        }}
                        placeholder="输入针对当前管线的诊断或调参指令..."
                      />
                      <Button
                        onClick={() => handleSendCopilotMessage()}
                        disabled={!chatInput.trim() || isCopilotGenerating}
                      >
                        <Send className="size-4" />
                        发送
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>实时集群审计日志与设计问答</CardTitle>
                    <CardDescription>
                      您在页面上的每一次点击、滑块调节与克隆都会实时记录在下方日志流中
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex max-h-40 flex-col gap-1 overflow-y-auto rounded-lg border bg-muted/40 p-3 font-mono text-xs">
                      {liveLogLines.map((line, idx) => (
                        <div key={idx} className="text-muted-foreground">
                          <span className="text-brand-orange">›</span> {line}
                        </div>
                      ))}
                    </div>

                    <Accordion className="w-full">
                      <AccordionItem value="q1">
                        <AccordionTrigger>
                          本页面串联了哪些高阶交互组件？
                        </AccordionTrigger>
                        <AccordionContent>
                          包含了可拖拽分栏 <code className="font-mono">ResizablePanelGroup</code>、全局快捷键面板 <code className="font-mono">CommandDialog (Ctrl+K)</code>、节点右键菜单 <code className="font-mono">ContextMenu</code>、双因素验证码 <code className="font-mono">InputOTP</code>、悬停名片 <code className="font-mono">HoverCard</code> 以及 AI 思考追踪流 <code className="font-mono">Trace</code>。
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        {/* 右侧节点深度遥测抽屉 Sheet */}
        <Sheet open={detailSheetOpen} onOpenChange={setDetailSheetOpen}>
          <SheetContent side="right" className="sm:max-w-md">
            <SheetHeader>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{activePipeline.category}</Badge>
                <code className="font-mono text-xs text-muted-foreground">
                  {activePipeline.code}
                </code>
              </div>
              <SheetTitle className="pt-1">{activePipeline.name}</SheetTitle>
              <SheetDescription>
                {activePipeline.region} · {activePipeline.gpuCluster}
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <div className="grid grid-cols-2 gap-3 rounded-xl border bg-muted/30 p-3">
                <div>
                  <div className="text-xs text-muted-foreground">实测 P99 时延</div>
                  <div className="mt-1 font-mono text-lg font-bold text-brand-orange tabular-nums">
                    {simulatedLatency} ms
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">实测吞吐 (QPS)</div>
                  <div className="mt-1 font-mono text-lg font-bold text-brand-orange tabular-nums">
                    {simulatedQps.toLocaleString()}
                  </div>
                </div>
              </div>
              <CodeBlock size="sm">
                <CodeBlockHeader>
                  <CodeBlockTitle>节点配置快照</CodeBlockTitle>
                  <CodeBlockActions>
                    <CodeBlockCopyButton value={dynamicSdkCode} />
                  </CodeBlockActions>
                </CodeBlockHeader>
                <CodeBlockContent lineNumbers>
                  {dynamicSdkCode}
                </CodeBlockContent>
              </CodeBlock>
            </div>
            <SheetFooter>
              <SheetClose
                render={
                  <Button variant="outline" className="w-full">
                    关闭抽屉
                  </Button>
                }
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <footer className="mt-10 border-t bg-muted/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-muted-foreground sm:flex-row">
            <span>
              YuanQee Studio · 企业级高交互 Next.js 16 + shadcn/ui 组件库工作台
            </span>
            <div className="flex items-center gap-4">
              <span>快捷键：按 Ctrl+K 唤起全局命令面板</span>
              <Link
                href="/components"
                className="font-medium text-brand-orange hover:underline"
              >
                浏览全部 63 个组件画廊 →
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
