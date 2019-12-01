import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(durtation: number): string {
        const hours = Math.floor (durtation / 60);
        const minutes = durtation - hours * 60;

        return hours > 0 ? `${hours}h ${minutes}min` : `${durtation}min`;
    }

}
