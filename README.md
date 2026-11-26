# Company UI Template (企业级 Next.js + shadcn/ui 组件库模板)

基于 **Next.js 16 + React 19 + Tailwind CSS v4 + Base UI (`@base-ui/react`) + shadcn/ui (`base-nova` 风格)** 构建的企业级前端项目起步模板。

内置 **63 个开箱即用的 UI 组件**（涵盖通用管理后台、表单交互、数据可视化以及 **AI 对话 / Agent 专属组件**），并预置了企业品牌主色（科技蓝 `#0E3183`）与辅助色/组件图标色（活力橙 `#EA5B18`），帮助团队新项目在 1 分钟内完成初始化。

---

## ✨ 核心特性

- **最新技术栈**：Next.js 16 (App Router / Turbopack) + React 19 + TypeScript 5 + Tailwind CSS v4。
- **63 个全量预装组件**：无需逐个手动 `shadcn add`，从基础按钮、表单、弹窗到 AI 聊天气泡（`Bubble`、`Message`、`Trace`、`Questionnaire`）全部内置于 `components/ui/`。
- **在线组件画廊 (`/components`)**：内置可视化组件预览与代码速查页，启动项目后访问 `/components` 即可交互体验所有组件并一键复制引入代码。
- **Base UI 无障碍底座**：底层采用 `@base-ui/react`，使用 `render` 属性组合触发器（如 `<DialogTrigger render={<Button />} />`），类型安全且无 DOM 嵌套冲突。
- **主题一键定制**：基于 CSS 变量与 OKLCH 色彩空间，在 `app/globals.css` 中修改 `--primary` 与 `--radius` 即可全局切换品牌视觉。

---

## 🚀 快速开始 (Quick Start)

### 1. 克隆或使用此模板创建项目

```bash
git clone https://github.com/hx785/company-ui-template.git my-new-project
cd my-new-project
```

> 💡 **提示**：也可以直接点击 GitHub 仓库右上角的 **`Use this template`** 按钮，基于此模板一键生成你自己的新仓库。

### 2. 安装依赖

```bash
npm install
```

### 3. 启动本地开发服务器

```bash
npm run dev
```

