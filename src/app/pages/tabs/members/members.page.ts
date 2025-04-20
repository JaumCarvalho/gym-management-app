import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton,IonButtons, IonIcon,
  IonSearchbar, IonRow, IonCol, 
  IonSelect, IonSelectOption, IonList, IonItemDivider } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, chevronForwardCircle, menuOutline, notifications } from 'ionicons/icons';
import { MemberComponent } from "../../../components/member/member.component";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonItemDivider, IonList, IonCol, IonRow,
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption, MemberComponent]
})
export class MembersPage implements OnInit {

  constructor() {
    addIcons({
      menuOutline,
      notifications,
      addCircle,
      chevronForwardCircle
    });
}

  ngOnInit() {
  }

}
