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

  /**
   * It takes a data object, checks if it has a todayScore property, if not, it sets it to the score
   * property, then deletes the score property, then returns an array of objects with the value property
   * set to the percent value of the todayScore property.
   *
   * @param data - The data object that is passed to the component.
   * @returns An array of objects with a value property.
   */
  scoreFormattedData(data) {
    if (data.props.todayScore === undefined) {
      data.props.todayScore = data.props.score;
      delete data.props.score;
    }
    const percent = data.props.todayScore * 100;
    const missingPercent = 100 - percent;
    const score = [{ value: percent }, { value: missingPercent }];

    return score;
  }

  /**
   * It takes an array of objects, and returns an array of objects with the same keys, but with the value
   * of the key 'kind' replaced with a translated value.
   *
   * The function is called like this:
   * @param data - {
   * @returns An array of objects.
   */
  performanceFormattedData(data) {
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

  /**
   * It takes an object with a property called props, which is an array of objects, and returns an array
   * of objects with the same properties as the objects in the props array, but with a new property
   * called name.
   *
   * The name property is assigned a value from an array called sessionDays, which is a property of the
   * class that contains the function.
   *
   * The value of the name property is determined by the value of the day property of the object in the
   * props array.
   *
   * The value of the min property is determined by the value of the sessionLength property of the object
   * in the props array.
   *
   * The function returns an array of objects with the same properties as the objects in the props array,
   * but with a new property called name.
   *
   * The name property is assigned a value from an array called sessionDays, which is a property of the
   * class that contains the function.
   *
   * The value
   * @param data - {
   * @returns An array of objects.
   */
  averageSessionFormattedData(data) {
    const dataChart = [];
    for (let i = 0; i < data.props.length; i++) {
      dataChart.push({
        name: this.sessionDays[data.props[i].day - 1],
        min: data.props[i].sessionLength,
      });
    }

    return dataChart;
  }

  /**
   * It takes an object with a property called props, which is an array of objects, and returns an array
   * of objects with the same properties as the objects in the props array, but with the addition of a
   * name property.
   *
   * The function is called like this:
   * @param data - {
   * @returns An array of objects.
   */
  activityFormattedData(data) {
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
