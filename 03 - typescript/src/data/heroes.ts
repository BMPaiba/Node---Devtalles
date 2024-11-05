interface Hero {
    id: number;
    name: string;
    owner: string;  
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Wolverine',
        owner: 'Marvel'
    },
]