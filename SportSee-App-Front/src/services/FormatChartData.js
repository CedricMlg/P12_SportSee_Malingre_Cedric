export default class FormatChartData {
  constructor() {
    this.performanceTranslatedKind = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    this.sessionDays = ["L", "M", "M", "J", "V", "S", "D"];
  }

  ScoreFormattedData(data) {
    if (data.props.todayScore === undefined) {
      data.props.todayScore = data.props.score;
      delete data.props.score;
    }
    const percent = data.props.todayScore * 100;
    const missingPercent = 100 - percent;
    const score = [{ value: percent }, { value: missingPercent }];

    return score;
  }

  PerformanceFormattedData(data) {
    const dataChart = [];
    data.props.data.map((perf) =>
      dataChart.push({
        value: perf.value,
        kind: perf.kind
          .toString()
          .replace(perf.kind, this.performanceTranslatedKind[perf.kind]),
      })
    );

    return dataChart;
  }

  AverageSessionFormattedData(data) {
    const dataChart = [];
    for (let i = 0; i < data.props.length; i++) {
      dataChart.push({
        name: this.sessionDays[data.props[i].day - 1],
        min: data.props[i].sessionLength,
      });
    }

    return dataChart;
  }

  ActivityFormattedData(data) {
    const dataChart = [];
    for (let i = 0; i < data.props.length; i++) {
      dataChart.push({
        name: i + 1,
        kg: data.props[i].kilogram,
        kCal: data.props[i].calories,
      });
    }

    return dataChart;
  }
}
