---
date: 2025-11-27
---

# DSPy 的 MIPROv2 算法简介

最近看到有同事在用 DSPy 的 MIPROv2 来做 prompt engineering，便去学习了一下。结果发现官网的介绍很不清楚，下面我就用简单的语言来介绍一下 MIPROv2。

## 什么是 MIPROv2？

DSPy 把 MIPROv2 叫做 optimizer，但是我觉得这是严重的术语滥用，因为一般来说 optimizer 应该指的是调整模型参数的算法，而 MIPROv2 实际上只是一个利用 LLM 来生成 prompts 的算法。

## MIRPOv2 的输入和输出

MIPROv2 的输入包括以下几个部分：

1. 一个 DSPy program。（如果你不明白什么是 DSPy program 的话，这里举一个简单的例子：一个最简单的 DSPy program 就是 `question -> answer`，也就是直接用原本的问题和一次 LLM 调用来得到答案。）
2. 一个 metric，用来评估 program 的输出和标准答案之间的差距。
3. 一些示例数据，可以是完整的（包括所有输入、输出和中间结果），也可以是不完整的，但是一定要有输入。

MIPROv2 的输出则是一个优化过的 program，这里的优化实际上是通过修改 prompt 中的 instruction 和 few-shot examples 来实现的，所以本质上来说，MIPROv2 的输出就是较优的 instruction 和 few-shot examples。

## MIPROv2 的流程

MIPROv2 的流程可以分为以下几个步骤：

1. **Bootstrap few-shot examples**：MIPROv2 会生成一些 few-shot examples 的集合，例如：

   ```python
   examples = [
    [
      { "question": "What is the capital of France?", "answer": "Paris" },
      { "question": "What is 2 + 2?", "answer": "4" }
    ],
    [
      { "question": "Who wrote '1984'?", "answer": "George Orwell" },
      {
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter"
      }
    ]
   ]
   ```

2. **Propose instruction candidates**：MIPROv2 会生成一些可能的 instructions，例如：

   ```python
   instructions = [
     "Answer the following questions based on your knowledge.",
     "Provide concise answers to the questions below."
   ]
   ```

3. **Find an optimized combination of few-shot examples and instructions**：MIPROv2 会尝试找到最好的 `examples[i]` 和 `instructions[j]` 的组合，使得 program 在 dev set 上的表现最好。

下面对这些步骤的一些细节进行说明。

### Bootstrap few-shot examples

Examples 的来源有两种：

1. 如果用户提供了完整的示例数据，那么 MIPROv2 会直接从中抽取一些。
2. 如果用户没有提供完整的示例数据，那么 MIPROv2 会利用一个教师模型来补全缺失的输出。

只有 metric 的值在某个阈值之上的示例（正确示例）才会被保留到最后的 examples 候选集合中。

### Propose instruction candidates

Instructions 是通过 LLM 来生成的。

### Find an optimized combination of few-shot examples and instructions

由于要搜索的 `(i, j)` 组合数量可能非常大，MIPROv2 采用了贝叶斯优化（Bayesian Optimization）的方法来高效地搜索最优组合。关于贝叶斯优化的原理，读者可以参考这篇文章：[贝叶斯优化基本原理总结](https://zhuanlan.zhihu.com/p/460839566)。
