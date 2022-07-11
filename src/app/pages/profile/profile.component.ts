import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) {}
  doLogout(){
    localStorage.clear();
    this.router.navigateByUrl('/')
    window.location.reload();
  }
  ngOnInit(): void {
      let form: any = document.getElementById("login");
      form.addEventListener(
          "submit",
          function (event) {
              event.preventDefault();
              let elements = form.elements;
              let payload = {};
              for (let i = 0; i < elements.length; i++) {
                  let item = elements.item(i);
                  switch (item.type) {
                      case "checkbox":
                          payload[item.name] = item.checked;
                          break;
                      case "submit":
                          break;
                      default:
                          payload[item.name] = item.value;
                          break;
                  }
              }
          },
          true
      );
  }

}
