import { Component } from "@angular/core";
import { cfg } from "../adminShared/cfg";
import { cfgService } from "../adminShared/cfg.service";
import { Router } from "@angular/router";
import { UserService  } from '../adminShared/user.service';

@Component({
    selector: 'create-cfg',
    templateUrl: './cfg-create.component.html',
    styleUrls: ['./cfg-create.component.css']
})

export class cfgCreateComponent {
    cfgrequestfor: string;
    cfgtype: string;
    cfgresource: string;
    cfgDescription: string;
    cfg: cfg;
    formDisplay : boolean = true;
    theUser: string;
    

    constructor(
        private cfgSVC: cfgService, 
        private userSVC : UserService,
        private router: Router
    ){this.theUser = userSVC.loggedInUser;}

   createcfg() {
       this.cfg = new cfg(
           this.cfgrequestfor,
           this.cfgtype,
           this.cfgresource,
           this.cfgDescription,
           this.theUser,
           this.theUser
         );
       this.cfgSVC.createcfg(this.cfg);
       alert(`${this.cfgrequestfor} added to posts`);
       this.router.navigate(['/admin/Configuration']);
   }

   cancel(){
       this.router.navigate(['/admin/Configuration']);
   }
}