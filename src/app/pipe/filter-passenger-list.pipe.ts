import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPassengerList'
})
export class FilterPassengerListPipe implements PipeTransform {

  transform(list: any, searchText: any): any {
    if (searchText === '' || searchText.length < 3) {
      return list;
    }
    const resultList = [];
    for (const passenger of list) {
      if ((passenger.ci.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (passenger.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)) {
        resultList.push(passenger);
      }
    }
    return resultList;
  }

}
