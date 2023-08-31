const cyclotron = (particle, matrixSize) => {
    if (matrixSize < 4) {
        throw new Error("Matrix size value must be at least 4.");
    }
    if (!["e", "p", "n", ""].includes(particle)) {
        throw new Error('Particle must be "e", "p", "n", or "".');
    }

    const matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = particle === "e" ? (i === 0 || j === matrixSize - 1 ? "e" : 1) :
                particle === "p" ? protonCondition(i, j, matrixSize) :
                    particle === "n" && i === 0 ? "n" : 1;
        }
    }

    function protonCondition(i, j, matrixSize) {
        if (i === matrixSize - 1 && j === matrixSize - 1) {
            return 1;
        } else if (i === 0 || i === matrixSize - 1 || j === 0 || j === matrixSize - 1) {
            return "p";
        } else if ((i === matrixSize - 2 && j >= matrixSize - 2) || (i === matrixSize - 1 && j === matrixSize - 1)) {
            return "p";
        } else {
            return 1
        }
    }

    return matrix;
};

const printMatrix = (matrix) => {
    for (const row of matrix) {
        console.log(row);
    }
};

try {
    const result = cyclotron("", 6);
    printMatrix(result);
} catch (error) {
    console.error(error.message);
}
