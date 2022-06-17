import { Godina } from "./godina";
import { Nastavnik } from "./nastavnik";
import { Predmet } from "./predmet";
import { Studijskiprogram } from "./studijskiprogram";
import { Uloga } from "./uloga";

export class Izvodjac {

    nastavnik!: Nastavnik;
    predmet!: Predmet;
    uloga!: Uloga;
    godina!: Godina;
    studijskiProgram!: Studijskiprogram;
    pozicija!: number;
    semestar!: number;

}