启动后在浏览器访问：
- **业务综合演示页**：[http://localhost:3000](http://localhost:3000)
- **内置组件库预览与文档页**：[http://localhost:3000/components](http://localhost:3000/components)

---

## 📁 目录结构

```text
company-ui-template/
├── app/
│   ├── globals.css          # 全局样式、Tailwind v4 配置与品牌主题色变量 (--primary: #0E3183, --brand-orange: #EA5B18)
│   ├── layout.tsx           # 根布局与字体配置
│   ├── page.tsx             # 首页：企业级 AI 与 3D 空间资产智算云中枢控制台（涵盖 20+ 核心组件联动）
│   └── components/
│       └── page.tsx         # 组件画廊：63 个内置组件的可视化交互预览、检索与代码速查
├── components/
│   └── ui/                  # 63 个预装 UI 组件源码（可按需直接修改定制）
├── hooks/
│   ├── use-mobile.ts        # 移动端响应式断点检测 Hook
│   └── use-highlighted-code.ts # Shiki 代码高亮 Hook
├── lib/
│   ├── utils.ts             # 样式合并等通用工具函数
│   └── highlighter.tsx      # 代码语法高亮配置
└── components.json          # shadcn/ui (base-nova 风格) 配置文件
```

---

## 🧩 内置 63 个 UI 组件全景清单

所有组件均存放在 `components/ui/` 目录下，统一通过 `@/components/ui/<组件文件名>` 按需引入：

### 1. 基础与布局组件 (Layout & Base - 11 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Button** | `@/components/ui/button` | 按钮（支持 `default`, `secondary`, `outline`, `ghost`, `destructive`, `link` 及多种尺寸） |
| **ButtonGroup** | `@/components/ui/button-group` | 按钮组合容器，用于紧凑排列关联操作按钮 |
| **Badge** | `@/components/ui/badge` | 状态标签、角标、分类徽章 |
| **Card** | `@/components/ui/card` | 卡片容器（含 `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`） |
| **Separator** | `@/components/ui/separator` | 水平或垂直分割线 |
| **AspectRatio** | `@/components/ui/aspect-ratio` | 固定宽高比容器（适用于图片、视频封面） |
| **Resizable** | `@/components/ui/resizable` | 可拖拽调整大小的分栏面板 |
| **ScrollArea** | `@/components/ui/scroll-area` | 自定义美化滚动条容器 |
| **Sidebar** | `@/components/ui/sidebar` | 企业后台可折叠侧边栏导航框架 |
| **Direction** | `@/components/ui/direction` | LTR / RTL 文本方向上下文提供器 |
| **Toggle / ToggleGroup** | `@/components/ui/toggle` / `toggle-group` | 双态切换按钮与单选/多选按钮组 |

### 2. 表单与数据录入 (Forms & Inputs - 15 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Input** | `@/components/ui/input` | 标准文本输入框 |
| **InputGroup** | `@/components/ui/input-group` | 带前缀/后缀图标或按钮的复合输入框 |
| **InputOTP** | `@/components/ui/input-otp` | 短信/邮箱验证码分格输入框 |
| **Textarea** | `@/components/ui/textarea` | 多行文本域 |
| **Select** | `@/components/ui/select` | 自定义下拉选择器（支持分组与键值映射） |
| **NativeSelect** | `@/components/ui/native-select` | 原生 `<select>` 样式封装，适合移动端或高性能大列表 |
| **Combobox** | `@/components/ui/combobox` | 带搜索过滤的自动补全下拉框 |
| **Checkbox** | `@/components/ui/checkbox` | 复选框 |
| **RadioGroup** | `@/components/ui/radio-group` | 单选框组 |
| **Switch** | `@/components/ui/switch` | 开关切换器（支持 `default` 与 `sm` 尺寸） |
| **Slider** | `@/components/ui/slider` | 滑动数值选择器（支持单值与区间双滑块） |
| **Calendar** | `@/components/ui/calendar` | 日期与日历选择面板（基于 `react-day-picker`） |
| **Field** | `@/components/ui/field` | 表单字段容器（统一管理 Label、Description 与错误提示） |
| **Label** | `@/components/ui/label` | 表单标签 |

### 3. 导航与菜单 (Navigation & Menus - 8 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Tabs** | `@/components/ui/tabs` | 选项卡切换（含 `TabsList`, `TabsTrigger`, `TabsContent`） |
| **Breadcrumb** | `@/components/ui/breadcrumb` | 页面层级面包屑导航 |
| **NavigationMenu** | `@/components/ui/navigation-menu` | 顶部多级展开导航菜单 |
| **Menubar** | `@/components/ui/menubar` | 桌面应用风格的顶部菜单栏 |
| **DropdownMenu** | `@/components/ui/dropdown-menu` | 点击触发的下拉操作菜单 |
| **ContextMenu** | `@/components/ui/context-menu` | 鼠标右键上下文菜单 |
| **Pagination** | `@/components/ui/pagination` | 列表分页导航条 |
| **Command** | `@/components/ui/command` | `⌘K` 命令面板与全局快捷搜索（基于 `cmdk`） |

### 4. 弹窗、浮层与反馈 (Overlays & Feedback - 13 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Dialog** | `@/components/ui/dialog` | 模态对话框 |
| **AlertDialog** | `@/components/ui/alert-dialog` | 强制确认/警告弹窗（如删除二次确认） |
| **Sheet** | `@/components/ui/sheet` | 屏幕边缘滑出抽屉面板（支持上下左右 4 个方向） |
| **Drawer** | `@/components/ui/drawer` | 移动端友好的底部手势抽屉 |
| **Popover** | `@/components/ui/popover` | 点击弹出的气泡卡片浮层 |
| **Tooltip** | `@/components/ui/tooltip` | 鼠标悬停文字提示 |
| **HoverCard** | `@/components/ui/hover-card` | 鼠标悬停预览详情卡片（如用户资料预览） |
| **Alert** | `@/components/ui/alert` | 页面内嵌提示横幅（支持 `default` 与 `destructive`） |
| **Toast** | `@/components/ui/toast` | 全局轻量级右上角/底部消息通知 |
| **Progress** | `@/components/ui/progress` | 进度条指示器 |
| **Spinner** | `@/components/ui/spinner` | 加载旋转动画图标 |
| **Skeleton** | `@/components/ui/skeleton` | 内容加载骨架屏占位符 |
| **Empty** | `@/components/ui/empty` | 空数据/无搜索结果占位状态组件 |

### 5. 数据展示与富媒体 (Data Display - 9 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Table** | `@/components/ui/table` | 结构化数据表格（含 `TableHeader`, `TableBody`, `TableRow`, `TableCell` 等） |
| **Accordion** | `@/components/ui/accordion` | 手风琴折叠面板（适合 FAQ、分组配置） |
| **Collapsible** | `@/components/ui/collapsible` | 单项展开/收起容器 |
| **Carousel** | `@/components/ui/carousel` | 轮播图/卡片滑块（基于 `embla-carousel-react`） |
| **Chart** | `@/components/ui/chart` | 统计图表容器与 Tooltip 封装（基于 `recharts`） |
| **Avatar** | `@/components/ui/avatar` | 用户头像（支持图片、文字回退 `AvatarFallback`、状态角标 `AvatarBadge` 与头像组 `AvatarGroup`） |
| **Item** | `@/components/ui/item` | 通用列表项布局组件 |
| **Kbd** | `@/components/ui/kbd` | 键盘快捷键标签（如 `⌘ K`、`Ctrl + C`） |
| **CodeBlock** | `@/components/ui/code-block` | 带行号、Diff 高亮与一键复制按钮的代码展示块 |

### 6. AI 与智能体专属组件 (AI & Chat UI - 7 个)
| 组件名称 | 引入路径 | 用途说明 |
| :--- | :--- | :--- |
| **Bubble** | `@/components/ui/bubble` | 聊天气泡（支持 `default`, `secondary`, `muted`, `tinted`, `outline`, `destructive` 及表情回应 `BubbleReactions`） |
| **Message** | `@/components/ui/message` | 完整对话消息结构（含头像 `MessageAvatar`、头部、内容区、底部时间戳及左右对齐 `align="start" \| "end"`） |
| **MessageScroller** | `@/components/ui/message-scroller` | 对话流自动贴底滚动容器 |
| **Attachment** | `@/components/ui/attachment` | 聊天输入区或消息中的文件/图片附件卡片 |
| **Questionnaire** | `@/components/ui/questionnaire` | AI 交互式多步问卷/偏好采集组件 |
| **Trace** | `@/components/ui/trace` | AI Agent 思考过程、工具调用链路追踪展示（支持 `running` 流光动画、`pending`、`error` 状态） |
| **Marker** | `@/components/ui/marker` | 文本引用角标与知识库来源标记 |

---

## 💡 常用组件编写示例

### 注意：`render` 属性组合模式（Base UI 规范）
本模板使用 `@base-ui/react` 作为底层无障碍原语。在需要将弹窗触发器（如 `DialogTrigger`、`TooltipTrigger`、`PopoverTrigger`、`DropdownMenuTrigger`）渲染为自定义 `Button` 时，请使用 **`render` 属性**（替代旧版 Radix 的 `asChild`）：

```tsx
import { Button } from "@/components/ui/button"
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

export function ExampleDialog() {
  return (
    <Dialog>
      {/* 使用 render 属性传入自定义按钮 */}
      <DialogTrigger render={<Button>打开弹窗</Button>} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>操作确认</DialogTitle>
          <DialogDescription>确定要提交当前配置吗？</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">取消</Button>} />
          <DialogClose render={<Button>确认提交</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### AI 对话与思考链路示例 (`Message` + `Bubble` + `Trace`)

```tsx
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent, MessageHeader } from "@/components/ui/message"
import { Trace, TraceLine, TraceTitle, TraceDescription } from "@/components/ui/trace"

export function AIChatDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* 用户消息（右对齐） */}
      <Message align="end">
        <MessageContent>
          <Bubble align="end" variant="default">
            <BubbleContent>帮我查询本季度华东区销售额并生成趋势报告</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      {/* AI 助手消息（左对齐 + Trace 思考过程） */}
      <Message align="start">
        <MessageContent>
          <MessageHeader>企业 AI 助手</MessageHeader>
          <Trace>
            <TraceLine status="running">
              <TraceTitle>正在检索华东区 Q3 订单数据库...</TraceTitle>
              <TraceDescription>1.2s</TraceDescription>
            </TraceLine>
          </Trace>
          <Bubble variant="muted">
            <BubbleContent>
              已为您汇总华东区本季度营收数据，总销售额同比增长 24.6%。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
