import { Component, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-mark-exam-chart',
  templateUrl: './mark-exam-chart.component.html',
  styleUrls: ['./mark-exam-chart.component.css']
})
export class MarkExamChartComponent {

  public chart: am4charts.XYChart;
  constructor(public zone: NgZone) { }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      this.chart = am4core.create("chartdiv3", am4charts.XYChart);
      this.chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      this.chart.data = [{
        "country": "Điểm 10",
        "visits": 30
      }, {
        "country": "Điểm 9",
        "visits": 18
      }, {
        "country": "Điểm 8",
        "visits": 32
      }, {
        "country": "Điểm 7",
        "visits": 11
      }, {
        "country": "Điểm 6",
        "visits": 9
      }, {
        "country": "Điểm 5",
        "visits": 4
      }, {
        "country": "Điểm 4",
        "visits": 5
      }, {
        "country": "Điểm 3",
        "visits": 10
      }, {
        "country": "Điểm 2",
        "visits": 11
      }, {
        "country": "Điểm 1",
        "visits": 12
      }, {
        "country": "Điểm 0",
        "visits": 5
      }];

      // Create axes
      let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;

      let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;

      // Create series
      let series = this.chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", (fill, target) => {
        return this.chart.colors.getIndex(target.dataItem.index);
      })

      // Cursor
      this.chart.cursor = new am4charts.XYCursor();

    });

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}



