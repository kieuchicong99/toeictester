import { NgModule } from "@angular/core";
import { CommonService } from "./common/common.service";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AppModule } from './app.module';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        DashboardModule
    ],
    declarations: [
        ChartJsComponent
    ],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class ClientModule { }
