<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Konva from 'konva'
import { Bar } from '../../../src/charts/Bar'

const chartRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (chartRef.value) {
        const bar = new Bar({
            data: [12, 19, 3, 5, 2, 3],
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            width: 400,
            height: 300,
            barColor: '#3498db',
            axisColor: '#333',
            labelColor: '#333',
        })
        const stage = new Konva.Stage({
            container: chartRef.value,
            width: 400,
            height: 300,
        })
        stage.add(bar.getLayer())
    }
})
</script>

<template>
    <div ref="chartRef" style="width:400px;height:300px;"></div>
</template>
