---
title: 倒计时组件
titleTemplate: VitePress & Vue powered static site generator
description: Web Components
sidebar: true
---

# 倒计时

``` vue {1-3,5,7}
<script>
  import "@sense/number-count"
</script>

// html/template/jsx
<template>
  <number-count></number-count>
</template>
```

:::preview 倒计时组件 || 可用于时间计时器，倒计时跳转

demo-preview=./src/index.ts

<number-count></number-count>
<style scoped>
	number-count{
		font-size:40px;
	}
</style>

:::

::: tip
展示区
:::