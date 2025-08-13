<script setup lang="ts">
import { ref } from 'vue'
import PieChart from './components/PieChart.vue'
// Future: import BarChart from './components/BarChart.vue'

const chartType = ref('pie')
</script>

<template>
    <div class="app-container">
        <aside class="sidebar">
            <nav>
                <ul>
                    <li :class="{ active: chartType === 'pie' }" @click="chartType = 'pie'">Pie Chart</li>
                    <!-- Future: <li :class="{active: chartType === 'bar'}" @click="chartType = 'bar'">Bar Chart</li> -->
                </ul>
            </nav>
        </aside>
        <main class="main-content">
            <div class="header-logos">
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" class="logo" alt="Vite logo" />
                </a>
                <a href="https://vuejs.org/" target="_blank">
                    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                </a>
            </div>
            <div class="chart-area">
                <PieChart v-if="chartType === 'pie'" />
                <!-- Future: <BarChart v-if="chartType === 'bar'" /> -->
            </div>
        </main>
    </div>
</template>

<style scoped>
.app-container {
    display: flex;
    min-height: 100vh;
    background: #fafbfc;
}

.sidebar {
    width: 160px;
    background: #f4f4f4;
    border-right: 1px solid #e0e0e0;
    padding-top: 2em;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    padding: 1em 1.5em;
    cursor: pointer;
    color: #333;
    border-radius: 4px;
    margin-bottom: 0.5em;
    transition: background 0.2s;
}

.sidebar li.active,
.sidebar li:hover {
    background: #e0e7ff;
    color: #2563eb;
}

.main-content {
    flex: 1;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-logos {
    display: flex;
    gap: 2em;
    margin-bottom: 2em;
}

.logo {
    height: 4em;
    padding: 1em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.chart-area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
</style>
