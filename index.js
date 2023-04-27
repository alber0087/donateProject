const donationForm  =   document.querySelector('.donation-form')
const amountBar     =   document.querySelector('.amount-bar')
const saveButton    =   document.querySelector('.btn-primary:nth-child(1)')
const shareButton   =   document.querySelector('.btn-primary:nth-child(2)')

let totalDonationAmount = 0

donationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const donationAmount = parseInt(e.target.querySelector('.donation-input').value)
  totalDonationAmount += donationAmount
  const totalAmount = 1000
  const donationPercent = Math.min((totalDonationAmount / totalAmount) * 100, 100)
  amountBar.style.width = `${donationPercent}%`
})


shareButton.addEventListener('click', () => {
  const shareURL = 'https://twitter.com/intent/tweet?url=&text=Yay%2C+I+donated%21&hashtags=donate'
  window.open(shareURL, '_blank')
})

saveButton.addEventListener('click', () => {
  console.log('Saved!')
  alert('Saved!')
})
