import { environment } from 'src/environments/environment';

export class AppSettings {
  public appTitle = 'BasketWALL';
  public appTabTitle = ` | ${ this.appTitle }`;

  public apiIp = 'http://' + environment.location;
  // public apiIp = 'http://192.168.0.16:8000';
  public dataApiUrl = this.apiIp + '/data';
  public statsApiUrl = this.apiIp + '/stats';
}
