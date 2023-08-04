"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor() {
        this.sumEnd = 0;
        this.sumStart = 0;
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
    incident_status(startDate, endDate) {
        const openedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Abierto');
        const closedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Solucionado');
        const incidentesAbiertosEntreFechas = openedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        });
        const incidentesSolucionadosEntreFechas = closedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        });
        const _startDates = closedCases.map(caseItem => caseItem.fecha_incidente);
        const _endDates = closedCases.map(caseItem => caseItem.fecha_solucion);
        const differences = _startDates.map((startDate, index) => {
            const endDate = _endDates[index];
            return endDate.getTime() - startDate.getTime();
        });
        const totalAverageMs = differences.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / differences.length;
        const totalAverageDays = totalAverageMs / (1000 * 60 * 60 * 24);
        const maxDifference = Math.max(...differences);
        const maxDifferenceIndex = differences.indexOf(maxDifference);
        const incidentWithMaxDifference = closedCases[maxDifferenceIndex];
        console.log('Promedio de días de solución:', totalAverageDays);
        console.log('Incidente más largo:', incidentWithMaxDifference);
        return {
            casosAbiertosEntreFechas: incidentesAbiertosEntreFechas.length,
            casosSolucionadosEntreFechas: incidentesSolucionadosEntreFechas.length,
        };
    }
}
exports.Store = Store;
const newStore = new Store();
const startRange = new Date('2023-08-01');
const endRange = new Date('2023-08-20');
const incidentsDateRange = newStore.incident_status(startRange, endRange);
console.log('Resultado:', incidentsDateRange);
