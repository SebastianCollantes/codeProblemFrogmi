"use strict";
class Store {
    constructor() {
        this.incidentsCollection = [
            {
                descripcion: 'El piso de la oficina está sucio con café',
                estado: 'Solucionado',
                fecha_incidente: new Date('02-08-2023'),
                fecha_solucion: new Date('03-08-2023')
            },
            {
                descripcion: 'Faltan hojas para imprimir',
                estado: 'Abierto',
                fecha_incidente: new Date('02-08-2023'),
                fecha_solucion: new Date('')
            },
            {
                descripcion: 'Los ventanales del piso 2 están rotos',
                estado: 'Solucionado',
                fecha_incidente: new Date('03-08-2023'),
                fecha_solucion: new Date('04-08-2023')
            },
            {
                descripcion: 'Se cayó el servidor de la empresa',
                estado: 'Abierto',
                fecha_incidente: new Date('05-08-2023'),
                fecha_solucion: new Date('')
            },
            {
                descripcion: 'Un cliente está teniendo problemas con su inicio de sesión',
                estado: 'Abierto',
                fecha_incidente: new Date('05-08-2023'),
                fecha_solucion: new Date('')
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
        return {
            casosAbiertosEntreFechas: incidentesAbiertosEntreFechas.length,
            casosSolucionadosEntreFechas: incidentesSolucionadosEntreFechas.length
        };
    }
}
const newStore = new Store();
const startRange = new Date('02-08-2023');
const endRange = new Date('05-08-2023');
const incidentsDateRange = newStore.incident_status(startRange, endRange);
console.log('Resultado:', incidentsDateRange);
