data = {
  fullname: "Melody Daniel",
  email: "anyaegbulam.melodyg20@gmail.com",
  username: "melodyogonna",
  dob: "20-04-2020",
  website: "https://google.com",
  street: "No 1, Ozo Street, Enugu, Nigeria",
};
function testInputs(data) {
  const { fullname, email, username, dob, website, street } = data;

  if (
    validateFullname(fullname) &&
    validateEmailAdress(email) &&
    validateUsername(username) &&
    validateDate(dob) &&
    validateWebaddress(website) &&
    validteStreetAddress(street)
  ) {
    return true;
  }
  return false;
}

function validateFullname(fullname) {
  if (!fullname || typeof fullname !== "string" || fullname.length < 2) {
    return false;
  }

  const fullname_regex = /^[a-zA-Z\s]+$/;
  if (fullname_regex.test(fullname)) {
    console.log("fullname validation passed");
    return true;
  }

  console.log("fullname validation failed");
  return false;
}

function validateEmailAdress(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  const email_regex = /^\w+\.??\w+@\w+\.+?[a-zA-Z]+$/;
  if (email_regex.test(email)) {
    console.log("email validation passed");
    return true;
  }

  console.log("email validation failed");
  return false;
}

function validateUsername(username) {
  if (!username || typeof username !== "string" || username.length < 2) {
    return false;
  }

  const username_regex = /^\w+$/;
  if (username_regex.test(username)) {
    console.log("username validation passed");
    return true;
  }

  console.log("username validation failed");
  return false;
}

function validateDate(date) {
  if (!date) {
    return false;
  }

  const date_regex = /\d{2}\-+?\d{2}\-+?\d{4}/;
  if (date_regex.test(date)) {
    console.log("dob validation passed");
    return true;
  }

  console.log("dob validation failed");
  return false;
}

function validateWebaddress(address) {
  if (!address || typeof address !== "string") {
    return false;
  }

  //This one especially took my time mehn
  const address_regex = /http(s)?\:\/\/((\w)+.)?\w+\.+?[a-zA-Z]+$/;
  if (address_regex.test(address)) {
    console.log("website validation passed");
    return true;
  }
  console.log("website validation failed");
  return false;
}

function validteStreetAddress(street_address) {
  if (!street_address || typeof street_address !== "string") {
    return false;
  }

  const address_regex = /^(No) \d+, ?[\w\s-]+, ?[a-zA-Z\s-]+, ?[a-zA-Z\s-]+\.?$/;
  if (address_regex.test(street_address)) {
    console.log("address validation passed");
    return true;
  }

  console.log("address validation failed");
  return false;
}

console.log(testInputs(data));