```

---

## 🎨 主题与品牌定制

打开 `app/globals.css`，在 `:root` 和 `.dark` 下即可修改全局品牌主色、橙色辅助色/图标色与圆角大小：

```css
:root {
  /* 企业品牌主色（默认科技深蓝 #0E3183） */
  --primary: #0E3183;
  --primary-foreground: #FFFFFF;
  --ring: #0E3183;

  /* 组件图标色与品牌活力橙 (#EA5B18) */
  --brand-orange: #EA5B18;
  --icon: #EA5B18;

  /* 辅助色与高亮悬停色（浅橙底 #FFF2EB + 活力橙字 #EA5B18） */
  --secondary: #FFF2EB;
  --secondary-foreground: #EA5B18;
  --accent: #FFF2EB;
  --accent-foreground: #EA5B18;

  /* 全局基础圆角（默认 0.5rem 适中圆角） */
  --radius: 0.5rem;
}
```

> 💡 在编写自定义业务组件时，可直接使用 Tailwind 工具类 `text-brand-orange`、`bg-brand-orange`、`border-brand-orange` 或 `bg-secondary text-secondary-foreground` 来应用统一的橙色图标与辅助色规范。

---

## 📦 常用脚本命令

| 命令 | 说明 |
| :--- | :--- |
| `npm run dev` | 启动本地开发服务器（默认端口 `3000`） |
| `npm run build` | 编译生产环境构建包 |
| `npm run start` | 启动生产环境服务器 |
| `npm run lint` | 运行 ESLint 代码规范检查 |
