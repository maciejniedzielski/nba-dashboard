import { environment } from 'src/environments/environment';

export class AppSettings {
  public appTitle = 'BasketWALL';
  public appTabTitle = ` | ${ this.appTitle }`;

  public apiIp = 'http://' + environment.location;
  public dataApiUrl = this.apiIp + '/data';
}
