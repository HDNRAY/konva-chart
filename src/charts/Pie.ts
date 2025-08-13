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
        const { x, y, radius, data, colors } = this.options
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
            startAngle += angle
        })
    }

    getLayer() {
        return this.layer
    }
}
