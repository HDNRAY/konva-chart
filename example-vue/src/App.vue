<script setup lang="ts">
import { ref } from 'vue'
import PieChart from './components/PieChart.vue'

import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
const chartType = ref('pie')
</script>

<template>

    <div class="app-simple">
        <aside class="sidebar">
            <ul>
                <li :class="{ active: chartType === 'pie' }" @click="chartType = 'pie'">Pie Chart</li>
                <li :class="{ active: chartType === 'bar' }" @click="chartType = 'bar'">Bar Chart</li>
                <li :class="{ active: chartType === 'line' }" @click="chartType = 'line'">Line Chart</li>
            </ul>
        </aside>
        <main class="main-content">
            <PieChart v-if="chartType === 'pie'" />
            <BarChart v-if="chartType === 'bar'" />
            <LineChart v-if="chartType === 'line'" />
        </main>
    </div>

</template>

<style scoped>
.app-simple {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 120px;
    background: #f4f4f4;
    border-right: 1px solid #e0e0e0;
    padding-top: 2em;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    padding: 0.75em 1em;
    cursor: pointer;
    color: #333;
    border-radius: 4px;
    margin-bottom: 0.5em;
    transition: background 0.2s;
}

.sidebar li.active,
.sidebar li:hover {
    text-decoration: underline;
}

.main-content {
    flex: 1;
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
