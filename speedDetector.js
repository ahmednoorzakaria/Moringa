//Speed Detector (Toy Problem)
//ask user for the speed of the car
let input = prompt('Speed of the car');
//calcutes the points and fine for the speed
function speedDetector(speed){
    let points = 0;
    let speedLimit = 70;
    if(speed<=70){
        return 'OK'
    }else if(speed>70){
        let punishableSpeed = speed - speedLimit;
        let punished = Math.floor(punishableSpeed/5) *1
        points+=punished;
        if(points>=12){
            return 'License suspended'
        }else {
            return 'points:' + points
        }
        return points
    }
    return points
}
console.log(speedDetector(input))