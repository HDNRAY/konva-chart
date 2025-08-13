import Konva from 'konva'
import { KC } from '../types/kc'

export class Pie implements KC.Pie {
    options: KC.PieOptions
    layer: Konva.Layer

    constructor(options: KC.PieOptions) {
        this.options = options
        this.layer = new Konva.Layer()
        this.drawPie()
    }

    private drawPie() {
        const { x, y, radius, data, colors, labels, labelFontSize = 16, labelColor = '#333' } = this.options
        const total = data.reduce((a, b) => a + b, 0)
        let startAngle = 0
        data.forEach((value, i) => {
            const angle = (value / total) * 360
            const wedge = new Konva.Wedge({
                x,
                y,
                radius,
                angle,
                fill: colors && colors[i] ? colors[i] : Konva.Util.getRandomColor(),
                rotation: startAngle,
                stroke: 'white',
                strokeWidth: 2,
            })
            this.layer.add(wedge)

            // Add label support
            if (labels && labels[i]) {
                const midAngle = startAngle + angle / 2
                const rad = (midAngle * Math.PI) / 180
                const labelRadius = radius * 0.7
                const labelX = x + labelRadius * Math.cos(rad)
                const labelY = y + labelRadius * Math.sin(rad)
                const label = new Konva.Text({
                    x: labelX,
                    y: labelY,
                    text: labels[i],
                    fontSize: labelFontSize,
                    fill: labelColor,
                    align: 'center',
                })
                // Center label
                label.offsetX(label.width() / 2)
                label.offsetY(label.height() / 2)
                this.layer.add(label)
            }
            startAngle += angle
        })
    }

    getLayer() {
        return this.layer
    }
}
