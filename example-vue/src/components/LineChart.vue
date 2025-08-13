<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LineChart } from '../../../src/charts/Line'

const chartRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (chartRef.value) {
        new LineChart(chartRef.value, {
            data: [5, 15, 8, 12, 7, 10],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            width: 400,
            height: 300,
            lineColor: '#e74c3c',
            axisColor: '#333',
            labelColor: '#333',
            pointColor: '#e74c3c',
        })
    }
})
</script>

<template>
    <div ref="chartRef" style="width:400px;height:300px;"></div>
</template>
