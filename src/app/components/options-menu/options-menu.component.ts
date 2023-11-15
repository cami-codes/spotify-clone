import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {

  @Input() public description: string = '';
  @Input() public active: boolean = false;
  @Output() public click = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onMenuClick() {
    this.click.emit();
  }

}
