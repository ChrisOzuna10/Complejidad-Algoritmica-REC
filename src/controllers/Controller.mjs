import { Bussines } from "../models/Bussines.mjs";
import { linkedList, arraylist } from "./Dependencies.mjs";

// Función para medir el tiempo de ejecución
function medirTiempo(callback) {
    let startTime = performance.now();
    callback();
    let endTime = performance.now();
    let timeTaken = endTime - startTime;
    return timeTaken;
}

function actualizarTablas(tipo, algoritmo, tiempo, iteraciones) {
    const tiempoCelda = document.getElementById(`${tipo}Time${algoritmo}`);
    const iteracionesCelda = document.getElementById(`${tipo}Iterations${algoritmo}`);

    if (tiempoCelda) tiempoCelda.textContent = `${tiempo} ms`;
    if (iteracionesCelda) iteracionesCelda.textContent = iteraciones;
}

// Inicializar gráficos
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['BubbleSort', 'MergeSort', 'RadixSort'],
            datasets: [{
                label: "Tiempo en ms",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Tiempo de Ejecución: ArrayList',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tiempo en ms',
                        font: { size: 18 }
                    }
                }
            }
        }
    });

    var ctxInsertions = document.getElementById('insertionsChart').getContext('2d');
    var insertionsChart = new Chart(ctxInsertions, {
        type: 'line',
        data: {
            labels: ['BubbleSort', 'MergeSort', 'RadixSort'],
            datasets: [{
                label: "Iteraciones",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Número de Iteraciones: ArrayList',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Iteraciones',
                        font: { size: 18 }
                    }
                }
            }
        }
    });

    var ctxLinkedList = document.getElementById('linkedListChart').getContext('2d');
    var linkedListChart = new Chart(ctxLinkedList, {
        type: 'line',
        data: {
            labels: ['BubbleSort', 'MergeSort', 'RadixSort'],
            datasets: [{
                label: "Tiempo en ms",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Tiempo de Ejecución: LinkedList',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tiempo en ms',
                        font: { size: 18 }
                    }
                }
            }
        }
    });

    var ctxLinkedListInsertions = document.getElementById('linkedListInsertionsChart').getContext('2d');
    var linkedListInsertionsChart = new Chart(ctxLinkedListInsertions, {
        type: 'line',
        data: {
            labels: ['BubbleSort', 'MergeSort', 'RadixSort'],
            datasets: [{
                label: "Iteraciones",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Número de Iteraciones: LinkedList',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Iteraciones',
                        font: { size: 18 }
                    }
                }
            }
        }
    });
    var timeSearching = document.getElementById('timeSearching').getContext('2d');
    var searchingTime = new Chart(timeSearching, {
        type: 'line',
        data: {
            labels: ['ArrayLIst', 'LinkedList'],
            datasets: [{
                label: "Tiempo",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Tiempo en buscar',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'tiempo',
                        font: { size: 18 }
                    }
                }
            }
        }
    });
    var iterationsSearching = document.getElementById('iterationsSearching').getContext('2d');
    var searchingIter = new Chart(iterationsSearching, {
        type: 'line',
        data: {
            labels: ['ArrayLIst', 'LinkedList'],
            datasets: [{
                label: "Iteraciones",
                data: [0, 0, 0],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Número de Iteraciones',
                    font: { size: 24 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Iteraciones',
                        font: { size: 18 }
                    }
                }
            }
        }
    });

    document.getElementById('saveArray').addEventListener('click', () => {
        fetch("../../../bussines.json")
            .then(response => response.json())
            .then(data => {
                for (let x = 0; x <= 10000; x++) {
                    let bussines = new Bussines(data[x].name, data[x].address, data[x].city, data[x].state, data[x].postal_code);
                    arraylist.push(bussines);
                    if (x === 10000) {
                        console.log("ya se guardaron todas")
                        Swal.fire({
                            title: "Exito",
                            text: "Datos guardados",
                            icon: "success"
                        });
                    };
                }
            })
            .catch(err => console.log(err));
    });

    document.getElementById('searchButtonArray').addEventListener('click', () => {
        let result;
        let value = document.getElementById("searchInput").value;
        let tiempo = medirTiempo(() => result = arraylist.searchValue(value));
        document.getElementById("searchTimeArray").textContent = `Tiempo de búsqueda: ${tiempo} ms`;

        searchingTime.data.datasets[0].data[0] = tiempo;
        searchingIter.data.datasets[0].data[0] = result.iteraciones; 
        searchingTime.update();
        searchingIter.update();
        actualizarTablas('array', 'Search', tiempo, result.iteraciones); 
        document.getElementById('searchTimeArray').value = "algo"
    });

    document.getElementById('searchButtonLinked').addEventListener('click', () => {
        let busqueda = document.getElementById("searchInputLinked").value.trim();
        let reultado
        let tiempo = medirTiempo(() => reultado = linkedList.searchValue(busqueda));
        document.getElementById("searchTimeLinked").textContent = `Tiempo de búsqueda: ${tiempo} ms`;

        searchingTime.data.datasets[0].data[1] = tiempo;
        searchingIter.data.datasets[0].data[1] = reultado.iteraciones;
        searchingTime.update();
        searchingIter.update();
        actualizarTablas('list', 'Search', tiempo, reultado.iteraciones);
    });


    document.getElementById('arrayBubble').addEventListener("click", () => {
        let iterations;
        let tiempo = medirTiempo(() => iterations = arraylist.bubbleSort());
        document.getElementById("tiempoBubbleA").textContent = `BubbleSort Time: ${tiempo} ms, Iterations: ${iterations}`;

        myChart.data.datasets[0].data[0] = tiempo;
        insertionsChart.data.datasets[0].data[0] = iterations;
        myChart.update();
        insertionsChart.update();
        actualizarTablas('array', 'Bubble', tiempo, iterations);
    });

    document.getElementById('arrayMerge').addEventListener("click", () => {
        let iterations = { count: 0 };
        let tiempo = medirTiempo(() => arraylist.mergeSort(arraylist.array, iterations));
        document.getElementById("tiempoMergeA").textContent = `MergeSort Time: ${tiempo} ms, Iterations: ${iterations.count}`;

        myChart.data.datasets[0].data[1] = tiempo;
        insertionsChart.data.datasets[0].data[1] = iterations.count;
        myChart.update();
        insertionsChart.update();
        actualizarTablas('array', 'Merge', tiempo, iterations.count);
    });

    document.getElementById('arrayRadix').addEventListener("click", () => {
        let iterations;
        let tiempo = medirTiempo(() => iterations = arraylist.radixSort());
        document.getElementById("tiempoRadixA").textContent = `RadixSort Time: ${tiempo} ms, Iterations: ${iterations}`;

        myChart.data.datasets[0].data[2] = tiempo;
        insertionsChart.data.datasets[0].data[2] = iterations;
        myChart.update();
        insertionsChart.update();
        actualizarTablas('array', 'Radix', tiempo, iterations);
    });

    document.getElementById('saveList').addEventListener('click', () => {
        fetch("../../../bussines.json")
            .then(response => response.json())
            .then(data => {
                for (let x = 0; x <= 10000; x++) {
                    let bussines = new Bussines(data[x].name, data[x].address, data[x].city, data[x].state, data[x].postal_code);
                    linkedList.push(bussines);
                    if (x === 10000) {
                        console.log("Ya se guardaron todas")
                        Swal.fire({
                            title: "Exito",
                            text: "Datos guardados",
                            icon: "success"
                        });
                    };
                }
            })
            .catch(err => console.log(err));
    });

    document.getElementById('listBubble').addEventListener("click", () => {
        let iterations;
        let timeTaken = medirTiempo(() => iterations = linkedList.bubbleSort());
        document.getElementById("tiempoBubbleL").textContent = `BubbleSort Time: ${timeTaken} ms, Iterations: ${iterations}`;

        linkedListChart.data.datasets[0].data[0] = timeTaken;
        linkedListInsertionsChart.data.datasets[0].data[0] = iterations;
        linkedListChart.update();
        linkedListInsertionsChart.update();
        actualizarTablas('list', 'Bubble', timeTaken, iterations);
    });

    document.getElementById('listMerge').addEventListener("click", () => {
        let iterations;
        let timeTaken = medirTiempo(() => iterations = linkedList.mergeSort());
        document.getElementById("tiempoMergeL").textContent = `MergeSort Time: ${timeTaken} ms, Iterations: ${iterations}`;
        // Actualizar gráficos y tablas
        linkedListChart.data.datasets[0].data[1] = timeTaken;
        linkedListInsertionsChart.data.datasets[0].data[1] = iterations;
        linkedListChart.update();
        linkedListInsertionsChart.update();
        actualizarTablas('list', 'Merge', timeTaken, iterations);
    });

    document.getElementById('listRadix').addEventListener("click", () => {
        let iterations;
        let timeTaken = medirTiempo(() => iterations = linkedList.radixSort());
        document.getElementById("tiempoRadixL").textContent = `RadixSort Time: ${timeTaken} ms, Iterations: ${iterations}`;
        // Actualizar gráficos y tablas
        linkedListChart.data.datasets[0].data[2] = timeTaken;
        linkedListInsertionsChart.data.datasets[0].data[2] = iterations;
        linkedListChart.update();
        linkedListInsertionsChart.update();
        actualizarTablas('list', 'Radix', timeTaken, iterations);
    });
});
