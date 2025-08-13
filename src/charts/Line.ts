import Konva from 'konva'
import { KC } from '../types/kc'

export class LineChart implements KC.Line {
    options: KC.LineOptions
    layer: Konva.Layer
    private stage: Konva.Stage

    constructor(container: string | HTMLDivElement, options: KC.LineOptions) {
        this.options = {
            width: 400,
            height: 300,
            lineColor: '#e74c3c',
            axisColor: '#333',
            labelColor: '#333',
            pointColor: '#e74c3c',
            ...options,
        }
        this.layer = new Konva.Layer()
        this.stage = new Konva.Stage({
            container,
            width: this.options.width!,
            height: this.options.height!,
        })
        this.stage.add(this.layer)
        this.drawLine()
    }

    private drawLine() {
        const { data, labels, width, height, lineColor, axisColor, labelColor, pointColor } = this.options
        const margin = 40
        const chartWidth = width! - margin * 2
        const chartHeight = height! - margin * 2
        const maxValue = Math.max(...data)
        const minValue = Math.min(...data)
        const stepX = chartWidth / (data.length - 1)

        // Draw axes
        this.layer.add(
            new Konva.Line({
                points: [margin, margin, margin, height! - margin, width! - margin, height! - margin],
                stroke: axisColor,
                strokeWidth: 2,
            })
        )

        // Draw line
        const points: number[] = []
        data.forEach((value, i) => {
            const x = margin + i * stepX
            const y = height! - margin - ((value - minValue) / (maxValue - minValue || 1)) * chartHeight
            points.push(x, y)
            // Draw point
            this.layer.add(
                new Konva.Circle({
                    x,
                    y,
                    radius: 4,
                    fill: pointColor,
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
                        width: stepX,
                        align: 'center',
                    })
                )
            }
        })
        this.layer.add(
            new Konva.Line({
                points,
                stroke: lineColor,
                strokeWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
            })
        )
    }

    getLayer() {
        return this.layer
    }
}
