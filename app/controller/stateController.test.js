const {yearMadeState, name, minYear, getAllStates} = require('./stateController')


    describe('The different filters', () => {
        test('should return the name', async () => {
           const result = await getAllStates(Bob);
           expect(result.data).toEqual(Bob);


           
        });
    });


