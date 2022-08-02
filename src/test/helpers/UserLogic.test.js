import { CheckUserExists, CreateUser, LoadUser, SaveUser, GetAllUsers } from "../../helpers/UserLogic";
import { BaseGameState } from "../../helpers/GameLogic";

//
// Because LocalStorage rely only on browser API. We use localStorageMock to simulate it.
//

describe('Tests on UserLogic helper', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    test('Test CheckUserExists() with no existance', () => {

        const user = 'nobody';

        const existance = CheckUserExists(user);
        expect( existance ).toBeFalsy;

    })

    test('Test CreateUser() sets values on LocalStorage', () => {

        const user = 'username';

        const setValues = CreateUser(user);
        expect( localStorage.setItem ).toBeCalled;

    })

    test('Test CreateUser() returns expected gameInitialState based on params', () => {

        const user = 'newusername';
        const gameInitialState = { ...BaseGameState, user: user }

        const setValues = CreateUser(user);
        expect( setValues ).toStrictEqual(gameInitialState);

    })

    test('Test LoadUser() from dummy data', () => {

        const user = 'loadedusername';
        const expectedResult = { ...BaseGameState, user: user }

        localStorage.setItem(user, JSON.stringify(expectedResult));

        const setValues = LoadUser(user);
        expect( setValues ).toStrictEqual(expectedResult);

    })

    test('Test SaveUser() to store data', () => {

        const user = 'storeusername';
        const gameInitialState = { ...BaseGameState, user: user }

        const setSaveValues = SaveUser(gameInitialState, user);

        const getSaveValues = JSON.parse(localStorage.getItem(user));

        expect( getSaveValues ).toEqual(gameInitialState);

    })

    test('Test GetAllUsers() to check it returns an array of elements', () => {

        const getAllUsers = GetAllUsers();

        expect( getAllUsers ).toBeInstanceOf(Array);

    })

})