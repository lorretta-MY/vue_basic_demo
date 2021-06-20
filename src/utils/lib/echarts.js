/* eslint-disable prettier/prettier */
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
]);
