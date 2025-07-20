const tips = [
  {
    match: "Liverpool vs Manchester United",
    prediction: "1X",
    reason: "Liverpool are unbeaten in last 6 home games. United poor away form."
  },
  {
    match: "Barcelona vs Sevilla",
    prediction: "Over 2.5",
    reason: "Both teams average 3+ goals per match this season."
  },
  {
    match: "Juventus vs AC Milan",
    prediction: "Correct Score: 2-1",
    reason: "Historically tight matches, but Juventus home advantage gives them edge."
  }
];

const container = document.getElementById('tips-container');

tips.forEach(tip => {
  const div = document.createElement('div');
  div.className = 'tip';
  div.innerHTML = `
    <h3>${tip.match}</h3>
    <p><strong>Prediction:</strong> ${tip.prediction}</p>
    <p><em>Reason:</em> ${tip.reason}</p>
  `;
  container.appendChild(div);
});
