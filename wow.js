Day = function(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
}
getDaysinMonth = function(year, month) {
    this.year = year;
    this.month = month;
    if (this.month % 2 != 0 && this.month <= 7) {
        let arr = []
        for (var i = 0; i < 31; i++) {
            arr.push(new Day(this.year, this.month, i))

        }
        return arr
    } else if (this.month % 2 == 0 && this.month <= 7) {
        let k = [];
        for (var i = 0; i < 30; i++) {
            k.push(new Day(this.year, this.month, i))

        }
        return k
    }


    if (this.month % 2 != 0 && this.month >= 8) {
        let arr = []
        for (var i = 0; i < 30; i++) {
            arr.push(new Day(this.year, this.month, i))

        }
        return arr
    } else if (this.month % 2 == 0 && this.month >= 8) {
        let k = [];
        for (var i = 0; i < 31; i++) {
            k.push(new Day(this.year, this.month, i))

        }
        return k
    }


}
let a = Number(prompt("donner lanne"));
let b = Number(prompt("donner le mois"));
daysInJune2016 = getDaysinMonth(a, b);
console.log(daysInJune2016);