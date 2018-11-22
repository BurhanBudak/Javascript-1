function ValueFunction(value) {
    this.value = value;
    this.getValue = function () {
    return this.value;
    }
    this.addValue = function (a) {
    this.value += a;
    }
    }
    let valueTest = new ValueFunction(10);
    valueTest.addValue(20);
    console.log(valueTest.getValue());