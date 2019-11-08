import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(durtation: string): string {
        const date = new Date(+durtation * 60000);
        const hours = date.getHours() - 4;
        const minutes = date.getMinutes();

        return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
    }

}
