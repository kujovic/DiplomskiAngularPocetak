import { Katedra } from "./katedra";

export class Predmet {
    predmetId!: number;
    nazivPredmeta!: string;
    semestar!: number;
    studijskiProgram!: string;
    modul!: string;
    obavezan!: boolean;
    espb!: number;
    katedra!: Katedra;
}
