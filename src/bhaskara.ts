export default class Bhaskara {
    public calcular (a: number, b: number, c: number,) {
        return `\nX' = ${(-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)}\nX" = ${(-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)}`
    }
}