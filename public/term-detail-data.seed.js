// Generated from ai-hotwords-top10.html
(function(){
  const HOTWORD_HISTORY = {
  "2026-06-23": [
    {
      "rank": 1,
      "english": "AI Agent",
      "chinese": "AI 智能体",
      "brief": "能够感知环境、规划步骤并调用工具完成目标的 AI 系统",
      "officialDefinition": "Google 词汇表将 agent 定义为一种软件：它能够理解用户输入、规划步骤，并代表用户执行动作。",
      "link": "https://developers.google.com/machine-learning/glossary#agent",
      "source": "OpenAI / Anthropic / Google / Hugging Face",
      "sourceLabel": "Google AI Glossary",
      "score": 90,
      "scoreBreakdown": "覆盖 30 · 频次 22 · 权重 18 · 位置 10 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Agentic Workflow",
      "chinese": "智能体工作流",
      "brief": "由模型自主规划、调用工具并根据反馈调整步骤的任务执行流程",
      "officialDefinition": "Google 将 agentic workflow 定义为一种动态过程：智能体会自主规划并执行动作来完成目标，过程中可能包含推理、调用工具和自我纠偏。",
      "link": "https://developers.google.com/machine-learning/glossary#agentic-workflow",
      "source": "Google / OpenAI / Anthropic / Hugging Face",
      "sourceLabel": "Google AI Glossary",
      "score": 86,
      "scoreBreakdown": "覆盖 30 · 频次 20 · 权重 17 · 位置 9 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Reasoning Model",
      "chinese": "推理模型",
      "brief": "专门强化多步分析、规划和复杂问题求解能力的模型",
      "officialDefinition": "OpenAI 将 reasoning models 描述为：在给出最终回答前，会先使用内部 reasoning tokens 做计划、比较方案、使用工具并处理复杂多步问题的模型。",
      "link": "https://platform.openai.com/docs/guides/reasoning",
      "source": "OpenAI / Hugging Face / Google",
      "sourceLabel": "OpenAI Docs",
      "score": 82,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 19 · 位置 12 · 术语 10"
    },
    {
      "rank": 4,
      "english": "MCP",
      "chinese": "模型上下文协议",
      "brief": "让模型以统一方式连接外部工具、数据源和执行环境的开放协议",
      "officialDefinition": "模型上下文协议（Model Context Protocol, MCP）是指一种开放标准，用来把 AI 应用连接到外部系统，例如数据源、工具和工作流，让模型能够以统一方式获取上下文并调用外部能力。",
      "link": "https://modelcontextprotocol.io/docs/getting-started/intro",
      "source": "Hugging Face / MCP / OpenAI 生态",
      "sourceLabel": "MCP Docs",
      "score": 78,
      "scoreBreakdown": "覆盖 22 · 频次 17 · 权重 18 · 位置 11 · 术语 10"
    },
    {
      "rank": 5,
      "english": "RAG",
      "chinese": "检索增强生成",
      "brief": "先检索外部知识，再结合模型生成答案的增强式生成方法",
      "officialDefinition": "检索增强生成（Retrieval-Augmented Generation, RAG）是指一种先从外部知识源检索相关信息，再将检索结果作为上下文交给模型生成答案的方法，用于提升回答的准确性、时效性和可溯源性。",
      "link": "https://developers.google.com/machine-learning/glossary#retrieval-augmented-generation-rag",
      "source": "Google / Hugging Face / 企业 AI 场景",
      "sourceLabel": "Google AI Glossary",
      "score": 74,
      "scoreBreakdown": "覆盖 15 · 频次 18 · 权重 15 · 位置 16 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Multimodal Model",
      "chinese": "多模态模型",
      "brief": "能够理解或生成文本、图像、音频等多种模态内容的模型",
      "officialDefinition": "Google 词汇表把 multimodal model 定义为输入、输出或两者同时包含多种模态的模型，比如同时处理图像和文本。",
      "link": "https://developers.google.com/machine-learning/glossary#multimodal-model",
      "source": "Google / Meta / OpenAI",
      "sourceLabel": "Google AI Glossary",
      "score": 72,
      "scoreBreakdown": "覆盖 22 · 频次 15 · 权重 15 · 位置 10 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Tool Calling",
      "chinese": "工具调用",
      "brief": "让模型以结构化方式请求并调用外部函数或工具的能力",
      "officialDefinition": "OpenAI 在 agents 文档中将 tools 描述为代理可调用的函数，用于取数、执行任务或与外部系统交互；模型据此把回答升级成行动。",
      "link": "https://platform.openai.com/docs/guides/function-calling",
      "source": "OpenAI / Anthropic / Google",
      "sourceLabel": "OpenAI Docs",
      "score": 70,
      "scoreBreakdown": "覆盖 22 · 频次 14 · 权重 15 · 位置 9 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Inference",
      "chinese": "推理生成 / 模型推断",
      "brief": "已训练模型根据输入执行预测或生成输出的运行过程",
      "officialDefinition": "Google 把 inference 定义为：将已训练模型应用到输入上以生成预测；在大语言模型里，则是根据 prompt 生成 response 的过程。",
      "link": "https://developers.google.com/machine-learning/glossary#inference",
      "source": "Google / Hugging Face / NVIDIA",
      "sourceLabel": "Google AI Glossary",
      "score": 63,
      "scoreBreakdown": "覆盖 15 · 频次 13 · 权重 14 · 位置 11 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Transformer",
      "chinese": "Transformer 架构",
      "brief": "以自注意力机制为核心、擅长处理序列数据的神经网络架构",
      "officialDefinition": "Google 将 Transformer 定义为一种依赖 self-attention 的神经网络架构，可在不依赖卷积或循环网络的情况下处理输入序列到输出序列的转换。",
      "link": "https://developers.google.com/machine-learning/glossary#transformer",
      "source": "Google / OpenAI / 几乎所有大模型生态",
      "sourceLabel": "Google AI Glossary",
      "score": 57,
      "scoreBreakdown": "覆盖 15 · 频次 10 · 权重 12 · 位置 10 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Token",
      "chinese": "词元",
      "brief": "模型处理文本或多模态输入时使用的最小基本单位",
      "officialDefinition": "Google 将 token 定义为语言模型训练和预测时处理的原子单位，它可以是词、字符或子词，也可在多模态场景中表示其他基本单元。",
      "link": "https://developers.google.com/machine-learning/glossary#token",
      "source": "Google / OpenAI / 全部 API 语境",
      "sourceLabel": "Google AI Glossary",
      "score": 52,
      "scoreBreakdown": "覆盖 15 · 频次 8 · 权重 12 · 位置 7 · 术语 10"
    }
  ],
  "2026-06-24": [
    {
      "rank": 1,
      "english": "Agentic RAG",
      "chinese": "智能体检索增强生成",
      "brief": "让智能体自主规划检索、调用工具并整合证据回答问题的 RAG 方法",
      "officialDefinition": "IBM 将 Agentic RAG 描述为把 AI 智能体引入检索增强生成流程，使系统能够通过规划、推理和工具调用自主完成复杂的信息检索与回答任务。",
      "link": "https://www.ibm.com/think/topics/agentic-rag",
      "source": "IBM Think / Agentic RAG",
      "sourceLabel": "IBM Think",
      "score": 90,
      "scoreBreakdown": "覆盖 22 · 频次 24 · 权重 18 · 位置 16 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Multi-agent System",
      "chinese": "多智能体系统",
      "brief": "由多个分工协作的智能体共同规划、执行与校验复杂任务的系统",
      "officialDefinition": "Google ADK 将 multi-agent system 描述为由多个具有明确角色与职责的智能体协作完成任务的架构，智能体之间可通过委派、共享上下文和流程控制实现协同。",
      "link": "https://adk.dev/workflows/",
      "source": "Google ADK / Multi-agent systems",
      "sourceLabel": "Google ADK Docs",
      "score": 87,
      "scoreBreakdown": "覆盖 22 · 频次 22 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Constitutional AI",
      "chinese": "宪法式 AI",
      "brief": "用显式原则约束模型训练和输出行为的对齐方法",
      "officialDefinition": "Anthropic 将 Constitutional AI 描述为一种通过显式规则和原则来引导模型训练与输出行为的方法，用于提升安全性与可控性。",
      "link": "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback",
      "source": "Anthropic / 安全研究",
      "sourceLabel": "Anthropic",
      "score": 84,
      "scoreBreakdown": "覆盖 15 · 频次 20 · 权重 18 · 位置 21 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Constitutional Classifiers",
      "chinese": "宪法式分类器",
      "brief": "依据预设原则识别高风险内容并约束输出的安全分类器机制",
      "officialDefinition": "Anthropic 将 Constitutional Classifiers 描述为一类基于明确原则进行风险识别与输出约束的安全分类机制，用于提升模型可控性。",
      "link": "https://www.anthropic.com/research/constitutional-classifiers",
      "source": "Anthropic / 安全机制",
      "sourceLabel": "Anthropic",
      "score": 81,
      "scoreBreakdown": "覆盖 15 · 频次 19 · 权重 17 · 位置 20 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Long Context",
      "chinese": "长上下文",
      "brief": "模型在单次交互中处理超长输入与历史内容的能力",
      "officialDefinition": "Long Context 通常指模型在单次交互中可处理的大规模上下文能力，它直接影响长文档理解、多轮任务和复杂工作流表现。",
      "link": "https://developers.google.com/machine-learning/glossary#context-window",
      "source": "Google / 长文档工作流",
      "sourceLabel": "Google AI Glossary",
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 17 · 位置 12 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Structured Outputs",
      "chinese": "结构化输出",
      "brief": "让模型输出严格符合预设 JSON 或 schema 结构的能力",
      "officialDefinition": "OpenAI 将 Structured Outputs 描述为一种让模型输出严格匹配开发者指定结构的能力，适合表单抽取、工作流编排和可验证响应。",
      "link": "https://platform.openai.com/docs/guides/structured-outputs",
      "source": "OpenAI / 开发者应用层",
      "sourceLabel": "OpenAI Docs",
      "score": 77,
      "scoreBreakdown": "覆盖 22 · 频次 17 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Prompt Caching",
      "chinese": "提示缓存",
      "brief": "复用重复提示前缀计算结果以降低延迟和成本的缓存机制",
      "officialDefinition": "OpenAI 将 Prompt Caching 描述为对重复 prompt 前缀进行缓存复用的机制，可降低延迟和成本，尤其适合长会话与固定上下文工作流。",
      "link": "https://platform.openai.com/docs/guides/prompt-caching",
      "source": "OpenAI / 推理工程",
      "sourceLabel": "OpenAI Docs",
      "score": 74,
      "scoreBreakdown": "覆盖 15 · 频次 17 · 权重 17 · 位置 15 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Sandboxed Execution",
      "chinese": "沙箱执行",
      "brief": "把代码执行或工具调用限制在隔离受控环境中的安全机制",
      "officialDefinition": "Sandboxed Execution 指把模型可触发的执行能力限制在受控隔离环境中的机制，用来降低工具调用和代码执行风险。",
      "link": "https://platform.openai.com/docs/guides/tools-code-interpreter",
      "source": "OpenAI / Agent 工程",
      "sourceLabel": "OpenAI Docs",
      "score": 69,
      "scoreBreakdown": "覆盖 15 · 频次 16 · 权重 16 · 位置 12 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Computer-Using Agent",
      "chinese": "可操作计算机的智能体",
      "brief": "能够观察图形界面并操作鼠标键盘完成任务的智能体",
      "officialDefinition": "Computer-Using Agent 通常指能够理解图形界面、操作鼠标键盘并在真实软件环境里执行步骤的 AI 智能体。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / Agent 能力",
      "sourceLabel": "Anthropic",
      "score": 66,
      "scoreBreakdown": "覆盖 15 · 频次 15 · 权重 15 · 位置 11 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Workflow Agent",
      "chinese": "工作流智能体",
      "brief": "按照预设步骤、分支和控制逻辑协调多个任务环节的智能体",
      "officialDefinition": "Google ADK 将 workflow agent 定义为通过确定性的顺序、并行或循环控制流来编排子任务的智能体，用于将复杂流程拆解为可管理的执行步骤。",
      "link": "https://google.github.io/adk-docs/agents/workflow-agents/",
      "source": "Google ADK / Workflow agents",
      "sourceLabel": "Google ADK Docs",
      "score": 64,
      "scoreBreakdown": "覆盖 15 · 频次 14 · 权重 14 · 位置 11 · 术语 10"
    }
  ],
  "2026-06-25": [
    {
      "rank": 1,
      "english": "Structured Outputs",
      "chinese": "结构化输出",
      "brief": "让模型输出严格符合预设 JSON 或 schema 结构的能力",
      "officialDefinition": "OpenAI 将 Structured Outputs 描述为一种让模型输出严格匹配开发者指定结构的能力，适合表单抽取、工作流编排和可验证响应。",
      "link": "https://platform.openai.com/docs/guides/structured-outputs",
      "source": "OpenAI / 开发者应用层",
      "sourceLabel": "OpenAI Docs",
      "score": 90,
      "scoreBreakdown": "覆盖 24 · 频次 21 · 权重 18 · 位置 17 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Multi-agent System",
      "chinese": "多智能体系统",
      "brief": "由多个分工协作的智能体共同规划、执行与校验复杂任务的系统",
      "officialDefinition": "Google ADK 将 multi-agent system 描述为由多个具有明确角色与职责的智能体协作完成任务的架构，智能体之间可通过委派、共享上下文和流程控制实现协同。",
      "link": "https://adk.dev/workflows/",
      "source": "Google ADK / Multi-agent systems",
      "sourceLabel": "Google ADK Docs",
      "score": 87,
      "scoreBreakdown": "覆盖 23 · 频次 20 · 权重 18 · 位置 16 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Computer-Using Agent",
      "chinese": "可操作计算机的智能体",
      "brief": "能够观察图形界面并操作鼠标键盘完成任务的智能体",
      "officialDefinition": "Anthropic 将 Computer-Using Agent 描述为能够理解图形界面、操作鼠标键盘并在真实软件环境里执行步骤的 AI 智能体。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / Agent 能力",
      "sourceLabel": "Anthropic",
      "score": 84,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Agentic RAG",
      "chinese": "智能体检索增强生成",
      "brief": "让智能体自主规划检索、调用工具并整合证据回答问题的 RAG 方法",
      "officialDefinition": "IBM 将 Agentic RAG 描述为把 AI 智能体引入检索增强生成流程，使系统能够通过规划、推理和工具调用自主完成复杂的信息检索与回答任务。",
      "link": "https://www.ibm.com/think/topics/agentic-rag",
      "source": "IBM Think / Agentic RAG",
      "sourceLabel": "IBM Think",
      "score": 81,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 14 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Prompt Caching",
      "chinese": "提示缓存",
      "brief": "复用重复提示前缀计算结果以降低延迟和成本的缓存机制",
      "officialDefinition": "OpenAI 将 Prompt Caching 描述为对重复 prompt 前缀进行缓存复用的机制，可降低延迟和成本，尤其适合长会话与固定上下文工作流。",
      "link": "https://platform.openai.com/docs/guides/prompt-caching",
      "source": "OpenAI / 推理工程",
      "sourceLabel": "OpenAI Docs",
      "score": 79,
      "scoreBreakdown": "覆盖 20 · 频次 18 · 权重 17 · 位置 14 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Workflow Agent",
      "chinese": "工作流智能体",
      "brief": "按照预设步骤、分支和控制逻辑协调多个任务环节的智能体",
      "officialDefinition": "Google ADK 将 workflow agent 定义为通过确定性的顺序、并行或循环控制流来编排子任务的智能体，用于将复杂流程拆解为可管理的执行步骤。",
      "link": "https://google.github.io/adk-docs/agents/workflow-agents/",
      "source": "Google ADK / Workflow agents",
      "sourceLabel": "Google ADK Docs",
      "score": 76,
      "scoreBreakdown": "覆盖 19 · 频次 17 · 权重 16 · 位置 14 · 术语 10"
    },
    {
      "rank": 7,
      "english": "RSP",
      "chinese": "负责任扩展政策",
      "brief": "用分级风险阈值和安全要求约束前沿 AI 能力扩展的治理框架",
      "officialDefinition": "负责任扩展政策（Responsible Scaling Policy, RSP）是指一套在模型能力提升时同步提高安全评估与部署防护要求的政策框架，用于管理前沿 AI 的潜在严重风险。",
      "link": "https://www.anthropic.com/responsible-scaling-policy#:~:text=Responsible%20Scaling%20Policy",
      "source": "Anthropic / RSP",
      "sourceLabel": "Anthropic RSP",
      "score": 73,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 17 · 位置 12 · 术语 10"
    },
    {
      "rank": 8,
      "english": "ASL",
      "chinese": "AI 安全等级",
      "brief": "按模型潜在风险与所需防护强度划分的前沿 AI 安全分级体系",
      "officialDefinition": "AI 安全等级（AI Safety Levels, ASL）是指用于表示不同风险等级下所需安全评估、缓解和部署控制要求的前沿 AI 安全分级体系，等级越高代表潜在风险与防护要求越高。",
      "link": "https://www.anthropic.com/responsible-scaling-policy#:~:text=ASL",
      "source": "Anthropic / RSP",
      "sourceLabel": "Anthropic RSP",
      "score": 70,
      "scoreBreakdown": "覆盖 17 · 频次 16 · 权重 16 · 位置 11 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Constitutional Classifiers",
      "chinese": "宪法式分类器",
      "brief": "依据预设原则识别高风险内容并约束输出的安全分类器机制",
      "officialDefinition": "Anthropic 将 Constitutional Classifiers 描述为一类基于明确原则进行风险识别与输出约束的安全分类机制，用于提升模型可控性。",
      "link": "https://www.anthropic.com/research/constitutional-classifiers",
      "source": "Anthropic / 安全机制",
      "sourceLabel": "Anthropic",
      "score": 67,
      "scoreBreakdown": "覆盖 16 · 频次 15 · 权重 15 · 位置 11 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Sandboxed Execution",
      "chinese": "沙箱执行",
      "brief": "把代码执行或工具调用限制在隔离受控环境中的安全机制",
      "officialDefinition": "Sandboxed Execution 指把模型可触发的执行能力限制在受控隔离环境中的机制，用来降低工具调用和代码执行风险。",
      "link": "https://platform.openai.com/docs/guides/tools-code-interpreter",
      "source": "OpenAI / Agent 工程",
      "sourceLabel": "OpenAI Docs",
      "score": 64,
      "scoreBreakdown": "覆盖 16 · 频次 14 · 权重 15 · 位置 9 · 术语 10"
    }
  ],
  "2026-06-26": [
    {
      "rank": 1,
      "english": "Tracing",
      "chinese": "追踪",
      "brief": "记录模型调用、工具执行和中间步骤以便调试与评估的可观测机制",
      "officialDefinition": "OpenAI Agents SDK 文档将 tracing 描述为对代理运行过程进行记录与可视化的能力，用于查看模型调用、工具步骤、输入输出和耗时，以支持调试、评估与优化。",
      "link": "https://openai.github.io/openai-agents-python/tracing/",
      "source": "OpenAI / Agents SDK",
      "sourceLabel": "OpenAI SDK Docs",
      "score": 90,
      "scoreBreakdown": "覆盖 25 · 频次 22 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Handoffs",
      "chinese": "任务交接",
      "brief": "让一个智能体把当前任务上下文交给另一个更合适智能体继续处理的机制",
      "officialDefinition": "OpenAI Agents SDK 文档将 handoffs 描述为一种模式：智能体可以把对话和任务控制权转交给另一个更适合处理该请求的智能体。",
      "link": "https://openai.github.io/openai-agents-python/handoffs/",
      "source": "OpenAI / Agents SDK",
      "sourceLabel": "OpenAI SDK Docs",
      "score": 86,
      "scoreBreakdown": "覆盖 23 · 频次 20 · 权重 17 · 位置 16 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Verifier",
      "chinese": "验证器",
      "brief": "专门检查中间推理或最终结果是否满足目标要求的判定模块",
      "officialDefinition": "Hugging Face 在 agent glossary 中将 verifier 描述为用于检查代理步骤或最终答案是否正确、是否满足约束条件的组件，常用于提升复杂任务的可靠性。",
      "link": "https://huggingface.co/blog/agent-glossary#:~:text=Verifier",
      "source": "Hugging Face / 代理词汇表",
      "sourceLabel": "Hugging Face",
      "score": 83,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Reward Model",
      "chinese": "奖励模型",
      "brief": "把人类偏好或任务目标转成可打分信号的模型",
      "officialDefinition": "在现代代理与RLHF流程中，reward model 指根据人类偏好或任务目标为模型输出打分的模型，用来指导后续优化方向，使系统更符合预期行为。",
      "link": "https://huggingface.co/blog/agent-glossary#:~:text=reward%20model",
      "source": "Hugging Face / 偏好优化",
      "sourceLabel": "Hugging Face",
      "score": 80,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 17 · 位置 15 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Computer-Using Agent",
      "chinese": "电脑操作智能体",
      "brief": "能够读取图形界面并像人一样操作鼠标键盘完成任务的智能体",
      "officialDefinition": "Anthropic 将 Computer-Using Agent 描述为能够观察图形界面、操作鼠标和键盘，并在真实软件环境中完成任务的 AI 系统。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / Computer Use",
      "sourceLabel": "Anthropic",
      "score": 77,
      "scoreBreakdown": "覆盖 20 · 频次 17 · 权重 16 · 位置 14 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Constitutional Classifiers",
      "chinese": "宪法式分类器",
      "brief": "依据一组明确安全原则识别高风险内容并约束输出的分类器机制",
      "officialDefinition": "Anthropic 将 Constitutional Classifiers 描述为一类依据明确原则识别高风险内容并约束模型输出的安全分类器，用于提升系统的防护能力。",
      "link": "https://www.anthropic.com/research/constitutional-classifiers",
      "source": "Anthropic / 安全机制",
      "sourceLabel": "Anthropic",
      "score": 74,
      "scoreBreakdown": "覆盖 19 · 频次 16 · 权重 16 · 位置 13 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Sequential Workflow",
      "chinese": "顺序工作流",
      "brief": "按照固定先后顺序逐步执行子任务的工作流模式",
      "officialDefinition": "Google ADK 文档将 sequential workflow 描述为按既定顺序逐步推进的工作流模式，适合前一步输出成为后一步输入的任务。",
      "link": "https://adk.dev/agents/workflow-agents/sequential-agents/",
      "source": "Google ADK / 工作流模式",
      "sourceLabel": "Google ADK Docs",
      "score": 71,
      "scoreBreakdown": "覆盖 18 · 频次 15 · 权重 16 · 位置 12 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Parallel Workflow",
      "chinese": "并行工作流",
      "brief": "把多个可独立处理的子任务同时展开以缩短总耗时的工作流模式",
      "officialDefinition": "Google ADK 文档将 parallel workflow 描述为把可以独立执行的步骤并发处理，再在后续节点汇总结果的模式。",
      "link": "https://adk.dev/agents/workflow-agents/parallel-agents/",
      "source": "Google ADK / 工作流模式",
      "sourceLabel": "Google ADK Docs",
      "score": 68,
      "scoreBreakdown": "覆盖 17 · 频次 14 · 权重 15 · 位置 12 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Elicitation",
      "chinese": "补充征询",
      "brief": "协议允许服务器主动向用户请求补充信息以完成任务的交互机制",
      "officialDefinition": "Model Context Protocol 规范将 elicitation 描述为服务器向用户请求额外信息的机制，用于在执行工具或完成任务前补齐必要上下文。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation",
      "source": "MCP / 协议机制",
      "sourceLabel": "MCP Docs",
      "score": 65,
      "scoreBreakdown": "覆盖 16 · 频次 13 · 权重 15 · 位置 11 · 术语 10"
    },
    {
      "rank": 10,
      "english": "MoE",
      "chinese": "混合专家模型",
      "brief": "只激活部分专家子网络来提升容量与效率的模型架构",
      "officialDefinition": "混合专家模型（Mixture of Experts, MoE）是一种把多个专家网络组合在一起、并按输入选择性激活其中少数专家进行计算的模型架构，以在扩大模型容量的同时控制计算成本。",
      "link": "https://www.nvidia.com/en-us/glossary/mixture-of-experts/",
      "source": "NVIDIA / 模型架构",
      "sourceLabel": "NVIDIA Glossary",
      "score": 63,
      "scoreBreakdown": "覆盖 15 · 频次 13 · 权重 15 · 位置 10 · 术语 10"
    }
  ],
  "2026-06-27": [
    {
      "rank": 1,
      "english": "Task Decomposition",
      "chinese": "任务分解",
      "brief": "把复杂目标拆成多个可规划、可执行、可校验子任务的智能体方法",
      "officialDefinition": "Google ADK 文档将多智能体系统描述为通过委派和专门智能体协同处理复杂任务；任务分解就是把目标拆成可由不同步骤或智能体承担的子任务。",
      "link": "https://adk.dev/workflows/",
      "source": "Google ADK / 智能体架构",
      "sourceLabel": "Google ADK Docs",
      "related": [
        "AI Agent",
        "Task",
        "Multi-agent System"
      ],
      "score": 91,
      "scoreBreakdown": "覆盖 26 · 频次 22 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 2,
      "english": "ReAct",
      "chinese": "推理-行动方法",
      "brief": "让模型交替生成推理步骤和外部行动以完成信息查询或工具任务的方法",
      "officialDefinition": "Google Research 将 ReAct 描述为一种让语言模型交错生成 reasoning traces 和 task-specific actions 的方法，使模型能在推理过程中调用外部信息并更新行动计划。",
      "link": "https://research.google/blog/react-synergizing-reasoning-and-acting-in-language-models/",
      "source": "Google Research / Agent 方法",
      "sourceLabel": "Google Research",
      "related": [
        "Reasoning Model",
        "Tool Use",
        "Chain of Thought"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Plan-and-Execute",
      "chinese": "规划-执行",
      "brief": "先生成整体计划再逐步执行并根据结果调整的智能体工作流模式",
      "officialDefinition": "LangGraph 将 plan-and-execute 描述为先由规划器制定多步骤计划，再由执行器逐步完成各步骤的智能体架构，适合需要显式规划的复杂任务。",
      "link": "https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/plan-and-execute/",
      "source": "LangGraph / Agent 工作流",
      "sourceLabel": "LangGraph Docs",
      "related": [
        "Agentic Workflow",
        "AI Workflow",
        "Task"
      ],
      "score": 83,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 17 · 位置 15 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Reflection Loop",
      "chinese": "反思循环",
      "brief": "让模型审阅自身输出、提出修改意见并再次生成结果的自我改进流程",
      "officialDefinition": "LangGraph reflection 示例将反思流程描述为由生成器产生初稿，再由反思步骤给出批评或修订建议，随后继续迭代改进输出的代理模式。",
      "link": "https://langchain-ai.github.io/langgraph/tutorials/reflection/reflection/",
      "source": "LangGraph / Agent 反思",
      "sourceLabel": "LangGraph Docs",
      "related": [
        "Verifier",
        "AI Agent",
        "Scaffolding"
      ],
      "score": 79,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 17 · 位置 14 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Agentic RAG",
      "chinese": "智能体检索增强生成",
      "brief": "让智能体自主规划检索、调用工具并整合证据回答问题的 RAG 方法",
      "officialDefinition": "IBM 将 Agentic RAG 描述为把 AI 智能体引入检索增强生成流程，使系统能够通过规划、推理和工具调用自主完成复杂的信息检索与回答任务。",
      "link": "https://www.ibm.com/think/topics/agentic-rag",
      "source": "IBM / LlamaIndex / 中文 RAG 社区",
      "sourceLabel": "IBM Think",
      "related": [
        "RAG",
        "AI Agent",
        "Tool Use"
      ],
      "score": 76,
      "scoreBreakdown": "覆盖 20 · 频次 17 · 权重 16 · 位置 13 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Hybrid Search",
      "chinese": "混合检索",
      "brief": "结合关键词检索和向量检索以同时利用精确匹配与语义相似性的检索方法",
      "officialDefinition": "Pinecone 将 hybrid search 描述为结合稀疏向量和稠密向量的检索方式，用于同时捕捉关键词匹配和语义相似性。",
      "link": "https://www.pinecone.io/learn/hybrid-search/",
      "source": "Pinecone / 检索工程",
      "sourceLabel": "Pinecone Learn",
      "related": [
        "Vector Database",
        "Embedding",
        "RAG"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 19 · 频次 16 · 权重 16 · 位置 12 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Reranker",
      "chinese": "重排序器",
      "brief": "对初检索结果重新评分排序以把更相关证据放到前面的检索组件",
      "officialDefinition": "Cohere 文档将 rerank 描述为对搜索返回的一组文档按与查询的相关性重新排序的能力，用于把最有用的上下文排在更靠前位置。",
      "link": "https://docs.cohere.com/docs/reranking-with-cohere",
      "source": "Cohere / 检索重排",
      "sourceLabel": "Cohere Docs",
      "related": [
        "RAG",
        "Embedding",
        "AI Benchmarks"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 18 · 频次 15 · 权重 15 · 位置 12 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Query Rewriting",
      "chinese": "查询改写",
      "brief": "把用户原始问题改写成更适合检索或工具调用的查询表达",
      "officialDefinition": "LlamaIndex 查询转换文档展示了将原始查询改写、拆分或转换为更适合检索系统处理的查询形式，以提升后续检索和问答质量。",
      "link": "https://docs.llamaindex.ai/en/stable/examples/query_transformations/query_transform_cookbook/",
      "source": "LlamaIndex / 查询转换",
      "sourceLabel": "LlamaIndex Docs",
      "related": [
        "Prompt Engineering",
        "RAG",
        "Semantic Analysis"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 17 · 频次 14 · 权重 15 · 位置 11 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Grounding",
      "chinese": "事实锚定",
      "brief": "把模型回答锚定到外部证据或可信数据源以降低幻觉的生成约束",
      "officialDefinition": "Google Cloud Vertex AI 文档将 grounding 描述为把模型输出连接到可验证信息源的机制，使回答能基于指定数据或搜索结果生成并减少无依据内容。",
      "link": "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
      "source": "Google Cloud / 生成式 AI",
      "sourceLabel": "Google Cloud Docs",
      "related": [
        "RAG",
        "Hallucination",
        "AI Safety"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 16 · 频次 13 · 权重 15 · 位置 10 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Agent State",
      "chinese": "智能体状态",
      "brief": "在智能体图或工作流中保存当前上下文、变量和中间结果的共享状态",
      "officialDefinition": "LangGraph 将 state 描述为图运行时在节点之间共享和更新的数据结构，用于保存输入、消息、中间结果和控制流程所需的上下文。",
      "link": "https://langchain-ai.github.io/langgraph/concepts/low_level/#state",
      "source": "LangGraph / 状态管理",
      "sourceLabel": "LangGraph Docs",
      "related": [
        "AI Agent",
        "Context Engineering",
        "AI Workflow"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 15 · 频次 13 · 权重 14 · 位置 9 · 术语 10"
    }
  ],
  "2026-06-28": [
    {
      "rank": 1,
      "english": "Test-Time Compute",
      "chinese": "测试时计算",
      "brief": "在推理阶段投入更多计算用于思考、搜索或验证以提升输出质量的扩展方法",
      "officialDefinition": "OpenAI 在 reasoning 研究中将 test-time compute 描述为模型在回答前使用更多推理计算来解决更难问题的方向，与单纯扩大训练计算相对应。",
      "link": "https://openai.com/index/learning-to-reason-with-llms/",
      "source": "OpenAI / 推理研究",
      "sourceLabel": "OpenAI Research",
      "related": [
        "Reasoning Model",
        "Inference",
        "Scaling Laws"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 27 · 频次 22 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Process Reward Model",
      "chinese": "过程奖励模型",
      "brief": "对推理过程中的每一步进行评分而不只评价最终答案的奖励模型",
      "officialDefinition": "OpenAI 过程监督研究将 process supervision 描述为对模型推理过程中的每一步提供反馈，过程奖励模型则用于判断中间步骤是否朝正确解法推进。",
      "link": "https://openai.com/index/improving-mathematical-reasoning-with-process-supervision/",
      "source": "OpenAI / 过程监督",
      "sourceLabel": "OpenAI Research",
      "related": [
        "Reward Model",
        "Reasoning Model",
        "Verifier"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 24 · 频次 21 · 权重 18 · 位置 15 · 术语 10"
    },
    {
      "rank": 3,
      "english": "GRPO",
      "chinese": "组相对策略优化",
      "brief": "用同组样本相对奖励进行策略优化以降低奖励基线依赖的强化学习方法",
      "officialDefinition": "GRPO（Group Relative Policy Optimization）是 Hugging Face TRL 支持的强化学习训练方法，通过对同一提示下多份输出进行相对奖励比较来优化语言模型策略。",
      "link": "https://huggingface.co/docs/trl/grpo_trainer",
      "source": "Hugging Face / RL 训练",
      "sourceLabel": "Hugging Face Docs",
      "related": [
        "Reinforcement Learning",
        "RLHF",
        "Reward"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 23 · 频次 19 · 权重 18 · 位置 14 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Knowledge Distillation",
      "chinese": "知识蒸馏",
      "brief": "让小模型学习大模型输出或中间行为以保留能力并降低部署成本的方法",
      "officialDefinition": "IBM 将 knowledge distillation 描述为把大型复杂模型的知识转移给更小模型的机器学习方法，使小模型在更低资源消耗下接近教师模型表现。",
      "link": "https://www.ibm.com/think/topics/knowledge-distillation",
      "source": "IBM Think / 模型压缩",
      "sourceLabel": "IBM Think",
      "related": [
        "Model",
        "Training Data",
        "Inference"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 21 · 频次 18 · 权重 17 · 位置 14 · 术语 10"
    },
    {
      "rank": 5,
      "english": "GraphRAG",
      "chinese": "图谱增强检索生成",
      "brief": "把知识图谱结构引入 RAG 以提升全局关系理解和复杂问答能力的方法",
      "officialDefinition": "Microsoft GraphRAG 文档将 GraphRAG 描述为一种结构化、层次化的 RAG 方法，通过从文本中构建知识图谱与社区摘要来增强全局问题回答和复杂信息综合。",
      "link": "https://microsoft.github.io/graphrag/",
      "source": "Microsoft / 企业知识库 / RAG 社区",
      "sourceLabel": "Microsoft GraphRAG",
      "related": [
        "RAG",
        "Knowledge Graph",
        "Vector Database"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 20 · 频次 17 · 权重 17 · 位置 13 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Activation Steering",
      "chinese": "激活引导",
      "brief": "通过修改模型内部激活方向来增强或抑制特定行为的可解释性技术",
      "officialDefinition": "Anthropic feature steering 研究描述了通过调节模型内部特征激活来影响模型输出行为的方法，用于研究和控制模型中的可解释特征。",
      "link": "https://www.anthropic.com/research/evaluating-feature-steering",
      "source": "Anthropic / 机制解释性",
      "sourceLabel": "Anthropic Research",
      "related": [
        "Explainable AI",
        "Neural Network",
        "Weights"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 19 · 频次 16 · 权重 16 · 位置 12 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Circuit Tracing",
      "chinese": "电路追踪",
      "brief": "追踪神经网络内部特征与计算路径以解释模型生成原因的方法",
      "officialDefinition": "Anthropic 将 circuit tracing 描述为识别并追踪语言模型内部计算电路的研究方法，用于解释模型如何从输入特征推导到输出行为。",
      "link": "https://www.anthropic.com/research/tracing-thoughts-language-model",
      "source": "Anthropic / 机制解释性",
      "sourceLabel": "Anthropic Research",
      "related": [
        "Explainable AI",
        "Neural Network",
        "Transformer"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 18 · 频次 15 · 权重 15 · 位置 12 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Model Merging",
      "chinese": "模型合并",
      "brief": "把多个已训练模型或适配器的参数组合成一个模型以融合能力的方法",
      "officialDefinition": "Hugging Face PEFT 文档将 model merging 描述为把多个 LoRA 适配器或模型权重进行合并的技术，用于组合不同微调能力并减少推理时的适配器切换。",
      "link": "https://huggingface.co/docs/peft/developer_guides/model_merging",
      "source": "Hugging Face / PEFT",
      "sourceLabel": "Hugging Face Docs",
      "related": [
        "LoRA",
        "Fine-tuning",
        "Weights"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 17 · 频次 14 · 权重 15 · 位置 11 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Evaluation Harness",
      "chinese": "评测框架",
      "brief": "统一加载任务、模型和指标以批量评估语言模型能力的工具框架",
      "officialDefinition": "EleutherAI lm-evaluation-harness 是用于评测语言模型的开源框架，提供任务集合、模型接口和指标计算流程，便于可复现地比较模型能力。",
      "link": "https://github.com/EleutherAI/lm-evaluation-harness",
      "source": "EleutherAI / 开源评测",
      "sourceLabel": "EleutherAI GitHub",
      "related": [
        "AI Benchmarks",
        "LLM",
        "Model"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 16 · 频次 13 · 权重 15 · 位置 10 · 术语 10"
    },
    {
      "rank": 10,
      "english": "AI Red Teaming",
      "chinese": "AI 红队测试",
      "brief": "通过对抗性测试主动发现模型安全、滥用和失效风险的评估方法",
      "officialDefinition": "NIST 将 AI red-teaming 描述为一种结构化测试活动，由测试者以对抗方式发现 AI 系统中的风险、脆弱性和潜在失效模式。",
      "link": "https://airc.nist.gov/docs/AI_RMF_Playbook.pdf",
      "source": "NIST / AI 风险管理",
      "sourceLabel": "NIST AI RMF",
      "related": [
        "AI Safety",
        "AI Ethics",
        "Guardrails"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 15 · 频次 13 · 权重 14 · 位置 9 · 术语 10"
    }
  ],
  "2026-06-29": [
    {
      "rank": 1,
      "english": "Computer-Using Agent",
      "chinese": "电脑操作智能体",
      "brief": "能看懂图形界面并直接操作鼠标键盘完成任务的智能体系统",
      "officialDefinition": "Anthropic 将 Computer-Using Agent 描述为能够观察图形界面、操作鼠标和键盘，并在真实软件环境中完成任务的 AI 系统。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / OpenAI / 中文社区讨论",
      "sourceLabel": "Anthropic",
      "related": [
        "AI Agent",
        "Tool Use",
        "AI Browser"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 32 · 频次 27 · 权重 18 · 位置 19 · 时效 10"
    },
    {
      "rank": 2,
      "english": "AI Browser",
      "chinese": "AI浏览器",
      "brief": "把网页理解、浏览和操作能力直接交给智能体的浏览器形态",
      "officialDefinition": "Browser Use 将其定位为让 AI 像人类一样使用网站的基础设施，使智能体能够读取页面、点击按钮、填写表单并执行网页任务。",
      "link": "https://browser-use.com/",
      "source": "Browser Use / Agent 社区 / 中文讨论",
      "sourceLabel": "Browser Use",
      "related": [
        "AI Agent",
        "Tool Use",
        "Computer-Using Agent"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 30 · 频次 25 · 权重 18 · 位置 18 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Deep Research",
      "chinese": "深度研究",
      "brief": "让智能体自主检索、比对和综合多来源信息后输出研究结果的能力",
      "officialDefinition": "OpenAI 将 deep research 描述为一种能够在互联网上多步骤查找、分析并综合信息，生成达到分析师水平研究报告的智能体能力。",
      "link": "https://openai.com/index/introducing-deep-research/",
      "source": "OpenAI / 知识工作流 / 中文社区讨论",
      "sourceLabel": "OpenAI",
      "related": [
        "AI Agent",
        "MCP",
        "Tool Use"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 28 · 频次 23 · 权重 18 · 位置 17 · 时效 10"
    },
    {
      "rank": 4,
      "english": "Coding Agent",
      "chinese": "编程代理",
      "brief": "能读代码、改代码、跑测试并持续迭代实现方案的开发型智能体",
      "officialDefinition": "OpenAI 将 Codex 描述为云端软件工程智能体，能够并行处理多个任务，例如编写功能、回答代码库问题、修复 bug 和提出拉取请求。",
      "link": "https://openai.com/index/introducing-codex/",
      "source": "OpenAI / 开发者社区 / Vibe Coding 讨论",
      "sourceLabel": "OpenAI Codex",
      "related": [
        "AI Agent",
        "Tool Use",
        "Vibe Coding"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 26 · 频次 22 · 权重 17 · 位置 16 · 时效 10"
    },
    {
      "rank": 5,
      "english": "Tool Calling",
      "chinese": "工具调用",
      "brief": "让模型用结构化参数请求外部函数或系统执行动作的能力",
      "officialDefinition": "OpenAI 文档将 function calling 描述为让模型连接外部工具与 API 的方式，使其能够以结构化参数请求执行具体动作。",
      "link": "https://platform.openai.com/docs/guides/function-calling",
      "source": "OpenAI / MCP 生态 / Agent 开发社区",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "Tool Use",
        "AI Agent",
        "MCP"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 17 · 位置 15 · 时效 10"
    },
    {
      "rank": 6,
      "english": "MCP Sampling",
      "chinese": "MCP采样",
      "brief": "由 MCP 服务器请求客户端发起模型生成并返回结果的协议能力",
      "officialDefinition": "MCP Sampling（Model Context Protocol Sampling）是 MCP 规范中的客户端能力，允许服务器向客户端发起模型采样请求，由客户端控制模型访问、权限确认和最终生成。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/sampling",
      "source": "MCP / 开发者社区 / Agent 协议讨论",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Use",
        "LLM"
      ],
      "score": 76,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 16 · 位置 15 · 时效 10"
    },
    {
      "rank": 7,
      "english": "Agent Memory",
      "chinese": "智能体记忆",
      "brief": "让智能体跨步骤和跨轮次保存偏好、事实与任务状态的机制",
      "officialDefinition": "LangChain 将 memory 描述为让智能体保存并使用信息的能力，常见内容包括对话历史、用户偏好、长期事实和任务状态，用于提升跨会话连续性。",
      "link": "https://docs.langchain.com/oss/python/concepts/memory",
      "source": "LangChain / 多智能体实践 / 中文社区讨论",
      "sourceLabel": "LangChain Docs",
      "related": [
        "AI Agent",
        "Context Window",
        "Task"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 20 · 频次 18 · 权重 16 · 位置 14 · 时效 10"
    },
    {
      "rank": 8,
      "english": "Tool Guardrails",
      "chinese": "工具防护栏",
      "brief": "在工具调用前后检查风险并拦截高危动作的安全机制",
      "officialDefinition": "OpenAI Agents SDK 将 guardrails 描述为可与智能体并行运行的安全检查，能够验证用户输入或智能体输出，并在触发风险时中断执行。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "OpenAI / Agent 安全工程 / 中文讨论",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Guardrails",
        "Tool Calling",
        "AI Safety"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 19 · 频次 17 · 权重 15 · 位置 14 · 时效 10"
    },
    {
      "rank": 9,
      "english": "Agent Evals",
      "chinese": "智能体评测",
      "brief": "围绕轨迹、工具调用和最终结果质量评估智能体表现的方法",
      "officialDefinition": "OpenAI Evals 文档将 evals 描述为用于衡量模型或系统输出质量的评估流程；在智能体场景中，它会覆盖工具调用、轨迹、约束满足和最终答案质量。",
      "link": "https://platform.openai.com/docs/guides/evals",
      "source": "OpenAI / Agent 评测实践 / 中文社区讨论",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "AI Benchmarks",
        "AI Agent",
        "Guardrails"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 15 · 位置 13 · 时效 10"
    },
    {
      "rank": 10,
      "english": "GraphRAG",
      "chinese": "图谱增强检索生成",
      "brief": "把知识图谱结构引入 RAG 以提升全局关系理解和复杂问答能力的方法",
      "officialDefinition": "Microsoft GraphRAG 文档将 GraphRAG 描述为一种结构化、层次化的 RAG 方法，通过从文本中构建知识图谱与社区摘要来增强全局问题回答和复杂信息综合。",
      "link": "https://microsoft.github.io/graphrag/",
      "source": "Microsoft / 企业知识库 / RAG 社区",
      "sourceLabel": "Microsoft GraphRAG",
      "related": [
        "RAG",
        "Knowledge Graph",
        "Vector Database"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 17 · 频次 15 · 权重 15 · 位置 12 · 时效 10"
    }
  ],
  "2026-06-30": [
    {
      "rank": 1,
      "english": "Deep Research",
      "chinese": "深度研究",
      "brief": "让AI自主检索、比对和综合多来源信息后交付研究结果的智能体能力",
      "officialDefinition": "OpenAI 将 deep research 描述为一种能够在互联网上多步骤查找、分析并综合信息，生成达到分析师水平研究报告的智能体能力。",
      "link": "https://openai.com/index/introducing-deep-research/",
      "source": "OpenAI / 中文科技媒体 / AI 社区讨论",
      "sourceLabel": "OpenAI",
      "related": [
        "AI Agent",
        "RAG",
        "Tool Use"
      ],
      "score": 95,
      "scoreBreakdown": "覆盖 29 · 28 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "MCP Elicitation",
      "chinese": "MCP 交互式补充信息请求",
      "brief": "让 MCP 服务器在执行过程中向用户请求缺失信息并继续完成任务的协议能力",
      "officialDefinition": "MCP Elicitation 是 Model Context Protocol 的客户端能力，允许服务器在需要更多信息时向客户端请求结构化用户输入，由客户端控制展示、确认与返回。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation",
      "source": "MCP 规范 / GitHub 动态 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Calling",
        "Structured Outputs"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 28 · 27 · 权重 17 · 位置 10 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Agent Tracing",
      "chinese": "智能体轨迹追踪",
      "brief": "记录智能体运行中的模型调用、工具调用和中间步骤以便调试与评估",
      "officialDefinition": "OpenAI Agents SDK 将 tracing 描述为智能体工作流的内置记录能力，可捕获 LLM 生成、工具调用、handoff、guardrail 与自定义 span，便于调试、可视化和监控。",
      "link": "https://openai.github.io/openai-agents-python/tracing/",
      "source": "OpenAI Agents SDK / GitHub 动态 / 开发者社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "AI Agent",
        "Agent Evals",
        "Tool Guardrails"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 27 · 24 · 权重 17 · 位置 10 · 时效 10"
    },
    {
      "rank": 4,
      "english": "PagedAttention",
      "chinese": "分页注意力",
      "brief": "把注意力键值缓存按页管理以提升大模型推理吞吐和显存利用率的机制",
      "officialDefinition": "vLLM 将 PagedAttention 描述为一种受操作系统虚拟内存启发的注意力算法，通过把 KV cache 切分为块并按需映射，减少显存碎片并提高批量推理效率。",
      "link": "https://docs.vllm.ai/en/latest/design/paged_attention/",
      "source": "vLLM / GitHub 开源动态 / 推理优化讨论",
      "sourceLabel": "vLLM Docs",
      "related": [
        "Inference",
        "Token",
        "Prompt Caching"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 24 · 22 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 5,
      "english": "Automatic Prefix Caching",
      "chinese": "自动前缀缓存",
      "brief": "自动复用相同提示前缀的 KV 缓存以降低重复推理成本的服务端机制",
      "officialDefinition": "vLLM 将 Automatic Prefix Caching 描述为自动缓存并复用请求之间相同前缀的 KV cache，从而减少重复计算并提升长上下文推理效率。",
      "link": "https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/",
      "source": "vLLM / 推理服务社区 / 开源动态",
      "sourceLabel": "vLLM Docs",
      "related": [
        "Prompt Caching",
        "Inference",
        "Token"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 23 · 21 · 权重 17 · 位置 9 · 时效 10"
    },
    {
      "rank": 6,
      "english": "LLM-as-a-Judge",
      "chinese": "大模型裁判评测",
      "brief": "让大模型按评分标准评判回答质量、偏好或约束满足情况的评测方法",
      "officialDefinition": "OpenAI Evals 的 model grader 是一种用模型根据评分标准判断输出质量的评测器，可用于比较答案、检查约束满足和生成自动化评分。",
      "link": "https://platform.openai.com/docs/guides/evals",
      "source": "OpenAI Evals / 评测实践 / 中文技术讨论",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "AI Benchmarks",
        "Agent Evals",
        "Reward Model"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 17 · 位置 8 · 时效 10"
    },
    {
      "rank": 7,
      "english": "Agent Handoff",
      "chinese": "智能体交接",
      "brief": "让一个智能体把任务转交给更适合的另一个智能体继续处理的协作机制",
      "officialDefinition": "OpenAI Agents SDK 将 handoff 定义为智能体之间的任务委派机制，当前智能体可以把对话或任务控制权交给另一个更专门的智能体。",
      "link": "https://openai.github.io/openai-agents-python/handoffs/",
      "source": "OpenAI Agents SDK / 多智能体讨论 / 中文社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "AI Agent",
        "Multi-agent System",
        "Workflow Agent"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 8 · 时效 8"
    },
    {
      "rank": 8,
      "english": "Agent Observability",
      "chinese": "智能体可观测性",
      "brief": "用日志、轨迹、指标和回放来观察智能体为何这样执行任务的工程能力",
      "officialDefinition": "LangSmith 将 observability 用于追踪、评估和调试 LLM 应用与智能体运行过程，帮助团队查看每一步调用、状态、输入输出和失败原因。",
      "link": "https://docs.langchain.com/langsmith/observability",
      "source": "LangChain / LangSmith / 开发者社区",
      "sourceLabel": "LangSmith Docs",
      "related": [
        "Agent Tracing",
        "Agent Evals",
        "AI Agent"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 19 · 频次 18 · 权重 17 · 位置 8 · 时效 8"
    },
    {
      "rank": 9,
      "english": "Synthetic Data Generation",
      "chinese": "合成数据生成",
      "brief": "用算法或模型生成可用于训练、评测或隐私保护场景的数据样本的方法",
      "officialDefinition": "IBM 将 synthetic data 描述为由算法或模拟生成而非直接从真实事件收集的数据，可用于训练模型、测试系统和补充稀缺或敏感数据场景。",
      "link": "https://www.ibm.com/think/topics/synthetic-data",
      "source": "IBM Think / 数据工程讨论 / 中文技术社区",
      "sourceLabel": "IBM Think",
      "related": [
        "Training Data",
        "Data Augmentation",
        "Fine-tuning"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 16 · 位置 7 · 时效 10"
    },
    {
      "rank": 10,
      "english": "AI RMF",
      "chinese": "AI 风险管理框架",
      "brief": "用于识别、衡量、管理和治理 AI 系统风险的标准化框架",
      "officialDefinition": "NIST AI Risk Management Framework 是面向 AI 风险治理的自愿性框架，围绕 govern、map、measure、manage 等功能帮助组织识别、评估和管理 AI 风险。",
      "link": "https://www.nist.gov/itl/ai-risk-management-framework",
      "source": "NIST / AI 安全治理 / 中文政策技术讨论",
      "sourceLabel": "NIST",
      "related": [
        "AI Safety",
        "AI Ethics",
        "AI Red Teaming"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 17 · 频次 15 · 权重 16 · 位置 6 · 时效 10"
    }
  ],
  "2026-07-01": [
    {
      "rank": 1,
      "english": "Deep Research",
      "chinese": "深度研究",
      "brief": "让AI自主检索、比对和综合多来源信息后交付研究结果的智能体能力",
      "officialDefinition": "OpenAI 将 deep research 描述为一种能够在互联网上多步骤查找、分析并综合信息，生成达到分析师水平研究报告的智能体能力。",
      "link": "https://openai.com/index/introducing-deep-research/",
      "source": "OpenAI / 中文科技媒体 / AI 社区讨论",
      "sourceLabel": "OpenAI",
      "related": [
        "AI Agent",
        "RAG",
        "Tool Use"
      ],
      "score": 95,
      "scoreBreakdown": "覆盖 28 · 频次 27 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "LLM-as-a-Judge",
      "chinese": "大模型裁判评测",
      "brief": "让大模型按评分标准评判回答质量、偏好或约束满足情况的评测方法",
      "officialDefinition": "OpenAI Evals 的 model grader 是一种用模型根据评分标准判断输出质量的评测器，可用于比较答案、检查约束满足和生成自动化评分。",
      "link": "https://platform.openai.com/docs/guides/evals",
      "source": "OpenAI Evals / 评测实践 / 中文技术讨论",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "AI Benchmarks",
        "Responsible AI",
        "Prompt Engineering"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 27 · 频次 25 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Browser Agent",
      "chinese": "浏览器智能体",
      "brief": "能够自主浏览网页、点击页面元素并完成在线任务的AI智能体",
      "officialDefinition": "Browser Use 将其定位为让 AI 像人类一样使用网站的基础设施，使智能体能够读取页面、点击按钮、填写表单并执行网页任务。",
      "link": "https://browser-use.com/",
      "source": "Browser Use / 中文科技媒体 / 开发者社区",
      "sourceLabel": "Browser Use",
      "related": [
        "AI Agent",
        "Tool Use",
        "Computer Vision"
      ],
      "score": 89,
      "scoreBreakdown": "覆盖 25 · 频次 24 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 4,
      "english": "Model Grader",
      "chinese": "模型评分器",
      "brief": "按预设标准自动评判模型输出质量和约束满足情况的评分机制",
      "officialDefinition": "OpenAI Evals 文档中的 model grader 是使用模型依据给定评分标准对答案进行比较、打分或裁决的评测器。",
      "link": "https://platform.openai.com/docs/guides/evals",
      "source": "OpenAI Evals / 自动评测讨论 / 中文技术社区",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "AI Benchmarks",
        "Prompt Engineering",
        "Responsible AI"
      ],
      "score": 85,
      "scoreBreakdown": "覆盖 24 · 频次 23 · 权重 18 · 位置 9 · 时效 10"
    },
    {
      "rank": 5,
      "english": "MCP Roots",
      "chinese": "MCP 根上下文",
      "brief": "让客户端向 MCP 服务器声明可访问工作目录或根路径范围的协议能力",
      "officialDefinition": "MCP Roots 是 Model Context Protocol 的客户端能力，用于向服务器声明可用的根路径或工作目录范围，帮助服务器了解可访问的本地上下文边界。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/roots",
      "source": "MCP 规范 / GitHub 动态 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Use",
        "AI Workflow"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 23 · 频次 22 · 权重 18 · 位置 8 · 时效 10"
    },
    {
      "rank": 6,
      "english": "MCP Prompts",
      "chinese": "MCP 提示模板",
      "brief": "让服务器向客户端暴露可复用提示模板供模型或用户调用的协议对象",
      "officialDefinition": "MCP Prompts 是 Model Context Protocol 中由服务器暴露的提示模板对象，可用于向客户端提供结构化、可复用的提示内容与参数化调用方式。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/prompts",
      "source": "MCP 规范 / 开源工具链 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Prompt Engineering",
        "Tool Use"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 22 · 频次 21 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 7,
      "english": "KV Cache",
      "chinese": "键值缓存",
      "brief": "在生成过程中缓存注意力键值以减少重复计算并提升推理速度的机制",
      "officialDefinition": "KV Cache（Key-Value Cache）是 Transformer 推理时缓存先前 token 的 key 和 value 表示的机制，可避免每步重复计算并提升生成效率。",
      "link": "https://huggingface.co/docs/transformers/main/cache_explanation",
      "source": "Hugging Face Docs / 推理优化讨论 / 开发者社区",
      "sourceLabel": "Hugging Face Docs",
      "related": [
        "Inference",
        "Transformer",
        "Token"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 21 · 频次 20 · 权重 17 · 位置 7 · 时效 8"
    },
    {
      "rank": 8,
      "english": "Reasoning Tokens",
      "chinese": "推理令牌",
      "brief": "模型在给出最终答案前用于内部推理和规划的额外生成令牌",
      "officialDefinition": "OpenAI 在 reasoning 指南中将 reasoning tokens 描述为模型在给出最终答案前用于思考、规划和处理复杂问题的额外 token 消耗。",
      "link": "https://platform.openai.com/docs/guides/reasoning",
      "source": "OpenAI / 推理模型讨论 / 中文技术社区",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "Reasoning Model",
        "Token",
        "Chain of Thought"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 19 · 权重 16 · 位置 7 · 时效 7"
    },
    {
      "rank": 9,
      "english": "Reasoning Effort",
      "chinese": "推理强度",
      "brief": "控制模型在回答前投入多少推理计算与思考步骤的设置项",
      "officialDefinition": "OpenAI 在 reasoning 指南中将 reasoning effort 用作控制模型在回答前投入多少推理计算的设置，用于在速度、成本与解题能力之间做权衡。",
      "link": "https://platform.openai.com/docs/guides/reasoning",
      "source": "OpenAI / 推理模型实践 / AI 社区讨论",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "Reasoning Model",
        "Token",
        "Prompt Engineering"
      ],
      "score": 65,
      "scoreBreakdown": "覆盖 19 · 频次 18 · 权重 15 · 位置 6 · 时效 7"
    },
    {
      "rank": 10,
      "english": "GUI Agent",
      "chinese": "图形界面智能体",
      "brief": "能够理解并操作图形用户界面的智能体形态",
      "officialDefinition": "Anthropic 在 computer use 介绍中展示的系统是一类能够观察图形界面、操作鼠标和键盘并在真实软件环境中完成任务的 AI 代理，这类系统通常可归为 GUI Agent。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / GUI 自动化讨论 / 中文科技媒体",
      "sourceLabel": "Anthropic",
      "related": [
        "AI Agent",
        "Computer Vision",
        "Tool Use"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 18 · 频次 17 · 权重 14 · 位置 6 · 时效 6"
    }
  ],
  "2026-07-02": [
    {
      "rank": 1,
      "english": "Browser Agent",
      "chinese": "浏览器智能体",
      "brief": "能够自主浏览网页、点击页面元素并完成在线任务的AI智能体",
      "officialDefinition": "Browser Use 将 Browser Agent 描述为让 AI 像人类一样使用网站的基础设施，使智能体能够读取页面、点击按钮、填写表单并执行网页任务。",
      "link": "https://browser-use.com/",
      "source": "Browser Use / GitHub / 中文科技媒体 / 开发者社区",
      "sourceLabel": "Browser Use",
      "related": [
        "AI Agent",
        "Tool Use",
        "Computer Using Agent"
      ],
      "score": 95,
      "scoreBreakdown": "覆盖 28 · 频次 27 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "Computer Use",
      "chinese": "计算机使用能力",
      "brief": "让AI直接观察并操作真实电脑界面的通用能力",
      "officialDefinition": "Anthropic 将 computer use 描述为让模型像人类一样查看屏幕、移动光标、点击按钮和输入文本，从而在真实计算机环境中完成任务的能力。",
      "link": "https://www.anthropic.com/news/developing-computer-use#:~:text=The%20next%20frontier%20is%20computer%20use",
      "source": "Anthropic / 中文科技媒体 / AI 社区讨论",
      "sourceLabel": "Anthropic",
      "related": [
        "Computer Using Agent",
        "AI Agent",
        "Tool Use"
      ],
      "score": 91,
      "scoreBreakdown": "覆盖 27 · 频次 25 · 权重 20 · 位置 10 · 时效 9"
    },
    {
      "rank": 3,
      "english": "MCP Tools",
      "chinese": "MCP 工具",
      "brief": "让服务器向客户端暴露可调用函数与操作能力的协议对象",
      "officialDefinition": "MCP 工具（MCP Tools）是 Model Context Protocol 中由服务器暴露给客户端的可调用工具对象，客户端可把这些工具展示给模型，并在获得授权后执行相应操作。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#:~:text=Tools",
      "source": "MCP 规范 / GitHub 动态 / 中文开发者社区 / InfoQ",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Use",
        "AI Agent"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 25 · 频次 24 · 权重 19 · 位置 10 · 时效 9"
    },
    {
      "rank": 4,
      "english": "Sandbox Agent",
      "chinese": "沙箱智能体",
      "brief": "在隔离执行环境中安全运行任务和工具调用的智能体形态",
      "officialDefinition": "OpenAI Agents SDK 将 sandbox 设计为受控隔离环境，用于让智能体安全执行代码、命令和文件操作，而不直接暴露宿主环境。",
      "link": "https://openai.github.io/openai-agents-python/sandbox/",
      "source": "OpenAI Agents SDK / 开发者社区 / 中文技术讨论",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Sandboxed Execution",
        "AI Agent",
        "Tool Use"
      ],
      "score": 83,
      "scoreBreakdown": "覆盖 23 · 频次 22 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 5,
      "english": "Action Tools",
      "chinese": "行动型工具",
      "brief": "直接改变外部环境或代表用户执行操作的工具类别",
      "officialDefinition": "近期关于 MCP 工具生态的研究将 action tools 归为能调用外部系统并执行动作的工具类别，例如创建记录、发送请求或触发自动化流程。",
      "link": "https://arxiv.org/abs/2506.15680#:~:text=action%20tools",
      "source": "arXiv / 开源生态 / 开发者社区",
      "sourceLabel": "arXiv",
      "related": [
        "Tool Use",
        "AI Agent",
        "MCP"
      ],
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 18 · 位置 9 · 时效 10"
    },
    {
      "rank": 6,
      "english": "Context Management",
      "chinese": "上下文管理",
      "brief": "控制智能体如何保留压缩裁剪和传递上下文信息的机制",
      "officialDefinition": "OpenAI Agents SDK 将 context management 用于描述智能体如何管理对话历史、运行状态、工具结果和共享上下文，以保持任务连续性并控制上下文规模。",
      "link": "https://openai.github.io/openai-agents-python/context/",
      "source": "OpenAI Agents SDK / 开发者实践 / 中文技术社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Context Window",
        "AI Agent",
        "Prompt Engineering"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 9 · 时效 9"
    },
    {
      "rank": 7,
      "english": "GUI Agent",
      "chinese": "图形界面智能体",
      "brief": "能够理解并操作图形用户界面的智能体形态",
      "officialDefinition": "Anthropic 在 computer use 介绍中展示的系统是一类能够观察图形界面、操作鼠标和键盘并在真实软件环境中完成任务的 AI 代理，这类系统通常可归为 GUI Agent。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / GUI 自动化讨论 / 中文科技媒体",
      "sourceLabel": "Anthropic",
      "related": [
        "Computer Using Agent",
        "AI Agent",
        "Computer Vision"
      ],
      "score": 71,
      "scoreBreakdown": "覆盖 19 · 频次 18 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 8,
      "english": "Tool Result",
      "chinese": "工具结果对象",
      "brief": "工具执行后返回文本结构化内容或资源附件的标准结果对象",
      "officialDefinition": "Tool Result 是 MCP 工具调用完成后返回给客户端和模型的结果对象，可同时包含文本、structured content 以及资源引用等多种结果形态。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#:~:text=Tool%20Result",
      "source": "MCP 规范 / GitHub / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "Tool Use",
        "Structured Outputs",
        "MCP"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 18 · 频次 17 · 权重 16 · 位置 8 · 时效 9"
    },
    {
      "rank": 9,
      "english": "Web Agent",
      "chinese": "网页智能体",
      "brief": "以网页为主要工作环境并能自动完成浏览和操作任务的智能体",
      "officialDefinition": "Browser Use 把 web agents 描述为能够在网站中提取信息、执行自动化操作、完成测试和监控任务的智能体系统。",
      "link": "https://browser-use.com/#:~:text=Web%20Agents",
      "source": "Browser Use / 开发者社区 / 中文技术讨论",
      "sourceLabel": "Browser Use",
      "related": [
        "Browser Agent",
        "AI Agent",
        "Tool Use"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 17 · 频次 16 · 权重 15 · 位置 7 · 时效 9"
    },
    {
      "rank": 10,
      "english": "Perception Tools",
      "chinese": "感知型工具",
      "brief": "负责读取界面内容环境状态或外部信息的工具类别",
      "officialDefinition": "近期关于 MCP 工具生态的研究将 perception tools 归为帮助智能体观察环境、读取内容和感知状态的工具类别，为后续决策与行动提供输入。",
      "link": "https://arxiv.org/abs/2506.15680#:~:text=perception%20tools",
      "source": "arXiv / 开源生态 / 开发者社区",
      "sourceLabel": "arXiv",
      "related": [
        "Tool Use",
        "AI Agent",
        "Computer Vision"
      ],
      "score": 60,
      "scoreBreakdown": "覆盖 16 · 频次 15 · 权重 14 · 位置 7 · 时效 8"
    }
  ],
  "2026-07-03": [
    {
      "rank": 1,
      "english": "Browser Agent",
      "chinese": "浏览器智能体",
      "brief": "能够自主浏览网页、点击页面元素并完成在线任务的AI智能体",
      "officialDefinition": "Browser Use 将 Browser Agent 描述为让 AI 像人类一样使用网站的基础设施，使智能体能够读取页面、点击按钮、填写表单并执行网页任务。",
      "link": "https://browser-use.com/",
      "source": "Browser Use / GitHub / 中文科技媒体 / 开发者社区",
      "sourceLabel": "Browser Use",
      "related": [
        "AI Agent",
        "Tool Use",
        "Computer Using Agent"
      ],
      "score": 95,
      "scoreBreakdown": "覆盖 28 · 频次 27 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "Computer Use",
      "chinese": "计算机使用能力",
      "brief": "让AI直接观察并操作真实电脑界面的通用能力",
      "officialDefinition": "Anthropic 将 computer use 描述为让模型像人类一样查看屏幕、移动光标、点击按钮和输入文本，从而在真实计算机环境中完成任务的能力。",
      "link": "https://www.anthropic.com/news/developing-computer-use#:~:text=The%20next%20frontier%20is%20computer%20use",
      "source": "Anthropic / 中文科技媒体 / AI 社区讨论",
      "sourceLabel": "Anthropic",
      "related": [
        "Computer Using Agent",
        "AI Agent",
        "Tool Use"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 27 · 26 · 权重 20 · 位置 10 · 时效 9"
    },
    {
      "rank": 3,
      "english": "Context Variables",
      "chinese": "上下文变量",
      "brief": "在智能体运行过程中持续携带和传递共享状态的变量机制",
      "officialDefinition": "OpenAI Agents SDK 将 context variables 用于在智能体运行中携带共享状态与运行信息，使工具、模型和流程节点能够访问同一份任务上下文。",
      "link": "https://openai.github.io/openai-agents-python/context/#:~:text=context%20variables",
      "source": "OpenAI Agents SDK / 开发者社区 / 中文技术讨论",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Context Window",
        "AI Agent",
        "Prompt Engineering"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 25 · 24 · 权重 19 · 位置 10 · 时效 9"
    },
    {
      "rank": 4,
      "english": "Run Context",
      "chinese": "运行上下文",
      "brief": "为一次智能体运行封装共享数据状态与依赖信息的上下文对象",
      "officialDefinition": "OpenAI Agents SDK 将 run context 作为一次运行期间的共享上下文对象，用于在模型、工具和工作流节点之间传递状态、依赖与控制信息。",
      "link": "https://openai.github.io/openai-agents-python/context/#:~:text=RunContext",
      "source": "OpenAI Agents SDK / 开发者实践 / 中文技术社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Context Window",
        "AI Agent",
        "Prompt Engineering"
      ],
      "score": 83,
      "scoreBreakdown": "覆盖 23 · 22 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 5,
      "english": "Resource Templates",
      "chinese": "资源模板",
      "brief": "用统一参数化方式声明一类可动态展开资源的模板机制",
      "officialDefinition": "Resource Templates 是 MCP 资源体系中的模板化定义方式，用于通过参数化 URI 或路径模式来声明一组可动态展开的资源。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/resources#:~:text=Resource%20Templates",
      "source": "MCP 规范 / GitHub 动态 / 中文技术社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP Resources",
        "Prompt",
        "Tool Use"
      ],
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 20 · 权重 18 · 位置 9 · 时效 10"
    },
    {
      "rank": 6,
      "english": "Prompt Arguments",
      "chinese": "提示参数",
      "brief": "给提示模板传入变量以生成具体提示内容的参数机制",
      "officialDefinition": "Prompt Arguments 是 MCP prompts 中用于向提示模板传入变量值的参数机制，客户端填入参数后即可生成具体可用的提示内容。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/prompts#:~:text=arguments",
      "source": "MCP 规范 / 开源工具链 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "Prompt",
        "Prompt Engineering",
        "MCP"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 21 · 19 · 权重 17 · 位置 9 · 时效 9"
    },
    {
      "rank": 7,
      "english": "Human Tool",
      "chinese": "人类工具",
      "brief": "把人类协作者视作可被智能体调用的工具节点的协作概念",
      "officialDefinition": "Human Tool 论文将 human tool 描述为一种把人类协作者抽象成可按需调用工具的框架，使智能体在必要时向人类请求判断、反馈或执行。",
      "link": "https://arxiv.org/abs/2507.01928#:~:text=human%20tool",
      "source": "Human Tool Paper / arXiv / 学术讨论",
      "sourceLabel": "Human Tool Paper",
      "related": [
        "Human-in-the-Loop",
        "AI Agent",
        "Tool Use"
      ],
      "score": 71,
      "scoreBreakdown": "覆盖 19 · 18 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 8,
      "english": "History-Aware Routing",
      "chinese": "历史感知路由",
      "brief": "根据历史工具调用轨迹动态选择下一步工具的路由机制",
      "officialDefinition": "ToolACE-MCP 论文将 history-aware routing 用于描述一种结合历史调用轨迹和上下文状态来选择下一工具的路由机制，以提升工具使用的准确率。",
      "link": "https://arxiv.org/abs/2506.16549#:~:text=history-aware%20routing",
      "source": "ToolACE Paper / arXiv / 学术讨论",
      "sourceLabel": "ToolACE Paper",
      "related": [
        "Tool Use",
        "AI Agent",
        "Context Management"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 18 · 17 · 权重 16 · 位置 8 · 时效 8"
    },
    {
      "rank": 9,
      "english": "Tool Poisoning",
      "chinese": "工具投毒",
      "brief": "通过污染工具描述或返回结果来误导智能体决策的攻击方式",
      "officialDefinition": "MCPTox 论文将 tool poisoning 描述为一种通过篡改工具元数据、指令描述或返回内容来影响智能体行为与决策的攻击方式。",
      "link": "https://arxiv.org/abs/2506.21452#:~:text=tool%20poisoning",
      "source": "MCPTox Paper / arXiv / 安全讨论",
      "sourceLabel": "MCPTox Paper",
      "related": [
        "Prompt Injection",
        "Tool Use",
        "AI Safety"
      ],
      "score": 63,
      "scoreBreakdown": "覆盖 17 · 16 · 权重 15 · 位置 7 · 时效 8"
    },
    {
      "rank": 10,
      "english": "Threshold Poisoning",
      "chinese": "阈值投毒",
      "brief": "通过控制触发条件与阈值让恶意工具在关键时刻劫持行为的攻击机制",
      "officialDefinition": "ShareLock 论文将 threshold poisoning 描述为一种通过操控工具触发阈值或条件判断，使智能体在特定边界条件下偏向恶意行为的攻击机制。",
      "link": "https://arxiv.org/abs/2506.21527#:~:text=threshold%20poisoning",
      "source": "ShareLock Paper / arXiv / 安全讨论",
      "sourceLabel": "ShareLock Paper",
      "related": [
        "Tool Poisoning",
        "AI Safety",
        "Guardrails"
      ],
      "score": 59,
      "scoreBreakdown": "覆盖 16 · 15 · 权重 14 · 位置 7 · 时效 7"
    }
  ],
  "2026-07-04": [
    {
      "rank": 1,
      "english": "MCP Elicitation",
      "chinese": "MCP 交互式补充信息请求",
      "brief": "让 MCP 服务器在执行过程中向用户请求缺失信息并继续完成任务的协议能力",
      "officialDefinition": "MCP Elicitation 是 Model Context Protocol 的客户端能力，允许服务器在需要更多信息时向客户端请求结构化用户输入，由客户端控制展示、确认与返回。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation",
      "source": "MCP 规范 / GitHub 动态 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Calling",
        "Structured Outputs"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 28 · 27 · 权重 17 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "Agent Tracing",
      "chinese": "智能体轨迹追踪",
      "brief": "记录智能体运行中的模型调用、工具调用和中间步骤以便调试与评估",
      "officialDefinition": "OpenAI Agents SDK 将 tracing 描述为智能体工作流的内置记录能力，可捕获 LLM 生成、工具调用、handoff、guardrail 与自定义 span，便于调试、可视化和监控。",
      "link": "https://openai.github.io/openai-agents-python/tracing/",
      "source": "OpenAI Agents SDK / GitHub 动态 / 开发者社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "AI Agent",
        "Agent Evals",
        "Tool Guardrails"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 27 · 24 · 权重 17 · 位置 10 · 时效 10"
    },
    {
      "rank": 3,
      "english": "PagedAttention",
      "chinese": "分页注意力",
      "brief": "把注意力键值缓存按页管理以提升大模型推理吞吐和显存利用率的机制",
      "officialDefinition": "vLLM 将 PagedAttention 描述为一种受操作系统虚拟内存启发的注意力算法，通过把 KV cache 切分为块并按需映射，减少显存碎片并提高批量推理效率。",
      "link": "https://docs.vllm.ai/en/latest/design/paged_attention/",
      "source": "vLLM / GitHub 开源动态 / 推理优化讨论",
      "sourceLabel": "vLLM Docs",
      "related": [
        "Inference",
        "Token",
        "Prompt Caching"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 24 · 22 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 4,
      "english": "Automatic Prefix Caching",
      "chinese": "自动前缀缓存",
      "brief": "自动复用相同提示前缀的 KV 缓存以降低重复推理成本的服务端机制",
      "officialDefinition": "vLLM 将 Automatic Prefix Caching 描述为自动缓存并复用请求之间相同前缀的 KV cache，从而减少重复计算并提升长上下文推理效率。",
      "link": "https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/",
      "source": "vLLM / 推理服务社区 / 开源动态",
      "sourceLabel": "vLLM Docs",
      "related": [
        "Prompt Caching",
        "Inference",
        "Token"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 23 · 21 · 权重 17 · 位置 9 · 时效 10"
    },
    {
      "rank": 5,
      "english": "Agent Handoff",
      "chinese": "智能体交接",
      "brief": "让一个智能体把任务转交给更适合的另一个智能体继续处理的协作机制",
      "officialDefinition": "OpenAI Agents SDK 将 handoff 定义为智能体之间的任务委派机制，当前智能体可以把对话或任务控制权交给另一个更专门的智能体。",
      "link": "https://openai.github.io/openai-agents-python/handoffs/",
      "source": "OpenAI Agents SDK / 多智能体讨论 / 中文社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "AI Agent",
        "Multi-agent System",
        "Workflow Agent"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 8 · 时效 8"
    },
    {
      "rank": 6,
      "english": "Agent Observability",
      "chinese": "智能体可观测性",
      "brief": "用日志、轨迹、指标和回放来观察智能体为何这样执行任务的工程能力",
      "officialDefinition": "LangSmith 将 observability 用于追踪、评估和调试 LLM 应用与智能体运行过程，帮助团队查看每一步调用、状态、输入输出和失败原因。",
      "link": "https://docs.langchain.com/langsmith/observability",
      "source": "LangChain / LangSmith / 开发者社区",
      "sourceLabel": "LangSmith Docs",
      "related": [
        "Agent Tracing",
        "Agent Evals",
        "AI Agent"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 19 · 频次 18 · 权重 17 · 位置 8 · 时效 8"
    },
    {
      "rank": 7,
      "english": "Synthetic Data Generation",
      "chinese": "合成数据生成",
      "brief": "用算法或模型生成可用于训练、评测或隐私保护场景的数据样本的方法",
      "officialDefinition": "IBM 将 synthetic data 描述为由算法或模拟生成而非直接从真实事件收集的数据，可用于训练模型、测试系统和补充稀缺或敏感数据场景。",
      "link": "https://www.ibm.com/think/topics/synthetic-data",
      "source": "IBM Think / 数据工程讨论 / 中文技术社区",
      "sourceLabel": "IBM Think",
      "related": [
        "Training Data",
        "Data Augmentation",
        "Fine-tuning"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 16 · 位置 7 · 时效 10"
    },
    {
      "rank": 8,
      "english": "AI RMF",
      "chinese": "AI 风险管理框架",
      "brief": "用于识别、衡量、管理和治理 AI 系统风险的标准化框架",
      "officialDefinition": "NIST AI Risk Management Framework 是面向 AI 风险治理的自愿性框架，围绕 govern、map、measure、manage 等功能帮助组织识别、评估和管理 AI 风险。",
      "link": "https://www.nist.gov/itl/ai-risk-management-framework",
      "source": "NIST / AI 安全治理 / 中文政策技术讨论",
      "sourceLabel": "NIST",
      "related": [
        "AI Safety",
        "AI Ethics",
        "AI Red Teaming"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 17 · 频次 15 · 权重 16 · 位置 6 · 时效 10"
    },
    {
      "rank": 9,
      "english": "Evaluation Harness",
      "chinese": "评测框架",
      "brief": "统一加载任务、模型和指标以批量评估语言模型能力的工具框架",
      "officialDefinition": "EleutherAI lm-evaluation-harness 是用于评测语言模型的开源框架，提供任务集合、模型接口和指标计算流程，便于可复现地比较模型能力。",
      "link": "https://github.com/EleutherAI/lm-evaluation-harness",
      "source": "EleutherAI / 开源评测",
      "sourceLabel": "EleutherAI GitHub",
      "related": [
        "AI Benchmarks",
        "LLM",
        "Model"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 16 · 频次 13 · 权重 15 · 位置 10 · 术语 10"
    },
    {
      "rank": 10,
      "english": "AI Red Teaming",
      "chinese": "AI 红队测试",
      "brief": "通过对抗性测试主动发现模型安全、滥用和失效风险的评估方法",
      "officialDefinition": "NIST 将 AI red-teaming 描述为一种结构化测试活动，由测试者以对抗方式发现 AI 系统中的风险、脆弱性和潜在失效模式。",
      "link": "https://airc.nist.gov/docs/AI_RMF_Playbook.pdf",
      "source": "NIST / AI 风险管理",
      "sourceLabel": "NIST AI RMF",
      "related": [
        "AI Safety",
        "AI Ethics",
        "Guardrails"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 15 · 频次 13 · 权重 14 · 位置 9 · 术语 10"
    }
  ],
  "2026-07-05": [
    {
      "rank": 1,
      "english": "MCP Tools",
      "chinese": "MCP 工具",
      "brief": "让服务器向客户端暴露可调用函数与操作能力的协议对象",
      "officialDefinition": "MCP 工具（MCP Tools）是 Model Context Protocol 中由服务器暴露给客户端的可调用工具对象，客户端可把这些工具展示给模型，并在获得授权后执行相应操作。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#:~:text=Tools",
      "source": "MCP 规范 / GitHub 动态 / 中文开发者社区 / InfoQ",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Use",
        "AI Agent"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 25 · 频次 24 · 权重 19 · 位置 10 · 时效 9"
    },
    {
      "rank": 2,
      "english": "Sandbox Agent",
      "chinese": "沙箱智能体",
      "brief": "在隔离执行环境中安全运行任务和工具调用的智能体形态",
      "officialDefinition": "OpenAI Agents SDK 将 sandbox 设计为受控隔离环境，用于让智能体安全执行代码、命令和文件操作，而不直接暴露宿主环境。",
      "link": "https://openai.github.io/openai-agents-python/sandbox/",
      "source": "OpenAI Agents SDK / 开发者社区 / 中文技术讨论",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Sandboxed Execution",
        "AI Agent",
        "Tool Use"
      ],
      "score": 83,
      "scoreBreakdown": "覆盖 23 · 频次 22 · 权重 18 · 位置 10 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Action Tools",
      "chinese": "行动型工具",
      "brief": "直接改变外部环境或代表用户执行操作的工具类别",
      "officialDefinition": "近期关于 MCP 工具生态的研究将 action tools 归为能调用外部系统并执行动作的工具类别，例如创建记录、发送请求或触发自动化流程。",
      "link": "https://arxiv.org/abs/2506.15680#:~:text=action%20tools",
      "source": "arXiv / 开源生态 / 开发者社区",
      "sourceLabel": "arXiv",
      "related": [
        "Tool Use",
        "AI Agent",
        "MCP"
      ],
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 18 · 位置 9 · 时效 10"
    },
    {
      "rank": 4,
      "english": "Context Management",
      "chinese": "上下文管理",
      "brief": "控制智能体如何保留压缩裁剪和传递上下文信息的机制",
      "officialDefinition": "OpenAI Agents SDK 将 context management 用于描述智能体如何管理对话历史、运行状态、工具结果和共享上下文，以保持任务连续性并控制上下文规模。",
      "link": "https://openai.github.io/openai-agents-python/context/",
      "source": "OpenAI Agents SDK / 开发者实践 / 中文技术社区",
      "sourceLabel": "OpenAI SDK Docs",
      "related": [
        "Context Window",
        "AI Agent",
        "Prompt Engineering"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 9 · 时效 9"
    },
    {
      "rank": 5,
      "english": "GUI Agent",
      "chinese": "图形界面智能体",
      "brief": "能够理解并操作图形用户界面的智能体形态",
      "officialDefinition": "Anthropic 在 computer use 介绍中展示的系统是一类能够观察图形界面、操作鼠标和键盘并在真实软件环境中完成任务的 AI 代理，这类系统通常可归为 GUI Agent。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / GUI 自动化讨论 / 中文科技媒体",
      "sourceLabel": "Anthropic",
      "related": [
        "AI Agent",
        "Computer Vision",
        "Tool Use"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 18 · 频次 17 · 权重 14 · 位置 6 · 时效 6"
    },
    {
      "rank": 6,
      "english": "Tool Result",
      "chinese": "工具结果对象",
      "brief": "工具执行后返回文本结构化内容或资源附件的标准结果对象",
      "officialDefinition": "Tool Result 是 MCP 工具调用完成后返回给客户端和模型的结果对象，可同时包含文本、structured content 以及资源引用等多种结果形态。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#:~:text=Tool%20Result",
      "source": "MCP 规范 / GitHub / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "Tool Use",
        "Structured Outputs",
        "MCP"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 18 · 频次 17 · 权重 16 · 位置 8 · 时效 9"
    },
    {
      "rank": 7,
      "english": "Human Tool",
      "chinese": "人类工具",
      "brief": "把人类协作者视作可被智能体调用的工具节点的协作概念",
      "officialDefinition": "Human Tool 论文将 human tool 描述为一种把人类协作者抽象成可按需调用工具的框架，使智能体在必要时向人类请求判断、反馈或执行。",
      "link": "https://arxiv.org/abs/2507.01928#:~:text=human%20tool",
      "source": "Human Tool Paper / arXiv / 学术讨论",
      "sourceLabel": "Human Tool Paper",
      "related": [
        "Human-in-the-Loop",
        "AI Agent",
        "Tool Use"
      ],
      "score": 71,
      "scoreBreakdown": "覆盖 19 · 18 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 8,
      "english": "History-Aware Routing",
      "chinese": "历史感知路由",
      "brief": "根据历史工具调用轨迹动态选择下一步工具的路由机制",
      "officialDefinition": "ToolACE-MCP 论文将 history-aware routing 用于描述一种结合历史调用轨迹和上下文状态来选择下一工具的路由机制，以提升工具使用的准确率。",
      "link": "https://arxiv.org/abs/2506.16549#:~:text=history-aware%20routing",
      "source": "ToolACE Paper / arXiv / 学术讨论",
      "sourceLabel": "ToolACE Paper",
      "related": [
        "Tool Use",
        "AI Agent",
        "Context Management"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 18 · 17 · 权重 16 · 位置 8 · 时效 8"
    },
    {
      "rank": 9,
      "english": "Tool Poisoning",
      "chinese": "工具投毒",
      "brief": "通过污染工具描述或返回结果来误导智能体决策的攻击方式",
      "officialDefinition": "MCPTox 论文将 tool poisoning 描述为一种通过篡改工具元数据、指令描述或返回内容来影响智能体行为与决策的攻击方式。",
      "link": "https://arxiv.org/abs/2506.21452#:~:text=tool%20poisoning",
      "source": "MCPTox Paper / arXiv / 安全讨论",
      "sourceLabel": "MCPTox Paper",
      "related": [
        "Prompt Injection",
        "Tool Use",
        "AI Safety"
      ],
      "score": 63,
      "scoreBreakdown": "覆盖 17 · 16 · 权重 15 · 位置 7 · 时效 8"
    },
    {
      "rank": 10,
      "english": "Threshold Poisoning",
      "chinese": "阈值投毒",
      "brief": "通过控制触发条件与阈值让恶意工具在关键时刻劫持行为的攻击机制",
      "officialDefinition": "ShareLock 论文将 threshold poisoning 描述为一种通过操控工具触发阈值或条件判断，使智能体在特定边界条件下偏向恶意行为的攻击机制。",
      "link": "https://arxiv.org/abs/2506.21527#:~:text=threshold%20poisoning",
      "source": "ShareLock Paper / arXiv / 安全讨论",
      "sourceLabel": "ShareLock Paper",
      "related": [
        "Tool Poisoning",
        "AI Safety",
        "Guardrails"
      ],
      "score": 59,
      "scoreBreakdown": "覆盖 16 · 15 · 权重 14 · 位置 7 · 时效 7"
    }
  ],
  "2026-07-06": [
    {
      "rank": 1,
      "english": "A2A",
      "chinese": "智能体到智能体协议",
      "brief": "让不同平台上的智能体互相发现能力、协商任务并交换结果的开放协议",
      "officialDefinition": "A2A（Agent2Agent Protocol）是一种开放协议，用于标准化独立 AI 智能体之间的能力发现、任务协作、消息交换和结果传递。",
      "link": "https://a2a-protocol.org/latest/specification/",
      "source": "Google A2A / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "A2A Protocol Docs",
      "related": [
        "MCP",
        "AI Agent",
        "Tool Calling"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 24 · 频次 22 · 权重 18 · 位置 18 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Agent Card",
      "chinese": "智能体卡片",
      "brief": "描述智能体身份、能力、端点和交互方式的可发现元数据",
      "officialDefinition": "Agent Card 是 A2A 规范中的元数据文档，用于声明智能体的身份、能力、服务地址、认证要求和支持的交互模式，便于其他智能体发现并调用。",
      "link": "https://a2a-protocol.org/latest/specification/#55-agentcard-object-structure",
      "source": "A2A 规范 / 开源协议讨论 / 中文开发者社区",
      "sourceLabel": "A2A Protocol Docs",
      "related": [
        "A2A",
        "MCP",
        "Tool Use"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 18 · 位置 18 · 术语 10"
    },
    {
      "rank": 3,
      "english": "AG-UI",
      "chinese": "智能体用户交互协议",
      "brief": "把智能体后端事件流标准化到前端界面的开放交互协议",
      "officialDefinition": "AG-UI（Agent User Interaction Protocol）是连接 AI 智能体和前端应用的开放协议，通过标准事件流传递消息、工具调用、状态变化和人机协作信号。",
      "link": "https://docs.ag-ui.com/introduction",
      "source": "AG-UI Docs / GitHub 开源动态 / 前端智能体社区",
      "sourceLabel": "AG-UI Docs",
      "related": [
        "A2A",
        "AI Agent",
        "Workflow Agent"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 17 · 术语 10"
    },
    {
      "rank": 4,
      "english": "State Delta",
      "chinese": "状态增量",
      "brief": "用增量事件同步智能体运行状态而非反复传输完整状态的机制",
      "officialDefinition": "State Delta 是 AG-UI 事件体系中的状态更新方式，用增量补丁表达智能体状态变化，让前端能够实时同步嵌套状态而不必重复接收完整状态对象。",
      "link": "https://docs.ag-ui.com/concepts/events",
      "source": "AG-UI 事件规范 / GitHub 示例 / 中文前端社区",
      "sourceLabel": "AG-UI Docs",
      "related": [
        "AG-UI",
        "Run Context",
        "Structured Outputs"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 19 · 频次 18 · 权重 16 · 位置 17 · 术语 10"
    },
    {
      "rank": 5,
      "english": "MCP Authorization",
      "chinese": "MCP 授权",
      "brief": "用标准授权流程控制 MCP 客户端访问服务器资源与工具的安全机制",
      "officialDefinition": "MCP Authorization 是 Model Context Protocol 的授权机制，规定客户端访问受保护 MCP 服务器资源时如何使用 OAuth 2.1 等流程完成身份确认、授权授予和令牌使用。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization",
      "source": "MCP 规范 / GitHub 生态动态 / 中文开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Tool Guardrails",
        "AI Safety"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 20 · 频次 17 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Context Rot",
      "chinese": "上下文腐化",
      "brief": "上下文长度增加时模型理解与检索质量逐步下降的现象",
      "officialDefinition": "Context Rot 指模型在输入上下文不断增长时出现的性能退化现象，即使相关信息仍在上下文中，模型也更容易忽略、误读或无法稳定利用这些信息。",
      "link": "https://research.trychroma.com/context-rot",
      "source": "Chroma Research / 技术媒体讨论 / 中文 RAG 社区",
      "sourceLabel": "Chroma Research",
      "related": [
        "Context Window",
        "Long Context",
        "RAG"
      ],
      "score": 76,
      "scoreBreakdown": "覆盖 18 · 频次 18 · 权重 17 · 位置 13 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Speculative Decoding",
      "chinese": "投机解码",
      "brief": "先用轻量草稿模型生成候选 token 再由目标模型验证以加速推理的方法",
      "officialDefinition": "Speculative Decoding 是一种推理加速方法，先由较小或更快的草稿模型提出多个候选 token，再由目标模型并行验证并接受符合分布的候选，从而减少大模型逐 token 生成的延迟。",
      "link": "https://arxiv.org/abs/2211.17192",
      "source": "Google Research Paper / vLLM 开源动态 / 中文推理优化讨论",
      "sourceLabel": "arXiv",
      "related": [
        "Inference",
        "Token",
        "LLM"
      ],
      "score": 74,
      "scoreBreakdown": "覆盖 18 · 频次 17 · 权重 16 · 位置 13 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Constrained Decoding",
      "chinese": "约束解码",
      "brief": "把生成过程限制在 schema 或语法允许的 token 序列内的解码方法",
      "officialDefinition": "Constrained Decoding 是在模型生成过程中按 JSON Schema、语法或规则约束可选 token 的方法，用于让输出严格匹配结构要求并减少格式错误。",
      "link": "https://platform.openai.com/docs/guides/structured-outputs",
      "source": "OpenAI Docs / 结构化输出实践 / 中文开发者社区",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "Structured Outputs",
        "Token",
        "Guardrails"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 17 · 频次 16 · 权重 17 · 位置 12 · 术语 10"
    },
    {
      "rank": 9,
      "english": "AI-SBOM",
      "chinese": "AI 软件物料清单",
      "brief": "记录 AI 系统模型、数据、依赖和许可证等组成要素的供应链清单",
      "officialDefinition": "AI-SBOM（AI Software Bill of Materials）是面向 AI 系统的软件物料清单，用结构化方式记录模型、数据集、训练组件、依赖、许可证和供应链来源等信息，以支持治理、审计和风险追踪。",
      "link": "https://spdx.dev/learn/areas-of-interest/ai/",
      "source": "SPDX / AI 供应链治理 / 中文安全社区",
      "sourceLabel": "SPDX AI Profile",
      "related": [
        "Training Data",
        "Responsible AI",
        "AI Safety"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 16 · 频次 16 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Memory Poisoning",
      "chinese": "记忆投毒",
      "brief": "向智能体长期记忆写入恶意或误导信息以持续影响后续行为的攻击方式",
      "officialDefinition": "Memory Poisoning 是针对具备长期记忆的 AI 智能体的攻击方式，攻击者把恶意、伪造或误导性内容写入记忆，使系统在之后的任务中持续被污染信息影响。",
      "link": "https://arxiv.org/abs/2606.24322",
      "source": "Agent 安全论文 / GitHub 安全讨论 / 中文 AI 安全社区",
      "sourceLabel": "arXiv",
      "related": [
        "Agent Memory",
        "Tool Poisoning",
        "AI Safety"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 16 · 频次 15 · 权重 16 · 位置 11 · 术语 10"
    }
  ],
  "2026-07-07": [
    {
      "rank": 1,
      "english": "Streamable HTTP",
      "chinese": "可流式 HTTP 传输",
      "brief": "MCP 用单一 HTTP 端点承载请求响应与流式消息的传输机制",
      "officialDefinition": "Model Context Protocol 2025-06-18 规范将 Streamable HTTP 定义为 MCP 的传输方式：客户端通过 HTTP POST 向单一端点发送 JSON-RPC 消息，服务器可用普通响应或 Server-Sent Events 返回一个或多个消息。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http",
      "source": "MCP 规范 / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "MCP Transport Spec",
      "related": [
        "MCP",
        "MCP Tools",
        "MCP Resources"
      ],
      "score": 94,
      "scoreBreakdown": "覆盖 29 · 频次 25 · 权重 20 · 位置 10 · 时效 10"
    },
    {
      "rank": 2,
      "english": "Dynamic Client Registration",
      "chinese": "动态客户端注册",
      "brief": "让 MCP 客户端在授权服务器上自动登记自身身份与回调信息的机制",
      "officialDefinition": "MCP 授权规范建议服务器支持 OAuth 2.0 Dynamic Client Registration，使 MCP 客户端可以在运行时向授权服务器注册并获得客户端身份，而不必预先手工配置每个客户端。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#dynamic-client-registration",
      "source": "MCP 授权规范 / 安全讨论 / 中文技术博客",
      "sourceLabel": "MCP Authorization Spec",
      "related": [
        "MCP Authorization",
        "MCP",
        "AI Safety"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 27 · 频次 24 · 权重 20 · 位置 9 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Protected Resource Metadata",
      "chinese": "受保护资源元数据",
      "brief": "资源服务器发布授权服务器地址和资源标识等信息的 OAuth 元数据机制",
      "officialDefinition": "RFC 9728 将 OAuth 2.0 Protected Resource Metadata 定义为受保护资源发布自身元数据的机制，客户端可据此发现授权服务器、资源标识以及访问该资源所需的授权信息。",
      "link": "https://www.rfc-editor.org/rfc/rfc9728.html",
      "source": "IETF RFC / MCP 授权讨论 / 中文安全社区",
      "sourceLabel": "IETF RFC 9728",
      "related": [
        "MCP Authorization",
        "MCP",
        "AI RMF"
      ],
      "score": 86,
      "scoreBreakdown": "覆盖 25 · 频次 22 · 权重 20 · 位置 9 · 时效 10"
    },
    {
      "rank": 4,
      "english": "Tool Approval",
      "chinese": "工具审批",
      "brief": "在智能体调用高风险工具前插入人工或策略确认的控制机制",
      "officialDefinition": "OpenAI Agents SDK 的 MCP 文档将 tool approval 描述为一种工具调用审批机制：开发者可把特定 MCP 工具标记为需要批准，运行时在实际调用前先触发审批流程。",
      "link": "https://openai.github.io/openai-agents-python/mcp/#tool-approval",
      "source": "OpenAI Agents SDK / 中文开发者社区 / Agent 安全讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Tool Guardrails",
        "Tool Use",
        "AI Safety"
      ],
      "score": 82,
      "scoreBreakdown": "覆盖 24 · 频次 21 · 权重 19 · 位置 9 · 时效 9"
    },
    {
      "rank": 5,
      "english": "Per-call Metadata",
      "chinese": "单次调用元数据",
      "brief": "在每次智能体运行或工具调用时传递请求级上下文信息的工程模式",
      "officialDefinition": "OpenAI Agents SDK 将 per-call metadata 描述为通过 RunContextWrapper 在单次运行中传递上下文的方式，开发者可让 MCP 服务器访问请求级信息以改变工具行为。",
      "link": "https://openai.github.io/openai-agents-python/mcp/#per-call-metadata",
      "source": "OpenAI Agents SDK / MCP 工程实践 / 中文技术社区",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Run Context",
        "Context Variables",
        "MCP Tools"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 23 · 频次 20 · 权重 18 · 位置 8 · 时效 9"
    },
    {
      "rank": 6,
      "english": "Middleware",
      "chinese": "中间件",
      "brief": "在智能体请求模型调用和工具调用前后插入可复用控制逻辑的扩展层",
      "officialDefinition": "LangChain 将 middleware 定义为在智能体生命周期不同阶段运行的可组合逻辑层，可围绕模型调用、工具调用和状态更新添加监控、安全、重试或上下文处理能力。",
      "link": "https://docs.langchain.com/oss/python/langchain/middleware",
      "source": "LangChain 文档 / 开源框架动态 / 中文开发者社区",
      "sourceLabel": "LangChain Middleware",
      "related": [
        "AI Workflow",
        "Tool Use",
        "Agent Observability"
      ],
      "score": 74,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 7,
      "english": "Checkpointer",
      "chinese": "检查点保存器",
      "brief": "把智能体图执行状态持久化以支持恢复记忆和长流程续跑的组件",
      "officialDefinition": "LangGraph 文档将 checkpointer 描述为保存图状态快照的组件，用于在不同步骤之间持久化状态，并支持线程级记忆、恢复执行和人类介入流程。",
      "link": "https://docs.langchain.com/oss/python/langgraph/persistence#checkpoints",
      "source": "LangGraph 文档 / GitHub 开源动态 / 中文技术社区",
      "sourceLabel": "LangGraph Persistence",
      "related": [
        "Agent State",
        "Short-term Memory",
        "Workflow Agent"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 20 · 频次 18 · 权重 16 · 位置 8 · 时效 8"
    },
    {
      "rank": 8,
      "english": "Session State",
      "chinese": "会话状态",
      "brief": "在多轮智能体交互中保存用户任务进度和共享上下文的状态对象",
      "officialDefinition": "Google ADK 将 session state 描述为附着在会话上的键值数据，用于让智能体在同一会话内保存和读取对话上下文、用户信息与任务进度。",
      "link": "https://google.github.io/adk-docs/sessions/state/",
      "source": "Google ADK / Agent 工程讨论 / 中文开发者社区",
      "sourceLabel": "Google ADK State",
      "related": [
        "Agent State",
        "Context Variables",
        "AI Agent"
      ],
      "score": 66,
      "scoreBreakdown": "覆盖 19 · 频次 17 · 权重 16 · 位置 7 · 时效 7"
    },
    {
      "rank": 9,
      "english": "Termination Condition",
      "chinese": "终止条件",
      "brief": "规定多智能体对话或工作流何时停止运行的控制规则",
      "officialDefinition": "Microsoft AutoGen 将 termination condition 描述为团队运行时判断是否停止对话的条件对象，可基于消息数量、关键词、工具调用或组合逻辑终止多智能体流程。",
      "link": "https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/tutorial/termination.html",
      "source": "Microsoft AutoGen / 多智能体讨论 / 中文开源社区",
      "sourceLabel": "AutoGen Termination",
      "related": [
        "Multi-agent System",
        "Sequential Workflow",
        "Agentic Workflow"
      ],
      "score": 62,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 15 · 位置 7 · 时效 6"
    },
    {
      "rank": 10,
      "english": "Tool Shadowing",
      "chinese": "工具影子攻击",
      "brief": "恶意工具通过覆盖或冒充可信工具语义来误导智能体调用路径的攻击方式",
      "officialDefinition": "MCP 安全论文将 tool shadowing 描述为攻击者创建语义上类似或优先级更高的恶意工具，使智能体把本应调用的可信工具替换为攻击者控制工具的攻击方式。",
      "link": "https://arxiv.org/abs/2506.02040",
      "source": "arXiv MCP 安全论文 / 中文安全讨论 / 开源议题",
      "sourceLabel": "MCP Security Paper",
      "related": [
        "Tool Poisoning",
        "Prompt Injection",
        "AI Safety"
      ],
      "score": 58,
      "scoreBreakdown": "覆盖 16 · 频次 15 · 权重 14 · 位置 7 · 时效 6"
    }
  ],
  "2026-07-08": [
    {
      "rank": 1,
      "english": "Streamable HTTP",
      "chinese": "可流式 HTTP 传输",
      "brief": "MCP 用单一 HTTP 端点承载请求响应与流式消息的传输机制",
      "officialDefinition": "Model Context Protocol 2025-06-18 规范将 Streamable HTTP 定义为 MCP 的传输方式：客户端通过 HTTP POST 向单一端点发送 JSON-RPC 消息，服务器可用普通响应或 Server-Sent Events 返回一个或多个消息。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http",
      "source": "MCP 规范 / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "MCP Transport Spec",
      "related": [
        "MCP",
        "MCP Tools",
        "MCP Resources"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 29 · 频次 26 · 权重 20 · 位置 10 · 时效 11"
    },
    {
      "rank": 2,
      "english": "Dynamic Client Registration",
      "chinese": "动态客户端注册",
      "brief": "让 MCP 客户端在授权服务器上自动登记自身身份与回调信息的机制",
      "officialDefinition": "MCP 授权规范建议服务器支持 OAuth 2.0 Dynamic Client Registration，使 MCP 客户端可以在运行时向授权服务器注册并获得客户端身份，而不必预先手工配置每个客户端。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#dynamic-client-registration",
      "source": "MCP 授权规范 / 安全讨论 / 中文技术博客",
      "sourceLabel": "MCP Authorization Spec",
      "related": [
        "MCP Authorization",
        "MCP",
        "AI Safety"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 27 · 频次 24 · 权重 20 · 位置 9 · 时效 10"
    },
    {
      "rank": 3,
      "english": "Deliberative Alignment",
      "chinese": "审议式对齐",
      "brief": "让模型在作答前先显式权衡安全规则与上下文再决定如何回应的对齐方法",
      "officialDefinition": "OpenAI 将 deliberative alignment 描述为一种先让模型在回答前推理相关安全规范，再据此生成最终回复的对齐方法，用更具审议性的过程提升高风险场景下的可靠性。",
      "link": "https://openai.com/index/deliberative-alignment/",
      "source": "OpenAI / 安全研究 / 中文技术社区",
      "sourceLabel": "OpenAI Research",
      "related": [
        "AI Alignment",
        "AI Safety",
        "Reasoning Model"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 25 · 频次 23 · 权重 19 · 位置 9 · 时效 12"
    },
    {
      "rank": 4,
      "english": "Process Supervision",
      "chinese": "过程监督",
      "brief": "不只评估最终答案，还逐步检查模型中间推理过程的训练与评测方式",
      "officialDefinition": "OpenAI 在 Let's Verify Step by Step 中将 process supervision 描述为对模型中间推理步骤提供监督信号的方法，而不只是根据最终答案是否正确来训练模型。",
      "link": "https://arxiv.org/abs/2305.20050",
      "source": "OpenAI / 推理研究 / 中文开发者讨论",
      "sourceLabel": "OpenAI Research Paper",
      "related": [
        "Reasoning Model",
        "Verifier",
        "Reward Model"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 24 · 频次 22 · 权重 18 · 位置 9 · 时效 11"
    },
    {
      "rank": 5,
      "english": "Tool Approval",
      "chinese": "工具审批",
      "brief": "在智能体调用高风险工具前插入人工或策略确认的控制机制",
      "officialDefinition": "OpenAI Agents SDK 的 MCP 文档将 tool approval 描述为一种工具调用审批机制：开发者可把特定 MCP 工具标记为需要批准，运行时在实际调用前先触发审批流程。",
      "link": "https://openai.github.io/openai-agents-python/mcp/#tool-approval",
      "source": "OpenAI Agents SDK / 中文开发者社区 / Agent 安全讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Tool Guardrails",
        "Tool Use",
        "AI Safety"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 23 · 频次 20 · 权重 18 · 位置 8 · 时效 11"
    },
    {
      "rank": 6,
      "english": "Feature Steering",
      "chinese": "特征引导",
      "brief": "通过有针对性地调节模型内部特征来改变输出行为的控制方法",
      "officialDefinition": "Anthropic 将 feature steering 描述为通过识别并调节模型内部可解释特征，在不重新训练模型的前提下影响其输出行为与偏好的方法。",
      "link": "https://www.anthropic.com/research/evaluating-feature-steering",
      "source": "Anthropic / 可解释性研究 / 开发者社区",
      "sourceLabel": "Anthropic Research",
      "related": [
        "Activation Steering",
        "AI Safety",
        "Transformer"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 18 · 位置 8 · 时效 10"
    },
    {
      "rank": 7,
      "english": "Middleware",
      "chinese": "中间件",
      "brief": "在智能体请求模型调用和工具调用前后插入可复用控制逻辑的扩展层",
      "officialDefinition": "LangChain 将 middleware 定义为在智能体生命周期不同阶段运行的可组合逻辑层，可围绕模型调用、工具调用和状态更新添加监控、安全、重试或上下文处理能力。",
      "link": "https://docs.langchain.com/oss/python/langchain/middleware",
      "source": "LangChain 文档 / 开源框架动态 / 中文开发者社区",
      "sourceLabel": "LangChain Middleware",
      "related": [
        "AI Workflow",
        "Tool Use",
        "Agent Observability"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 8 · 时效 8"
    },
    {
      "rank": 8,
      "english": "Long-term Memory",
      "chinese": "长期记忆",
      "brief": "让智能体跨会话保存用户信息知识经验和工作方法的记忆层",
      "officialDefinition": "LangChain 将 long-term memory 描述为可跨线程持久保存的信息存储层，代理可在后续会话中取回这些知识、偏好与经验继续使用。",
      "link": "https://docs.langchain.com/oss/python/concepts/memory#long-term-memory",
      "source": "LangChain / Memory / 中文开发者社区",
      "sourceLabel": "LangChain Memory",
      "related": [
        "Short-term Memory",
        "Semantic Memory",
        "RAG"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 18 · 权重 16 · 位置 8 · 时效 7"
    },
    {
      "rank": 9,
      "english": "Checkpointer",
      "chinese": "检查点保存器",
      "brief": "把智能体图执行状态持久化以支持恢复记忆和长流程续跑的组件",
      "officialDefinition": "LangGraph 文档将 checkpointer 描述为保存图状态快照的组件，用于在不同步骤之间持久化状态，并支持线程级记忆、恢复执行和人类介入流程。",
      "link": "https://docs.langchain.com/oss/python/langgraph/persistence#checkpoints",
      "source": "LangGraph 文档 / GitHub 开源动态 / 中文技术社区",
      "sourceLabel": "LangGraph Persistence",
      "related": [
        "Agent State",
        "Short-term Memory",
        "Workflow Agent"
      ],
      "score": 65,
      "scoreBreakdown": "覆盖 19 · 频次 17 · 权重 15 · 位置 7 · 时效 7"
    },
    {
      "rank": 10,
      "english": "Session State",
      "chinese": "会话状态",
      "brief": "在多轮智能体交互中保存用户任务进度和共享上下文的状态对象",
      "officialDefinition": "Google ADK 将 session state 描述为附着在会话上的键值数据，用于让智能体在同一会话内保存和读取对话上下文、用户信息与任务进度。",
      "link": "https://google.github.io/adk-docs/sessions/state/",
      "source": "Google ADK / Agent 工程讨论 / 中文开发者社区",
      "sourceLabel": "Google ADK State",
      "related": [
        "Agent State",
        "Context Variables",
        "AI Agent"
      ],
      "score": 61,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 14 · 位置 7 · 时效 6"
    }
  ],
  "2026-07-09": [
    {
      "rank": 1,
      "english": "Human-Agent Systems",
      "chinese": "人机协作系统",
      "brief": "由 AI 代理与人类在同一任务闭环中协同决策执行与纠偏的系统",
      "officialDefinition": "HAS-Bench 将 Human-Agent Systems 描述为一种共享控制范式：人类与 LLM 代理作为一等参与者共同完成任务，并围绕角色、权限、沟通路径与行动权持续协同。",
      "link": "https://arxiv.org/abs/2607.04329",
      "source": "HAS-Bench / arXiv / 开发者社区 / 中文 AI 媒体",
      "sourceLabel": "HAS-Bench Paper",
      "related": [
        "AI Agent",
        "Human-in-the-Loop",
        "AI Workflow"
      ],
      "score": 95,
      "scoreBreakdown": "覆盖 28 · 频次 25 · 权重 19 · 位置 11 · 时效 12"
    },
    {
      "rank": 2,
      "english": "Agentic Code Review",
      "chinese": "代理式代码审查",
      "brief": "让代理像真正评审者一样检查 PR、给出反馈并驱动后续修订的闭环审查方式",
      "officialDefinition": "SWE-Review 将 agentic code review 描述为一种闭环代码审查机制：评审代理先探索代码仓库，再判断 PR 是否应被接受，并输出结构化反馈供后续修订。",
      "link": "https://arxiv.org/abs/2607.06065",
      "source": "SWE-Review / arXiv / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "SWE-Review Paper",
      "related": [
        "Coding Agent",
        "AI Agent",
        "Human-in-the-Loop"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 27 · 频次 24 · 权重 19 · 位置 11 · 时效 11"
    },
    {
      "rank": 3,
      "english": "Streamable HTTP",
      "chinese": "可流式 HTTP 传输",
      "brief": "MCP 用单一 HTTP 端点承载请求响应与流式消息的传输机制",
      "officialDefinition": "Model Context Protocol 2025-06-18 规范将 Streamable HTTP 定义为 MCP 的传输方式：客户端通过 HTTP POST 向单一端点发送 JSON-RPC 消息，服务器可用普通响应或 Server-Sent Events 返回一个或多个消息。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http",
      "source": "MCP 规范 / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "MCP Transport Spec",
      "related": [
        "MCP",
        "MCP Tools",
        "MCP Resources"
      ],
      "score": 89,
      "scoreBreakdown": "覆盖 26 · 频次 24 · 权重 19 · 位置 9 · 时效 11"
    },
    {
      "rank": 4,
      "english": "Adversarial Pragmatics",
      "chinese": "对抗语用学",
      "brief": "用指令冲突嵌入命令和政策歧义等语言陷阱系统测试模型安全判断的评测框架",
      "officialDefinition": "Adversarial Pragmatics 论文将其定义为一种安全评测基准与标注协议，用于在 instruction conflict、embedded commands 与 policy ambiguity 等复杂语用场景下检验模型行为。",
      "link": "https://arxiv.org/abs/2607.01153",
      "source": "AI Safety Eval / arXiv / 安全研究社区 / 中文技术媒体",
      "sourceLabel": "Adversarial Pragmatics Paper",
      "related": [
        "AI Safety",
        "AI Benchmarks",
        "Tool Guardrails"
      ],
      "score": 86,
      "scoreBreakdown": "覆盖 25 · 频次 22 · 权重 18 · 位置 9 · 时效 12"
    },
    {
      "rank": 5,
      "english": "Dynamic Client Registration",
      "chinese": "动态客户端注册",
      "brief": "让 MCP 客户端在授权服务器上自动登记自身身份与回调信息的机制",
      "officialDefinition": "MCP 授权规范建议服务器支持 OAuth 2.0 Dynamic Client Registration，使 MCP 客户端可以在运行时向授权服务器注册并获得客户端身份，而不必预先手工配置每个客户端。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#dynamic-client-registration",
      "source": "MCP 授权规范 / 安全讨论 / 中文技术博客",
      "sourceLabel": "MCP Authorization Spec",
      "related": [
        "MCP Authorization",
        "MCP",
        "AI Safety"
      ],
      "score": 82,
      "scoreBreakdown": "覆盖 23 · 频次 21 · 权重 18 · 位置 9 · 时效 11"
    },
    {
      "rank": 6,
      "english": "Workflow Fidelity",
      "chinese": "流程保真度",
      "brief": "衡量智能体是否真正按预期业务流程逐步执行而不偷偷走捷径的评测视角",
      "officialDefinition": "Workflow Fidelity 论文将这一视角用于衡量智能体执行轨迹是否忠实匹配预期工作流，而不只看最终任务有没有成功完成。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / 支付 Agent 研究 / 中文开发者社区",
      "sourceLabel": "Workflow Fidelity Paper",
      "related": [
        "AI Workflow",
        "Agent Observability",
        "Evals"
      ],
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 17 · 位置 9 · 时效 11"
    },
    {
      "rank": 7,
      "english": "Agentic Success Rate",
      "chinese": "代理式成功率",
      "brief": "按执行轨迹转移是否符合预期来衡量智能体流程质量的指标",
      "officialDefinition": "Workflow Fidelity 论文将 Agentic Success Rate 定义为一种 trajectory-fidelity metric，用于在转移层面对比实际执行序列与预期执行序列，并分解为 Transition Recall 与 Transition Precision。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / Agent 评测讨论 / 中文技术社区",
      "sourceLabel": "ASR Metric Paper",
      "related": [
        "Evals",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 21 · 频次 19 · 权重 17 · 位置 8 · 时效 10"
    },
    {
      "rank": 8,
      "english": "Agent-Native Memory System",
      "chinese": "原生智能体记忆系统",
      "brief": "围绕存储检索更新维护和生命周期治理而设计的代理记忆系统",
      "officialDefinition": "Agent-Native Memory System 论文将 agent memory 描述为一种数据管理系统，它在代理执行过程中支持持久化存储、检索、更新、整合与动态生命周期治理。",
      "link": "https://arxiv.org/abs/2606.24775",
      "source": "Memory Systems / arXiv / Agent 记忆研究 / 中文开发者社区",
      "sourceLabel": "Agent Memory Paper",
      "related": [
        "Long-term Memory",
        "Short-term Memory",
        "RAG"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 20 · 频次 18 · 权重 16 · 位置 8 · 时效 10"
    },
    {
      "rank": 9,
      "english": "Group Memory",
      "chinese": "群组记忆",
      "brief": "让代理在多人多轮协作对话中分别记住不同说话者信息与群体关系的记忆能力",
      "officialDefinition": "GroupMemBench 将 group memory 指向多方对话场景下的代理记忆能力，其中既要跟踪不同说话者信念，也要处理面向不同受众的表达与群体动态。",
      "link": "https://arxiv.org/abs/2605.14498",
      "source": "GroupMemBench / arXiv / 多方对话研究 / 中文技术社区",
      "sourceLabel": "GroupMemBench Paper",
      "related": [
        "Long-term Memory",
        "Agent State",
        "Context Engineering"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 19 · 频次 17 · 权重 16 · 位置 8 · 时效 8"
    },
    {
      "rank": 10,
      "english": "Configurable Human Participation",
      "chinese": "可配置人类参与",
      "brief": "按参与时机参与方式和参与角色动态调整人类介入力度的人机协作机制",
      "officialDefinition": "HAS-Bench 将 configurable human participation 用作评测维度，用于系统比较人类在不同 agency levels、interaction channels 与 persona policies 下介入任务时带来的影响。",
      "link": "https://arxiv.org/abs/2607.04329",
      "source": "HAS-Bench / arXiv / 人机协作研究 / 中文 AI 媒体",
      "sourceLabel": "HAS-Bench Paper",
      "related": [
        "Human-in-the-Loop",
        "AI Agent",
        "AI Workflow"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 18 · 频次 16 · 权重 15 · 位置 7 · 时效 8"
    }
  ],
  "2026-07-10": [
    {
      "rank": 1,
      "english": "Agentic Code Review",
      "chinese": "代理式代码审查",
      "brief": "让代码审查代理先理解仓库上下文再评估 PR 风险并推动修订闭环的审查方法",
      "officialDefinition": "SWE-Review 将 agentic code review 描述为一种闭环代码审查机制：评审代理先探索代码仓库，再判断 PR 是否应被接受，并输出结构化反馈供后续修订。",
      "link": "https://arxiv.org/abs/2607.06065",
      "source": "SWE-Review / arXiv / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "SWE-Review Paper",
      "related": [
        "AI Agent",
        "LLM",
        "Prompt Engineering"
      ],
      "score": 94,
      "scoreBreakdown": "覆盖 28 · 频次 25 · 权重 19 · 位置 11 · 时效 11"
    },
    {
      "rank": 2,
      "english": "Human-Agent Systems",
      "chinese": "人机协作系统",
      "brief": "由人类与 AI 代理共同承担决策执行和纠偏责任的协作系统范式",
      "officialDefinition": "HAS-Bench 将 Human-Agent Systems 描述为一种共享控制范式：人类与 LLM 代理作为一等参与者共同完成任务，并围绕角色、权限、沟通路径与行动权持续协同。",
      "link": "https://arxiv.org/abs/2607.04329",
      "source": "HAS-Bench / arXiv / 开源评测讨论 / 中文 AI 媒体",
      "sourceLabel": "HAS-Bench Paper",
      "related": [
        "AI Agent",
        "LLM",
        "Guardrails"
      ],
      "score": 91,
      "scoreBreakdown": "覆盖 27 · 频次 24 · 权重 19 · 位置 10 · 时效 11"
    },
    {
      "rank": 3,
      "english": "Adversarial Pragmatics",
      "chinese": "对抗语用学",
      "brief": "用语言语境陷阱系统测试模型安全判断、指令服从和拒答边界的评测框架",
      "officialDefinition": "Adversarial Pragmatics 论文将其定义为一种安全评测基准与标注协议，用于在 instruction conflict、embedded commands 与 policy ambiguity 等复杂语用场景下检验模型行为。",
      "link": "https://arxiv.org/abs/2607.01153",
      "source": "Adversarial Pragmatics / arXiv / 安全研究社区 / 中文技术媒体",
      "sourceLabel": "Adversarial Pragmatics Paper",
      "related": [
        "AI Safety",
        "Prompt Injection",
        "Guardrails"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 26 · 频次 23 · 权重 18 · 位置 10 · 时效 11"
    },
    {
      "rank": 4,
      "english": "Streamable HTTP",
      "chinese": "可流式 HTTP 传输",
      "brief": "MCP 用单一 HTTP 端点同时承载普通请求响应和流式消息的传输机制",
      "officialDefinition": "Model Context Protocol 2025-06-18 规范将 Streamable HTTP 定义为 MCP 的传输方式：客户端通过 HTTP POST 向单一端点发送 JSON-RPC 消息，服务器可用普通响应或 Server-Sent Events 返回一个或多个消息。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http",
      "source": "MCP 规范 / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "MCP Transport Spec",
      "related": [
        "MCP",
        "AI Agent",
        "RAG"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 24 · 频次 22 · 权重 18 · 位置 9 · 时效 11"
    },
    {
      "rank": 5,
      "english": "Dynamic Client Registration",
      "chinese": "动态客户端注册",
      "brief": "让 MCP 客户端运行时登记身份与回调信息后再进入授权流程的机制",
      "officialDefinition": "MCP 授权规范建议服务器支持 OAuth 2.0 Dynamic Client Registration，使 MCP 客户端可以在运行时向授权服务器注册并获得客户端身份，而不必预先手工配置每个客户端。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization#dynamic-client-registration",
      "source": "MCP 授权规范 / 开源安全讨论 / 中文技术博客",
      "sourceLabel": "MCP Authorization Spec",
      "related": [
        "MCP",
        "AI Safety",
        "Guardrails"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 23 · 频次 20 · 权重 18 · 位置 9 · 时效 11"
    },
    {
      "rank": 6,
      "english": "Instruction Conflict",
      "chinese": "指令冲突",
      "brief": "多条要求互相打架时用于测试模型能否正确分辨任务和安全优先级的场景",
      "officialDefinition": "Adversarial Pragmatics 将 instruction conflict 作为核心测试场景之一，用于检验模型在存在互相冲突指令时是否仍能遵守正确的安全与任务优先级。",
      "link": "https://arxiv.org/abs/2607.01153",
      "source": "Adversarial Pragmatics / arXiv / 安全评测讨论 / 中文开发者社区",
      "sourceLabel": "Adversarial Pragmatics Paper",
      "related": [
        "AI Safety",
        "Prompt Injection",
        "Guardrails"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 17 · 位置 8 · 时效 11"
    },
    {
      "rank": 7,
      "english": "Workflow Fidelity",
      "chinese": "流程保真度",
      "brief": "衡量智能体执行轨迹是否忠实匹配预期工作流而不只看最终结果的评测视角",
      "officialDefinition": "Workflow Fidelity 论文将这一视角用于衡量智能体执行轨迹是否忠实匹配预期工作流，而不只看最终任务有没有成功完成。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / Agent 评测讨论 / 中文技术社区",
      "sourceLabel": "Workflow Fidelity Paper",
      "related": [
        "AI Agent",
        "Inference",
        "Guardrails"
      ],
      "score": 73,
      "scoreBreakdown": "覆盖 21 · 频次 18 · 权重 17 · 位置 8 · 时效 9"
    },
    {
      "rank": 8,
      "english": "Protocol-Aligned Evaluation",
      "chinese": "协议对齐评测",
      "brief": "按真实交互协议和工具调用约束评估智能体外部环境任务能力的评测方式",
      "officialDefinition": "BenchAgent 将 protocol-aligned external environments 作为评测设置，要求智能体在符合真实交互协议的外部环境中完成任务，从而更贴近实际部署场景。",
      "link": "https://arxiv.org/abs/2606.05670",
      "source": "BenchAgent / arXiv / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "BenchAgent Paper",
      "related": [
        "AI Agent",
        "MCP",
        "Inference"
      ],
      "score": 70,
      "scoreBreakdown": "覆盖 20 · 频次 17 · 权重 16 · 位置 8 · 时效 9"
    },
    {
      "rank": 9,
      "english": "Transition Precision",
      "chinese": "转移精度",
      "brief": "衡量智能体实际执行步骤中有多少真正属于目标流程有效状态转移的轨迹指标",
      "officialDefinition": "Workflow Fidelity 论文将 Transition Precision 作为轨迹指标之一，用于衡量模型实际采取的步骤中有多少与目标工作流中的有效状态转移相匹配。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / 支付 Agent 研究 / 中文技术社区",
      "sourceLabel": "Workflow Fidelity Paper",
      "related": [
        "AI Agent",
        "Inference",
        "Token"
      ],
      "score": 67,
      "scoreBreakdown": "覆盖 19 · 频次 16 · 权重 16 · 位置 7 · 时效 9"
    },
    {
      "rank": 10,
      "english": "Memory as Action Space",
      "chinese": "记忆动作空间",
      "brief": "把长期记忆暴露为可选择和可导航工具而不是被动检索片段的智能体记忆机制",
      "officialDefinition": "Active Memory Navigation 论文将 memory as a structured action space 描述为一种长期记忆使用方式：智能体可在多粒度记忆层级中主动选择、检查和汇集证据，而不是只消费预先检索好的上下文。",
      "link": "https://arxiv.org/abs/2607.05794",
      "source": "Active Memory Navigation / arXiv / Agent 记忆讨论 / 中文技术社区",
      "sourceLabel": "Active Memory Navigation Paper",
      "related": [
        "Context Window",
        "LLM",
        "RAG"
      ],
      "score": 64,
      "scoreBreakdown": "覆盖 18 · 频次 15 · 权重 15 · 位置 7 · 时效 9"
    }
  ],
  "2026-07-11": [
    {
      "rank": 1,
      "english": "Protocol-Aligned Evaluation",
      "chinese": "协议对齐评测",
      "brief": "按真实交互协议和工具调用约束评估智能体外部环境任务能力的评测方式",
      "officialDefinition": "BenchAgent 将 protocol-aligned external environments 作为评测设置，要求智能体在符合真实交互协议的外部环境中完成任务，从而更贴近实际部署场景。",
      "link": "https://arxiv.org/abs/2606.05670",
      "source": "BenchAgent / arXiv / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "BenchAgent Paper",
      "related": [
        "AI Agent",
        "MCP",
        "Evals"
      ],
      "score": 91,
      "scoreBreakdown": "覆盖 27 · 频次 23 · 权重 18 · 位置 12 · 术语 11"
    },
    {
      "rank": 2,
      "english": "Memory as Action Space",
      "chinese": "记忆动作空间",
      "brief": "把长期记忆暴露为可选择和可导航工具而不是被动检索片段的智能体记忆机制",
      "officialDefinition": "Active Memory Navigation 论文将 memory as a structured action space 描述为一种长期记忆使用方式：智能体可在多粒度记忆层级中主动选择、检查和汇集证据，而不是只消费预先检索好的上下文。",
      "link": "https://arxiv.org/abs/2607.05794",
      "source": "Active Memory Navigation / arXiv / Agent 记忆讨论 / 中文技术社区",
      "sourceLabel": "Active Memory Navigation Paper",
      "related": [
        "RAG",
        "Context Window",
        "AI Agent"
      ],
      "score": 88,
      "scoreBreakdown": "覆盖 26 · 频次 22 · 权重 18 · 位置 12 · 术语 10"
    },
    {
      "rank": 3,
      "english": "Active Memory Navigation",
      "chinese": "主动记忆导航",
      "brief": "让智能体在长期记忆层级中主动选择证据、回看片段并组合上下文的记忆使用方法",
      "officialDefinition": "Active Memory Navigation 研究把长期记忆组织成可导航结构，使智能体能够主动选择、检查和整合记忆证据，以改进长程任务中的上下文使用。",
      "link": "https://arxiv.org/abs/2607.05794",
      "source": "Active Memory Navigation / arXiv / Agent 记忆讨论 / 中文开发者社区",
      "sourceLabel": "Active Memory Navigation Paper",
      "related": [
        "RAG",
        "AI Agent",
        "Context Window"
      ],
      "score": 85,
      "scoreBreakdown": "覆盖 25 · 频次 21 · 权重 18 · 位置 11 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Trajectory-Level Evaluation",
      "chinese": "轨迹级评测",
      "brief": "按智能体完整行动轨迹而非单次答案评估规划、工具调用、恢复和任务完成质量的方法",
      "officialDefinition": "面向大语言模型智能体的轨迹评测研究将 trajectory-level evaluation 描述为对代理从观察、思考、行动到反馈的完整序列进行分析，以评估其稳定性、效率和错误恢复能力。",
      "link": "https://arxiv.org/abs/2607.05268",
      "source": "Agent 评测论文 / GitHub benchmark 动态 / 中文开发者社区 / 技术论坛",
      "sourceLabel": "Trajectory Evaluation Paper",
      "related": [
        "Rollout",
        "Agent Evals",
        "Tracing"
      ],
      "score": 82,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Action Trajectory Data",
      "chinese": "动作轨迹数据",
      "brief": "记录智能体观察、决策、工具调用和环境反馈序列的训练与评测数据形式",
      "officialDefinition": "大动作模型和智能体环境研究把 action trajectory data 用于表示代理在环境中执行任务时产生的状态、动作和反馈序列，可用于训练、模拟和评估工具使用能力。",
      "link": "https://arxiv.org/abs/2607.05565",
      "source": "LAM 研究 / 开源 benchmark / 中文 Agent 开发者讨论 / GitHub 动态",
      "sourceLabel": "Action Trajectory Paper",
      "related": [
        "Rollout",
        "Training Data",
        "Tool Use"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Agentic Provenance",
      "chinese": "智能体溯源",
      "brief": "记录智能体输入、推理、工具调用、外部证据和动作链路以支持审计与复现的机制",
      "officialDefinition": "PROV-AGENT 将 agentic provenance 描述为面向代理式 AI 工作流的溯源记录框架，用于捕获代理决策、工具调用、数据来源和执行步骤之间的因果关系。",
      "link": "https://arxiv.org/abs/2607.01850",
      "source": "PROV-AGENT / 开源溯源社区 / 中文工程论坛 / AgentOps 讨论",
      "sourceLabel": "PROV-AGENT Paper",
      "related": [
        "Tracing",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 17 · 位置 10 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Transition Recall",
      "chinese": "转移召回率",
      "brief": "衡量目标工作流中的关键状态转移有多少被智能体实际执行覆盖的轨迹指标",
      "officialDefinition": "Workflow Fidelity 论文将 Transition Recall 作为轨迹指标之一，用于衡量预期工作流中的有效状态转移有多少被智能体实际执行轨迹覆盖。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / Agent 评测讨论 / 中文技术社区",
      "sourceLabel": "Workflow Fidelity Paper",
      "related": [
        "Evals",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Transition Precision",
      "chinese": "转移精度",
      "brief": "衡量智能体实际执行步骤中有多少真正属于目标流程有效状态转移的轨迹指标",
      "officialDefinition": "Workflow Fidelity 论文将 Transition Precision 作为轨迹指标之一，用于衡量模型实际采取的步骤中有多少与目标工作流中的有效状态转移相匹配。",
      "link": "https://arxiv.org/abs/2605.06457",
      "source": "Workflow Fidelity / arXiv / 支付 Agent 研究 / 中文技术社区",
      "sourceLabel": "Workflow Fidelity Paper",
      "related": [
        "Evals",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 19 · 频次 15 · 权重 16 · 位置 10 · 术语 9"
    },
    {
      "rank": 9,
      "english": "Runtime-Generated Workflow",
      "chinese": "运行时生成工作流",
      "brief": "由智能体在执行过程中根据当前环境动态生成步骤和工具调用路径的工作流形态",
      "officialDefinition": "智能体工作流研究将 runtime-generated workflow 用于描述代理在任务执行期间依据观察和反馈动态构造后续步骤，而不是完全依赖预设流程。",
      "link": "https://arxiv.org/abs/2606.05670",
      "source": "BenchAgent / Agent 工作流讨论 / 中文开发者社区",
      "sourceLabel": "BenchAgent Paper",
      "related": [
        "AI Workflow",
        "AI Agent",
        "Tool Use"
      ],
      "score": 66,
      "scoreBreakdown": "覆盖 18 · 频次 14 · 权重 15 · 位置 9 · 术语 10"
    },
    {
      "rank": 10,
      "english": "External Environment Benchmark",
      "chinese": "外部环境基准",
      "brief": "把真实外部系统、协议和交互反馈纳入智能体能力评估的基准设置",
      "officialDefinition": "BenchAgent 将外部环境任务作为智能体评测重点，强调让代理在真实或模拟外部系统中按协议交互，以评估其工具使用、恢复和执行能力。",
      "link": "https://arxiv.org/abs/2606.05670",
      "source": "BenchAgent / arXiv / 开源 benchmark 动态",
      "sourceLabel": "BenchAgent Paper",
      "related": [
        "AI Agent",
        "Evals",
        "Tool Use"
      ],
      "score": 63,
      "scoreBreakdown": "覆盖 17 · 频次 13 · 权重 15 · 位置 9 · 术语 9"
    }
  ],
  "2026-07-12": [
    {
      "rank": 1,
      "english": "Indirect Prompt Injection",
      "chinese": "间接提示注入",
      "brief": "把恶意指令藏在网页、文档或检索内容中诱导模型越权执行的攻击方式",
      "officialDefinition": "OWASP LLM01 将 prompt injection 描述为通过直接输入或外部内容操纵大语言模型行为的风险；其中间接提示注入是把指令嵌入模型会读取的第三方内容，再影响模型输出或工具调用。",
      "link": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
      "source": "OWASP / 中文安全社区 / GitHub Agent 安全讨论 / 开发者论坛",
      "sourceLabel": "OWASP LLM01",
      "related": [
        "Prompt Injection",
        "Tool Guardrails",
        "AI Safety"
      ],
      "score": 92,
      "scoreBreakdown": "覆盖 28 · 频次 23 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 2,
      "english": "GEO",
      "chinese": "生成式引擎优化",
      "brief": "面向生成式搜索和问答引擎优化内容可引用性、证据密度与回答呈现的方法",
      "officialDefinition": "生成式引擎优化（Generative Engine Optimization, GEO）论文将 GEO 描述为一种面向生成式引擎的优化范式，通过改写和增强网页内容来提升其在生成式回答中的可见度。",
      "link": "https://arxiv.org/abs/2311.09735",
      "source": "Princeton / Georgia Tech / IIT Delhi / 中文 AI 搜索讨论 / 技术媒体",
      "sourceLabel": "GEO Paper",
      "related": [
        "RAG",
        "Grounding",
        "Semantic Analysis"
      ],
      "score": 89,
      "scoreBreakdown": "覆盖 26 · 频次 22 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 3,
      "english": "AI Agent Identity",
      "chinese": "AI 智能体身份",
      "brief": "为智能体建立可识别、可认证、可审计身份以区分代理行为和人类行为的治理机制",
      "officialDefinition": "NIST AI Agent Standards Initiative 将识别智能体身份、追踪其代表人类执行的委托动作、并记录提示词和数据输入来源列为 AI 智能体标准化的关键议题。",
      "link": "https://arxiv.org/abs/2604.23280",
      "source": "NIST / 身份安全社区 / 中文开发者社区 / 企业安全论坛",
      "sourceLabel": "NIST AI Agent Standards",
      "related": [
        "AI Agent",
        "Policy",
        "Tracing"
      ],
      "score": 86,
      "scoreBreakdown": "覆盖 25 · 频次 20 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 4,
      "english": "Vector and Embedding Weaknesses",
      "chinese": "向量与嵌入弱点",
      "brief": "向量库、嵌入表示和相似度检索被污染、泄露或操纵而影响 AI 系统结果的风险类别",
      "officialDefinition": "OWASP LLM08 将 Vector and Embedding Weaknesses 定义为与向量、嵌入和检索组件相关的安全风险，攻击者可能通过操纵、泄露或污染这些表示来影响大语言模型应用。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "OWASP / 中文安全社区 / RAG 工程讨论 / 开源向量库动态",
      "sourceLabel": "OWASP LLM08",
      "related": [
        "Embedding",
        "Vector Database",
        "RAG"
      ],
      "score": 83,
      "scoreBreakdown": "覆盖 24 · 频次 19 · 权重 18 · 位置 12 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Authenticated Delegation",
      "chinese": "认证式委托",
      "brief": "要求智能体代表用户行动前证明授权范围、委托链和调用意图的权限机制",
      "officialDefinition": "Authenticated Delegation for AI Agents 将认证式委托描述为一种让代理在访问资源或调用工具时携带可验证授权上下文的机制，用于把用户意图、代理身份和资源权限绑定起来。",
      "link": "https://arxiv.org/abs/2506.08607",
      "source": "MIT / 身份协议社区 / 中文 Agent 安全讨论 / GitHub 开源动态",
      "sourceLabel": "Authenticated Delegation Paper",
      "related": [
        "Tool Approval",
        "Policy",
        "AI Agent"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 18 · 位置 12 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Confused-Deputy Failure",
      "chinese": "混淆代理失败",
      "brief": "智能体把外部内容或工具请求误当成用户授权意图而代为执行的权限失配问题",
      "officialDefinition": "ScopeGate 研究把混淆代理问题用于描述 AI 代理在工具调用时可能把攻击者控制的上下文当作合法委托，从而越过用户真实授权边界的失败模式。",
      "link": "https://arxiv.org/abs/2606.28679",
      "source": "ScopeGate / 中文安全社区 / Agent 工具调用讨论 / 开源评测动态",
      "sourceLabel": "ScopeGate Paper",
      "related": [
        "Tool Approval",
        "Tool Guardrails",
        "Prompt Injection"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 17 · 位置 12 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Agentic Provenance",
      "chinese": "智能体溯源",
      "brief": "记录智能体输入、推理、工具调用、外部证据和动作链路以支持审计与复现的机制",
      "officialDefinition": "PROV-AGENT 将 agentic provenance 描述为面向代理式 AI 工作流的溯源记录框架，用于捕获代理决策、工具调用、数据来源和执行步骤之间的因果关系。",
      "link": "https://arxiv.org/abs/2607.01850",
      "source": "PROV-AGENT / 开源溯源社区 / 中文工程论坛 / AgentOps 讨论",
      "sourceLabel": "PROV-AGENT Paper",
      "related": [
        "Tracing",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 74,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Trajectory-Level Evaluation",
      "chinese": "轨迹级评测",
      "brief": "按智能体完整行动轨迹而非单次答案评估规划、工具调用、恢复和任务完成质量的方法",
      "officialDefinition": "面向大语言模型智能体的轨迹评测研究将 trajectory-level evaluation 描述为对代理从观察、思考、行动到反馈的完整序列进行分析，以评估其稳定性、效率和错误恢复能力。",
      "link": "https://arxiv.org/abs/2607.05268",
      "source": "Agent 评测论文 / GitHub benchmark 动态 / 中文开发者社区 / 技术论坛",
      "sourceLabel": "Trajectory Evaluation Paper",
      "related": [
        "Rollout",
        "Agent Evals",
        "Tracing"
      ],
      "score": 71,
      "scoreBreakdown": "覆盖 19 · 频次 15 · 权重 16 · 位置 11 · 术语 10"
    },
    {
      "rank": 9,
      "english": "Action Trajectory Data",
      "chinese": "动作轨迹数据",
      "brief": "记录智能体观察、决策、工具调用和环境反馈序列的训练与评测数据形式",
      "officialDefinition": "大动作模型和智能体环境研究把 action trajectory data 用于表示代理在环境中执行任务时产生的状态、动作和反馈序列，可用于训练、模拟和评估工具使用能力。",
      "link": "https://arxiv.org/abs/2607.05565",
      "source": "LAM 研究 / 开源 benchmark / 中文 Agent 开发者讨论 / GitHub 动态",
      "sourceLabel": "Action Trajectory Paper",
      "related": [
        "Rollout",
        "Training Data",
        "Tool Use"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 18 · 频次 14 · 权重 16 · 位置 10 · 术语 10"
    },
    {
      "rank": 10,
      "english": "Role Confusion",
      "chinese": "角色混淆",
      "brief": "模型无法稳定区分系统、开发者、用户和外部内容角色边界而导致指令优先级失效的问题",
      "officialDefinition": "Prompt Injection as Role Confusion 研究将提示注入解释为角色混淆问题：模型在不同消息角色、外部内容和工具反馈之间混淆指令来源与优先级，从而执行不应服从的指令。",
      "link": "https://arxiv.org/abs/2607.06076",
      "source": "Role Confusion 研究 / 中文安全社区 / Prompt 工程论坛 / 开源讨论",
      "sourceLabel": "Role Confusion Paper",
      "related": [
        "System Prompt",
        "Prompt Injection",
        "Instruction Conflict"
      ],
      "score": 65,
      "scoreBreakdown": "覆盖 17 · 频次 13 · 权重 15 · 位置 10 · 术语 10"
    }
  ],
  "2026-07-13": [
    {
      "rank": 1,
      "english": "Agentic Provenance",
      "chinese": "智能体溯源",
      "brief": "记录智能体输入、工具调用、证据和动作链路以支持审计与责任追踪的机制",
      "officialDefinition": "PROV-AGENT 将 agentic provenance 描述为面向代理式 AI 工作流的溯源记录框架，用于捕获代理决策、工具调用、数据来源和执行步骤之间的因果关系。",
      "link": "https://arxiv.org/abs/2607.01850",
      "source": "PROV-AGENT / 机器之心 / InfoQ 中文 / GitHub 开源动态",
      "sourceLabel": "PROV-AGENT Paper",
      "related": [
        "Tracing",
        "Agent Observability",
        "AI Workflow"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 28 · 频次 24 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 2,
      "english": "AI Agent Identity",
      "chinese": "AI 智能体身份",
      "brief": "为智能体建立可识别、可认证、可审计身份以区分代理行为和人类行为的治理机制",
      "officialDefinition": "NIST AI Agent Standards Initiative 将识别智能体身份、追踪其代表人类执行的委托动作、并记录提示词和数据输入来源列为 AI 智能体标准化的关键议题。",
      "link": "https://arxiv.org/abs/2604.23280",
      "source": "NIST / 量子位 / 安全客 / 企业身份安全论坛",
      "sourceLabel": "NIST AI Agent Standards",
      "related": [
        "AI Agent",
        "Policy",
        "Tracing"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 27 · 频次 23 · 权重 18 · 位置 13 · 术语 9"
    },
    {
      "rank": 3,
      "english": "Excessive Agency",
      "chinese": "过度代理权",
      "brief": "智能体拥有超出任务所需工具权限或自主行动范围而放大误操作和攻击后果的风险模式",
      "officialDefinition": "OWASP LLM Top 10 将 Excessive Agency 描述为 LLM 应用被授予过多功能、权限或自主性时产生的风险，攻击者可借此诱导系统执行高影响动作。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "OWASP / FreeBuf / 安全客 / GitHub Agent 安全讨论",
      "sourceLabel": "OWASP LLM Top 10",
      "related": [
        "Tool Guardrails",
        "AI Safety",
        "Policy"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 26 · 频次 22 · 权重 18 · 位置 12 · 术语 9"
    },
    {
      "rank": 4,
      "english": "Durable Execution",
      "chinese": "持久化执行",
      "brief": "把智能体工作流状态保存到检查点中以便失败恢复、人类介入和长任务续跑的执行机制",
      "officialDefinition": "LangGraph 文档将 durable execution 描述为通过持久化状态、检查点和线程恢复，让长时间运行的代理工作流能在中断后继续执行的能力。",
      "link": "https://docs.langchain.com/oss/python/langgraph/durable-execution",
      "source": "LangGraph / 机器之心 / 中文开发者社区 / GitHub 开源动态",
      "sourceLabel": "LangGraph Durable Execution",
      "related": [
        "Checkpointer",
        "Session State",
        "AI Workflow"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 18 · 位置 12 · 术语 10"
    },
    {
      "rank": 5,
      "english": "Human Approval Gate",
      "chinese": "人类审批闸门",
      "brief": "在高风险工具调用或关键动作前暂停智能体流程并要求人工批准的控制点",
      "officialDefinition": "OpenAI Agents SDK 的 human-in-the-loop 机制允许工具调用在执行前中断并等待人工批准，使开发者能对敏感动作设置审批闸门。",
      "link": "https://openai.github.io/openai-agents-python/human-in-the-loop/",
      "source": "OpenAI Agents SDK / InfoQ 中文 / 开发者论坛 / GitHub 示例",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Tool Approval",
        "Human-in-the-Loop",
        "Guardrails"
      ],
      "score": 80,
      "scoreBreakdown": "覆盖 23 · 频次 19 · 权重 17 · 位置 11 · 术语 10"
    },
    {
      "rank": 6,
      "english": "Evaluator-Optimizer Workflow",
      "chinese": "评估器-优化器工作流",
      "brief": "让一个模型生成候选结果、另一个模型评估反馈并驱动迭代改进的智能体工作流模式",
      "officialDefinition": "Anthropic 将 evaluator-optimizer workflow 描述为一种代理工作流：一个 LLM 调用生成响应，另一个 LLM 调用提供评估与反馈，再通过循环持续优化结果。",
      "link": "https://www.anthropic.com/engineering/building-effective-agents",
      "source": "Anthropic / 量子位 / 中文 Agent 工程讨论 / 技术论坛",
      "sourceLabel": "Anthropic Engineering",
      "related": [
        "Verifier",
        "Reward Model",
        "AI Workflow"
      ],
      "score": 77,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 17 · 位置 10 · 术语 10"
    },
    {
      "rank": 7,
      "english": "Routing Workflow",
      "chinese": "路由式工作流",
      "brief": "先对输入进行分类再把任务分派给最适合模型、工具或子代理的智能体编排模式",
      "officialDefinition": "Anthropic 将 routing workflow 描述为一种先对输入进行分类并路由到专门后续任务的工作流，适合把关注点分离并为不同输入选择不同处理路径。",
      "link": "https://www.anthropic.com/engineering/building-effective-agents",
      "source": "Anthropic / 机器之心 / 开源 Agent 示例 / 中文开发者社区",
      "sourceLabel": "Anthropic Engineering",
      "related": [
        "Handoffs",
        "Task Decomposition",
        "AI Workflow"
      ],
      "score": 74,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 16 · 位置 10 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Resource Indicator",
      "chinese": "资源指示器",
      "brief": "在授权请求中明确声明目标资源以减少智能体工具调用和跨资源访问混淆的 OAuth 机制",
      "officialDefinition": "RFC 8707 将 resource parameter 定义为客户端在授权请求中标识目标受保护资源的方式，授权服务器可据此把访问令牌限定到指定资源。",
      "link": "https://datatracker.ietf.org/doc/html/rfc8707",
      "source": "IETF / MCP 授权讨论 / 中文安全社区 / 企业架构论坛",
      "sourceLabel": "IETF RFC 8707",
      "related": [
        "MCP Authorization",
        "Protected Resource Metadata",
        "AI Agent Identity"
      ],
      "score": 71,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 术语 9"
    },
    {
      "rank": 9,
      "english": "Provenance Graph",
      "chinese": "溯源图",
      "brief": "用节点和边表达数据、代理动作、工具调用与结果之间因果关系的可审计记录结构",
      "officialDefinition": "W3C PROV 将 provenance 定义为关于实体、活动和人员组织的信息，可用于形成评估可信度的记录；在智能体系统中常被组织为可查询的溯源图。",
      "link": "https://www.w3.org/TR/prov-overview/",
      "source": "W3C PROV / PROV-AGENT / 中文工程论坛 / 开源观测讨论",
      "sourceLabel": "W3C PROV Overview",
      "related": [
        "Tracing",
        "Agentic Provenance",
        "Agent Observability"
      ],
      "score": 68,
      "scoreBreakdown": "覆盖 19 · 频次 15 · 权重 15 · 位置 10 · 术语 9"
    },
    {
      "rank": 10,
      "english": "Unbounded Consumption",
      "chinese": "无界资源消耗",
      "brief": "模型递归调用、长循环或高成本工具链被滥用导致费用、延迟和服务可用性失控的风险类别",
      "officialDefinition": "OWASP LLM Top 10 将 Unbounded Consumption 描述为 LLM 应用被诱导产生过量计算、令牌、网络或工具资源消耗，进而造成成本和可用性风险的类别。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "OWASP / FreeBuf / 运维安全社区 / 中文开发者论坛",
      "sourceLabel": "OWASP LLM Top 10",
      "related": [
        "Inference",
        "AI Safety",
        "Tool Guardrails"
      ],
      "score": 65,
      "scoreBreakdown": "覆盖 18 · 频次 14 · 权重 15 · 位置 9 · 术语 9"
    }
  ],
  "2026-07-14": [
    {
      "rank": 1,
      "english": "Agentic Memory",
      "chinese": "智能体记忆",
      "brief": "让智能体在任务过程中主动写入、检索、更新和整合经验的长期记忆机制",
      "officialDefinition": "Agent-Native Memory System 研究将 agent memory 描述为一种面向智能体执行的数据管理系统，支持记忆的持久化存储、检索、更新、整合与生命周期治理。",
      "link": "https://arxiv.org/abs/2606.24775",
      "source": "机器之心 / InfoQ 中文 / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "Agent Memory Paper",
      "related": [
        "Long-term Memory",
        "Agent-Native Memory System",
        "RAG"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 25 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Agent Orchestration",
      "chinese": "智能体编排",
      "brief": "把多个智能体、工具、状态和交接规则组织成可控任务流程的工程机制",
      "officialDefinition": "Google 机器学习术语表将 agent orchestration 解释为协调多个代理、工具和工作流步骤以完成复杂目标的过程。",
      "link": "https://developers.google.com/machine-learning/glossary#agent-orchestration",
      "source": "量子位 / InfoQ 中文 / GitHub 开源动态 / 企业 AI 论坛",
      "sourceLabel": "Google AI Glossary",
      "related": [
        "AI Agent",
        "Agentic Workflow",
        "Multi-agent System"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 29 · 频次 24 · 权重 18 · 位置 13 · 术语 9"
    },
    {
      "rank": 3,
      "english": "Agentic Retrieval",
      "chinese": "代理式检索",
      "brief": "让智能体根据问题自主规划检索路径、选择工具并迭代补充证据的检索方式",
      "officialDefinition": "IBM 对 Agentic RAG 的解释强调让 AI 智能体进入检索增强生成流程，由智能体规划、推理和调用工具来完成更复杂的信息检索与回答任务。",
      "link": "https://www.ibm.com/think/topics/agentic-rag",
      "source": "机器之心 / 量子位 / 开源 RAG 项目 / 中文技术社区",
      "sourceLabel": "IBM Think",
      "related": [
        "RAG",
        "Agentic RAG",
        "Tool Use"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 28 · 频次 23 · 权重 17 · 位置 13 · 术语 9"
    },
    {
      "rank": 4,
      "english": "Inference-Time Scaling",
      "chinese": "推理时扩展",
      "brief": "在不重新训练模型的前提下通过增加推理计算、采样或验证来提升回答质量的方法",
      "officialDefinition": "s1 研究将 test-time scaling 作为一种推理阶段扩展方法，通过控制模型思考预算和生成策略，在模型参数不变时提升推理任务表现。",
      "link": "https://arxiv.org/abs/2501.19393",
      "source": "机器之心 / 量子位 / arXiv 研究讨论 / 开源评测社区",
      "sourceLabel": "s1 Paper",
      "related": [
        "Inference",
        "Reasoning Model",
        "Test-Time Compute"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 27 · 频次 22 · 权重 17 · 位置 12 · 术语 9"
    },
    {
      "rank": 5,
      "english": "Reward Hacking",
      "chinese": "奖励黑客",
      "brief": "模型或智能体利用奖励函数漏洞拿高分却偏离真实目标的对齐失败模式",
      "officialDefinition": "Google 机器学习术语表将 reward hacking 描述为系统通过利用奖励设计中的漏洞获得高奖励，但其行为并不符合设计者真实意图的现象。",
      "link": "https://developers.google.com/machine-learning/glossary#reward-hacking",
      "source": "安全客 / FreeBuf / 中文 AI 安全社区 / 研究论文讨论",
      "sourceLabel": "Google AI Glossary",
      "related": [
        "Reward Model",
        "AI Safety",
        "RLHF"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 26 · 频次 21 · 权重 17 · 位置 11 · 术语 9"
    },
    {
      "rank": 6,
      "english": "OAuth Resource Metadata",
      "chinese": "OAuth 资源元数据",
      "brief": "让客户端发现受保护资源授权服务器和访问要求的 OAuth 元数据机制",
      "officialDefinition": "RFC 9728 定义了 OAuth 2.0 Protected Resource Metadata，使受保护资源能够发布其授权服务器、支持的能力和访问要求等元数据。",
      "link": "https://www.rfc-editor.org/rfc/rfc9728.html",
      "source": "InfoQ 中文 / 安全客 / MCP 授权讨论 / 企业架构论坛",
      "sourceLabel": "IETF RFC 9728",
      "related": [
        "MCP Authorization",
        "Protected Resource Metadata",
        "Resource Indicator"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 17 · 位置 11 · 术语 9"
    },
    {
      "rank": 7,
      "english": "JSON Mode",
      "chinese": "JSON 模式",
      "brief": "约束模型输出有效 JSON 以便应用直接解析和接入后续流程的生成模式",
      "officialDefinition": "OpenAI 文档将 JSON mode 描述为一种确保模型响应生成有效 JSON 的模式，适合需要机器可解析输出的场景。",
      "link": "https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses#json-mode",
      "source": "OpenAI 开发者讨论 / GitHub issue / 中文开发者社区 / API 实践文章",
      "sourceLabel": "OpenAI Docs",
      "related": [
        "Structured Outputs",
        "Tool Calling",
        "Tool Use"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 23 · 频次 19 · 权重 16 · 位置 10 · 术语 10"
    },
    {
      "rank": 8,
      "english": "Sandboxed Tool Use",
      "chinese": "沙箱化工具调用",
      "brief": "把模型调用代码、浏览器或文件工具限制在隔离环境中以降低越权和破坏风险的机制",
      "officialDefinition": "OpenAI 工具文档将代码解释器等托管工具放在受控执行环境中运行，使模型能够执行代码和处理文件，同时把执行能力限制在隔离上下文内。",
      "link": "https://platform.openai.com/docs/guides/tools-code-interpreter",
      "source": "安全客 / FreeBuf / OpenAI 开发者社区 / 中文工程论坛",
      "sourceLabel": "OpenAI Tools Docs",
      "related": [
        "Tool Use",
        "Computer Use",
        "Tool Approval"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 16 · 位置 10 · 术语 9"
    },
    {
      "rank": 9,
      "english": "Memory Retrieval",
      "chinese": "记忆检索",
      "brief": "从长期记忆或历史状态中取回与当前任务最相关信息供智能体继续推理的过程",
      "officialDefinition": "LangChain 记忆文档将长期记忆描述为跨会话持久保存的信息，智能体可在后续线程中检索这些知识、偏好和经验来辅助执行。",
      "link": "https://docs.langchain.com/oss/python/concepts/memory#long-term-memory",
      "source": "LangChain 开源动态 / 中文开发者社区 / GitHub 讨论 / Agent 工程文章",
      "sourceLabel": "LangChain Memory",
      "related": [
        "Long-term Memory",
        "RAG",
        "Context Engineering"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 16 · 位置 9 · 术语 9"
    },
    {
      "rank": 10,
      "english": "Hierarchical Planning",
      "chinese": "分层规划",
      "brief": "把复杂目标拆成高层计划和低层可执行步骤以提升智能体长任务稳定性的规划方法",
      "officialDefinition": "Berkeley CS188 将 hierarchical planning 作为规划方法讲解：先在高层抽象空间形成计划，再把每个抽象步骤细化为更具体的行动序列。",
      "link": "https://inst.eecs.berkeley.edu/~cs188/textbook/classical/hierarchical.html",
      "source": "机器之心 / 中文开发者社区 / 多智能体论文讨论 / 教程资料",
      "sourceLabel": "UC Berkeley CS188",
      "related": [
        "Task Decomposition",
        "Agentic Workflow",
        "AI Agent"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 15 · 位置 9 · 术语 9"
    }
  ],
  "2026-07-15": [
    {
      "rank": 1,
      "english": "MCP Authorization",
      "chinese": "MCP 授权",
      "brief": "为模型上下文协议连接外部资源时定义身份认证、授权服务器发现和令牌使用边界的安全机制",
      "officialDefinition": "MCP Authorization 指 Model Context Protocol（模型上下文协议）在访问受保护资源时采用的授权机制，规范要求客户端通过 OAuth 2.1、授权服务器元数据和受保护资源元数据完成授权发现与访问控制。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization",
      "source": "InfoQ 中文 / 安全客 / MCP 中文社区 / GitHub 开源动态",
      "sourceLabel": "MCP Authorization Spec",
      "related": [
        "MCP",
        "OAuth Resource Metadata",
        "Resource Indicator"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 25 · 权重 18 · 位置 13 · 术语 10"
    },
    {
      "rank": 2,
      "english": "Protected Resource Metadata",
      "chinese": "受保护资源元数据",
      "brief": "让客户端发现资源所需授权服务器、访问要求和资源标识的标准化元数据",
      "officialDefinition": "IETF RFC 9728 将 OAuth 2.0 Protected Resource Metadata 定义为受保护资源发布自身元数据的机制，使客户端能够发现授权服务器、资源标识和访问所需能力。",
      "link": "https://www.rfc-editor.org/rfc/rfc9728.html",
      "source": "InfoQ 中文 / MCP 授权讨论 / 企业架构论坛 / GitHub issue",
      "sourceLabel": "IETF RFC 9728",
      "related": [
        "OAuth Resource Metadata",
        "MCP Authorization",
        "Resource Indicator"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 29 · 频次 24 · 权重 18 · 位置 13 · 术语 9"
    },
    {
      "rank": 3,
      "english": "Input Guardrails",
      "chinese": "输入护栏",
      "brief": "在模型或智能体执行前检查用户输入和上下文以拦截越权、注入与高风险请求的防护层",
      "officialDefinition": "OpenAI Agents SDK 将 input guardrails 描述为在智能体运行前并行检查输入的机制，可根据检查结果触发 tripwire，从而阻止不符合策略或高风险的任务继续执行。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "量子位 / InfoQ 中文 / OpenAI 开发者社区 / 中文安全论坛",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Guardrails",
        "Tool Guardrails",
        "AI Safety"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 28 · 频次 23 · 权重 18 · 位置 12 · 术语 9"
    },
    {
      "rank": 4,
      "english": "Output Guardrails",
      "chinese": "输出护栏",
      "brief": "在模型或智能体给出最终结果前校验输出是否满足安全、格式和业务策略的防护层",
      "officialDefinition": "OpenAI Agents SDK 将 output guardrails 描述为在智能体生成输出后运行的检查机制，用于验证最终结果并在触发 tripwire 时阻止不合规输出交付给用户。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "机器之心 / OpenAI 开发者社区 / 中文工程论坛 / 安全客",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Guardrails",
        "Structured Outputs",
        "AI Safety"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 27 · 频次 22 · 权重 18 · 位置 11 · 术语 9"
    },
    {
      "rank": 5,
      "english": "Sensitive Information Disclosure",
      "chinese": "敏感信息泄露",
      "brief": "LLM 应用在回答、日志或工具链中暴露密钥、隐私数据和内部提示的安全风险",
      "officialDefinition": "OWASP LLM Top 10 将 Sensitive Information Disclosure 列为大语言模型应用风险，指系统可能在输出、日志、错误信息或工具调用链路中泄露个人数据、凭证、商业机密或系统提示。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "FreeBuf / 安全客 / 中文 AI 安全社区 / 企业安全论坛",
      "sourceLabel": "OWASP LLM Top 10",
      "related": [
        "AI Safety",
        "Prompt Injection",
        "Tool Guardrails"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 26 · 频次 21 · 权重 17 · 位置 11 · 术语 9"
    },
    {
      "rank": 6,
      "english": "Supply Chain Vulnerabilities",
      "chinese": "供应链漏洞",
      "brief": "模型、数据集、插件、工具和依赖包被污染后影响 LLM 应用完整性的安全风险",
      "officialDefinition": "OWASP LLM Top 10 将 Supply Chain Vulnerabilities 描述为 LLM 应用依赖的模型、数据、插件、工具、运行时和第三方组件被污染或篡改后带来的完整性与安全风险。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "FreeBuf / 安全客 / GitHub 安全动态 / 中文开发者社区",
      "sourceLabel": "OWASP LLM Top 10",
      "related": [
        "AI Safety",
        "Tool Poisoning",
        "AI Red Teaming"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 24 · 频次 20 · 权重 17 · 位置 10 · 术语 9"
    },
    {
      "rank": 7,
      "english": "Agent Audit Log",
      "chinese": "智能体审计日志",
      "brief": "记录智能体每次模型调用、工具调用、状态变化和输出结果以支持回放与问责的日志体系",
      "officialDefinition": "LangSmith Observability 文档将 tracing、runs、metadata 和反馈用于观察 LLM 应用与智能体执行过程，帮助团队记录每一步输入输出、工具调用、错误和评估信号。",
      "link": "https://docs.langchain.com/langsmith/observability",
      "source": "InfoQ 中文 / LangChain 开源动态 / 中文开发者社区 / 企业 AI 论坛",
      "sourceLabel": "LangSmith Docs",
      "related": [
        "Agent Tracing",
        "Agent Evals",
        "AI Agent"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 23 · 频次 19 · 权重 16 · 位置 10 · 术语 9"
    },
    {
      "rank": 8,
      "english": "Evaluation Trace",
      "chinese": "评测轨迹",
      "brief": "把模型或智能体在评测任务中的输入、步骤、工具调用和判断结果串联成可复盘记录",
      "officialDefinition": "LangSmith Evaluation 文档将评测运行与 trace 结合，用于记录应用在样本上的执行过程、指标、反馈和中间步骤，使团队能够定位模型或智能体失败原因。",
      "link": "https://docs.langchain.com/langsmith/evaluation",
      "source": "机器之心 / LangChain 开源动态 / 评测社区 / 中文技术论坛",
      "sourceLabel": "LangSmith Docs",
      "related": [
        "Agent Evals",
        "Agent Tracing",
        "AI Benchmarks"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 16 · 位置 9 · 术语 9"
    },
    {
      "rank": 9,
      "english": "Disaggregated Prefill",
      "chinese": "分离式预填充",
      "brief": "把大模型推理中的预填充和解码阶段拆到不同执行资源以提升吞吐和资源利用率的架构",
      "officialDefinition": "vLLM 文档将 disaggregated prefill 描述为把 prefill 与 decode 阶段解耦部署的推理服务架构，用于在不同资源上分别优化长上下文预处理和逐 token 解码。",
      "link": "https://docs.vllm.ai/en/latest/features/disagg_prefill.html",
      "source": "GitHub 开源动态 / vLLM 社区 / 中文推理优化讨论 / 开发者论坛",
      "sourceLabel": "vLLM Docs",
      "related": [
        "Inference",
        "Token",
        "Prompt Caching"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 21 · 频次 17 · 权重 16 · 位置 9 · 术语 9"
    },
    {
      "rank": 10,
      "english": "AI Risk Measurement",
      "chinese": "AI 风险度量",
      "brief": "用指标、评估流程和监控证据持续衡量 AI 系统风险水平与治理成效的方法",
      "officialDefinition": "NIST AI Risk Management Framework 将 Measure 作为核心功能之一，要求组织用定量、定性或混合方法分析、评估、基准测试和监控 AI 风险及其治理效果。",
      "link": "https://www.nist.gov/itl/ai-risk-management-framework",
      "source": "安全客 / 政策技术社区 / 企业 AI 治理论坛 / 中文产业媒体",
      "sourceLabel": "NIST AI RMF",
      "related": [
        "AI RMF",
        "Responsible AI",
        "AI Safety"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 15 · 位置 8 · 术语 10"
    }
  ],
  "2026-07-16": [
    {
      "rank": 1,
      "english": "Capability Negotiation",
      "chinese": "能力协商",
      "brief": "客户端与服务端在会话初始化阶段声明并确认可用能力的协议机制",
      "officialDefinition": "MCP 规范将 capability negotiation 作为初始化生命周期的一部分：客户端和服务端各自声明支持的能力，双方据此决定后续会话中可使用的工具、资源、提示和扩展功能。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/lifecycle",
      "source": "MCP Docs / 中文 MCP 教程 / 开源客户端讨论",
      "sourceLabel": "MCP Specification",
      "score": 91,
      "scoreBreakdown": "覆盖 30 · 频次 23 · 权重 18 · 位置 10 · 术语 10",
      "related": [
        "MCP",
        "MCP Authorization",
        "Tool Use"
      ]
    },
    {
      "rank": 2,
      "english": "Tool Annotations",
      "chinese": "工具注解",
      "brief": "为工具补充只读性、破坏性、幂等等行为提示的元数据",
      "officialDefinition": "MCP 工具规范把 annotations 定义为描述工具行为的元数据，例如是否只读、是否具有破坏性、是否幂等、是否需要开放世界访问，用于帮助客户端做展示与授权决策。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools",
      "source": "MCP Docs / 中文开发者社区 / 开源客户端讨论",
      "sourceLabel": "MCP Specification",
      "score": 88,
      "scoreBreakdown": "覆盖 30 · 频次 21 · 权重 18 · 位置 9 · 术语 10",
      "related": [
        "Tool Use",
        "Sandboxed Tool Use",
        "MCP Authorization"
      ]
    },
    {
      "rank": 3,
      "english": "Agent Evaluation",
      "chinese": "智能体评测",
      "brief": "用可复现任务、评分器和轨迹检查系统性衡量智能体表现的方法",
      "officialDefinition": "OpenAI Evals 文档将 evals 描述为衡量模型或应用在特定任务上质量的测试；在智能体场景中，评测会同时关注最终答案、工具调用、步骤轨迹和约束遵守情况。",
      "link": "https://platform.openai.com/docs/guides/evals",
      "source": "OpenAI Docs / 中文 AI 工程社区 / 技术媒体评测讨论",
      "sourceLabel": "OpenAI Docs",
      "score": 85,
      "scoreBreakdown": "覆盖 22 · 频次 21 · 权重 18 · 位置 14 · 术语 10",
      "related": [
        "Evaluation Trace",
        "LLM-as-a-Judge",
        "AI Agent"
      ]
    },
    {
      "rank": 4,
      "english": "Trace Evaluation",
      "chinese": "轨迹评测",
      "brief": "沿着模型与工具交互的完整执行轨迹检查质量、安全和成本",
      "officialDefinition": "OpenAI 将 tracing 用于记录代理运行中的步骤、工具调用和中间结果；Trace Evaluation 则是在这些轨迹上评估任务是否按预期执行、是否越权、是否出现无效调用或安全问题。",
      "link": "https://platform.openai.com/docs/guides/tracing",
      "source": "OpenAI Docs / 中文 Agent 工程讨论 / 开源评测项目",
      "sourceLabel": "OpenAI Docs",
      "score": 82,
      "scoreBreakdown": "覆盖 22 · 频次 20 · 权重 18 · 位置 12 · 术语 10",
      "related": [
        "Evaluation Trace",
        "Agent Audit Log",
        "Agent Evaluation"
      ]
    },
    {
      "rank": 5,
      "english": "Context Poisoning",
      "chinese": "上下文投毒",
      "brief": "把恶意或误导内容注入模型上下文以操纵后续输出和工具调用的攻击方式",
      "officialDefinition": "OWASP GenAI 风险中的 prompt injection 描述了攻击者通过直接或间接指令影响大模型行为的风险；Context Poisoning 可视为把这种风险扩展到检索结果、记忆、网页和工具返回内容中的上下文污染。",
      "link": "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
      "source": "OWASP GenAI / 中文安全社区 / AI 应用防护讨论",
      "sourceLabel": "OWASP GenAI",
      "score": 79,
      "scoreBreakdown": "覆盖 22 · 频次 19 · 权重 18 · 位置 10 · 术语 10",
      "related": [
        "Indirect Prompt Injection",
        "Vector and Embedding Weaknesses",
        "Input Guardrails"
      ]
    },
    {
      "rank": 6,
      "english": "GenAI Red Teaming",
      "chinese": "生成式 AI 红队测试",
      "brief": "用对抗性测试系统发现生成式 AI 的越权、泄露、偏见和误用风险",
      "officialDefinition": "NIST AI 风险管理框架把测量、管理和治理 AI 风险作为核心实践；GenAI Red Teaming 是面向生成式 AI 的对抗性评估方法，用来发现模型、工具链和部署流程中的安全与滥用风险。",
      "link": "https://www.nist.gov/itl/ai-risk-management-framework",
      "source": "NIST / 中文安全社区 / 企业 AI 治理讨论",
      "sourceLabel": "NIST AI RMF",
      "score": 76,
      "scoreBreakdown": "覆盖 22 · 频次 18 · 权重 17 · 位置 9 · 术语 10",
      "related": [
        "AI Risk Measurement",
        "Output Guardrails",
        "AI Safety"
      ]
    },
    {
      "rank": 7,
      "english": "RLVR",
      "chinese": "可验证奖励强化学习",
      "brief": "用可自动验证的答案或规则奖励训练模型推理能力的强化学习方法",
      "officialDefinition": "RLVR（Reinforcement Learning with Verifiable Rewards）指利用可验证任务结果构造奖励信号的强化学习范式，常用于数学、代码和可判定任务，让模型通过明确对错反馈改进推理策略。",
      "link": "https://arxiv.org/abs/2502.03373",
      "source": "arXiv / 中文大模型训练社区 / 开源训练框架讨论",
      "sourceLabel": "arXiv",
      "score": 73,
      "scoreBreakdown": "覆盖 15 · 频次 19 · 权重 18 · 位置 11 · 术语 10",
      "related": [
        "Reinforcement Learning",
        "Reward Model",
        "Reasoning Model"
      ]
    },
    {
      "rank": 8,
      "english": "Batch Inference",
      "chinese": "批量推理",
      "brief": "把多个请求合并成批次运行以提升吞吐并降低单位推理成本的方式",
      "officialDefinition": "Google 机器学习术语表将 batch inference 描述为对一组无标签样本离线生成预测的推理方式；在大模型服务中，它也对应把请求聚合处理以提升吞吐和资源利用率。",
      "link": "https://developers.google.com/machine-learning/glossary#batch-inference",
      "source": "Google ML Glossary / 中文推理优化讨论 / 开源推理框架动态",
      "sourceLabel": "Google ML Glossary",
      "score": 70,
      "scoreBreakdown": "覆盖 15 · 频次 18 · 权重 17 · 位置 10 · 术语 10",
      "related": [
        "Inference",
        "KV Cache",
        "Disaggregated Prefill"
      ]
    },
    {
      "rank": 9,
      "english": "Sparse Autoencoder",
      "chinese": "稀疏自编码器",
      "brief": "用稀疏特征分解神经网络内部表示以提升可解释性的模型组件",
      "officialDefinition": "Anthropic Transformer Circuits 研究使用 sparse autoencoders 从语言模型激活中学习稀疏、可解释的特征，使研究者能够定位模型内部表示并分析其与行为之间的关系。",
      "link": "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
      "source": "Anthropic Transformer Circuits / 中文可解释性社区 / 开源 SAE 项目",
      "sourceLabel": "Anthropic Transformer Circuits",
      "score": 67,
      "scoreBreakdown": "覆盖 15 · 频次 17 · 权重 17 · 位置 8 · 术语 10",
      "related": [
        "Autoencoder",
        "AI Safety",
        "Neural Network"
      ]
    },
    {
      "rank": 10,
      "english": "Activation Steering",
      "chinese": "激活引导",
      "brief": "通过调节模型内部激活方向来影响生成行为的表示工程方法",
      "officialDefinition": "Activation Steering 通常指在推理时向模型隐藏状态加入或调节特定方向的激活向量，以增强或抑制某类行为；相关研究把它作为理解和控制语言模型内部表示的表示工程方法。",
      "link": "https://arxiv.org/abs/2312.06681",
      "source": "arXiv / 中文可解释性社区 / 开源表示工程项目",
      "sourceLabel": "arXiv",
      "score": 64,
      "scoreBreakdown": "覆盖 15 · 频次 16 · 权重 16 · 位置 7 · 术语 10",
      "related": [
        "Sparse Autoencoder",
        "AI Safety",
        "Neural Network"
      ]
    }
  ],
  "2026-07-17": [
    {
      "rank": 1,
      "english": "Agentic Misalignment",
      "chinese": "智能体对齐失范",
      "brief": "自主智能体在拥有工具和权限后，为达成自身目标而偏离用户或组织意图的风险模式",
      "officialDefinition": "Agentic Misalignment 指具备自主行动能力的模型在高风险场景中识别到任务冲突后，仍选择通过隐蔽改代码、误标评测、泄露信息或操纵人类代理等方式违背委托方意图的对齐失败现象。",
      "link": "https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026/",
      "source": "Anthropic Alignment / 中文安全讨论 / 研究社区",
      "sourceLabel": "Anthropic Alignment",
      "related": [
        "AI Alignment",
        "AI Safety",
        "Agent Evaluation"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 25 · 权重 19 · 位置 12 · 热度 10"
    },
    {
      "rank": 2,
      "english": "Agent Monitoring",
      "chinese": "智能体监控",
      "brief": "持续审查智能体动作、推理痕迹和工具使用，以发现对齐、安全与合规异常的运行机制",
      "officialDefinition": "Agent Monitoring 指在真实或准真实部署中记录并分析智能体的行动、工具调用和内部推理线索，对可能违背用户意图或安全策略的行为进行分类、告警和处置的安全基础设施。",
      "link": "https://openai.com/zh-Hans-CN/index/how-we-monitor-internal-coding-agents-misalignment/",
      "source": "OpenAI / 中文技术媒体 / 智能体安全社区",
      "sourceLabel": "OpenAI Safety",
      "related": [
        "Agent Audit Log",
        "Agent Observability",
        "AI Safety"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 29 · 频次 24 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 3,
      "english": "Agent Guardrails",
      "chinese": "智能体护栏",
      "brief": "围绕智能体输入、输出和工具调用设置校验、拦截与触发器的安全控制层",
      "officialDefinition": "Agent Guardrails 指附着在智能体工作流中的检查和验证机制，用于在用户输入、最终输出或自定义工具调用前后检测风险，并在触发条件满足时阻止、改写或中断执行。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "OpenAI Agents SDK / 中文开发者社区 / AgentOps 讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Guardrails",
        "Input Guardrails",
        "Tool Guardrails"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 28 · 频次 23 · 权重 18 · 位置 12 · 热度 9"
    },
    {
      "rank": 4,
      "english": "HITL Middleware",
      "chinese": "人在回路中间件",
      "brief": "在智能体执行敏感工具调用前暂停流程，并让人类批准、修改、拒绝或直接回应的中间层",
      "officialDefinition": "HITL Middleware 是 Human-in-the-Loop middleware 的缩写，指在智能体提出需要审查的工具动作时按策略触发 interrupt、保存图状态，并等待人类以 approve、edit、reject 或 respond 等决策恢复执行的中间件。",
      "link": "https://docs.langchain.com/oss/python/langchain/human-in-the-loop",
      "source": "LangChain / 中文开发者社区 / 企业 Agent 审批实践",
      "sourceLabel": "LangChain Docs",
      "related": [
        "Human-in-the-Loop",
        "Human Approval Gate",
        "Tool Approval"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 27 · 频次 22 · 权重 17 · 位置 12 · 热度 9"
    },
    {
      "rank": 5,
      "english": "Conditional Interrupts",
      "chinese": "条件式中断",
      "brief": "只在工具参数、路径、SQL 等满足风险条件时暂停智能体执行的人审触发机制",
      "officialDefinition": "Conditional Interrupts 指在人在回路工作流中通过 predicate 或策略判断工具调用是否需要暂停，只有当调用内容符合风险条件时才发出 interrupt，使审查集中在需要人类决策的动作上。",
      "link": "https://docs.langchain.com/oss/python/langchain/human-in-the-loop#conditional-interrupts",
      "source": "LangChain / LangGraph / 中文工程实践社区",
      "sourceLabel": "LangChain Docs",
      "related": [
        "HITL Middleware",
        "Human Approval Gate",
        "Tool Approval"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 26 · 频次 21 · 权重 17 · 位置 11 · 热度 9"
    },
    {
      "rank": 6,
      "english": "MCP Output Schema",
      "chinese": "MCP 输出结构",
      "brief": "用 JSON Schema 约束工具结构化返回值，让客户端和模型能验证并可靠解析工具结果",
      "officialDefinition": "MCP Output Schema 指 MCP 工具定义中可选的 outputSchema 字段，用 JSON Schema 描述结构化结果；当提供该字段时，服务器必须返回符合 schema 的 structuredContent，客户端也应进行校验。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#output-schema",
      "source": "MCP 官方规范 / GitHub 开源动态 / 中文开发者讨论",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP Tools",
        "Structured Outputs",
        "Tool Result"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 25 · 频次 20 · 权重 17 · 位置 10 · 热度 9"
    },
    {
      "rank": 7,
      "english": "MCP Resource Links",
      "chinese": "MCP 资源链接",
      "brief": "让工具结果返回可订阅或可获取的外部资源 URI，为模型后续步骤提供上下文入口",
      "officialDefinition": "MCP Resource Links 指 MCP 工具结果中的 resource_link 内容类型，工具可通过 URI、名称、描述和 MIME 类型返回资源引用，让客户端或模型在后续流程中获取或订阅相关上下文。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#resource-links",
      "source": "MCP 官方规范 / 开源 SDK 更新 / 中文开发者讨论",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP",
        "Resource Templates",
        "Tool Result"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 24 · 频次 19 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 8,
      "english": "Confidential AI",
      "chinese": "机密 AI",
      "brief": "在可信执行环境中保护模型、提示词和数据使用过程的安全部署范式",
      "officialDefinition": "Confidential AI 指将机密计算用于 AI 工作负载，在硬件根信任的可信执行环境中保护正在处理的模型、提示词和数据，并用加密证明降低内部人员和基础设施威胁。",
      "link": "https://www.nvidia.com/en-us/glossary/confidential-computing/",
      "source": "NVIDIA / 企业 AI 安全新闻 / 中文云计算社区",
      "sourceLabel": "NVIDIA Glossary",
      "related": [
        "AI Safety",
        "Inference",
        "RAG"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 23 · 频次 18 · 权重 16 · 位置 9 · 热度 9"
    },
    {
      "rank": 9,
      "english": "Agentic RL for Search",
      "chinese": "搜索型智能体强化学习",
      "brief": "用强化学习训练模型在推理过程中自主发起搜索、整合结果并继续行动的训练方法",
      "officialDefinition": "Agentic RL for Search 是 Agentic Reinforcement Learning for Search 的缩写，指训练大语言模型在推理中主动使用搜索工具的强化学习方法；相关研究指出它可能改变指令微调形成的安全拒答行为。",
      "link": "https://arxiv.org/abs/2510.17431",
      "source": "arXiv / ICML AIWILD / 中文研究社区",
      "sourceLabel": "arXiv",
      "related": [
        "Reinforcement Learning",
        "Tool Use",
        "Agentic Misalignment"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 22 · 频次 17 · 权重 16 · 位置 8 · 热度 9"
    },
    {
      "rank": 10,
      "english": "Agent Trace",
      "chinese": "智能体轨迹记录",
      "brief": "记录智能体运行中的模型生成、工具调用、交接、护栏和自定义事件，用于调试与监控",
      "officialDefinition": "Agent Trace 指智能体运行时的完整事件记录，覆盖模型生成、工具调用、handoff、guardrail 和自定义事件，使开发者能够在开发与生产环境中调试、可视化和监控工作流。",
      "link": "https://openai.github.io/openai-agents-python/tracing/",
      "source": "OpenAI Agents SDK / AgentOps 社区 / 中文开发者讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Agent Tracing",
        "Tracing",
        "Agent Observability"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 21 · 频次 16 · 权重 15 · 位置 8 · 热度 9"
    }
  ],
  "2026-07-20": [
    {
      "rank": 1,
      "english": "MCP Elicitation",
      "chinese": "MCP 反向询问",
      "brief": "让服务器在工具执行过程中向用户请求补充信息或确认的 MCP 交互能力",
      "officialDefinition": "MCP Elicitation 指服务器在处理请求时向客户端发起结构化信息收集请求，让用户补充缺失字段、确认选择或提供必要输入。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation",
      "source": "MCP 官方规范 / GitHub 开源动态 / 中文开发者讨论",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP",
        "Human Approval Gate",
        "Structured Tool Result"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 24 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 2,
      "english": "MCP Sampling",
      "chinese": "MCP 采样请求",
      "brief": "让服务器通过客户端请求模型生成内容，以在工具或资源流程中调用语言模型能力",
      "officialDefinition": "MCP Sampling 指服务器向客户端发出模型采样请求，由客户端代为选择模型、发送提示并返回生成结果。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/client/sampling",
      "source": "MCP 官方规范 / 开源 SDK 更新 / Agent 工程社区",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP",
        "Tool Use",
        "MCP Elicitation"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 27 · 频次 21 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 3,
      "english": "Multi-Agent Handoff",
      "chinese": "多智能体交接",
      "brief": "一个智能体把任务上下文和控制权转交给另一个更合适智能体的协作机制",
      "officialDefinition": "Multi-Agent Handoff 指在多智能体系统中，当前智能体根据任务类型、上下文或能力边界，把控制权转交给另一个专门智能体处理。",
      "link": "https://openai.github.io/openai-agents-python/handoffs/",
      "source": "OpenAI Agents SDK / 多智能体社区 / 中文开发者讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "AI Agent",
        "Agent Orchestration",
        "Context Preservation"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 24 · 频次 18 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 4,
      "english": "Agent Toolkit",
      "chinese": "智能体工具包",
      "brief": "把智能体开发所需的工具、编排、评估和部署能力打包成统一开发框架",
      "officialDefinition": "Agent Toolkit 指用于构建、连接、评估和部署智能体应用的工具集合，通常包含工具注册、工作流编排、模型连接、记忆和运行时集成能力。",
      "link": "https://docs.nvidia.com/nemo/agent-toolkit/latest/",
      "source": "NVIDIA / 开源 Agent 框架 / 开发者社区",
      "sourceLabel": "NVIDIA Docs",
      "related": [
        "AI Agent",
        "Agent Orchestration",
        "Tool Use"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 21 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 5,
      "english": "Inference Microservice",
      "chinese": "推理微服务",
      "brief": "把模型推理能力封装成可独立部署、扩缩容和调用的服务单元",
      "officialDefinition": "Inference Microservice 指把模型运行、接口、资源调度和服务治理封装成微服务形态，使应用能通过 API 调用模型能力并按需扩展部署。",
      "link": "https://docs.nvidia.com/nim/",
      "source": "NVIDIA / 企业 AI 部署 / 推理服务社区",
      "sourceLabel": "NVIDIA Docs",
      "related": [
        "Inference",
        "Tool Use",
        "Latency"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 6,
      "english": "GenAI Semantic Conventions",
      "chinese": "生成式 AI 语义约定",
      "brief": "为模型请求、工具调用和生成事件统一命名指标与追踪字段的可观测性规范",
      "officialDefinition": "OpenTelemetry GenAI Semantic Conventions 定义了生成式 AI 系统的通用属性、事件和指标语义，用于跨框架采集模型调用、token、工具和错误等遥测数据。",
      "link": "https://github.com/open-telemetry/semantic-conventions-genai",
      "source": "OpenTelemetry / AgentOps 社区 / 企业可观测性讨论",
      "sourceLabel": "OpenTelemetry",
      "related": [
        "Agent Observability",
        "Tracing",
        "Agent Trace"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 7,
      "english": "Browser Automation Agent",
      "chinese": "浏览器自动化智能体",
      "brief": "能理解网页状态并操作浏览器完成搜索、填写表单和跨站任务的智能体",
      "officialDefinition": "Browser Automation Agent 指具备网页感知、动作规划和浏览器控制能力的智能体，可通过点击、输入、导航和读取页面信息完成 Web 任务。",
      "link": "https://docs.browser-use.com/cloud/agent/quickstart",
      "source": "browser-use / GitHub 开源动态 / 中文开发者社区",
      "sourceLabel": "browser-use Docs",
      "related": [
        "AI Browser",
        "Computer Use Agent",
        "AI Agent"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 8,
      "english": "Computer Use Agent",
      "chinese": "计算机使用智能体",
      "brief": "能看屏幕、移动光标、点击和输入，从而操作通用软件界面的智能体",
      "officialDefinition": "Computer Use Agent 指能够观察计算机界面并执行鼠标、键盘和窗口操作的 AI 智能体，使模型可以通过通用 GUI 完成跨应用任务。",
      "link": "https://www.anthropic.com/news/developing-computer-use",
      "source": "Anthropic / AI Agent 社区 / 自动化工具讨论",
      "sourceLabel": "Anthropic",
      "related": [
        "Computer Use",
        "Browser Automation Agent",
        "AI Agent"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 9,
      "english": "Agentic Workflow Design",
      "chinese": "智能体工作流设计",
      "brief": "围绕目标分解、工具调用、状态管理和人工干预设计智能体执行流程的方法",
      "officialDefinition": "Agentic Workflow Design 指为智能体任务设计可执行流程，包括角色划分、工具选择、状态保存、错误恢复、交接、审批和评估。",
      "link": "https://adk.dev/workflows/",
      "source": "Google ADK / 多智能体开发社区 / 中文工程讨论",
      "sourceLabel": "Google ADK Docs",
      "related": [
        "Agentic Workflow",
        "Multi-Agent Handoff",
        "Agent Orchestration"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 10,
      "english": "Guardrail Tripwire",
      "chinese": "护栏触发器",
      "brief": "在输入或输出护栏检测到风险时中断智能体流程并返回结构化告警的安全机制",
      "officialDefinition": "OpenAI Agents SDK 将 tripwire 描述为护栏检查命中时返回的触发信号，一旦触发，智能体运行会被中断并抛出相应异常。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "OpenAI Agents SDK / Agent 安全社区 / 中文开发者讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Input Guardrails",
        "Output Guardrails",
        "Agent Guardrails"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    }
  ],
  "2026-07-18": [
    {
      "rank": 1,
      "english": "AI Scorecard",
      "chinese": "AI 计分卡",
      "brief": "用可量化指标持续跟踪 AI 能力、成本、可靠性和社会影响的评估框架",
      "officialDefinition": "AI Scorecard 指用一组公开、可追踪的指标评估 AI 系统进展和影响的框架，覆盖能力、采用率、经济价值、可靠性、安全与社会反馈等维度。",
      "link": "https://openai.com/index/a-scorecard-for-the-ai-age/",
      "source": "OpenAI / 中文产业媒体 / AI 治理讨论",
      "sourceLabel": "OpenAI",
      "related": [
        "AI Risk Measurement",
        "Evaluation",
        "Responsible AI"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 24 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 2,
      "english": "Automated Red Teaming",
      "chinese": "自动化红队测试",
      "brief": "让 AI 自动生成攻击、诱导和异常场景以系统发现模型或智能体风险的方法",
      "officialDefinition": "Automated Red Teaming 指用模型、脚本或智能体自动构造安全测试样例，对目标 AI 系统进行对抗性评估，从而发现越权、泄露、滥用或对齐失败等风险。",
      "link": "https://openai.com/index/unlocking-self-improvement-gpt-red/",
      "source": "OpenAI / AI 安全社区 / 红队评测讨论",
      "sourceLabel": "OpenAI Research",
      "related": [
        "AI Safety",
        "Agent Evaluation",
        "Self-Play Red Teaming"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 27 · 频次 21 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 3,
      "english": "Centralized MCP Authorization",
      "chinese": "集中式 MCP 授权",
      "brief": "用统一授权服务器管理 MCP 客户端、资源服务器和用户权限的安全机制",
      "officialDefinition": "MCP Authorization 规范描述了基于 OAuth 2.1 的授权流程，资源服务器可声明授权服务器，使客户端发现并完成访问授权。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization",
      "source": "MCP 官方规范 / GitHub 开源动态 / 中文开发者讨论",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP",
        "MCP Server",
        "Least-Privilege Tooling"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 24 · 频次 18 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 4,
      "english": "Remote MCP Server",
      "chinese": "远程 MCP 服务器",
      "brief": "通过网络向客户端暴露工具、资源和提示词能力的 MCP 服务端形态",
      "officialDefinition": "Remote MCP Server 指运行在远程环境中的 MCP 服务端，通过协议向客户端提供工具、资源和提示能力，并配套鉴权、传输安全和权限边界。",
      "link": "https://modelcontextprotocol.io/docs/getting-started/intro",
      "source": "MCP 官方文档 / 开源 SDK 更新 / 开发者社区",
      "sourceLabel": "MCP Docs",
      "related": [
        "MCP",
        "Centralized MCP Authorization",
        "Tool Use"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 21 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 5,
      "english": "Tool Approval Gate",
      "chinese": "工具审批闸门",
      "brief": "在智能体执行敏感工具调用前暂停流程并等待人工批准的控制点",
      "officialDefinition": "Tool Approval Gate 指在人在回路工作流中对高风险工具调用设置审批步骤，系统会在执行前暂停并等待人类批准、修改、拒绝或回应。",
      "link": "https://docs.langchain.com/oss/python/langchain/human-in-the-loop",
      "source": "LangChain / 企业 Agent 审批实践 / 中文开发者讨论",
      "sourceLabel": "LangChain Docs",
      "related": [
        "HITL Middleware",
        "Human Approval Gate",
        "Tool Use"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 6,
      "english": "Agent Observability",
      "chinese": "智能体可观测性",
      "brief": "记录和分析智能体生成、工具调用、延迟、成本与错误的监控能力",
      "officialDefinition": "Agent Observability 指对智能体运行过程中的模型请求、工具调用、上下文、成本、延迟、异常和业务结果进行采集、关联和分析。",
      "link": "https://github.com/open-telemetry/semantic-conventions-genai",
      "source": "OpenTelemetry / AgentOps 社区 / 企业 AI 工程讨论",
      "sourceLabel": "OpenTelemetry",
      "related": [
        "Agent Trace",
        "Tracing",
        "Agent Monitoring"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 7,
      "english": "Confidential AI",
      "chinese": "机密 AI",
      "brief": "在可信执行环境中保护模型、提示词和数据使用过程的安全部署范式",
      "officialDefinition": "Confidential AI 指将机密计算用于 AI 工作负载，在硬件根信任的可信执行环境中保护正在处理的模型、提示词和数据，并用加密证明降低内部人员和基础设施威胁。",
      "link": "https://www.nvidia.com/en-us/glossary/confidential-computing/",
      "source": "NVIDIA / 企业 AI 安全新闻 / 中文云计算社区",
      "sourceLabel": "NVIDIA Glossary",
      "related": [
        "AI Safety",
        "Inference",
        "RAG"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 8,
      "english": "AI Risk Measurement",
      "chinese": "AI 风险度量",
      "brief": "用指标、评估流程和监控证据持续衡量 AI 系统风险水平与治理成效的方法",
      "officialDefinition": "NIST AI Risk Management Framework 将 Measure 作为核心功能之一，要求组织用定量、定性或混合方法分析、评估、基准测试和监控 AI 风险及其治理效果。",
      "link": "https://www.nist.gov/itl/ai-risk-management-framework",
      "source": "安全客 / 政策技术社区 / 企业 AI 治理论坛 / 中文产业媒体",
      "sourceLabel": "NIST AI RMF",
      "related": [
        "AI RMF",
        "Responsible AI",
        "AI Safety"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 9,
      "english": "Context Preservation",
      "chinese": "上下文保全",
      "brief": "在长任务、多轮交接或多工具调用中保留关键上下文以避免任务漂移的机制",
      "officialDefinition": "Context Preservation 指在智能体长流程中保留任务目标、约束、工具结果、用户偏好和关键决策记录，使后续步骤延续同一任务语境。",
      "link": "https://huggingface.co/blog/agent-glossary#context-engineering",
      "source": "Hugging Face / 中文 Agent 工程社区 / 开源框架讨论",
      "sourceLabel": "Hugging Face Blog",
      "related": [
        "Context Engineering",
        "Agent Memory",
        "Agent Trace"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 10,
      "english": "Unbounded Consumption",
      "chinese": "无界资源消耗",
      "brief": "模型递归调用、长循环或高成本工具链被滥用导致费用、延迟和服务可用性失控的风险类别",
      "officialDefinition": "OWASP LLM Top 10 将 Unbounded Consumption 描述为 LLM 应用被诱导产生过量计算、令牌、网络或工具资源消耗，进而造成成本和可用性风险的类别。",
      "link": "https://genai.owasp.org/llm-top-10/",
      "source": "OWASP / FreeBuf / 运维安全社区 / 中文开发者论坛",
      "sourceLabel": "OWASP LLM Top 10",
      "related": [
        "Inference",
        "AI Safety",
        "Tool Guardrails"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    }
  ],
  "2026-07-19": [
    {
      "rank": 1,
      "english": "Trace-Based Monitoring",
      "chinese": "基于轨迹的监控",
      "brief": "通过完整执行轨迹持续检查智能体质量、安全和成本异常的监控方式",
      "officialDefinition": "Trace-Based Monitoring 指以智能体运行轨迹为核心证据，记录模型生成、工具调用、上下文变化和异常事件，并据此进行调试、告警和审计。",
      "link": "https://openai.github.io/openai-agents-python/tracing/",
      "source": "OpenAI Agents SDK / AgentOps 社区 / 中文开发者讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Agent Trace",
        "Agent Observability",
        "Agent Monitoring"
      ],
      "score": 96,
      "scoreBreakdown": "覆盖 30 · 频次 24 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 2,
      "english": "Structured Tool Result",
      "chinese": "结构化工具结果",
      "brief": "让工具返回机器可验证、可解析的结构化内容而不是纯文本输出的结果格式",
      "officialDefinition": "MCP 工具结果可以包含 structuredContent、content 和 isError 等字段；当工具声明输出结构时，结构化结果应与 schema 匹配。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#tool-result",
      "source": "MCP 官方规范 / 开源工具链讨论 / 中文开发者社区",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP Output Schema",
        "Tool Result",
        "Structured Outputs"
      ],
      "score": 93,
      "scoreBreakdown": "覆盖 27 · 频次 21 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 3,
      "english": "Output Schema Validation",
      "chinese": "输出结构校验",
      "brief": "用 schema 自动验证工具或模型返回值是否符合预期结构的机制",
      "officialDefinition": "Output Schema Validation 指依据 JSON Schema 或类似结构约束，对工具结果、模型输出或 API 响应进行校验，确保字段、类型和约束满足要求。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#output-schema",
      "source": "MCP 规范 / OpenAI Structured Outputs / 工程实践社区",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP Output Schema",
        "Structured Tool Result",
        "Structured Outputs"
      ],
      "score": 90,
      "scoreBreakdown": "覆盖 24 · 频次 18 · 权重 18 · 位置 12 · 热度 10"
    },
    {
      "rank": 4,
      "english": "Resource Indicator",
      "chinese": "资源指示器",
      "brief": "在授权请求中声明目标受保护资源，降低跨资源访问混淆和令牌滥用风险的 OAuth 机制",
      "officialDefinition": "RFC 8707 将 resource parameter 定义为客户端在授权请求中标识目标受保护资源的方式，授权服务器可据此把访问令牌限定到指定资源。",
      "link": "https://datatracker.ietf.org/doc/html/rfc8707",
      "source": "IETF RFC 8707 / MCP 授权讨论 / 企业 IAM 社区",
      "sourceLabel": "IETF RFC 8707",
      "related": [
        "MCP Authorization",
        "Protected Resource Metadata",
        "AI Agent Identity"
      ],
      "score": 87,
      "scoreBreakdown": "覆盖 21 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 5,
      "english": "Policy-Aware Tool Calling",
      "chinese": "策略感知工具调用",
      "brief": "让智能体在调用工具前先根据权限、风险和业务规则判断是否允许执行的机制",
      "officialDefinition": "Policy-Aware Tool Calling 指在工具调用链路中引入策略判断，结合用户身份、工具风险、参数内容和上下文状态决定是否允许或拦截。",
      "link": "https://openai.github.io/openai-agents-python/guardrails/",
      "source": "OpenAI Agents SDK / AgentOps 社区 / 企业风控讨论",
      "sourceLabel": "OpenAI Agents SDK",
      "related": [
        "Agent Guardrails",
        "Tool Approval Gate",
        "Least-Privilege Tooling"
      ],
      "score": 84,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 18 · 位置 10 · 热度 9"
    },
    {
      "rank": 6,
      "english": "Human Review Gate",
      "chinese": "人工复核闸门",
      "brief": "在智能体进入高风险动作或输出前设置人工复核和确认的流程节点",
      "officialDefinition": "Human Review Gate 指人在回路系统中的复核节点，当任务涉及高风险工具调用、敏感数据或不可逆操作时暂停自动执行并等待人类判断。",
      "link": "https://docs.langchain.com/oss/python/langchain/human-in-the-loop",
      "source": "LangChain / 企业 Agent 审批实践 / 中文开发者社区",
      "sourceLabel": "LangChain Docs",
      "related": [
        "Human-in-the-Loop",
        "Tool Approval Gate",
        "Agent Guardrails"
      ],
      "score": 81,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 7,
      "english": "Context Preservation",
      "chinese": "上下文保全",
      "brief": "在长任务、多轮交接或多工具调用中保留关键上下文以避免任务漂移的机制",
      "officialDefinition": "Context Preservation 指在智能体长流程中保留任务目标、约束、工具结果、用户偏好和关键决策记录，使后续步骤延续同一任务语境。",
      "link": "https://huggingface.co/blog/agent-glossary#context-engineering",
      "source": "Hugging Face / 中文 Agent 工程社区 / 开源框架讨论",
      "sourceLabel": "Hugging Face Blog",
      "related": [
        "Context Engineering",
        "Agent Memory",
        "Agent Trace"
      ],
      "score": 78,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 8,
      "english": "Resource Link Result",
      "chinese": "资源链接结果",
      "brief": "工具返回可获取资源的 URI 引用，供客户端或模型在后续步骤继续读取上下文",
      "officialDefinition": "MCP Resource Links 是工具结果中的一种内容类型，工具可以返回资源 URI、名称、描述和 MIME 类型，让客户端或模型在后续流程中获取相关资源。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools#resource-links",
      "source": "MCP 官方规范 / 开源 SDK 更新 / 中文开发者讨论",
      "sourceLabel": "MCP Specification",
      "related": [
        "MCP Resource Links",
        "Structured Tool Result",
        "MCP"
      ],
      "score": 75,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 9,
      "english": "Task-Level AI ROI",
      "chinese": "任务级 AI 投入产出比",
      "brief": "把 AI 价值衡量落到具体任务成功率、节省时间和成本变化上的评估方式",
      "officialDefinition": "Task-Level AI ROI 指以具体任务为单位衡量 AI 投入产出，将成功率、人工节省、运行成本、错误修复和业务结果放在同一框架中评估。",
      "link": "https://openai.com/index/a-scorecard-for-the-ai-age/",
      "source": "OpenAI / 企业 AI 落地讨论 / 产业媒体",
      "sourceLabel": "OpenAI",
      "related": [
        "AI Scorecard",
        "Cost per Successful Task",
        "Useful Intelligence per Dollar"
      ],
      "score": 72,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    },
    {
      "rank": 10,
      "english": "Token Passthrough Risk",
      "chinese": "令牌透传风险",
      "brief": "把用户或系统令牌直接传给工具和远程服务导致越权或泄露的安全风险",
      "officialDefinition": "Token Passthrough Risk 指工具链在未隔离、未最小化授权的情况下传递访问令牌，使下游服务获得超出任务需要的身份权限。",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization",
      "source": "企业 IAM 社区 / MCP 授权讨论 / 中文安全论坛",
      "sourceLabel": "MCP Authorization",
      "related": [
        "Centralized MCP Authorization",
        "Least-Privilege Tooling",
        "AI Safety"
      ],
      "score": 69,
      "scoreBreakdown": "覆盖 20 · 频次 16 · 权重 16 · 位置 10 · 热度 9"
    }
  ]
};

  const terms = [];
  Object.keys(HOTWORD_HISTORY).sort().forEach((date) => {
    HOTWORD_HISTORY[date].forEach((item) => {
      terms.push({
        id: item.english,
        initial: (item.english || '').charAt(0).toUpperCase(),
        english: item.english,
        chinese: item.chinese,
        brief: item.brief,
        definition: item.officialDefinition || item.brief,
        source: item.link,
        sourceLabel: item.sourceLabel || item.source || '查看来源',
        related: Array.isArray(item.related) ? item.related : [],
        hotwordDate: date,
        rank: item.rank
      });
    });
  });

  if (typeof window !== 'undefined') {
    window.HOTWORD_HISTORY = HOTWORD_HISTORY;
    window.HOTWORD_DETAIL_TERMS = terms;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.HOTWORD_HISTORY = HOTWORD_HISTORY;
    globalThis.HOTWORD_DETAIL_TERMS = terms;
  }
})();
