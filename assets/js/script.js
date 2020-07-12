// Aufgabenstellung
// In dieser Web-App möchten wir ein Semi-Horoskop entsprechend des eingegebenen Geburtsmonats erstellen. Es wird nur auf den Monat bezogen.

function showHoroscope() {
  let monthInput = document.getElementById("month-input").value;

  if (
    monthInput == "january" ||
    monthInput == "January" ||
    monthInput == "Jan" ||
    monthInput == "jan" ||
    monthInput == "1"
  ) {
    document.getElementById("sign").innerHTML =
      "Your horoscope sign is Capricorn";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/capricorn.png";
    document.getElementById("text").innerHTML =
      "You don't have to dive into the deep end of the pool to learn how to swim, so test the waters; go slow and have fun! Hop on the elevator without checking the date of the last inspection.";
  } else if (
    monthInput == "february" ||
    monthInput == "February" ||
    monthInput == "Feb" ||
    monthInput == "feb" ||
    monthInput == "2"
  ) {
    document.getElementById("sign").innerHTML =
      "Your horoscope sign is Aquarius";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/aquarius.png";
    document.getElementById("text").innerHTML =
      "Challenging the structure of normal life is something you do either passively or aggressively. Live the adventure and explore the Circle of Life during the upcoming weeks. Eat breakfast at Midnight, and have high tea at 3am.";
  } else if (
    monthInput == "march" ||
    monthInput == "March" ||
    monthInput == "Mar" ||
    monthInput == "mar" ||
    monthInput == "3"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Pisces";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/pisces.png";
    document.getElementById("text").innerHTML =
      "Compassion is good, but a Pisces tries to bear the burden of the world on his back. A close acquaintance will come to you for advice very soon, and it may help if you keep that iPod playing in one ear while you hear him out.";
  } else if (
    monthInput == "april" ||
    monthInput == "April" ||
    monthInput == "Apr" ||
    monthInput == "apr" ||
    monthInput == "4"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Aries";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/aries.png";
    document.getElementById("text").innerHTML =
      "A mutually beneficial opportunity will be presented to you by someone with whom you have butted horns in the past. Ease up, my horny friend. Learn to use your beguiling charm and wit to its best advantage.";
  } else if (monthInput == "may" || monthInput == "May" || monthInput == "5") {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Taurus";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/taurus.png";
    document.getElementById("text").innerHTML =
      "Channel your methodical planning into a positive force. You need to quicken the pace of your heavy hooves so that you do not miss out on making a connection with the attractive stranger that wants to play the matador for the feisty Bull.";
  } else if (
    monthInput == "june" ||
    monthInput == "June" ||
    monthInput == "Jun" ||
    monthInput == "jun" ||
    monthInput == "6"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Gemini";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/gemini.png";
    document.getElementById("text").innerHTML =
      "Lucky you! This birth sign is the only venue that portrays multiple personalities as highly desirable and socially acceptable. You are blessed with the Yin and the Yang of the Universe, if only you can bring them into balance more often.";
  } else if (
    monthInput == "july" ||
    monthInput == "July" ||
    monthInput == "Jul" ||
    monthInput == "jul" ||
    monthInput == "7"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Cancer";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/cancer.png";
    document.getElementById("text").innerHTML =
      "The Crab is known as a sensitive, intuitive birth sign. Instead of letting your energies and abilities be covered up with a bushel basket, crawl out into the light and show your amazing personality to the world.";
  } else if (
    monthInput == "august" ||
    monthInput == "August" ||
    monthInput == "Aug" ||
    monthInput == "aug" ||
    monthInput == "8"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Leo";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/leo.png";
    document.getElementById("text").innerHTML =
      "Leave the hunt to others and take time to enjoy your environment. Leos are known for their benevolent natures and leadership. Look for help from a modest, unassuming little mouse that you know.";
  } else if (
    monthInput == "september" ||
    monthInput == "September" ||
    monthInput == "Sep" ||
    monthInput == "sep" ||
    monthInput == "9"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Virgo";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/virgo.png";
    document.getElementById("text").innerHTML =
      "Your tendency to be a bit obsessive -compulsive in daily life can interfere with your best traits and make it difficult for people to see what a wonderful person you really are. Touch a goldfish, frolic in the leaves and be relaxed enough to double dip that Nacho Chip.";
  } else if (
    monthInput == "october" ||
    monthInput == "October" ||
    monthInput == "Oct" ||
    monthInput == "oct" ||
    monthInput == "10"
  ) {
    document.getElementById("sign").innerHTML = "Your horoscope sign is Libra";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/libra.png";
    document.getElementById("text").innerHTML =
      "If you are planning to spend the weekend rearranging your silverware drawer you may be past the point of change regarding any rehabilitative efforts. Still you should make the effort to break out of your self-imposed box and learn to experience the full range of life's adventures.";
  } else if (
    monthInput == "november" ||
    monthInput == "November" ||
    monthInput == "Nov" ||
    monthInput == "nov" ||
    monthInput == "11"
  ) {
    document.getElementById("sign").innerHTML =
      "Your horoscope sign is Scorpio";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/scorpio.png";
    document.getElementById("text").innerHTML =
      "Sensuous, sexy, seductive and secretive all are words that describe the most passionate of all birth signs-the Scorpio. The downside to all of the exotic, alluring qualities a Scorpio possesses is their vengeful, jealous nature.";
  } else if (
    monthInput == "december" ||
    monthInput == "December" ||
    monthInput == "Dec" ||
    monthInput == "dec" ||
    monthInput == "12"
  ) {
    document.getElementById("sign").innerHTML =
      "Your horoscope sign is Sagittarius";
    document.getElementById("sign-img").src =
      "https://img.icons8.com/carbon-copy/100/000000/sagittarius.png";
    document.getElementById("text").innerHTML =
      "With your happy go lucky nature and eagerness for adventure you are never at a loss for friends. However certain events in the near future could cause you to behave more like fellow Sagittarian, Britney Spears during her worst meltdown moments.";
  } else {
    document.getElementById("warning").innerHTML =
      "You forgot to enter your month of birth. Try again! ";
  }
}
