// Main Fucntion
export async function Timer(content) {
  const unit = convertHourAndMinute(content);
  const [time] = content.split(unit);
  const timeout = getTimeout(unit, +time);

  await Delay(timeout);

  return `@everyone ${content}이 지났습니다.`;
}

// utill 함수
function hourToMiliseconds(time) {
  return time * 60 * 60 * 1000;
}

function minuteToMiliseconds(time) {
  return time * 60 * 1000;
}

function Delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

function convertHourAndMinute(content) {
  return content.includes("시간") ? "시간" : "분";
}

function getTimeout(content, time) {
  return content === "시간"
    ? hourToMiliseconds(time)
    : minuteToMiliseconds(time);
}
