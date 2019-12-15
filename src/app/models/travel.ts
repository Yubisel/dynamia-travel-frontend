export class Travel{
    constructor(
        public id: string,
        public travel_date: Date,
        public origin: string,
        public destination: string,
        public cost: number
    ){}
}