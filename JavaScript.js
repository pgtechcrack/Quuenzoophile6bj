// Referral feed simulation
const referralFeed = document.getElementById('referralFeed');
function addReferral() {
  const p = document.createElement('p');
  p.textContent = "You received a free Gold Token from referral!";
  p.style.color = '#00ff88';
  referralFeed.appendChild(p);
}
setInterval(addReferral, 5000);

// Invest Now button
function investNow(amount) {
  const adminEmail = "learcapital@proton.me";
  const subject = encodeURIComponent(`Investment Request: $${amount}`);
  const body = encodeURIComponent(`Hello Admin,\nI want to invest $${amount}.`);
  window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
}

