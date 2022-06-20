interface SeedData{
    entries: SeedEntry[];
}



interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            
            description: 'Pendiente: Please do me a favor like that',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            
            description: 'En-Progeso: Please do me a favor like that so do re',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            
            description: 'Terminadas: Please do me a favor like that love is the answer there are many songs about that',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}