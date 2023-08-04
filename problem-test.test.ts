import { Store } from './problem-test';

describe('problemTest', () => {
    let store = new Store;

    beforeEach(() => {
        store = new Store();
    });

    describe('incident_status', () => {
        it('debe devolver la cantidad correcta de casos abiertos y solucionados entre fechas', () => {
            const startDate = new Date('2023-08-01');
            const endDate = new Date('2023-08-20');

            const result = store.incident_status(startDate, endDate);

            expect(result.casosAbiertosEntreFechas).toBe(2);
            expect(result.casosSolucionadosEntreFechas).toBe(3);
        });
    });
});