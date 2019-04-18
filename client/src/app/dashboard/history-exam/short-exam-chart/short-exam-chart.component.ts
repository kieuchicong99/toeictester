import { Component, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-short-exam-chart',
  templateUrl: './short-exam-chart.component.html',
  styleUrls: ['./short-exam-chart.component.css']
})
export class ShortExamChartComponent {

  public chart: am4charts.PieChart;
  constructor(public zone: NgZone) { }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      this.chart = am4core.create("chartdiv1", am4charts.PieChart);


      // Add data
      this.chart.data = [{
        "country": "Mô tả hình ảnh",
        "litres": 50
      }, {
        "country": "Đọc hội thoại",
        "litres": 30
      }, {
        "country": "Hỏi đáp",
        "litres": 20
      }, {
        "country": "Bài nói chuyện",
        "litres": 16
      }, {
        "country": "Câu không hoàn chỉnh",
        "litres": 13
      }, {
        "country": "Hoàn thành đoạn văn",
        "litres": 12
      }, {
        "country": "đọc hiểu",
        "litres": 9
      }];

      // Set inner radius
      this.chart.innerRadius = am4core.percent(50);

      // Add and configure Series
      let pieSeries = this.chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 1;
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
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



