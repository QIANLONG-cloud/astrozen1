import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "刘钱龙 — 质量工程师（DQE/QPL）",
  author: "刘钱龙",
  description:
    "10 年质量工程经验 · 具身智能 DQE/QPL · 跨精密模具 / 3C / 智能装备 / 具身智能 4 行业",
  lang: "zh-CN",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "经历", href: "#experience" },
    { text: "项目", href: "#projects" },
    { text: "关于", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:875348468@qq.com" },
    { text: "Phone", href: "tel:19311432894" },
    { text: "微信", href: "tel:19311432894" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astrozen1-two.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "刘钱龙",
    specialty: "质量工程师 · 具身智能 DQE / 项目质量负责人",
    summary:
      "10 年质量工程经验。主导 Wuji Hand 灵巧手 1 代、2 代项目质量管理，累计推动 800+ BUG、100+ 风险闭环。兼具质量工程深度与数字化平台建设能力。",
    email: "875348468@qq.com",
  },
  experience: [
    {
      company: "深圳舞肌科技有限公司（Wuji · 具身智能）",
      position: "DQE / 项目质量负责人（QPL）",
      startDate: "2024.10",
      endDate: "至今",
      summary: [
        "负责 Wuji Hand 1 代、2 代灵巧手产品研发项目质量管理，覆盖需求评审、研发、测试、试产及量产全过程。",
        "建立研发质量管理体系，推动研发、测试、结构、硬件、软件等多部门协同，保障项目按计划推进。",
        "通过 WH110 失效经验库 + 售后数据 + DFMEA + PRD 评审 + 设计评审 + CTQ 等途径，在 EVT 阶段识别风险 80+。",
        "累计推动 800+ BUG、100+ 风险闭环；建立统一质量问题管理机制；实现研发质量数据数字化管理。",
      ],
    },
    {
      company: "雷茨智能装备(广东)有限公司",
      position: "品质主管",
      startDate: "2023.03",
      endDate: "2024.09",
      summary: [
        "负责 G/F 系列无框力矩电机产品项目质量管理，包含供应商、来料、制程、成品、售后。",
        "负责空气悬浮 & 磁悬浮风机产品项目质量管理，包含供应商、来料、制程、成品、售后。",
        "推动质量策划、预防、控制、改善全流程落地，提升团队整体质量意识与响应效率。",
      ],
    },
    {
      company: "鸿富锦精密电子（成都）有限公司（富士康集团）",
      position: "质量管理 / 测试工程师",
      startDate: "2021.10",
      endDate: "2023.02",
      summary: [
        "负责 Apple iMac 新产品 EVT、DVT、PVT 阶段尺寸工程及测量能力建设，确保产品尺寸满足客户技术规范。",
        "编写并优化 CMM（三坐标）、OMM（光学测量设备）测量程序，建立产品测量方案，提高测量效率及一致性。",
        "完成 MSA/GRR 测量系统分析，验证测量系统稳定性及可靠性；推动尺寸异常分析及改善验证。",
      ],
    },
    {
      company: "赫比（成都）精密塑胶制品有限公司（赫比集团）",
      position: "质量管理 / 测试工程师",
      startDate: "2016.11",
      endDate: "2021.02",
      summary: [
        "全面负责来料、制程及出货各环节产品质量控制，严格把关，确保最终产品质量符合标准。",
        "编写三次元、二次元测量程序，精确测量各类零部件，及时处理量测异常情况。",
        "管理实验室日常运营，包括三坐标测量机、投影仪等精密仪器的操作指导与故障排除。",
      ],
    },
  ],
  projects: [
    {
      name: "Wuji Hand & Wuji Hand 2 灵巧手",
      summary:
        "具身智能核心产品。主导 1 代、2 代灵巧手从设计到量产全流程质量策划、DFMEA 评审、CTQ 识别与 BUG/风险闭环。累计推动 800+ BUG、100+ 风险闭环。",
      linkPreview: "/",
      linkSource: "https://www.wuji.tech/",
      image: "/wuji-hand.png",
    },
    {
      name: "无框力矩电机 G/F 系列",
      summary:
        "机器人关节核心零部件。负责供应商、来料、制程、成品、售后全链路质量管理，主导 APQP 与 PPAP 审核，确保量产稳定性。",
      linkPreview: "/",
      linkSource: "",
      image: "/motor.png",
    },
    {
      name: "空气悬浮 & 磁悬浮风机",
      summary:
        "智能装备产品线。统筹产品质量管控，覆盖供应商评审、来料检验、制程监控、出货审核与售后改善闭环。",
      linkPreview: "/",
      linkSource: "",
      image: "/fan.png",
    },
    {
      name: "Apple iMac NPI（EVT/DVT/PVT）",
      summary:
        "Apple 客户产品尺寸工程。完成 EVT/DVT/PVT 全阶段尺寸验证，建立 CMM/OMM 标准化测量程序与 MSOP/SIP 检验规范，支撑新产品顺利导入量产。",
      linkPreview: "/",
      linkSource: "",
      image: "/imac.png",
    },
  ],
  about: {
    description: "你好，我是刘钱龙，10 年质量工程经验，现任深圳舞肌科技 DQE / 项目质量负责人（QPL），主导 Wuji Hand 灵巧手 1 代、2 代产品研发项目质量管理。\n\n我的职业生涯起步于赫比（精密模具），历经富士康（Apple iMac NPI 测量）、雷茨智能（无框力矩电机 / 风机）、到现在的舞肌科技（具身智能灵巧手），覆盖精密模具 / 3C 制造 / 智能装备 / 具身智能 4 个行业。每个阶段都让我对全流程质量管理有更深的理解。\n\n兼具质量工程深度与数字化平台建设能力。我独立开发并维护质量数据平台与测试空间，打通飞书项目、Meego、Jira 等多数据源，实现质量数据自动采集、分析、预警及可视化，推动质量管理数字化建设。累计推动 800+ BUG、100+ 风险闭环。\n\n求职意向：质量经理 / QPM / DQE。期望城市：深圳。",
    image: "/alejandro-big.jpg",
  },
};