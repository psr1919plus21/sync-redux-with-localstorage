const applyInterface = require('./');

const state = {
    cats: [
        {
            name: 'Fat Cat',
            id: 1,
        },
        {
            name: 'Good Cat',
            id: 2,
        },
    ],

    dogs: {
        good: [1, 2, 3],
        bad: [4, 5, 6]
    },

    horses: {
        black: [
            {
                id: 'horse1',
                legs: 4,
                achives: [1, 2, 4]
            },
            {
                id: 'horse2',
                legs: 4,
                achives: [7, 9, 2]
            }
        ],

        white: []
    }
};



describe('Apply interface', () => {
    it('should proceed correct interface with ids', () => {
        const syncInterface = {
            cats: [{
                id: true,
            }],
        };
        const expectedObject = {cats: [{ id: 1 }, { id: 2 }]};

        expect(applyInterface(state, syncInterface)).toEqual(expectedObject);
    });

    it('should proceed correct interface with names', () => {
        const syncInterface = {
            cats: [{
                name: true,
            }],
        };
        const expectedObject = {cats: [{ name: 'Fat Cat' }, { name: 'Good Cat' }]};

        expect(applyInterface(state, syncInterface)).toEqual(expectedObject);
    });

    it('should proceed correct interface with dogs', () => {
        const syncInterface = {
            dogs: {
                good: true,
            },
        };
        const expectedObject = {dogs: { good: [ 1, 2, 3] }};

        expect(applyInterface(state, syncInterface)).toEqual(expectedObject);
    });

    it('should proceed correct interface with horses', () => {
        const syncInterface = {
            horses: {
                black: [
                    {
                        id: true,
                    }
                ]
            },
        };
        const expectedObject = {horses: { black: [ { id: 'horse1' }, { id: 'horse2' } ] }};

        expect(applyInterface(state, syncInterface)).toEqual(expectedObject);
    });
});
