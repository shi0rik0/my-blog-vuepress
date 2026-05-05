<template>
  <div class="toggle-container">
    <!-- 按钮插槽 -->
    <slot name="button" :show="showText" :toggle="toggle" :label="props.label">
      <button @click="toggle">
        {{ showText ? "隐藏" + props.label : "显示" + props.label }}
      </button>
    </slot>

    <!-- 文本内容插槽 -->
    <p v-show="showText" class="hidden-text">
      <slot />
    </p>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue"

// 定义 props - label 设置为 required: true
const props = defineProps({
  // 默认按钮文案（必填）
  label: {
    type: String,
    required: true,
  },
  // 是否禁用该组件
  disabled: {
    type: Boolean,
    default: false,
  },
})

// 状态变量
const showText = ref(false)

// 切换函数
const toggle = () => {
  if (!props.disabled) {
    showText.value = !showText.value
  }
}

// 加载 MathJax CDN
const loadMathJax = () => {
  return new Promise((resolve) => {
    if (window.MathJax) {
      resolve()
      return
    }

    // 设置 MathJax 配置，支持 $...$ 格式
    window.MathJax = {
      tex: {
        inlineMath: { "[+]": [["$", "$"]] },
      },
    }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    script.async = true
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      resolve()
    }
    document.head.appendChild(script)
  })
}

// 渲染 MathJax
const renderMathJax = async () => {
  await nextTick()
  if (window.MathJax) {
    try {
      await window.MathJax.typesetPromise()
    } catch (error) {
      // 忽略渲染错误
    }
  }
}

// 监听 showText 变化，当内容显示时渲染 MathJax
watch(
  showText,
  async (newVal) => {
    if (newVal) {
      await loadMathJax()
      await renderMathJax()
    }
  },
  { flush: "post" },
)

// 组件挂载时加载 MathJax
onMounted(async () => {
  await loadMathJax()
  if (showText.value) {
    await renderMathJax()
  }
})
</script>
