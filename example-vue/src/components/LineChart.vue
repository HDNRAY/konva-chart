<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Konva from 'konva'
import { Line } from '../../../src/charts/Line'

const chartRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (chartRef.value) {
        const line = new Line({
            data: [5, 15, 8, 12, 7, 10],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            width: 400,
            height: 300,
            lineColor: '#e74c3c',
            axisColor: '#333',
            labelColor: '#333',
            pointColor: '#e74c3c',
        })
        const stage = new Konva.Stage({
            container: chartRef.value,
            width: 400,
            height: 300,
        })
        stage.add(line.getLayer())
    }
})
</script>

<template>
    <div ref="chartRef" style="width:400px;height:300px;"></div>
</template>
