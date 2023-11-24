export class Benchmark {
    constructor(consoleName="Javascript") {
        console.log(`### ${consoleName} ###\n-------------------`)
        this.tests = []
    }

    it(name, func) {
        this.tests.push({ name, func })
        return this
    }

    run(runs) {
        this.tests.forEach(({ name, func }) => {
            let totalTime = 0

            for (let i = 0; i < runs; i++) {
                const startTime = performance.now()

                func()

                const endTime = performance.now()
                totalTime += endTime - startTime
            }

            const opsPerSec = (runs / (totalTime / 1000)).toFixed(2)
            console.log(
                `${name} - ${opsPerSec} ops/sec - (${runs} runs sampled)`
            )
        })

        return this
    }
}