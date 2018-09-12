import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

// COMPONENTS
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

const CONFIG: FirebaseAppConfig = {
    apiKey: "AIzaSyDuZ--9ETThZzvjvSLYRzVTlB3g-H5tBUI",
    authDomain: "motivator-bd3cc.firebaseapp.com",
    databaseURL: "https://motivator-bd3cc.firebaseio.com",
    projectId: "motivator-bd3cc",
    storageBucket: "motivator-bd3cc.appspot.com",
    messagingSenderId: "648562691628"
}

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
