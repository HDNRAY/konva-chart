import Konva from 'konva'

export namespace KC {
    export interface PieOptions {
        x: number
        y: number
        radius: number
        data: number[]
        colors?: string[]
        labels?: string[]
        labelFontSize?: number
        labelColor?: string
    }

    export class Pie {
        options: PieOptions
        layer: Konva.Layer
        constructor(options: PieOptions)
        getLayer(): Konva.Layer
    }
    export interface BarOptions {
        data: number[]
        labels?: string[]
        width?: number
        height?: number
        barColor?: string
        axisColor?: string
        labelColor?: string
    }

    export class Bar {
        options: BarOptions
        layer: Konva.Layer
        constructor(container: string | HTMLDivElement, options: BarOptions)
        getLayer(): Konva.Layer
    }

    export interface LineOptions {
        data: number[]
        labels?: string[]
        width?: number
        height?: number
        lineColor?: string
        axisColor?: string
        labelColor?: string
        pointColor?: string
    }

    export class Line {
        options: LineOptions
        layer: Konva.Layer
        constructor(container: string | HTMLDivElement, options: LineOptions)
        getLayer(): Konva.Layer
    }
}
