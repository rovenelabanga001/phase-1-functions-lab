// Code your solution in this file!
const hqDistance = 42;
function distanceFromHqInBlocks(distance) {
  distance = Math.abs(distance - hqDistance);
  return distance;
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(distance) {
  const distanceInFeet = distanceFromHqInBlocks(distance) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(start - destination);
  const distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceInBlocks = Math.abs(start - destination);
  const distanceInFeet = distanceInBlocks * 264;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else if (distanceInFeet > 2500) {
    return "cannot travel that far";
  }
}
