"use strict";
class Store {
    constructor() {
        this.sumEnd = 0;
        this.sumStart = 0;
        // desarrollé un arreglo en bruto para no ir metiendo cada dato,
        // se pueden modificar estos datos de cualquier manera, era para ahorrar tiempo
        this.incidentsCollection = [
            {
                descripcion: 'El piso de la oficina está sucio con café',
                estado: 'Solucionado',
                fecha_incidente: new Date('2023-08-11'),
                fecha_solucion: new Date('2023-08-15')
            },
            {
                descripcion: 'Faltan hojas para imprimir',
                estado: 'Abierto',
                fecha_incidente: new Date('2023-08-03'),
                fecha_solucion: new Date('')
            },
            {
                descripcion: 'Los ventanales del piso 2 están rotos',
                estado: 'Solucionado',
                fecha_incidente: new Date('2023-08-08'),
                fecha_solucion: new Date('2023-08-10')
            },
            {
                descripcion: 'Se cayó el servidor de la empresa',
                estado: 'Abierto',
                fecha_incidente: new Date('2023-08-12'),
                fecha_solucion: new Date('')
            },
            {
                descripcion: 'Un cliente está teniendo problemas con su inicio de sesión',
                estado: 'Solucionado',
                fecha_incidente: new Date('2023-08-05'),
                fecha_solucion: new Date('2023-08-29')
            }
        ];
    }
    // esta es la función que recibe el rango de fechas
    incident_status(startDate, endDate) {
        // filtramos los incidentes en: Abiertos - Solucionados
        const openedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Abierto');
        const closedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Solucionado');
        // acá filtramos los incidentes abiertos entre las fechas de entrada
        const incidentesAbiertosEntreFechas = openedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        });
        // acá lo mismo, filtramos los incidentes solucionados entre las fechas
        const incidentesSolucionadosEntreFechas = closedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        });
        // filtramos todas las fechas de inicio y de solución para los casos cerrados y los guardamos en dos variables
        const _startDates = closedCases.map(caseItem => caseItem.fecha_incidente);
        const _endDates = closedCases.map(caseItem => caseItem.fecha_solucion);
        // calculamos las diferencias entre las fechas de los incidentes y la fecha de la solución de todos los objetos
        const differences = _startDates.map((startDate, index) => {
            const endDate = _endDates[index];
            return endDate.getTime() - startDate.getTime();
        });
        // sacamos el promedio en milisegundos del arreglo differences que creamos anteriormente
        const totalAverageMs = differences.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / differences.length;
        // realizamos el cálculo para pasar el total de milisegundos a días
        const totalAverageDays = totalAverageMs / (1000 * 60 * 60 * 24);
        // con Math.max realizamos el recorrido por todo el arreglo objeto por
        // objeto (...differences), guardando en la variable el valor más grande
        const maxDifference = Math.max(...differences);
        // con indexOf buscamos la posición del objeto que corresponde al valor maxDifference
        const maxDifferenceIndex = differences.indexOf(maxDifference);
        // finalmente guardamos el objeto correspondiente a la posición conseguida anteriormente
        const incidentWithMaxDifference = closedCases[maxDifferenceIndex];
        console.log('Promedio de días de solución:', totalAverageDays);
        console.log('Incidente más largo:', incidentWithMaxDifference);
        return {
            casosAbiertosEntreFechas: incidentesAbiertosEntreFechas.length,
            casosSolucionadosEntreFechas: incidentesSolucionadosEntreFechas.length,
        };
    }
}
// Ejecutamos la clase Store
const newStore = new Store();
// Estas variables son las que se pueden modificar para verificar de mejor manera la funcionalidad del programa
// FORMATO MM-DD-YYYY
const startRange = new Date('2023-08-01');
const endRange = new Date('2023-08-20');
// acá tomamos las fechas y llamamos a la función incident_status con las fechas asignadas manualmente
const incidentsDateRange = newStore.incident_status(startRange, endRange);
// imprimimos el resultado en consola
console.log('Resultado:', incidentsDateRange);
