const donationForm  =   document.querySelector('.donation-form')
const amountLeft    =   document.querySelector('.amount-left')
const amountBar     =   document.querySelector('.amount-bar')
const saveButton    =   document.querySelector('.btn-primary:nth-child(1)')
const shareButton   =   document.querySelector('.btn-primary:nth-child(2)')

let totalDonationAmount = 1000 - 167
let amountNeeded = parseInt(amountLeft.textContent)

donationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const donationAmount = parseInt(e.target.querySelector('.donation-input').value)
  totalDonationAmount += donationAmount
  amountNeeded = Math.max(amountNeeded - donationAmount, 0)
  const totalAmount = 1000
  const donationPercent = Math.min((totalDonationAmount / totalAmount) * 100, 100)
  amountBar.style.width = `${donationPercent}%`
  amountLeft.textContent = amountNeeded
})

shareButton.addEventListener('click', () => {
  const shareURL = 'https://twitter.com/intent/tweet?url=&text=Yay%2C+I+donated%21&hashtags=donate'
  window.open(shareURL, '_blank')
})

saveButton.addEventListener('click', () => {
  console.log('Saved!')
  alert('Saved!')
})
