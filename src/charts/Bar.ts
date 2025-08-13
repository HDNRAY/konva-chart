import Konva from 'konva'
import { KC } from '../types/kc'

export class Bar implements KC.Bar {
    options: KC.BarOptions
    layer: Konva.Layer

    constructor(options: KC.BarOptions) {
        this.options = {
            width: 400,
            height: 300,
            barColor: '#3498db',
            axisColor: '#333',
            labelColor: '#333',
            ...options,
        }
        this.layer = new Konva.Layer()
        this.drawBar()
    }

    private drawBar() {
        const { data, labels, width, height, barColor, axisColor, labelColor } = this.options
        const margin = 40
        const chartWidth = width! - margin * 2
        const chartHeight = height! - margin * 2
        const barWidth = chartWidth / data.length
        const maxValue = Math.max(...data)

        // Draw axes
        this.layer.add(
            new Konva.Line({
                points: [margin, margin, margin, height! - margin, width! - margin, height! - margin],
                stroke: axisColor,
                strokeWidth: 2,
            })
        )

        // Draw bars
        data.forEach((value, i) => {
            const x = margin + i * barWidth
            const barHeight = (value / maxValue) * chartHeight
            this.layer.add(
                new Konva.Rect({
                    x,
                    y: height! - margin - barHeight,
                    width: barWidth * 0.7,
                    height: barHeight,
                    fill: barColor,
                })
            )
            // Draw labels
            if (labels && labels[i]) {
                this.layer.add(
                    new Konva.Text({
                        x,
                        y: height! - margin + 5,
                        text: labels[i],
                        fontSize: 12,
                        fill: labelColor,
                        width: barWidth * 0.7,
                        align: 'center',
                    })
                )
            }
        })
    }

    getLayer() {
        return this.layer
    }
}
