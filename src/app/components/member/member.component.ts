import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon, IonText, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  imports: [IonCol, IonRow, IonText, IonIcon, IonButton, IonLabel, IonItem, IonCard, IonThumbnail]
})
export class MemberComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
