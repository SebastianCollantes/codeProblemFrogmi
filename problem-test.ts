// Esta interfaz la hice para tipar los datos de los incidentes
interface Incident {
    descripcion: string;
    estado: string;
    fecha_incidente: Date;
    fecha_solucion: Date;
}

class Store {
    // desarrollé un arreglo en bruto para no ir metiendo cada dato,
    // se pueden modificar estos datos de cualquier manera, era para ahorrar tiempo
    incidentsCollection: Incident[] = [
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

    // Esta es la función que recibe el rango de fechas
    incident_status(startDate: Date, endDate: Date) {
        // filtramos los incidentes en: Abiertos - Solucionados
        const openedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Abierto');
        const closedCases = this.incidentsCollection.filter(openedIncident => openedIncident.estado == 'Solucionado');

        // acá filtramos los incidentes abiertos entre las fechas de entrada
        const incidentesAbiertosEntreFechas = openedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        })
        // acá lo mismo, filtramos los incidentes solucionados entre las fechas
        const incidentesSolucionadosEntreFechas = closedCases.filter(incidente => {
            return incidente.fecha_incidente >= startDate && incidente.fecha_incidente <= endDate;
        })
        return {
            casosAbiertosEntreFechas: incidentesAbiertosEntreFechas.length,
            casosSolucionadosEntreFechas: incidentesSolucionadosEntreFechas.length
        }
    }
}
// Ejecutamos la clase Store
const newStore = new Store()
// Estas variables son las que se pueden modificar para verificar de mejor manera la funcionalidad del programa
const startRange = new Date('02-08-2023');
const endRange = new Date('05-08-2023');
// acá tomamos las fechas y llamamos a la función incident_status con las fechas asignadas manualmente
const incidentsDateRange = newStore.incident_status(startRange, endRange);

// imprimimos el resultado en consola
console.log('Resultado:', incidentsDateRange)