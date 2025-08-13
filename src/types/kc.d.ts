import Konva from 'konva'

export namespace KC {
    export interface PieOptions {
        x: number
        y: number
        radius: number
        data: number[]
        colors?: string[]
    }

    export class Pie {
        options: PieOptions
        layer: Konva.Layer
        constructor(options: PieOptions)
        getLayer(): Konva.Layer
    }
}
