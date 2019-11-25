import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(durtation: string): string {
        const hours = Math.floor(Number(durtation) / 60);
        const minutes = Number(durtation) - hours * 60;

        console.log(hours);
        console.log(minutes);

        return hours > 0 ? `${hours}h ${minutes}min` : `${durtation}min`;
    }

}
