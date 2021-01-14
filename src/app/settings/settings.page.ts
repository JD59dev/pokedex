import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  languages: any = [];

  // Storing settings infos
  settings = {
    username: '',
    language: '',
    darkMode: false,
  };
  // To know if we display a loading icon
  saving = false;
  // To know if we must display a message
   success = false;

  constructor(
    private storage: Storage,
    private language: LanguageService,
) { }

  ngOnInit() {
    this.storage.get('settings').then(settings => {
      if (settings !== null) {
        this.settings = settings;
      }
    });
  }

  // Activates Dark Mode on the app
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  // Save data in the phone
  save() {
    this.saving = true; // Loading...
    this.storage.set('settings', this.settings).then(() => {
      setTimeout(() => this.saving = false, 2000); // Loading complete, promise held
      setTimeout(() => this.success = true, 2000);
      setTimeout(() => this.success = false, 3000); // The text will be hidden after 3 seconds
    });
  }

  removeData() {
    this.storage.remove('settings');
    // Reset the object settings
    this.settings = {
      username: '',
      language: '',
      darkMode: false,
    };
  }

  /* ionViewWillEnter() {
    this.language.getLanguage().then(languages => this.languages = languages['results']);
  } */

}
