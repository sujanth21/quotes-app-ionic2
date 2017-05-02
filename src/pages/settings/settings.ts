import { Component } from '@angular/core';

import { Toggle } from 'ionic-angular';

import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor (private settingServices: SettingsService) {}

  onToggle(toggle: Toggle) {
    this.settingServices.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingServices.isAltBackground();
  }
}
