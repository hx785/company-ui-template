"use client"

import * as React from "react"
import Link from "next/link"
import {
  Armchair,
  ArrowRight,
  Check,
  Layers,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Category = "全部" | "客厅沙发" | "实木餐桌" | "单人座椅" | "氛围灯具"
type SortOrder = "default" | "price-asc" | "price-desc"

interface FurnitureItem {
  id: string
  name: string
  category: Exclude<Category, "全部">
  material: string
  price: number
  tag?: string
  inStock: boolean
  tone: string
}

const CATEGORIES: Category[] = ["全部", "客厅沙发", "实木餐桌", "单人座椅", "氛围灯具"]

const FURNITURE_LIST: FurnitureItem[] = [
  {
    id: "sofa-01",
    name: "云端模块布艺沙发",
    category: "客厅沙发",
    material: "高密度回弹海绵 · 磨砂科技布",
    price: 4890,
    tag: "热销",
    inStock: true,
    tone: "from-slate-100 to-blue-50",
  },
  {
    id: "table-01",
    name: "白蜡木圆角长餐桌",
    category: "实木餐桌",
    material: "北美 FAS 级白蜡木 · 环保木蜡油",
    price: 3680,
    tag: "新品",
    inStock: true,
    tone: "from-amber-50 to-stone-100",
  },
  {
    id: "chair-01",
    name: "藤编弧背休闲椅",
    category: "单人座椅",
    material: "进口白橡木 · 手工印尼藤编",
    price: 1580,
    inStock: true,
    tone: "from-stone-100 to-orange-50",
  },
  {
    id: "lamp-01",
    name: "极简柔光落地阅读灯",
    category: "氛围灯具",
    material: "拉丝铝合金 · 三档暖光调光",
    price: 890,
    tag: "推荐",
    inStock: false,
    tone: "from-zinc-100 to-slate-100",
  },
  {
    id: "sofa-02",
    name: "胡桃木三人直排沙发",
    category: "客厅沙发",
    material: "黑胡桃木底座 · 头层牛皮",
    price: 6990,
    inStock: false,
    tone: "from-stone-100 to-neutral-200",
  },
  {
    id: "chair-02",
    name: "人体工学实木餐椅",
    category: "单人座椅",
    material: "樱桃木框架 · 透气棉麻坐垫",
    price: 760,
    tag: "现货",
    inStock: true,
    tone: "from-orange-50 to-stone-100",
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>("全部")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [onlyInStock, setOnlyInStock] = React.useState(false)
  const [sortBy, setSortBy] = React.useState<SortOrder>("default")
  const [cartIds, setCartIds] = React.useState<string[]>([])
  const [bookingSubmitted, setBookingSubmitted] = React.useState(false)

  const filteredItems = FURNITURE_LIST.filter((item) => {
    const matchCategory =
      selectedCategory === "全部" || item.category === selectedCategory
    const matchSearch =
      item.name.includes(searchQuery.trim()) ||
      item.material.includes(searchQuery.trim())
    const matchStock = !onlyInStock || item.inStock
    return matchCategory && matchSearch && matchStock
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    return 0
  })

  const cartItems = FURNITURE_LIST.filter((item) => cartIds.includes(item.id))
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  function toggleCart(id: string) {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Armchair className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight">
                森屿家居 SENYU
              </span>
              <span className="text-xs text-muted-foreground">
                现代原木生活馆
              </span>
            </div>
          </div>

          <div className="hidden w-full max-w-sm items-center gap-2 sm:flex">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索沙发、餐桌、材质..."
                className="pl-8"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="gap-1.5"
              nativeButton={false}
              render={<Link href="/components" />}
            >
              <Layers className="size-4" />
              <span>组件库预览 (63)</span>
            </Button>

            {/* 采购清单弹窗 */}
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="outline" className="gap-2">
                    <ShoppingBag className="size-4" />
                    <span>采购清单</span>
                    <Badge>{cartIds.length}</Badge>
                  </Button>
                }
              />
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>我的家具采购清单</DialogTitle>
                <DialogDescription>
                  已选 {cartItems.length} 件家具，支持企业批量采购报价
                </DialogDescription>
              </DialogHeader>

              {cartItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  清单还是空的，快去挑选喜欢的家具吧！
                </div>
              ) : (
                <div className="flex max-h-64 flex-col gap-3 overflow-y-auto py-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-lg border p-3"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ¥ {item.price.toLocaleString()}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => toggleCart(item.id)}
                      >
                        <Trash2 className="size-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <DialogFooter className="items-center justify-between sm:justify-between">
                <div className="text-sm font-semibold">
                  合计：
                  <span className="text-primary">
                    ¥ {totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-2">
                  <DialogClose
                    render={<Button variant="outline">继续逛逛</Button>}
                  />
                  <DialogClose
                    render={
                      <Button disabled={cartItems.length === 0}>
                        提交采购意向
                      </Button>
                    }
                  />
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8">
        {/* 首屏主视觉横幅 */}
        <section className="grid items-center gap-6 rounded-2xl border bg-muted/30 p-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Badge className="gap-1">
              <Sparkles className="size-3" />
              2026 春夏设计系列
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              让自然木意，住进日常空间
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              严选北美 FAS 级实木与环保亲肤面料，结合人体工学圆角打磨，为家庭与办公空间打造温润耐用的现代家具。
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="lg"
                onClick={() => {
                  setSelectedCategory("全部")
                  setOnlyInStock(false)
                }}
              >
                浏览全部家具
                <ArrowRight className="size-4" />
              </Button>

              {/* 预约线下展厅弹窗 */}
              <Dialog
                onOpenChange={(open) => {
                  if (!open) setBookingSubmitted(false)
                }}
              >
                <DialogTrigger
                  render={
                    <Button variant="outline" size="lg">
                      预约线下展厅
                    </Button>
                  }
                />
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>预约线下体验馆</DialogTitle>
                    <DialogDescription>
                      留下您的联系方式，专属软装顾问将为您安排一对一导览。
                    </DialogDescription>
                  </DialogHeader>
                  {bookingSubmitted ? (
                    <div className="flex flex-col items-center gap-2 py-6 text-center">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-5" />
                      </div>
                      <p className="font-medium">预约成功！</p>
                      <p className="text-xs text-muted-foreground">
                        顾问将在 2 小时内致电与您确认到店时间。
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="visitor-name"
                          className="text-xs font-medium"
                        >
                          您的称呼
                        </label>
                        <Input id="visitor-name" placeholder="例如：张先生" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="visitor-phone"
                          className="text-xs font-medium"
                        >
                          联系电话
                        </label>
                        <Input
                          id="visitor-phone"
                          placeholder="请输入 11 位手机号"
                        />
                      </div>
                    </div>
                  )}
                  <DialogFooter>
                    {bookingSubmitted ? (
                      <DialogClose render={<Button>完成</Button>} />
                    ) : (
                      <Button onClick={() => setBookingSubmitted(true)}>
                        确认预约
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">本月主推</Badge>
                <span className="text-sm font-semibold text-primary">
                  ¥ 4,890
                </span>
              </div>
              <CardTitle className="pt-1 text-lg">云端模块布艺沙发</CardTitle>
              <CardDescription>
                可自由拼接转角 · 30天无忧试坐 · 全国免费送装
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-blue-50 text-primary">
                <Armchair className="size-16 stroke-[1.5]" />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-xs text-muted-foreground">
                已有 320+ 家庭选择
              </span>
              <Button size="sm" onClick={() => toggleCart("sofa-01")}>
                {cartIds.includes("sofa-01") ? "已在清单中" : "加入采购清单"}
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* 选项卡导航：家具商城 / 空间方案 / 服务保障 */}
        <Tabs defaultValue="catalog" className="gap-6">
          <TabsList>
            <TabsTrigger value="catalog">全部家具</TabsTrigger>
            <TabsTrigger value="spaces">空间搭配方案</TabsTrigger>
            <TabsTrigger value="service">售后与保障</TabsTrigger>
          </TabsList>

          {/* 标签页 1：全部家具 */}
          <TabsContent value="catalog" className="flex flex-col gap-6">
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
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="in-stock-filter"
                    checked={onlyInStock}
                    onCheckedChange={(checked) =>
                      setOnlyInStock(Boolean(checked))
                    }
                  />
                  <label
                    htmlFor="in-stock-filter"
                    className="cursor-pointer text-sm text-muted-foreground select-none"
                  >
                    仅看现货速发
                  </label>
                </div>

                {/* 下拉排序框 */}
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value as SortOrder)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="排序方式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="default">综合推荐</SelectItem>
                      <SelectItem value="price-asc">价格从低到高</SelectItem>
                      <SelectItem value="price-desc">价格从高到低</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <Card className="py-12 text-center">
                <CardContent className="flex flex-col items-center gap-3">
                  <p className="text-sm text-muted-foreground">
                    没有找到符合条件的家具商品
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("全部")
                      setSearchQuery("")
                      setOnlyInStock(false)
                      setSortBy("default")
                    }}
                  >
                    重置筛选条件
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => {
                  const isAdded = cartIds.includes(item.id)
                  return (
                    <Card
                      key={item.id}
                      className="flex flex-col justify-between"
                    >
                      <CardHeader>
                        <div
                          className={`mb-2 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br ${item.tone} text-primary/80`}
                        >
                          <Armchair className="size-12 stroke-[1.5]" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          {item.tag ? (
                            <Badge>{item.tag}</Badge>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              {item.inStock ? "现货直发" : "定制周期 15 天"}
                            </span>
                          )}
                        </div>
                        <CardTitle className="pt-1">{item.name}</CardTitle>
                        <CardDescription>{item.material}</CardDescription>
                      </CardHeader>

                      <CardFooter className="justify-between border-t pt-4">
                        <span className="text-lg font-bold text-primary">
                          ¥ {item.price.toLocaleString()}
                        </span>
                        <Button
                          size="sm"
                          variant={isAdded ? "secondary" : "default"}
                          onClick={() => toggleCart(item.id)}
                        >
                          {isAdded ? (
                            <>
                              <Check className="size-4" />
                              已加入
                            </>
                          ) : (
                            "加入清单"
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            )}
          </TabsContent>

          {/* 标签页 2：空间搭配方案 */}
          <TabsContent value="spaces">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Badge className="w-fit">客厅整配方案</Badge>
                  <CardTitle className="pt-1">北欧松弛感客厅 3 件套</CardTitle>
                  <CardDescription>
                    包含：云端模块沙发 + 藤编弧背休闲椅 + 极简落地灯
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold text-primary">
                    套餐价 ¥ 6,880
                  </span>
                  <Button
                    size="sm"
                    onClick={() => {
                      setCartIds((prev) =>
                        Array.from(
                          new Set([...prev, "sofa-01", "chair-01", "lamp-01"])
                        )
                      )
                    }}
                  >
                    整套加入清单
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    餐厅整配方案
                  </Badge>
                  <CardTitle className="pt-1">自然原木家庭餐厅组合</CardTitle>
                  <CardDescription>
                    包含：白蜡木圆角长餐桌 + 人体工学实木餐椅 × 4
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-between">
                  <span className="text-lg font-bold text-primary">
                    套餐价 ¥ 6,290
                  </span>
                  <Button
                    size="sm"
                    onClick={() => {
                      setCartIds((prev) =>
                        Array.from(new Set([...prev, "table-01", "chair-02"]))
                      )
                    }}
                  >
                    整套加入清单
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* 标签页 3：售后与保障 */}
          <TabsContent value="service">
            <div className="grid gap-6 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <ShieldCheck className="size-8 text-primary" />
                  <CardTitle className="pt-2">5 年结构质保</CardTitle>
                  <CardDescription>
                    所有实木框架享受 5 年质保服务，非人为损坏免费维修或更换。
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="size-8 text-primary" />
                  <CardTitle className="pt-2">全国送货入户安装</CardTitle>
                  <CardDescription>
                    专业家居配送团队送货上楼并现场组装调试，带走全部包装垃圾。
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Sparkles className="size-8 text-primary" />
                  <CardTitle className="pt-2">母婴级环保漆面</CardTitle>
                  <CardDescription>
                    全线采用欧洲进口植物木蜡油与低甲醛环保板材，即装即住。
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-12 border-t bg-muted/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 森屿家居 SENYU · 基于企业定制 shadcn/ui 组件库构建</span>
          <span>品牌主色：#0E3183 · 适中圆角风格</span>
        </div>
      </footer>
    </div>
  )
}
