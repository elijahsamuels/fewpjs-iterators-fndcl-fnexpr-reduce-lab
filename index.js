const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const doubledAndSummed = [1, 2, 3].reduce((accumulator, element) => element * 2 + accumulator)

// let totalBatteries = []

const totalBatteries = batteryBatches.reduce((accumulator, element) => element + accumulator, 0)
