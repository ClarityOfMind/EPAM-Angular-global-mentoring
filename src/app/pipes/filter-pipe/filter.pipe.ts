import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(array: any[], search: string): any {
        const regex = new RegExp(search, 'gi');
        return array.filter(course => regex.test(course.title));
    }
}
