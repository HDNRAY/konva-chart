<script lang="ts" setup>
import Konva from 'konva'
import { Pie } from '../../../dist/index'
import { onMounted } from 'vue'

onMounted(() => {
    const pieOptions = {
        x: 200,
        y: 200,
        radius: 150,
        data: [30, 70, 45, 55],
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }
    const stage = new Konva.Stage({
        container: 'pie-container',
        width: 400,
        height: 400,
    })
    const pie = new Pie(pieOptions)
    stage.add(pie.getLayer())
})
</script>

<template>
    <div>
        <h2>Konva Pie Chart Example</h2>
        <div id="pie-container"></div>
    </div>
</template>
