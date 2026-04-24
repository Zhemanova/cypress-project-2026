import { faker } from '@faker-js/faker'

export const users =
    {
    register: {
        firstName: faker.person.firstName('female'),
        lastName: faker.person.lastName('female'),
        username: faker.internet.username(),
        password: "!@Aa123123"
    },

    login: {
        userName: "KrystalMiller",
        password: "!@Aa123123"
    }
}