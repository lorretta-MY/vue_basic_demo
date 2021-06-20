<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <a-button type="primary"> Primary </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed"> Dashed </a-button>
    <a-button type="danger"> Danger </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary"> 按钮 </a-button>
    </a-config-provider>
    <a-button type="primary"> 按钮 </a-button>
    <a-button type="link"> Link </a-button> -->
    <div ref="myChart" id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
// 方式一: 按需引入

import * as echarts from "echarts/core"; // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { BarChart, PieChart, LineChart } from "echarts/charts"; // 引入柱状图图表，图表后缀都为Chart,也可以引入其他图表
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
} from "echarts/components"; // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { CanvasRenderer } from "echarts/renderers"; // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  PieChart,
  LineChart,
  CanvasRenderer,
  LegendComponent,
  DatasetComponent,
]); // 注册必须的组件

// 方式二: 局部引入
// import * as echarts from "echarts";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
