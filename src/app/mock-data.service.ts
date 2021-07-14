import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getMockData(rows = 0, columns = 0) {
    const data: any = [];
    for (let i = 0; i <= rows; i++) {
      const item: any = {};
      item.Id = i;
      for (let y = 0; y <= columns; y++) {
        item['column' + y] = i + '_' + y;
      }
      data.push(item);
    }
    return data;
  }
}
