import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular';
import {MockDataService} from './mock-data.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DxDataGridComponent, {static: false}) grid: DxDataGridComponent;
  text: string;
  selectedOpenMode = 'shrink';
  selectedPosition = 'left';
  selectedRevealMode = 'slide';
  isDrawerOpen = false;

  dataSource: DataSource;

  navigation: any[] = [
    {id: 1, text: 'Products', icon: 'product'},
    {id: 2, text: 'Sales', icon: 'money'},
    {id: 3, text: 'Customers', icon: 'group'},
    {id: 4, text: 'Employees', icon: 'card'},
    {id: 5, text: 'Reports', icon: 'chart'}
  ];

  constructor(private service: MockDataService) {
    this.dataSource = new DataSource({
      key: 'Id',
      load: () => {
        return this.service.getMockData(100, 20);
      }
    });
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  }, {
    widget: 'dxButton',
    location: 'center',
    template: 'titleProject'
  }];
}
